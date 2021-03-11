'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class modules extends Model {

        static associate(models) {

            modules.hasMany(models.role_modules, {
                foreignKey: 'module_id',
            }, {
                onDelete: 'cascade',
                hooks: true,
            });
        }
    };
    modules.init({
        name: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'modules',
    });
    return modules;
};