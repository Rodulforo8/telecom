const express = require('express');
const router = express.Router();
const responseSchema = require('./../helpers/ResponseSchema');
const validator = require('validate.js');
const empty = require('../helpers/Empty');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../sequelize/models').users;
const Auth = require('../sequelize/models').auth;
var moment = require('moment')
var verifyToken = require('../middlewares/VerifyToken');


//****************************************************   [       ENDPOINTS DE AUTENTICACION        ]************************************************************************** */
router.post('/login', async(req, res) => {

    try {

        var constraints = {

            email: {
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
        };

        var validation = validator(req.body, constraints);

        if (!empty(validation)) {
            return responseSchema(res, "ERR_VALIDATION_FAILED", validation);
        }


        var foundedUser = await User.findOne({
            where: { email: req.body.email },
        })

    } catch (error) {
        return responseSchema(res, 'ERR_FAILED', 500)
    }

    if (empty(foundedUser)) {
        return responseSchema(res, 'USER_NOT_REGISTERED', 400)
    }

    try {

        const verified = bcrypt.compareSync(req.body.password, foundedUser.dataValues.password);

        if (!verified) {
            return responseSchema(res, {
                    error: false,
                    message: 'PASSWORD_DO_NOT_MATCH'
                },
                400
            );
        }

        var tokenData = {
            email: req.body.email
        }

        var token = jwt.sign(tokenData, foundedUser.dataValues.password)

        var auth = {
            token: token,
            user_id: foundedUser.dataValues.id,
            expiresAt: moment().add(5, 'minutes').format()

        }

        await Auth.create(auth)

        return responseSchema(
            res, {
                data: {
                    token: token,
                    user: {
                        id: foundedUser.id,
                        name: foundedUser.name,
                        lastname: foundedUser.lastname,
                        dni: foundedUser.dni,
                        email: foundedUser.email


                    }
                },
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


router.get('/logout', verifyToken, async(req, res) => {

    try {

        var token = req.headers.authorization

        token = token.replace('Bearer ', '');

        try {

            var foundedToken = await Auth.findOne({
                where: { token: token },
            })

        } catch (error) {
            return responseSchema(res, 'ERR_FAILED', 500)
        }

        if (empty(foundedToken)) {
            return responseSchema(res, 'TOKEN_NOT_FOUND', 400)
        }

        await Auth.update({ expiresAt: foundedToken.dataValues.createdAt }, { where: { token: token } })

        return responseSchema(
            res, {
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



router.get('/refresh_token', verifyToken, async(req, res) => {

    try {

        var token = req.headers.authorization

        return responseSchema(
            res, {
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




module.exports = router;