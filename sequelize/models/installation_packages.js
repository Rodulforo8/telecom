'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class installation_package extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    installation_package.init({
        name: DataTypes.STRING,
        count_price: DataTypes.DOUBLE,
        finantial_price: DataTypes.DOUBLE,
        description: DataTypes.STRING,
        onu_img: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'installation_package',
    });
    return installation_package;
};