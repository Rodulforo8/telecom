'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class estados extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            estados.hasMany(models.ciudades, {
                foreignKey: 'id_estado',
            });
        }
    };
    estados.init({
        id_estado: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        estado: DataTypes.STRING,
        iso_3166_2: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'estados',
        timestamps: false
    });
    return estados;
};