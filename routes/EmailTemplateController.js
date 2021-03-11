const express = require('express');
const router = express.Router();
const responseSchema = require('../helpers/ResponseSchema');
const empty = require('../helpers/Empty');
const EmailTemplate = require('../sequelize/models').email_templates;
const validator = require('validate.js');
const CONFIG = require('../config');
const PER_PAGE = CONFIG.PER_PAGE
    //****************************************************   [       ENDPOINTS DE TEMPLATE DE EMAIL        ]****************************************************************** */

router.get('/', async(req, res) => {

    var page = empty(req.query.page) ? 1 : (+req.query.page < 1 ? 1 : +req.query.page)
    var search = empty(req.query.search) ? null : req.query.search

    try {

        const foundedData = await EmailTemplate.findAll({
            where: search == null ? {} : {
                [Op.or]: [{
                    name: {
                        [Op.like]: "%" + search + "%"
                    }
                }]
            }
        }, {
            offset: PER_PAGE * (page - 1),
            limit: PER_PAGE,
            atttributes: ['name', 'text', 'status']
        })

        return responseSchema(res, {
            data: foundedData,
            message: "OK"
        });

    } catch (error) {
        console.log(error)
        return responseSchema(res, "ERR_FAILED");
        x
    }

});


router.get('/:id', async(req, res) => {

    try {

        const foundedData = await EmailTemplate.findOne({ where: { id: req.params.id }, attributes: ['name', 'text', 'status'] })

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

    var boolean = [true, false]

    var constraints = {
        name: {
            presence: true,
            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        text: {
            presence: true,
            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        status: {
            presence: true,
            inclusion: {
                within: boolean,
                message: "Only accepted value boolean"
            }
        }
    };

    var validation = validator(req.body, constraints);

    if (!empty(validation)) {
        return responseSchema(res, "ERR_VALIDATION_FAILED", validation);
    }

    try {

        let foundedName = await EmailTemplate.findOne({ where: { name: req.body.name } })

        if (!empty(foundedName)) {
            return responseSchema(
                res, {
                    data: null,
                    error: true,
                    message: 'FOUNDED_TEMPLATE_NAME'
                },
                400
            )
        }

    } catch (error) {
        console.log(error)
        return responseSchema(res, "ERR_FAILED");
    }

    try {

        await EmailTemplate.create(req.body)

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


router.patch('/:id', async(req, res) => {

    var boolean = [true, false]

    var constraints = {
        name: {
            presence: true,
            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        text: {
            presence: true,
            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        status: {
            presence: true,
            inclusion: {
                within: boolean,
                message: "Only accepted value boolean"
            }
        }
    };

    var validation = validator(req.body, constraints);

    if (!empty(validation)) {
        return responseSchema(res, "ERR_VALIDATION_FAILED", validation);
    }

    try {

        let foundedName = await EmailTemplate.findOne({ where: { name: req.body.name } })

        if (empty(foundedName)) {

            let result = await updateTemplate(req.body, req.params.id)
            let data = await EmailTemplate.findOne({ where: { id: req.params.id } })
            if (result) {
                return responseSchema(
                    res, {
                        data: data,
                        error: false,
                        message: 'OK'
                    },
                    200
                )
            }

        } else {
            if (foundedName.id == req.params.id) {
                let result = await updateTemplate(req.body, req.params.id)
                let data = await EmailTemplate.findOne({ where: { id: req.params.id } })
                if (result) {
                    return responseSchema(
                        res, {
                            data: data,
                            error: false,
                            message: 'OK'
                        },
                        200
                    )
                }

            } else {
                return responseSchema(
                    res, {
                        data: null,
                        error: true,
                        message: 'FOUNDED_TEMPLATE_NAME'
                    },
                    400
                )
            }

        }

    } catch (error) {
        console.log(error)
        return responseSchema(res, "ERR_FAILED");
    }



});


router.delete('/:id', async(req, res) => {

    try {

        await EmailTemplate.destroy({ where: { id: req.params.id } })

        return responseSchema(res, {
            data: null,
            message: "OK"
        });

    } catch (error) {
        console.log(error)
        return responseSchema(res, "ERR_FAILED");
    }

});


//************************************************   [    Functions    ]***************************************************************** */ 
var updateTemplate = async(data, id) => {
    try {
        await EmailTemplate.update(data, { where: { id: id } })
        return true
    } catch (error) {
        console.log(error)
        return responseSchema(res, 'ERR_FAILED', 500)
    }
}

module.exports = router;