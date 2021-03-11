'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ciudades extends Model {

        static associate(models) {
            ciudades.hasMany(models.urbanisms, {
                foreignKey: 'city_id',
            });

            ciudades.belongsTo(models.estados, {
                foreignKey: 'id_estado',
                targetKey: 'id_estado',
                as: 'estado'
            });
        }
    };
    ciudades.init({
        id_ciudad: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        id_estado: DataTypes.INTEGER,
        ciudad: DataTypes.STRING,
        capital: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'ciudades',
        timestamps: false
    });
    return ciudades;
};