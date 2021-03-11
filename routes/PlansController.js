var express = require('express');
var router = express.Router();
var responseSchema = require('../helpers/ResponseSchema');
var Plans = require('../sequelize/models').plans;
var Services = require('../sequelize/models').services;
var validator = require('validate.js');
var empty = require('../helpers/Empty');
var verifyToken = require('../middlewares/VerifyToken');
const CONFIG = require('../config');
const PER_PAGE = CONFIG.PER_PAGE
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

//****************************************************   [       ENDPOINTS DE PLANES        ]************************************************************************** */
router.get('/', async function(req, res) {

    try {

        var page = empty(req.query.page) ? 1 : (+req.query.page < 1 ? 1 : +req.query.page)

        let foundedPlans = await Plans.findAll({
            include: [{
                model: Services,
                as: 'service',
            }],
            offset: PER_PAGE * (page - 1),
            limit: PER_PAGE
        })

        if (empty(foundedPlans)) {
            return responseSchema(
                res, {
                    data: null,
                    error: true,
                    message: 'PLANS_NOT_FOUND'
                },
                200
            )
        }

        return responseSchema(res, {
            data: foundedPlans,
            message: "OK"
        });

    } catch (error) {
        console.log(error)
        return responseSchema(res, "ERR_FAILED");
    }

});

router.get('/:id', async function(req, res) {

    try {

        let foundedPlan = await Plans.findOne({
            where: {
                id: req.params.id
            },
            include: [{
                model: Services,
                as: 'service',
            }]
        })

        if (empty(foundedPlan)) {

            return responseSchema(
                res, {
                    data: null,
                    error: true,
                    message: 'PLANS_NOT_FOUND'
                },
                200
            )
        }

        return responseSchema(res, {
            data: foundedPlan,
            message: "OK"
        });

    } catch (error) {
        console.log(error)
        return responseSchema(res, "ERR_FAILED");
    }

});


router.post('/register', async(req, res) => {

    var parent = ['DOWNLOAD', 'UPLOAD']
    var boolean = [true, false]

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
        monthly_price: {
            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        long_term_price: {
            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        long_term_type: {
            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        service_id: {

            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        weight: {

            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        mbps_up: {

            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        mpbs_down: {

            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        reuse_factor: {

            numericality: {
                onlyInteger: true,
                greatenThan: 0,

            }
        },
        max_limit_up: {

            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        limit_at_up: {

            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        max_limit_down: {

            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        limit_at_down: {

            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        burst_limit_upload: {

            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        burst_limit_download: {

            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        burst_threshold_upload: {

            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        burst_threshold_download: {

            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        burst_time: {
            numericality: {
                onlyInteger: true,
                greatenThan: 0,
            }
        },
        burst: {
            inclusion: {
                within: boolean,
                message: "Only accepted value boolean"
            }
        },
        burst_x100: {
            numericality: {
                onlyInteger: true,
                greatenThan: 0,

            }
        },
        priority: {
            numericality: {
                onlyInteger: true,
                greatenThan: 0,

            }
        },
        parent: {
            inclusion: {
                within: parent,
                message: "Only accepted values: DOWNLOAD or UPLOAD"
            }
        },
        max_device_public_internet: {

            numericality: {
                onlyInteger: true,
                greatenThan: 0


            }
        },
        max_limit_value: {

            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        bw_required: {

            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        weight: {
            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        bucket: {
            inclusion: {
                within: boolean,
                message: "Only accepted value boolean"
            }
        },
        active_service_quantity: {
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

        let foundedService = await Services.findOne({
            where: {
                id: req.body.service_id
            },
        })
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
        return responseSchema(res, "ERR_FAILED");
    }

    try {

        await Plans.create(req.body)

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

        var foundedPlan = await Plans.findOne({
            where: { id: req.params.id }

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
        return responseSchema(res, 'ERR_FAILED', 500)
    }

    var parent = ['DOWNLOAD', 'UPLOAD']
    var boolean = [true, false]

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
        monthly_price: {
            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        long_term_price: {
            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        long_term_type: {
            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        service_id: {

            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        weight: {

            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        mbps_up: {

            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        mpbs_down: {

            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        reuse_factor: {

            numericality: {
                onlyInteger: true,
                greatenThan: 0,

            }
        },
        max_limit_up: {

            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        limit_at_up: {

            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        max_limit_down: {

            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        limit_at_down: {

            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        burst_limit_upload: {

            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        burst_limit_download: {

            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        burst_threshold_upload: {

            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        burst_threshold_download: {

            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        burst_time: {
            numericality: {
                onlyInteger: true,
                greatenThan: 0,
            }
        },
        burst: {
            inclusion: {
                within: boolean,
                message: "Only accepted value boolean"
            }
        },
        burst_x100: {
            numericality: {
                onlyInteger: true,
                greatenThan: 0,

            }
        },
        priority: {
            numericality: {
                onlyInteger: true,
                greatenThan: 0,
            }
        },
        parent: {
            inclusion: {
                within: parent,
                message: "Only accepted values: DOWNLOAD or UPLOAD"
            }
        },
        max_device_public_internet: {

            numericality: {
                onlyInteger: true,
                greatenThan: 0

            }
        },
        max_limit_value: {

            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        bw_required: {

            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        weight: {
            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        bucket: {
            inclusion: {
                within: boolean,
                message: "Only accepted value boolean"
            }
        },
        active_service_quantity: {
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

        try {

            await Plans.update(req.body, {
                where: {
                    id: req.params.id
                }
            })

        } catch (error) {
            console.log(error)
            return responseSchema(res, 'ERR_FAILED', 500)
        }

        try {

            var foundedPlan = await Plans.findOne({
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
                data: foundedPlan,
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

        await Plans.destroy({
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