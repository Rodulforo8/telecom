'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class network_interfaces extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            network_interfaces.hasMany(models.equipment_interface_networks, {
                foreignKey: 'n_i'
            }, {
                onDelete: 'cascade',
                hooks: true,
            });

        }
    };
    network_interfaces.init({
        type: DataTypes.ENUM('FIJA', 'COMPUESTA'),
        name: DataTypes.STRING,
        mbps_up: DataTypes.INTEGER,
        mbps_down: DataTypes.INTEGER,
        identifier: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'network_interfaces',
    });
    return network_interfaces;
};