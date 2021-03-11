var empty = require('./../helpers/Empty');
var responseSchema = require('./../helpers/ResponseSchema');
const Auth = require('../sequelize/models').auth;
module.exports = async function(req, res, next) {

    var token = req.headers['authorization'];

    if (!token) {
        return responseSchema(res, "ERR_INVALID_OR_EXPIRED_TOKEN", 401);
    }

    token = token.replace('Bearer ', '');

    var founded = await Auth.findOne({ where: { token: token } })

    if (!founded) {
        return responseSchema(res, "ERR_INVALID_OR_EXPIRED_TOKEN", 401);
    }

    if (founded.dataValues.createdAt >= founded.dataValues.expiresAt) {
        return responseSchema(res, "ERR_INVALID_OR_EXPIRED_TOKEN", 401);
    } else {
        // await Auth.update({ expiresAt: moment().add(5, 'minutes').format() }, { where: { id: founded.dataValues.id } })
        next()
    }

}