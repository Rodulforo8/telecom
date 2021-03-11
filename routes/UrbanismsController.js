var express = require('express');
var router = express.Router();
var responseSchema = require('../helpers/ResponseSchema');
var Cities = require('../sequelize/models').ciudades;
var States = require('../sequelize/models').estados;
var Parishes = require('../sequelize/models').parroquias;
var Urbanism = require('../sequelize/models').urbanisms;
var validator = require('validate.js');
var Municipalities = require('../sequelize/models').municipios;
var empty = require('../helpers/Empty');
var Sequelize = require('../sequelize/models/index').sequelize;
const Op = Sequelize.Op;


//****************************************************   [       ENDPOINTS DE URBANISMOS        ]************************************************************************** */
/**
 * @swagger
 * /urbanism/:
 *  get:
 *    description: Retorna todos los urbanismos
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/', async function(req, res) {

    try {

        Urbanism.findAll({
            include: [{
                    model: Parishes,
                    as: 'parroquia',
                    atrributes: ['parroquia']
                },
                {
                    model: Cities,
                    as: 'ciudad',
                    atrributes: ['ciudad']
                }
            ]
        }).then(result => {
            return responseSchema(res, {
                data: result,
                message: "OK"
            });

        });

    } catch (error) {
        console.log(error)
        return responseSchema(res, "ERR_FAILED");
    }

});

router.get('/:id', async function(req, res) {

    try {

        Urbanism.findOne({
            where: {
                id: req.params.id
            },
            include: [{
                    model: Parishes,
                    as: 'parroquia',
                    atrributes: ['parroquia']
                },
                {
                    model: Cities,
                    as: 'ciudad',
                    atrributes: ['ciudad']
                }
            ]
        }).then(result => {

            return responseSchema(res, {
                data: result,
                message: "OK"
            });

        });

    } catch (error) {
        console.log(error)
        return responseSchema(res, "ERR_FAILED");
    }

});


router.post('/register', async(req, res) => {

    var constraints = {
        parish_id: {
            presence: true,
            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        city_id: {
            presence: true,
            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        name: {
            presence: true,
            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        households_qty: {
            presence: true,
            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        latitude: {
            presence: true,
            // length: {
            //     minimum: 1,
            //     maximum: 255,
            // }
        },
        longitude: {
            presence: true,
            // length: {
            //     minimum: 1,
            //     maximum: 255,
            // }
        }
    };

    var validation = validator(req.body, constraints);

    if (!empty(validation)) {
        return responseSchema(res, "ERR_VALIDATION_FAILED", validation);
    }

    try {

        await Urbanism.create(req.body)

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

    try {
        var urbanism = await Urbanism.findOne({
            where: { id: { $eq: req.params.id } },
            paranoid: false
        })
    } catch (error) {
        return responseSchema(res, 'ERR_FAILED', 500)
    }

    var constraints = {
        parish_id: {
            presence: true,
            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        city_id: {
            presence: true,
            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        name: {
            presence: true,
            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        households_qty: {
            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        latitude: {
            presence: true,
            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        longitude: {
            presence: true,
            length: {
                minimum: 1,
                maximum: 255,
            }
        }
    };

    var validation = validator(req.body, constraints);
    console.log(req.body)
    if (!empty(validation)) {
        return responseSchema(res, "ERR_VALIDATION_FAILED", validation);
    }

    try {

        try {

            await Urbanism.update(req.body, {
                where: {
                    id: req.params.id
                }
            })

        } catch (error) {
            console.log(error)
            return responseSchema(res, 'ERR_FAILED', 500)
        }

        try {

            var foundedUrbanism = await Urbanism.findOne({
                where: {
                    id: req.params.id
                }
            })

        } catch (error) {
            console.log(error)
            return responseSchema(res, 'ERR_FAILED', 500)
        }

        return responseSchema(
            res, {
                data: foundedUrbanism,
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

        await Urbanism.destroy({
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







module.exports = router;