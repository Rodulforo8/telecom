'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class municipios extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    municipios.init({
        id_municipio: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        id_estado: DataTypes.INTEGER,
        municipio: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'municipios',
        timestamps: false
    });
    return municipios;
};