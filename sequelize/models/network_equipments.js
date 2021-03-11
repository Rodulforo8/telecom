'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class network_equipments extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            network_equipments.hasMany(models.equipment_interface_networks, {
                foreignKey: 'n_e',
                as: 'relational_table'
            }, {
                onDelete: 'cascade',
                hooks: true,
            });
        }
    };
    network_equipments.init({
        brand: DataTypes.STRING,
        model: DataTypes.STRING,
        photo: DataTypes.STRING,
        identifier: DataTypes.STRING,
        type: DataTypes.ENUM('ROUTER', 'SWITCH', 'OLT', 'SERVER', 'ONU', 'ONT')
    }, {
        sequelize,
        modelName: 'network_equipments',
    });
    return network_equipments;
};