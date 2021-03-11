var express = require('express');
var router = express.Router();
var responseSchema = require('../helpers/ResponseSchema');
var Services = require('../sequelize/models').services;
var Plans = require('../sequelize/models').plans;
var User = require('../sequelize/models').users;
var validator = require('validate.js');
var empty = require('../helpers/Empty');
var verifyToken = require('../middlewares/VerifyToken');
const CONFIG = require('../config');
const PER_PAGE = CONFIG.PER_PAGE
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
var FailureReports = require('../sequelize/models').failure_reports;
//****************************************************   [       ENDPOINTS DE SERVICIOS        ]************************************************************************** */
router.get('/', async function(req, res) {

    try {

        var page = empty(req.query.page) ? 1 : (+req.query.page < 1 ? 1 : +req.query.page)
        var search = empty(req.query.search) ? null : req.query.search

        let foundedServices = await Services.findAll({
            where: search == null ? {} : {
                [Op.or]: [{
                    name: {
                        [Op.like]: "%" + search + "%"
                    }
                }]
            },
            include: [{
                model: FailureReports,
                as: 'failure_reports',
                include: [{
                    model: User,
                    attributes: ['id', 'name', 'lastname', 'dni', 'address', 'address_alt', 'phone', 'email'],
                    as: 'client'
                }]
            }, {
                model: Plans,
                as: 'plans'
            }],
            offset: PER_PAGE * (page - 1),
            limit: PER_PAGE
        })

        if (empty(foundedServices)) {

            return responseSchema(
                res, {
                    data: null,
                    error: true,
                    message: 'SERVICES_NOT_FOUND'
                },
                200
            )
        }

        return responseSchema(res, {
            data: foundedServices,
            message: "OK"
        });

    } catch (error) {
        console.log(error)
        return responseSchema(res, "ERR_FAILED");
    }
});

router.get('/:id', async function(req, res) {

    try {

        let foundedServices = await Services.findOne({
            where: {
                id: req.params.id
            },
            include: [{
                model: FailureReports,
                as: 'failure_reports',
                include: [{
                    model: User,
                    attributes: ['id', 'name', 'lastname', 'dni', 'address', 'address_alt', 'phone', 'email'],
                    as: 'client'
                }]
            }]
        })

        if (empty(foundedServices)) {

            return responseSchema(
                res, {
                    data: null,
                    error: true,
                    message: 'SERVICES_NOT_FOUND'
                },
                200
            )
        }

        return responseSchema(res, {
            data: foundedServices,
            message: "OK"
        });

    } catch (error) {
        console.log(error)
        return responseSchema(res, "ERR_FAILED");
    }

});


router.post('/register', async(req, res) => {

    var constraints = {
        name: {
            presence: true,
            length: {
                minimum: 1,
                maximum: 255,
            }
        }

    };

    var validation = validator(req.body, constraints);

    if (!empty(validation)) {
        return responseSchema(res, "ERR_VALIDATION_FAILED", validation);
    }

    try {

        let foundedService = await Services.findOne({ where: { name: req.body.name } })

        if (!empty(foundedService)) {
            return responseSchema(
                res, {
                    data: null,
                    error: true,
                    message: 'SERVICE_NAME_TAKEN'
                },
                200
            )
        }

    } catch (error) {
        return responseSchema(res, 'ERR_FAILED', 500)
    }

    try {

        req.body.name = fixStringToLowerCase(req.body.name)

        await Services.create(req.body)

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
        var foundedService = await Services.findOne({
            where: { id: req.params.id }
        }, )

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
        return responseSchema(res, 'ERR_FAILED', 500)
    }

    var constraints = {
        name: {
            presence: true,
            length: {
                minimum: 1,
                maximum: 255,
            }
        }
    };


    var validation = validator(req.body, constraints);

    if (!empty(validation)) {
        return responseSchema(res, "ERR_VALIDATION_FAILED", validation);
    }

    req.body.name = fixStringToLowerCase(req.body.name)

    try {

        var foundedServiceName = await Services.findOne({ where: { name: req.body.name } })

        if (empty(foundedServiceName)) {
            await Services.update(req.body, { where: { id: req.params.id } })
            return responseSchema(
                res, {
                    data: null,
                    error: false,
                    message: 'OK'
                },
                200
            )
        }

        if (foundedService.id === req.params.id) {

            await Services.update(req.body, { where: { id: req.params.id } })

            return responseSchema(
                res, {
                    data: null,
                    error: false,
                    message: 'OK'
                },
                200
            )

        } else {

            return responseSchema(
                res, {
                    data: null,
                    error: true,
                    message: 'SERVICE_NAME_TAKEN'
                },
                200
            )
        }

    } catch (error) {
        console.log(error)
        return responseSchema(res, 'ERR_FAILED', 500)
    }

})

router.delete('/:id', async(req, res) => {

    try {

        await Services.destroy({
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