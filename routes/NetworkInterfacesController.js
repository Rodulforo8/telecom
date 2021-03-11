const express = require('express');
const router = express.Router();
const responseSchema = require('../helpers/ResponseSchema');
const empty = require('../helpers/Empty');
const NetworkInterface = require('../sequelize/models').network_interfaces;
const validator = require('validate.js');
const CONFIG = require('../config');
const PER_PAGE = CONFIG.PER_PAGE


//****************************************************   [       ENDPOINTS DE INTERFACES DE RED        ]****************************************************************** */

router.get('/', async(req, res) => {

    var page = empty(req.query.page) ? 1 : (+req.query.page < 1 ? 1 : +req.query.page)
    var search = empty(req.query.search) ? null : req.query.search

    try {

        const foundedData = await NetworkInterface.findAll({
            where: search == null ? {} : {
                [Op.or]: [{
                    name: {
                        [Op.like]: "%" + search + "%"
                    }
                }]
            },
            attributes: ['type', 'name', 'mbps_up', 'mbps_down', 'identifier']
        }, {
            offset: PER_PAGE * (page - 1),
            limit: PER_PAGE,

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

        const foundedData = await NetworkInterface.findOne({ where: { id: req.params.id }, attributes: ['type', 'name', 'mbps_up', 'mbps_down', 'identifier'] })

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

    var type = ['FIJA', 'COMPUESTA']
    var constraints = {
        type: {
            presence: true,
            inclusion: {
                within: type,
                message: "solo acepta tipo de interfaz de red FIJA O COMPUESTA"
            }
        },
        name: {
            presence: true,
            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        mbps_up: {
            presence: true,
            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }

        },
        mbps_down: {
            presence: true,
            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        identifier: {
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

        let foundedName = await NetworkInterface.findOne({ where: { name: req.body.name } })

        if (!empty(foundedName)) {
            return responseSchema(
                res, {
                    data: null,
                    error: true,
                    message: 'FOUNDED_NETWORK_INTERFACE_NAME'
                },
                400
            )
        }

    } catch (error) {
        console.log(error)
        return responseSchema(res, "ERR_FAILED");
    }

    try {

        let foundedIndentifier = await NetworkInterface.findOne({ where: { identifier: req.body.identifier } })

        if (!empty(foundedIndentifier)) {
            return responseSchema(
                res, {
                    data: null,
                    error: true,
                    message: 'FOUNDED_NETWORK_INTERFACE_IDENTIFIER'
                },
                400
            )
        }

    } catch (error) {
        console.log(error)
        return responseSchema(res, "ERR_FAILED");
    }

    try {

        await NetworkInterface.create(req.body)

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

    var type = ['FIJA', 'COMPUESTA']
    var constraints = {
        type: {
            presence: true,
            inclusion: {
                within: type,
                message: "solo se acepta tipo de interfaz de red FIJA O COMPUESTA"
            }
        },
        name: {
            presence: true,
            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        mbps_up: {
            presence: true,
            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }

        },
        mbps_down: {
            presence: true,
            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        identifier: {
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

        let foundedName = await NetworkInterface.findOne({ where: { name: req.body.name } })
        let foundedIdentifier = await NetworkInterface.findOne({ where: { identifier: req.body.identifier } })

        if (empty(foundedName)) {

            if (empty(foundedIdentifier)) {

                let result = await updateNetworkInterface(req.body, req.params.id)
                let data = await NetworkInterface.findOne({ where: { id: req.params.id } })
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
            } else if (foundedIdentifier.id == req.params.id) {

                let result = await updateNetworkInterface(req.body, req.params.id)
                let data = await NetworkInterface.findOne({ where: { id: req.params.id } })
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
                        message: 'FOUNDED_NETWORK_INTERFACE_IDENTIFIER'
                    },
                    400
                )
            }


        } else {

            if (foundedName.id == req.params.id) {

                if (empty(foundedIdentifier)) {

                    let result = await updateNetworkInterface(req.body, req.params.id)
                    let data = await NetworkInterface.findOne({ where: { id: req.params.id } })
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
                } else if (foundedIdentifier.id == req.params.id) {

                    let result = await updateNetworkInterface(req.body, req.params.id)
                    let data = await NetworkInterface.findOne({ where: { id: req.params.id } })
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
                            message: 'FOUNDED_NETWORK_INTERFACE_IDENTIFIER'
                        },
                        400
                    )
                }

            } else {
                return responseSchema(
                    res, {
                        data: null,
                        error: true,
                        message: 'FOUNDED_NETWORK_INTERFACE_NAME'
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

        await NetworkInterface.destroy({ where: { id: req.params.id } })

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
var updateNetworkInterface = async(data, id) => {
    try {
        await NetworkInterface.update(data, { where: { id: id } })
        return true
    } catch (error) {
        console.log(error)
        return responseSchema(res, 'ERR_FAILED', 500)
    }
}

module.exports = router;