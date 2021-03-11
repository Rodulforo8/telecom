const express = require('express');
const router = express.Router();
const responseSchema = require('../helpers/ResponseSchema');
const InstallationPackage = require('../sequelize/models').installation_package;
const Sequelize = require('sequelize');
const CONFIG = require('../config');
const PER_PAGE = CONFIG.PER_PAGE
const SERVER_IP = CONFIG.SERVER_IP
const Op = Sequelize.Op;
var validator = require('validate.js');
var empty = require('../helpers/Empty');
var qs = require('qs');

//****************************************************   [       ENDPOINTS DE INTALACION DE PAQUETES        ]************************************************************************** */

router.get('/onu_img/:name', async(req, res) => {
    res.sendFile(req.params.name, { "root": './documents/modems' });
})

router.get('/', async function(req, res) {

    try {

        let foundedInstallationPackages = await InstallationPackage.findAll()


        return responseSchema(res, {
            data: foundedInstallationPackages,
            error: false,
            message: "OK"
        });

    } catch (error) {
        console.log(error)
        return responseSchema(res, "ERR_FAILED");
    }

});

router.get('/:id', async function(req, res) {

    try {

        let foundedInstallationPackage = await InstallationPackage.findOne({ where: { id: req.params.id } })


        return responseSchema(res, {
            data: foundedInstallationPackage,
            error: false,
            message: "OK"
        });


    } catch (error) {
        console.log(error)
        return responseSchema(res, "ERR_FAILED");
    }

});


router.post('/register', async function(req, res) {

    try {

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
            description: {

                length: {
                    minimum: 1,
                    maximum: 255,
                }
            },
            count_price: {
                presence: true,
                numericality: {
                    onlyInteger: true,
                    greatenThan: 0
                }
            },
            finantial_price: {
                presence: true,
                numericality: {
                    onlyInteger: true,
                    greatenThan: 0
                }
            }
        };

        var onuConstrains = {
            presence: true,
            onu_img: {
                presence: true
            },
        }

        var validation = validator(body, constraints);
        var fileValidation = validator(file, onuConstrains);

        if (!empty(validation)) {
            return responseSchema(res, "ERR_VALIDATION_FAILED", validation);
        }

        if (!empty(fileValidation)) {
            return responseSchema(res, "ERR_VALIDATION_FAILED", fileValidation);
        }

        if (!(
                file.onu_img.mimetype == 'image/jpeg' ||
                file.onu_img.mimetype == 'image/png'
            )) {
            return responseSchema(res, 'ERR_FILE_TYPE', null)
        }

        try {

            let foundedName = await InstallationPackage.findOne({ where: { name: body.name } })

            if (!empty(foundedName)) {
                return responseSchema(res, 'REGISTERED_NAME', 400)
            }

        } catch (err) {
            console.log(error)
            return responseSchema(res, "ERR_FAILED");
        }

        let modemUrl = await saveImage(file.onu_img, body.name)

        body.onu_img = modemUrl

        try {

            await InstallationPackage.create(body)

        } catch (err) {
            console.log(err)
            return responseSchema(res, "ERR_FAILED");
        }


        return responseSchema(
            res, {
                error: false,
                message: 'OK'
            },
            201
        )

    } catch (error) {
        console.log(error)
        return responseSchema(res, "ERR_FAILED");
    }

});


router.patch('/:id', async function(req, res) {

    try {

        var body = qs.parse(req.body)
        var file = qs.parse(req.files)

        var constraints = {

            name: {

                length: {
                    minimum: 1,
                    maximum: 255,
                }
            },
            description: {

                length: {
                    minimum: 1,
                    maximum: 255,
                }
            },
            count_price: {

                numericality: {
                    onlyInteger: true,
                    greatenThan: 0
                }
            },
            finantial_price: {

                numericality: {
                    onlyInteger: true,
                    greatenThan: 0
                }
            }
        };

        var onuConstrains = {

            onu_img: {
                presence: true
            },
        }

        var validation = validator(body, constraints);
        var fileValidation = validator(file, onuConstrains);

        if (!empty(validation)) {
            return responseSchema(res, "ERR_VALIDATION_FAILED", validation);
        }

        if (!empty(fileValidation)) {
            return responseSchema(res, "ERR_VALIDATION_FAILED", fileValidation);
        }

        if (!(
                file.onu_img.mimetype == 'image/jpeg' ||
                file.onu_img.mimetype == 'image/png'
            )) {

            return responseSchema(res, 'ERR_FILE_TYPE', 400)
        }

        try {

            let foundedName = await InstallationPackage.findOne({ where: { name: body.name } })


            if (!empty(foundedName)) {

                if (foundedName.id == req.params.id) {

                    let modemUrl = await saveImage(file.onu_img, body.name)
                    body.onu_img = modemUrl

                    await InstallationPackage.update(body, { where: { id: req.params.id } })

                } else {

                    return responseSchema(res, 'REGISTERED_NAME', 400)
                }

            } else {

                let modemUrl = await saveImage(file.onu_img, body.name)
                body.onu_img = modemUrl

                await InstallationPackage.update(body, { where: { id: req.params.id } })

            }

            return responseSchema(
                res, {
                    error: false,
                    message: 'OK'
                },
                200
            )


        } catch (err) {
            console.log(error)
            return responseSchema(res, "ERR_FAILED");
        }


    } catch (error) {
        console.log(error)
        return responseSchema(res, "ERR_FAILED");
    }

});


router.delete('/:id', async function(req, res) {

    try {

        let foundedInstallationPackage = await InstallationPackage.destroy({ where: { id: req.params.id } })


        return responseSchema(res, {
            data: foundedInstallationPackage,
            error: false,
            message: "OK"
        });
        w

    } catch (error) {
        console.log(error)
        return responseSchema(res, "ERR_FAILED");
    }

});


//************************************************   [    Functions    ]***************************************************************** */ 
var saveImage = async(image, name) => {
    return new Promise(async function(resolve, reject) {
        var logoPath = '/installation_packages/onu_img/'
        var filePathName = './documents/'

        var urlExtencion = image.mimetype.replace('image/', '.')

        name = name.replace(/\s+/g, '');

        image.mv(filePathName + 'modems/' + name + urlExtencion, function(
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

var updateInstallationPackage = async(body, id) => {

    try {

        await InstallationPackage.update(body, { where: { id: id } })

    } catch (err) {
        console.log(err)
        return responseSchema(res, "ERR_FAILED");
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