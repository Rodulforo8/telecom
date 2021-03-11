const express = require('express');
const router = express.Router();
const responseSchema = require('../helpers/ResponseSchema');
const InternetServerConfig = require('../sequelize/models').internet_server_configs;
const validator = require('validate.js');
const empty = require('../helpers/Empty');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const CONFIG = require('../config');
const PER_PAGE = CONFIG.PER_PAGE
//****************************************************   [       ENDPOINTS DE CONFIGURACION DE SERVIDOR DE INTERNET        ]************************************************************************** */


router.get('/', async (req, res) => {

    var page = empty(req.query.page) ? 1 : (+req.query.page < 1 ? 1 : +req.query.page)
    var search = empty(req.query.search) ? null : req.query.search

    try {

        let foundedInternetServerConfigs = await InternetServerConfig.findAll({ where: search == null ? {} : {
            [Op.or]: [{
                name: {
                    [Op.like]: "%" + search + "%"
                }
            }]
        },
        offset: PER_PAGE * (page - 1),
        limit: PER_PAGE,})

        return responseSchema(res, {
            data: foundedInternetServerConfigs,
            error: false,
            message: "OK"
        });

    } catch (error) {
        console.log(error)
        return responseSchema(res, "ERR_FAILED");
    }

});

router.get('/:id', async (req, res) => {

    try {

        let foundedInternetServerConfig = await InternetServerConfig.findOne({ where: { id: req.params.id } })


        return responseSchema(res, {
            data: foundedInternetServerConfig,
            error: false,
            message: "OK"
        });


    } catch (error) {
        console.log(error)
        return responseSchema(res, "ERR_FAILED");
    }

});


router.post('/register', async (req, res) => {

    try {

        var constraints = {

            ip: {
                presence: true,
                length: {
                    minimum: 1,
                    maximum: 255,
                }
            },
            username: {
                presence: true,
                length: {
                    minimum: 1,
                    maximum: 255,
                }
            },
            password: {
                presence: true,
                length: {
                    minimum: 1,
                    maximum: 255,
                }
            },
            port: {
                presence: true,
                length: {
                    minimum: 1,
                    maximum: 255,
                }
            },
            token: {
                presence: true,
                length: {
                    minimum: 1,
                    maximum: 255,
                }
            },
            url: {
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

            let foundedUserName = await InternetServerConfig.findOne({ where: { username: req.body.username } })

            if (!empty(foundedUserName)) {
                return responseSchema(res, 'REGISTERED_USERNAME', 400)
            }

        } catch (err) {
            console.log(err);
            return responseSchema(res, "ERR_FAILED");
        }

        
        try {

            let foundedIp = await InternetServerConfig.findOne({ where: { ip: req.body.ip } })

            if (!empty(foundedIp)) {
                return responseSchema(res, 'REGISTERED_IP', 400)
            }

        } catch (err) {
            console.log(err);
            return responseSchema(res, "ERR_FAILED");
        }

        await InternetServerConfig.create(req.body)

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


router.patch('/:id', async (req, res) => {

    try {

        var constraints = {

            ip: {
                presence: true,
                length: {
                    minimum: 1,
                    maximum: 255,
                }
            },
            username: {
                presence: true,
                length: {
                    minimum: 1,
                    maximum: 255,
                }
            },
            password: {
                presence: true,
                length: {
                    minimum: 1,
                    maximum: 255,
                }
            },
            port: {
                presence: true,
                length: {
                    minimum: 1,
                    maximum: 255,
                }
            },
            token: {
                presence: true,
                length: {
                    minimum: 1,
                    maximum: 255,
                }
            },
            url: {
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

            let foundedRecord = await InternetServerConfig.findOne({where:{id : req.params.id}})


            if(!empty(foundedRecord)){


            let foundedUserName = await InternetServerConfig.findOne({ where: { username: req.body.username } })

            if(!empty(foundedUserName)){

                if(foundedRecord.id == foundedUserName.id){

                    let foundedIp = await InternetServerConfig.findOne({ where: { ip: req.body.ip } })

                    if(!empty(foundedIp)){

                        if(foundedRecord.id == foundedIp.id){
               
                           await updateRecord(res, req, req.body, req.params.id)
                    
                        } else {
    
                            return responseSchema(res, 'REGISTERED_IP', 400)
    
                        }
                    } else {
                       
                        await updateRecord(res, req, req.body, req.params.id)

                    }

                } else{

                    return responseSchema(res, 'REGISTERED_USERNAME', 400)

                }
            } else {
          

                let foundedIp = await InternetServerConfig.findOne({ where: { ip: req.body.ip } })

                if(!empty(foundedIp)){

                    if(foundedRecord.id == foundedIp.id){
              
                        await updateRecord(res, req,req.body, req.params.id)
                
                    } else {

                        return responseSchema(res, 'REGISTERED_IP', 400)

                    }
                } else {
                   
                  await updateRecord(res, req ,req.body, req.params.id)

                }
            }
          
        
            } else {

                return responseSchema(res, 'REGISTER_NOT_FOUND', 400)

            }

        } catch (error) {
            console.log(error)
            return responseSchema(res, "ERR_FAILED");
        }

    } catch (error) {
        console.log(error)
        return responseSchema(res, "ERR_FAILED");
    }

});


router.delete('/:id', async (req, res) => {

    try {

         await InternetServerConfig.destroy({ where: { id: req.params.id } })


        return responseSchema(res, {
            data: null,
            error: false,
            message: "OK"
        });


    } catch (error) {
        console.log(error)
        return responseSchema(res, "ERR_FAILED");
    }

});


//************************************************   [    Functions    ]***************************************************************** */ 

const updateRecord = async(res,req, data, id) => {

    await InternetServerConfig.update(data, {where: {id : id}})
    
        let foundedData = await InternetServerConfig.findOne({where:{id:id}})
   
        return responseSchema(
            res, {
                data: foundedData,
                error: false,
                message: 'OK'
            },
            200
        )
}

module.exports = router;