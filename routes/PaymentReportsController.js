const express = require('express');
const router = express.Router();
const responseSchema = require('./../helpers/ResponseSchema');
const validator = require('validate.js');
const empty = require('../helpers/Empty');
const PaymentsReport = require('../sequelize/models').payment_reports;
const Plans = require('../sequelize/models').plans;
const Service = require('../sequelize/models').services;
const bcrypt = require('bcryptjs')
const CONFIG = require('../config');
const PER_PAGE = CONFIG.PER_PAGE
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const Banks = require('../sequelize/models').banks;
const User = require('../sequelize/models').users;
moment = require('moment')
    //****************************************************   [       ENDPOINTS DE PAGOS        ]************************************************************************** */

// router.get('/', async(req, res) => {

//     var page = empty(req.query.page) ? 1 : (+req.query.page < 1 ? 1 : +req.query.page)
//     var search = empty(req.query.search) ? null : req.query.search

//     let foundedPaymentReports = await PaymentsReport.findAll({
//         include: [{
//             model: Banks,
//             as: 'bank',
//         }, {
//             model: User,
//             as: 'user',
//             where: {
//                 role: 2
//             },
//             attributes: ['id', 'name', 'lastname', 'dni', 'address', 'address_alt', 'phone', 'email']
//         }]
//     }, {
//         offset: PER_PAGE * (page - 1),
//         limit: PER_PAGE
//     })


//     if (empty(foundedPaymentReports)) {
//         return responseSchema(res, {
//             error: true,
//             message: "NO_REGISTERS"
//         });
//     }

//     return responseSchema(
//         res, {
//             data: foundedPaymentReports,
//             error: false,
//             message: 'OK'
//         },
//         200
//     )
// })


router.get('/:id', async function(req, res) {

    try {

        console.log(req.params.id)

        var foundedPaymentReports = await PaymentsReport.findAll({
            where: {
                client_id: req.params.id
            },
            include: [{
                    model: User,
                    as: 'user',
                    attributes: ['id', 'name', 'lastname', 'dni', 'address', 'address_alt', 'phone', 'email']
                },
                {
                    model: Plans,
                    as: 'plan',
                    include: {
                        model: Service,
                        as: 'service'
                    }
                },
                {
                    model: Banks,
                    as: 'bank',
                }

            ]
        })

        if (empty(foundedPaymentReports)) {

            return responseSchema(res, {
                error: true,
                message: "NO_REGISTERS_FOUND"
            });
        }

        return responseSchema(res, {
            data: foundedPaymentReports,
            error: false,
            message: "OK"
        });

    } catch (error) {
        console.log(error)
        return responseSchema(res, "ERR_FAILED");
    }

});


router.post('/register', async(req, res) => {

    var constraints = {
        client_id: {
            presence: true,
            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        plan_id: {
            presence: true,
            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        payment_amount: {
            presence: true,
            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        payment_method_id: {
            presence: true,
            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        bank_id: {
            presence: true,
            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        reference_number: {
            presence: true,
            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        payment_date: {
            presence: true,
            length: {
                minimum: 1,
                maximum: 255,
            }
        },
    };

    var validation = validator(req.body, constraints);

    if (!empty(validation)) {
        return responseSchema(res, "ERR_VALIDATION_FAILED", validation);
    }

    try {
        let foundedBanks = await Banks.findOne({
            where: { id: req.body.bank_id }
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
    } catch (error) {
        console.log(error)
        return responseSchema(res, 'ERR_FAILED', 500)
    }

    try {
        let foundedUser = await User.findOne({
            where: { id: req.body.client_id }
        })
        if (empty(foundedUser)) {
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
        let foundedPlan = await Plans.findOne({
            where: { id: req.body.plan_id }
        })
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
    } catch (error) {
        console.log(error)
        return responseSchema(res, 'ERR_FAILED', 500)
    }


    try {

        var paymentReport = req.body

        paymentReport.report_date = moment().format()

        await PaymentsReport.create(req.body)

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

    var constraints = {

        plan_id: {

            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        payment_amount: {

            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        payment_method_id: {

            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        bank_id: {

            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        reference_number: {

            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        payment_date: {

            length: {
                minimum: 1,
                maximum: 255,
            }
        },
    };

    var validation = validator(req.body, constraints);

    if (!empty(validation)) {
        return responseSchema(res, "ERR_VALIDATION_FAILED", validation);
    }

    try {

        var paymentReport = req.body

        paymentReport.report_date = moment().format()

        await PaymentsReport.update(req.body, { where: { id: req.params.id } })

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

        await PaymentsReport.destroy({
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