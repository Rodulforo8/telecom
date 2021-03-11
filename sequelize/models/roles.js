'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class roles extends Model {

        static associate(models) {

            roles.hasMany(models.users, {
                foreignKey: 'role',
            });


            roles.hasMany(models.role_modules, {
                foreignKey: 'role_id',
            });


        }
    };
    roles.init({
        role: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'roles',
    });
    return roles;
};