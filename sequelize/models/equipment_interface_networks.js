'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class equipment_interface_networks extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {

            equipment_interface_networks.belongsTo(models.network_interfaces, {
                foreignKey: 'n_i',
                targetKey: 'id',
                as: 'network_interface'
            });

            equipment_interface_networks.belongsTo(models.network_equipments, {
                foreignKey: 'n_e',
                targetKey: 'id',
                as: 'network_equipment'
            });

        }
    };
    equipment_interface_networks.init({
        n_i: DataTypes.INTEGER,
        n_e: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'equipment_interface_networks',
    });
    return equipment_interface_networks;
};