var express = require('express');
var router = express.Router();
var responseSchema = require('../helpers/ResponseSchema');
var FailureReports = require('../sequelize/models').failure_reports;
var Services = require('../sequelize/models').services;
const User = require('../sequelize/models').users;
var validator = require('validate.js');
var empty = require('../helpers/Empty');
var verifyToken = require('../middlewares/VerifyToken');
const CONFIG = require('../config');
const PER_PAGE = CONFIG.PER_PAGE
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

//****************************************************   [       ENDPOINTS DE SERVICIOS        ]************************************************************************** */
router.get('/', async function(req, res) {

    try {

        var page = empty(req.query.page) ? 1 : (+req.query.page < 1 ? 1 : +req.query.page)
        var search = empty(req.query.search) ? null : req.query.search

        let failureReports = await FailureReports.findAll({
            //     where: search == null ? {} : {
            //         [Op.or]: [{
            //             subject: {
            //                 [Op.like]: "%" + search + "%"
            //             },
            //             description: {
            //                 [Op.like]: "%" + search + "%"
            //             }
            //         }]
            //     },
            // }, 
            include: [{
                model: Services,
                as: 'service',
            }, {
                model: User,
                as: 'client',
                attributes: ['id', 'name', 'lastname', 'dni', 'address', 'address_alt', 'phone', 'email']
            }],
            offset: PER_PAGE * (page - 1),
            limit: PER_PAGE
        })

        if (empty(failureReports)) {

            return responseSchema(
                res, {
                    data: null,
                    error: true,
                    message: 'FAILURES_NOT_FOUND'
                },
                200
            )
        }

        return responseSchema(res, {
            data: failureReports,
            message: "OK"
        });

    } catch (error) {
        console.log(error)
        return responseSchema(res, "ERR_FAILED");
    }

});

router.get('/:id', async function(req, res) {

    try {

        let FailureReport = await FailureReports.findOne({
            where: {
                id: req.params.id
            },
            include: [{
                model: Services,
                as: 'service',
            }, {
                model: User,
                as: 'client',
                attributes: ['id', 'name', 'lastname', 'dni', 'address', 'address_alt', 'phone', 'email']
            }],
        })

        if (empty(FailureReport)) {

            return responseSchema(
                res, {
                    data: null,
                    error: true,
                    message: 'FAULIRES_NOT_FOUND'
                },
                200
            )
        }

        return responseSchema(res, {
            data: FailureReport,
            message: "OK"
        });

    } catch (error) {
        console.log(error)
        return responseSchema(res, "ERR_FAILED");
    }

});


router.post('/register', async(req, res) => {

    var constraints = {
        subject: {
            presence: true,
            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        description: {
            presence: true,
            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        type: {
            presence: true,
            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        service_id: {
            presence: true,
            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        client_id: {
            presence: true,
            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        }

    };

    var validation = validator(req.body, constraints);

    if (!empty(validation)) {
        return responseSchema(res, "ERR_VALIDATION_FAILED", validation);
    }

    try {

        let foundedService = await Services.findOne({ where: { id: req.body.service_id } })

        if (empty(foundedService)) {
            return responseSchema(
                res, {
                    data: null,
                    error: true,
                    message: 'SERVICE_NOT_FOUND'
                },
                200
            )
        }

    } catch (error) {
        console.log(error)
        return responseSchema(res, 'ERR_FAILED', 500)
    }

    try {

        let foundedClient = await User.findOne({ where: { id: req.body.client_id } })

        if (empty(foundedClient)) {
            return responseSchema(
                res, {
                    data: null,
                    error: true,
                    message: 'USER_NOT_FOUND'
                },
                200
            )
        }

    } catch (error) {
        console.log(error)
        return responseSchema(res, 'ERR_FAILED', 500)
    }

    try {

        req.body.subject = fixStringToLowerCase(req.body.subject)
        req.body.description = fixStringToLowerCase(req.body.description)

        await FailureReports.create(req.body)

        return responseSchema(
            res, {
                error: false,
                message: 'OK'
            },
            200
        )

    } catch (error) {
        console.log(error)
        return responseSchema(res, 'ERR_FAILED', 500)
    }

})


router.patch('/:id', async(req, res) => {

    try {

        var foundedFailureReport = await FailureReports.findOne({
            where: { id: req.params.id }
        }, )

        if (empty(foundedFailureReport)) {
            return responseSchema(
                res, {
                    data: null,
                    error: true,
                    message: 'FAILURE_REPORT_NOT_FOUND'
                },
                200
            )
        }

    } catch (error) {
        return responseSchema(res, 'ERR_FAILED', 500)
    }

    var constraints = {
        subject: {
            presence: true,
            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        description: {
            presence: true,
            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        type: {
            presence: true,
            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        service_id: {
            presence: true,
            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        client_id: {
            presence: true,
            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        }
    };

    var validation = validator(req.body, constraints);

    if (!empty(validation)) {
        return responseSchema(res, "ERR_VALIDATION_FAILED", validation);
    }

    try {

        let foundedService = await Services.findOne({ where: { id: req.body.service_id } })

        if (empty(foundedService)) {
            return responseSchema(
                res, {
                    data: null,
                    error: true,
                    message: 'SERVICE_NOT_FOUND'
                },
                200
            )
        }

    } catch (error) {
        console.log(error)
        return responseSchema(res, 'ERR_FAILED', 500)
    }

    try {

        let foundedClient = await User.findOne({ where: { id: req.body.client_id } })

        if (empty(foundedClient)) {
            return responseSchema(
                res, {
                    data: null,
                    error: true,
                    message: 'USER_NOT_FOUND'
                },
                200
            )
        }

    } catch (error) {
        console.log(error)
        return responseSchema(res, 'ERR_FAILED', 500)
    }


    try {

        req.body.subject = fixStringToLowerCase(req.body.subject)
        req.body.description = fixStringToLowerCase(req.body.description)


        await Services.update(req.body, { where: { id: req.params.id } })

        req.body.id = req.params.id

        return responseSchema(
            res, {
                data: req.body,
                error: false,
                message: 'OK'
            },
            200
        )

    } catch (error) {
        console.log(error)
        return responseSchema(res, 'ERR_FAILED', 500)
    }

})

router.delete('/:id', async(req, res) => {

    try {

        await FailureReports.destroy({
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