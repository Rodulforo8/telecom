var express = require('express');
var router = express.Router();
var responseSchema = require('../helpers/ResponseSchema');
var Plans = require('../sequelize/models').plans;
var User = require('../sequelize/models').users;
var UserPlan = require('../sequelize/models').user_plans;
var validator = require('validate.js');
var empty = require('../helpers/Empty');
var verifyToken = require('../middlewares/VerifyToken');
const CONFIG = require('../config');
const PER_PAGE = CONFIG.PER_PAGE
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
var moment = require('moment')


router.post('/', async(req, res) => {

    var constraints = {

        plan_id: {
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
        },
        status: {
            presence: true,
            numericality: {
                onlyInteger: true,
                greatenThan: 0,
                lessThanOrEqualTo: 2
            }
        },
        start_date: {
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

        let foundedPlan = await Plans.findOne({ where: { id: req.body.plan_id } })

        if (empty(foundedPlan)) {
            return responseSchema(
                res, {
                    data: null,
                    error: true,
                    message: 'PLAN_NOT_FOUND'
                },
                200
            )
        }

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

        let foundedClientPlan = await UserPlan.findOne({
            where: {
                client_id: req.body.client_id,
                plan_id: req.body.plan_id
            }
        })

        if (!empty(foundedClientPlan)) {
            return responseSchema(
                res, {
                    data: null,
                    error: true,
                    message: 'CLIENT_PLAN_FOUND'
                },
                200
            )
        }

    } catch (error) {
        console.log(error)
        return responseSchema(res, 'ERR_FAILED', 500)
    }

    try {

        var isValidStartDate = moment(req.body.start_date).isValid();

        if (!isValidStartDate) {
            return responseSchema(
                res, {
                    error: true,
                    message: 'INVALID_START_DATE'
                },
                200
            )
        }

        await UserPlan.create(req.body)

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

        await UserPlan.destroy({
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