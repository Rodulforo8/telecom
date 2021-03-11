'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class email_server_configs extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    email_server_configs.init({
        uuid: DataTypes.UUID,
        url_server: DataTypes.STRING,
        port: DataTypes.INTEGER,
        type_server: DataTypes.STRING,
        username: DataTypes.STRING,
        iv: DataTypes.STRING,
        content: DataTypes.STRING,
        status: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'email_server_configs',
    });
    return email_server_configs;
};