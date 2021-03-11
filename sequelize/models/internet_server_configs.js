'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class internet_server_configs extends Model {

        static associate(models) {
            // define association here
        }
    };
    internet_server_configs.init({
        ip: DataTypes.STRING,
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        port: DataTypes.STRING,
        token: DataTypes.STRING,
        url: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'internet_server_configs',
    });
    return internet_server_configs;
};