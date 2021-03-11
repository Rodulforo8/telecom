/**
 * End points para la creacion de bancos
 * @author Fernando Rodulfo <f.rodulfo@pacific-logging.com>
 * @author Fernando Rodulfo <rodulforo888@gmail.com>
 * @license Propietary
 */

const express = require('express');
const router = express.Router();
const responseSchema = require('./../helpers/ResponseSchema');
const validator = require('validate.js');
const empty = require('../helpers/Empty');
const Banks = require('../sequelize/models').banks;
const bcrypt = require('bcryptjs')
const CONFIG = require('../config');
const PER_PAGE = CONFIG.PER_PAGE
const SERVER_IP = CONFIG.SERVER_IP
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
var qs = require('qs');
const { isBoolean } = require('validate.js');


//****************************************************   [       ENDPOINTS DE BANCOS        ]************************************************************************** */
router.get('/logos/:name', async(req, res) => {
    res.sendFile(req.params.name, { "root": './documents/banks' });
})

router.get('/', async(req, res) => {

    var page = empty(req.query.page) ? 1 : (+req.query.page < 1 ? 1 : +req.query.page)
    var search = empty(req.query.search) ? null : req.query.search

    let foundedBanks = await Banks.findAll({

        where: search == null ? {} : {
            [Op.or]: [{
                name: {
                    [Op.like]: "%" + search + "%"
                },
                account_number: {
                    [Op.like]: "%" + search + "%"
                },
                name: {
                    [Op.like]: "%" + search + "%"
                }
            }]
        }
    }, {
        offset: PER_PAGE * (page - 1),
        limit: PER_PAGE
    })


    if (empty(foundedBanks)) {

        return responseSchema(
            res, {
                data: null,
                error: true,
                message: 'BANK_NOT_FOUND'
            },
            200
        )
    }

    return responseSchema(
        res, {
            data: foundedBanks,
            error: false,
            message: 'OK'
        },
        200
    )
})


router.get('/:id', async(req, res) => {

    let foundedBanks = await Banks.findOne({
        where: { id: req.params.id }
    })
    if (empty(foundedBanks)) {

        return responseSchema(
            res, {
                data: null,
                error: true,
                message: 'BANK_NOT_FOUND'
            },
            200
        )
    }
    return responseSchema(
        res, {
            data: foundedBanks,
            error: false,
            message: 'OK'
        },
        200
    )
})


router.get('/method/:method', async(req, res) => {

    let foundedBanks = await Banks.findOne({
        where: { method: req.params.method }
    })
    if (empty(foundedBanks)) {

        return responseSchema(
            res, {
                data: null,
                error: true,
                message: 'BANK_NOT_FOUND'
            },
            200
        )
    }
    return responseSchema(
        res, {
            data: foundedBanks,
            error: false,
            message: 'OK'
        },
        200
    )
})


router.get('/country/:country', async(req, res) => {

    let foundedBanks = await Banks.findOne({
        where: { country: req.params.country }
    })
    if (empty(foundedBanks)) {

        return responseSchema(
            res, {
                data: null,
                error: true,
                message: 'BANK_NOT_FOUND'
            },
            200
        )
    }
    return responseSchema(
        res, {
            data: foundedBanks,
            error: false,
            message: 'OK'
        },
        200
    )
})


router.post('/register', async(req, res) => {

    var body = qs.parse(req.body)
    var file = qs.parse(req.files)

    var constraints = {
        name: {
            presence: true,
            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        country: {
            presence: true,
            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        method: {
            presence: true,
            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        account_number: {
            presence: true,
            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        account_type: {
            presence: true,
            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        associated_phone: {
            presence: true,
            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        associated_email: {
            presence: true,
            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        associated_rif: {
            presence: true,
            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        pm_enable: {
            presence: true,
            length: {
                minimum: 1,
                maximum: 255,
            }
        },
    };

    var logoConstraint = {
        presence: true,
        logo: {
            presence: true
        },
    }

    var validation = validator(body, constraints);
    var fileValidation = validator(file, logoConstraint);

    if (!empty(validation)) {
        return responseSchema(res, "ERR_VALIDATION_FAILED", validation);
    }

    if (!empty(fileValidation)) {
        return responseSchema(res, "ERR_VALIDATION_FAILED", fileValidation);
    }

    if (!(
            file.logo.mimetype == 'image/jpeg' ||
            file.logo.mimetype == 'image/png'
        )) {
        return responseSchema(res, 'ERR_FILE_TYPE', null)
    }

    try {

        try {
            var foundedName = await Banks.findOne({
                where: { name: body.name },
            })

            if (!empty(foundedName)) {
                return responseSchema(res, 'NAME_REGISTERED', 400)
            }

        } catch (error) {
            console.log(error)
            return responseSchema(res, 'ERR_FAILED', 500)
        }
        try {
            var foundedEmail = await Banks.findOne({
                where: { associated_email: body.associated_email },
            })

            if (!empty(foundedEmail)) {
                return responseSchema(res, 'EMAIL_REGISTERED', 400)
            }

        } catch (error) {
            console.log(error)
            return responseSchema(res, 'ERR_FAILED', 500)
        }

        try {

            var foundedAccountNumber = await Banks.findOne({
                where: { account_number: body.account_number },
            })

            if (!empty(foundedAccountNumber)) {
                return responseSchema(res, 'REGISTERED_ACCOUNT_NUMBER', 400)
            }

        } catch (error) {
            console.log(error)
            return responseSchema(res, 'ERR_FAILED', 500)
        }

        try {

            var foundedRif = await Banks.findOne({
                where: { associated_rif: body.associated_rif },
            })

            if (!empty(foundedRif)) {
                return responseSchema(res, 'REGISTERED_ASSOCIATED_RIF', 400)
            }

        } catch (error) {
            console.log(error)
            return responseSchema(res, 'ERR_FAILED', 500)
        }

        body.logo = await saveImage(file.logo, req.body.name)
        body.name = fixStringToLowerCase(body.name)
        body.country = fixStringToLowerCase(body.country)

        await Banks.create(body)

        return responseSchema(
            res, {
                error: false,
                message: 'OK'
            },
            201
        )

    } catch (error) {
        console.log(error)
        return responseSchema(res, 'ERR_FAILED', 500)
    }
})


router.patch('/:id', async(req, res) => {

    var body = qs.parse(req.body)
    var file = qs.parse(req.files)

    var constraints = {
        name: {

            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        country: {

            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        method: {

            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        account_number: {
            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        account_type: {
            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        associated_phone: {
            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        associated_email: {
            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        associated_rif: {
            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        pm_enable: {
            length: {
                minimum: 1,
                maximum: 255,
            }
        },
    };

    var logoConstraint = {
        logo: {

        }
    };

    var validation = validator(body, constraints);
    var fileValidation = validator(file, logoConstraint);

    if (!empty(validation)) {
        return responseSchema(res, "ERR_VALIDATION_FAILED", validation);
    }

    if (!empty(fileValidation)) {
        return responseSchema(res, "ERR_VALIDATION_FAILED", fileValidation);
    }

    try {

        let nameValidation = await validateName(body.name, req.params.id)

        if (nameValidation == false) {
            return responseSchema(res, 'NAME_REGISTERED', 400)
        }

        let emailValidation = await validateEmail(body.associated_email, req.params.id)

        if (emailValidation == false) {
            return responseSchema(res, 'ASSOCIATED_EMAIL_REGISTERED', 400)
        }

        let accountNumberValidation = await validateAccountNumber(body.account_number, req.params.id)

        if (accountNumberValidation == false) {
            return responseSchema(res, 'REGISTERED_ACCOUNT_NUMBER', 400)
        }

        let rifValidation = await validateRif(body.associated_rif, req.params.id)
        if (rifValidation == false) {
            return responseSchema(res, 'REGISTERED_ASSOCIATED_RIF', 400)
        }

        body.logo = await saveImage(file.logo, req.body.name)
        body.name = fixStringToLowerCase(body.name)
        body.country = fixStringToLowerCase(body.country)

        await Banks.update(body, { where: { id: req.params.id } })

        return responseSchema(
            res, {
                error: false,
                message: 'OK'
            },
            201
        )

    } catch (error) {
        console.log(error)
        return responseSchema(res, 'ERR_FAILED', 500)
    }
})


router.delete('/:id', async(req, res) => {

    try {

        await Banks.destroy({
            where: { id: req.params.id },
            paranoid: false
        })

        return responseSchema(
            res, {
                error: false,
                message: 'OK'
            },
            200
        )

    } catch (error) {
        return responseSchema(res, 'ERR_FAILED', 500)
    }

});

//************************************************   [    Functions    ]***************************************************************** */ 
var saveImage = async(image, name) => {

    return new Promise(async function(resolve, reject) {
        var logoPath = '/banks/logos/'
        var filePathName = './documents/'

        var urlExtencion = image.mimetype.replace('image/', '.')

        name = name.replace(/\s+/g, '');

        image.mv(filePathName + 'banks/' + name + urlExtencion, function(
            err,
            res
        ) {
            if (err) {
                console.log(err)
                return reject()
            } else {
                var url = SERVER_IP + logoPath + name + urlExtencion
                return resolve(url)
            }


        })
    })
}

var validateName = async(name, id) => {
    try {
        var foundedName = await Banks.findOne({
            where: { name: name },
        })

        if (!empty(foundedName)) {

            if (foundedName.id == id) {
                return true
            } else {
                return false
            }
        }
        return true
    } catch (error) {
        console.log(error)
        return responseSchema(res, 'ERR_FAILED', 500)
    }
}

var validateEmail = async(email, id) => {
    try {
        var foundedEmail = await Banks.findOne({
            where: { associated_email: email },
        })

        if (!empty(foundedEmail)) {

            if (foundedEmail.id == id) {
                return true
            } else {
                return false
            }
        }
        return true
    } catch (error) {
        console.log(error)
        return responseSchema(res, 'ERR_FAILED', 500)
    }
}

var validateAccountNumber = async(account_number, id) => {

    try {
        var foundedAccountNumber = await Banks.findOne({
            where: { account_number: account_number },
        })

        if (!empty(foundedAccountNumber)) {

            if (foundedAccountNumber.id == id) {
                return true
            } else {
                return false
            }
        }
        return true
    } catch (error) {
        console.log(error)
        return responseSchema(res, 'ERR_FAILED', 500)
    }
}

var validateRif = async(associated_rif, id) => {

    try {
        var foundedRif = await Banks.findOne({
            where: { associated_rif: associated_rif },
        })

        if (!empty(foundedRif)) {

            if (foundedRif.id == id) {
                return true
            } else {
                return false
            }
        }
        return true
    } catch (error) {
        console.log(error)
        return responseSchema(res, 'ERR_FAILED', 500)
    }
}

function fixStringToLowerCase(str) {
    var splitStr = str.toLowerCase().split(' ')
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0) + splitStr[i].substring(1)
    }
    // Directly return the joined string
    return splitStr.join(' ')
}

module.exports = router;