'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class role_modules extends Model {

        static associate(models) {

            role_modules.belongsTo(models.roles, {
                foreignKey: 'role_id',
                targetKey: 'id',
                as: 'role_modules'
            });

            role_modules.belongsTo(models.modules, {
                foreignKey: 'module_id',
                targetKey: 'id',
                as: 'modules'
            });

        }
    };
    role_modules.init({
        module_id: DataTypes.INTEGER,
        role_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'role_modules',
    });
    return role_modules;
};