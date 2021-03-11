const express = require('express');
const router = express.Router();
const responseSchema = require('../helpers/ResponseSchema');
const empty = require('../helpers/Empty');
const NetworkEquipments = require('../sequelize/models').network_equipments;
const NetworkInterface = require('../sequelize/models').network_interfaces;
const RelationalTable = require('../sequelize/models').equipment_interface_networks;
const validator = require('validate.js');
const CONFIG = require('../config');
const PER_PAGE = CONFIG.PER_PAGE
const SERVER_IP = CONFIG.SERVER_IP
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
var qs = require('qs');
//****************************************************   [       ENDPOINTS DE EQUIPOS DE RED       ]****************************************************************** */

router.get('/photo/:name', async(req, res) => {
    res.sendFile(req.params.name, { "root": './documents/network_equipments' });
})



router.get('/', async(req, res) => {

    var page = empty(req.query.page) ? 1 : (+req.query.page < 1 ? 1 : +req.query.page)
    var search = empty(req.query.search) ? null : req.query.search

    try {

        const foundedData = await NetworkEquipments.findAll({
            where: search == null ? {} : {
                [Op.or]: [{
                    name: {
                        [Op.like]: "%" + search + "%"
                    }
                }]
            },
            include: [{
                model: RelationalTable,
                as: 'relational_table',
                attributes: ['n_i', 'n_e', 'id'],
                include: {
                    model: NetworkInterface,
                    as: 'network_interface',
                    attributes: ['id', 'type', 'name', 'mbps_up', 'identifier', 'mbps_down']
                }
            }],
            attributes: ['id', 'brand', 'model', 'photo', 'identifier', 'type']
        }, {
            offset: PER_PAGE * (page - 1),
            limit: PER_PAGE,
        })

        if (empty(foundedData)) {

            return responseSchema(
                res, {
                    data: null,
                    error: true,
                    message: 'NETWORK_EQUIPMENT_NOT_FOUND'
                },
                200
            )
        }

        var finalResponse = formatResponse(foundedData)


        return responseSchema(res, {
            data: finalResponse,
            message: "OK"
        });

    } catch (error) {
        console.log(error)
        return responseSchema(res, "ERR_FAILED");

    }

});


router.get('/:id', async(req, res) => {

    try {

        const foundedData = await NetworkEquipments.findAll({
            where: { id: req.params.id },
            include: [{
                model: RelationalTable,
                as: 'relational_table',
                attributes: ['n_i', 'n_e'],
                include: {
                    model: NetworkInterface,
                    as: 'network_interface',
                    attributes: ['id', 'type', 'name', 'mbps_up', 'identifier', 'mbps_down']
                }
            }],
            attributes: ['id', 'brand', 'model', 'photo', 'identifier', 'type']
        })

        if (empty(foundedData)) {

            return responseSchema(
                res, {
                    data: null,
                    error: true,
                    message: 'NETWORK_EQUIPMENT_NOT_FOUND'
                },
                200
            )
        }

        var finalResponse = formatResponse(foundedData)

        return responseSchema(res, {
            data: finalResponse,
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

    var type = ['ROUTER', 'SWITCH', 'OLT', 'SERVER', 'ONU', 'ONT']

    var constraints = {
        type: {
            presence: true,
            inclusion: {
                within: type,
                message: "solo acepta tipo ROUTER, SWITCH, OLT, SERVER, ONU, ONT"
            }
        },
        brand: {
            presence: true,
            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        model: {
            presence: true,
            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        identifier: {
            presence: true,
            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        interfaces: {
            presence: true,
        }
    };

    photoConstraint = {
        photo: {
            presence: true,
        }
    }

    var validation = validator(body, constraints);
    var fileValidation = validator(file, photoConstraint);

    if (!empty(validation)) {
        return responseSchema(res, "ERR_VALIDATION_FAILED", validation);
    }

    if (!empty(fileValidation)) {
        return responseSchema(res, "ERR_VALIDATION_FAILED", fileValidation);
    }

    if (!(
            file.photo.mimetype == 'image/jpeg' ||
            file.photo.mimetype == 'image/png'
        )) {
        return responseSchema(res, 'ERR_FILE_TYPE', null)
    }

    try {

        let foundedIdentifier = await NetworkEquipments.findOne({ where: { identifier: req.body.identifier } })

        if (!empty(foundedIdentifier)) {
            return responseSchema(
                res, {
                    data: null,
                    error: true,
                    message: 'FOUNDED_NETWORK_EQUIPMENT_IDENTIFIER'
                },
                400
            )
        }

    } catch (error) {
        console.log(error)
        return responseSchema(res, "ERR_FAILED");
    }

    if (!Array.isArray(body.interfaces)) {
        return responseSchema(
            res, {
                data: null,
                error: true,
                message: 'INTERFACES_IS_NOT_ARRAY'
            },
            400
        )
    }

    try {

        let url = await saveImage(file.photo, body.model + body.identifier)

        body.photo = url

        let created = await NetworkEquipments.create(body)

        let bulkData = []
        for (var i in body.interfaces) {

            var n_i = body.interfaces[i]
            n_i = parseInt(n_i)

            let foundedData = await RelationalTable.findOne({ where: { n_i: n_i, n_e: created.id } })

            if (empty(foundedData)) {
                var data = {
                    n_i: n_i,
                    n_e: created.id
                }
                bulkData.push(data)
            }
        }

        if (bulkData.length > 0) {
            await RelationalTable.bulkCreate(bulkData)
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


router.patch('/:id', async(req, res) => {

    var body = qs.parse(req.body)
    var file = qs.parse(req.files)

    var type = ['ROUTER', 'SWITCH', 'OLT', 'SERVER', 'ONU', 'ONT']

    var constraints = {
        type: {
            presence: true,
            inclusion: {
                within: type,
                message: "solo acepta tipo ROUTER, SWITCH, OLT, SERVER, ONU, ONT"
            }
        },
        brand: {
            presence: true,
            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        model: {
            presence: true,
            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        identifier: {
            presence: true,
            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        interfaces: {
            presence: true,
        }
    };

    photoConstraint = {
        photo: {
            presence: true,
        }
    }

    var validation = validator(body, constraints);
    var fileValidation = validator(file, photoConstraint);

    if (!empty(validation)) {
        return responseSchema(res, "ERR_VALIDATION_FAILED", validation);
    }

    if (!empty(fileValidation)) {
        return responseSchema(res, "ERR_VALIDATION_FAILED", fileValidation);
    }

    if (!(
            file.photo.mimetype == 'image/jpeg' ||
            file.photo.mimetype == 'image/png'
        )) {
        return responseSchema(res, 'ERR_FILE_TYPE', null)
    }

    if (!Array.isArray(body.interfaces)) {
        return responseSchema(
            res, {
                data: null,
                error: true,
                message: 'INTERFACES_IS_NOT_ARRAY'
            },
            400
        )
    }

    try {

        let foundedIdentifier = await NetworkEquipments.findOne({ where: { identifier: req.body.identifier } })

        if (!empty(foundedIdentifier)) {

            if (foundedIdentifier.id == req.params.id) {

                let finalResponse = await updateNetWorkEquipment(req, res, body, file)

                return responseSchema(
                    res, {
                        data: finalResponse,
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
                        message: 'FOUNDED_NETWORK_EQUIPMENT_IDENTIFIER'
                    },
                    400
                )
            }

        } else {

            let finalResponse = await updateNetWorkEquipment(req, res, body, file)

            return responseSchema(
                res, {
                    data: finalResponse,
                    error: false,
                    message: 'OK'
                },
                200
            )
        }

    } catch (error) {
        console.log(error)
        return responseSchema(res, "ERR_FAILED");
    }
});


router.delete('/:id', async(req, res) => {

    try {

        await NetworkEquipments.destroy({ where: { id: req.params.id } })

        return responseSchema(res, {
            data: null,
            message: "OK"
        });

    } catch (error) {
        console.log(error)
        return responseSchema(res, "ERR_FAILED");
    }

});

router.delete('/interface_relation/:id', async(req, res) => {

    try {

        await RelationalTable.destroy({ where: { id: req.params.id } })

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
var updateNetWorkEquipment = async(req, res, body, file) => {
    try {
        var newInterfaces = []
        for (i in body.interfaces) {
            var data = body.interfaces[i]
            let foundedRelation = await RelationalTable.findOne({ where: { n_i: data, n_e: req.params.id } })
            if (empty(foundedRelation)) {

                var dataToIntegrate = {
                    n_i: data,
                    n_e: req.params.id
                }
                newInterfaces.push(dataToIntegrate)
            }
        }

        let url = await saveImage(file.photo, body.model + body.identifier)
        body.photo = url
        await NetworkEquipments.update(body, { where: { id: req.params.id } })

        if (newInterfaces.length > 0) {
            await RelationalTable.bulkCreate(newInterfaces)
        }

        const foundedData = await NetworkEquipments.findAll({
            where: { id: req.params.id },
            include: [{
                model: RelationalTable,
                as: 'relational_table',
                attributes: ['n_i', 'n_e'],
                include: {
                    model: NetworkInterface,
                    as: 'network_interface',
                    attributes: ['id', 'type', 'name', 'mbps_up', 'identifier', 'mbps_down']
                }
            }],
            attributes: ['id', 'brand', 'model', 'photo', 'identifier', 'type']
        })

        var finalResponse = formatResponse(foundedData)

        return finalResponse
    } catch (error) {
        console.log(error)
        return responseSchema(res, 'ERR_FAILED', 500)
    }
}


const saveImage = async(image, name) => {

    return new Promise(async function(resolve, reject) {
        var logoPath = '/network_equipment/photo/'
        var filePathName = './documents/'

        var urlExtencion = image.mimetype.replace('image/', '.')

        name = name.replace(/\s+/g, '');

        image.mv(filePathName + 'network_equipments/' + name + urlExtencion, function(
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

const formatResponse = (foundedData) => {
    var array = []
    for (i in foundedData) {
        var data = foundedData[i]
        var relationalTable = foundedData[i].dataValues.relational_table
        var interfaceArray = []

        relationalTable.map(interface => {
            interface.network_interface.dataValues.relational_id = interface.id
            interfaceArray.push(interface.network_interface)
        })

        data.dataValues.interfaces = interfaceArray
        array.push(data)
        delete data.dataValues['relational_table'];
    }
    return array
}

module.exports = router;