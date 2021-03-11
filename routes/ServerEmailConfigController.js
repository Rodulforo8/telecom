var express = require('express');
var router = express.Router();
var responseSchema = require('../helpers/ResponseSchema');
var validator = require('validate.js');
var empty = require('../helpers/Empty');
var verifyToken = require('../middlewares/VerifyToken');
const CONFIG = require('../config');
const PER_PAGE = CONFIG.PER_PAGE
const Sequelize = require('sequelize');
var EmailServerConfig = require('../sequelize/models').email_server_configs;
var uuidValidator = require('uuid-validate');
const bcrypt = require('bcryptjs')
const crypto = require('crypto');
const secretKey = CONFIG.CRYPTO_KEY;
const iv = crypto.randomBytes(16);
const algorithm = 'aes-256-ctr';
router.get('/', async function(req, res) {

    try {

        const foundedData = await EmailServerConfig.findAll({ attributes: ['id', 'uuid', 'url_server', 'port', 'type_server', 'username', 'status', 'iv', 'content'] })

        const result = foundedData.map(data => {
            var passwordHash = {
                iv: data.dataValues.iv,
                content: data.dataValues.content
            }

            var password = decrypt(passwordHash)
            data.dataValues.password = password
            delete data.dataValues['iv'];
            delete data.dataValues['content'];
            return data
        })

        return responseSchema(res, {
            data: result,
            message: "OK"
        });

    } catch (error) {
        console.log(error)
        return responseSchema(res, "ERR_FAILED");
    }

});

router.get('/:id', async function(req, res) {

    try {

        const foundedData = await EmailServerConfig.findOne({ where: { id: req.params.id }, attributes: ['id', 'uuid', 'url_server', 'port', 'type_server', 'username', 'status', 'iv', 'content'] })

        var passwordHash = {
            iv: foundedData.dataValues.iv,
            content: foundedData.dataValues.content
        }

        var password = decrypt(passwordHash)
        foundedData.dataValues.password = password
        delete foundedData.dataValues['iv'];
        delete foundedData.dataValues['content'];



        return responseSchema(res, {
            data: foundedData,
            message: "OK"
        });

    } catch (error) {
        console.log(error)
        return responseSchema(res, "ERR_FAILED");
    }

});


router.post('/register', async function(req, res) {

    var boolean = [true, false]
    var constraints = {

        uuid: {
            presence: true,
            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        url_server: {
            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        port: {
            presence: true,
            numericality: {
                onlyInteger: true,
                greatenThan: 0
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

    var validateUUID = uuidValidator(req.body.uuid)

    if (!validateUUID) {
        return responseSchema(
            res, {
                data: null,
                error: true,
                message: 'INCORRECT_UUID_FORMAT'
            },
            400
        )
    }

    try {

        let foundedUser = await EmailServerConfig.findOne({ where: { username: req.body.username } })

        if (!empty(foundedUser)) {
            return responseSchema(
                res, {
                    data: null,
                    error: true,
                    message: 'FOUNDED_USERNAME'
                },
                400
            )
        }


    } catch (error) {
        console.log(error)
        return responseSchema(res, "ERR_FAILED");
    }

    try {

        // const passwordHash = bcrypt.hashSync(req.body.password, 10);
        // req.body.password = passwordHash

        const passwordHash = encrypt(req.body.password, algorithm, secretKey, iv)

        req.body.iv = passwordHash.iv
        req.body.content = passwordHash.content

        req.body.type_server = 'SMTP'

        await EmailServerConfig.create(req.body)

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

})


router.patch('/:id', async function(req, res) {

    var boolean = [true, false]
    var constraints = {

        uuid: {
            presence: true,
            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        url_server: {
            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        port: {
            presence: true,
            numericality: {
                onlyInteger: true,
                greatenThan: 0
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

    var validateUUID = uuidValidator(req.body.uuid)

    if (!validateUUID) {
        return responseSchema(
            res, {
                data: null,
                error: true,
                message: 'INCORRECT_UUID_FORMAT'
            },
            400
        )
    }

    try {

        let foundedRegister = await EmailServerConfig.findOne({ where: { id: req.params.id } })


        if (!empty(foundedRegister)) {

            let foundedUser = await EmailServerConfig.findOne({ where: { username: req.body.username } })


            if (!empty(foundedUser)) {

                if (foundedUser.id == req.params.id) {

                    const passwordHash = bcrypt.hashSync(req.body.password, 10);
                    req.body.password = passwordHash

                    await EmailServerConfig.update(req.body, { where: { id: req.params.id } })

                    let foundedRecord = await EmailServerConfig.findOne({ where: { id: req.params.id } })

                    return responseSchema(res, {
                        data: foundedRecord,
                        message: "OK"
                    });

                } else {

                    return responseSchema(
                        res, {
                            data: null,
                            error: true,
                            message: 'FOUNDED_USERNAME'
                        },
                        400
                    )

                }

            } else {

                const passwordHash = bcrypt.hashSync(req.body.password, 10);
                req.body.password = passwordHash

                await EmailServerConfig.update(req.body, { where: { id: req.params.id } })

                let foundedRecord = await EmailServerConfig.findOne({ where: { id: req.params.id } })

                return responseSchema(res, {
                    data: foundedRecord,
                    message: "OK"
                });

            }

        } else {
            return responseSchema(
                res, {
                    data: null,
                    error: true,
                    message: 'REGISTER_NOT_FOUND'
                },
                400
            )
        }

    } catch (error) {
        console.log(error)
        return responseSchema(res, "ERR_FAILED");
    }

})


router.get('/password/test', async function(req, res) {

    try {

        const password = 'test';

        const passwordHash = encrypt(password, algorithm, secretKey, iv)

        console.log(passwordHash)

        const passwordDecrypted = decrypt(passwordHash)

        console.log(passwordDecrypted)


        return responseSchema(res, {
            data: null,
            message: "OK"
        });

    } catch (error) {
        console.log(error)
        return responseSchema(res, "ERR_FAILED");
    }

});


//***********************************************   [    Functions    ]***************************************************************** */ 

const encrypt = (password, algorithm, secretKey, iv) => {

    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);

    const encrypted = Buffer.concat([cipher.update(password), cipher.final()]);

    return {
        iv: iv.toString('hex'),
        content: encrypted.toString('hex')
    };
};

const decrypt = (hash) => {

    const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(hash.iv, 'hex'));

    const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash.content, 'hex')), decipher.final()]);

    return decrpyted.toString();
};
module.exports = router;