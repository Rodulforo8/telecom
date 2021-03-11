var express = require('express');
var router = express.Router();
var responseSchema = require('./../helpers/ResponseSchema');
var Cities = require('../sequelize/models').ciudades;
var States = require('../sequelize/models').estados;
var Municipalities = require('../sequelize/models').municipios;
var Parishes = require('../sequelize/models').parroquias;
var test = require('../sequelize/models/estados')

//****************************************************   [       ENDPOINTS DE UBICACION        ]************************************************************************** */

router.get('/states', async function(req, res) {

    try {

        States.findAll({ attributes: ['id_estado', 'estado', 'iso_3166_2'] }).then(result => {

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


router.get('/cities/:id', async function(req, res) {

    try {
        Cities.findAll({
            where: {
                id_estado: req.params.id
            },
            attributes: ['id_ciudad', 'id_estado', 'ciudad', 'capital']
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


router.get('/municipalities/:id', async function(req, res) {

    try {

        Municipalities.findAll({
            where: {
                id_estado: req.params.id
            },
            attributes: ['id_municipio', 'id_estado', 'municipio']
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


router.get('/parishes/:id', async function(req, res) {

    try {

        Parishes.findAll({
            where: {
                id_municipio: req.params.id
            },
            attributes: ['id_parroquia', 'id_municipio', 'parroquia']
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

module.exports = router;