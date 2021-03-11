const express = require('express');
const router = express.Router();
const responseSchema = require('./../helpers/ResponseSchema');
const Modules = require('../sequelize/models').modules;
const Roles = require('../sequelize/models').roles;
const RoleModels = require('../sequelize/models').role_modules;

//****************************************************   [       ENDPOINTS DE UBICACION        ]************************************************************************** */

router.get('/', async function(req, res) {

    try {

        const foundedModules = await Modules.findAll({
            include: {
                model: RoleModels,
                include: {
                    model: Roles,
                    as: 'role_modules'
                }
            }
        })

        return responseSchema(res, {
            data: foundedModules,
            error: false,
            message: "OK"
        });

    } catch (error) {
        console.log(error)
        return responseSchema(res, "ERR_FAILED");
    }

});




module.exports = router;