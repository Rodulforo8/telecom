var express = require('express');
var router = express.Router();
var responseSchema = require('../helpers/ResponseSchema');
var CompanyData = require('../sequelize/models').company_data;
var validator = require('validate.js');
var empty = require('../helpers/Empty');
var verifyToken = require('../middlewares/VerifyToken');
const CONFIG = require('../config');
const SERVER_IP = CONFIG.SERVER_IP
const PER_PAGE = CONFIG.PER_PAGE
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const qs = require('qs');
//****************************************************   [       ENDPOINTS DE COMPANIA        ]************************************************************************** */

router.get('/logo/:name', async(req, res) => {
    res.sendFile(req.params.name, { "root": './documents/company_logo' });
})

router.get('/', async(req, res) => {

    try {

        const foundedData = await CompanyData.findAll()

        return responseSchema(res, {
            data: foundedData,
            message: "OK"
        });

    } catch (error) {
        console.log(error)
        return responseSchema(res, "ERR_FAILED");
    }

});

router.get('/:id', async(req, res) => {

    try {

        const foundedData = await CompanyData.findOne({ where: { id: req.params.id } })

        return responseSchema(res, {
            data: foundedData,
            message: "OK"
        });

    } catch (error) {
        console.log(error)
        return responseSchema(res, "ERR_FAILED");
    }

});


router.post('/register', async(req, res) => {

    var body = qs.parse(req.body)
    var file = qs.parse(req.files)

    var constraints = {

        url: {
            presence: true,

            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        name: {
            presence: true,
            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        dni: {
            presence: true,
            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        phone: {
            presence: true,
            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        alt_phone: {
            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        sales_email: {
            presence: true,
            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        support_email: {
            presence: true,
            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        operations_email: {
            presence: true,
            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        // current_date: {
        //     length: {
        //         minimum: 1,
        //         maximum: 255,
        //     }
        // },
        // current_hour: {
        //     length: {
        //         minimum: 1,
        //         maximum: 255,
        //     }
        // },
    };

    var imgConstrain = {
        presence: true,
        logo: {
            presence: true
        },
    }


    var validation = validator(body, constraints);
    var imgValidation = validator(file, imgConstrain)

    if (!empty(validation)) {
        return responseSchema(res, "ERR_VALIDATION_FAILED", validation);
    }

    if (!empty(imgValidation)) {
        return responseSchema(res, "ERR_VALIDATION_FAILED", imgValidation);
    }

    if (!(
            file.logo.mimetype == 'image/jpeg' ||
            file.logo.mimetype == 'image/png'
        )) {

        return responseSchema(
            res, {
                error: true,
                message: 'ERR_FILE_TYPE'
            },
            400
        )
    }

    try {

        let logo = await saveImage(file.logo, body.name)

        body.logo = logo

        body.current_date = new Date()
        body.current_hour = new Date()

        await CompanyData.create(body)

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

})

router.patch('/:id', async(req, res) => {

    var body = qs.parse(req.body)
    var file = qs.parse(req.files)

    var constraints = {

        url: {
            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        name: {

            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        dni: {
            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        phone: {
            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        alt_phone: {
            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        sales_email: {

            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        support_email: {

            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        operations_email: {

            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        // current_date: {
        //     length: {
        //         minimum: 1,
        //         maximum: 255,
        //     }
        // },
        // current_hour: {
        //     length: {
        //         minimum: 1,
        //         maximum: 255,
        //     }
        // },
    };

    var imgConstrain = {

        logo: {

        },
    }


    var validation = validator(body, constraints);
    var imgValidation = validator(file, imgConstrain)

    if (!empty(validation)) {
        return responseSchema(res, "ERR_VALIDATION_FAILED", validation);
    }

    if (!empty(imgValidation)) {
        return responseSchema(res, "ERR_VALIDATION_FAILED", imgValidation);
    }

    if (!(
            file.logo.mimetype == 'image/jpeg' ||
            file.logo.mimetype == 'image/png'
        )) {
        return responseSchema(
            res, {
                error: true,
                message: 'ERR_FILE_TYPE'
            },
            400
        )
    }

    try {

        let logo = await saveImage(file.logo, body.name)

        body.logo = logo

        body.current_date = new Date()
        body.current_hour = new Date()

        await CompanyData.update(body, { where: { id: req.params.id } })

        let foundedData = await CompanyData.findOne({ where: { id: req.params.id } })

        return responseSchema(res, {
            data: foundedData,
            message: "OK"
        });

    } catch (error) {
        console.log(error)
        return responseSchema(res, "ERR_FAILED");
    }

})



//************************************************   [    Functions    ]***************************************************************** */ 


var saveImage = async(image, name) => {
    return new Promise(async function(resolve, reject) {

        var logoPath = '/company_data/logo/'
        var filePathName = './documents/'

        var urlExtencion = image.mimetype.replace('image/', '.')

        name = name.replace(/\s+/g, '');

        image.mv(filePathName + 'company_logo/' + name + urlExtencion, function(
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


module.exports = router;