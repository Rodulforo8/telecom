'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class urbanisms extends Model {
        static associate(models) {
            urbanisms.belongsTo(models.parroquias, {
                foreignKey: 'parish_id',
                targetKey: 'id_parroquia',
                as: 'parroquia'
            });

            urbanisms.belongsTo(models.ciudades, {
                foreignKey: 'city_id',
                targetKey: 'id_ciudad',
                as: 'ciudad'
            });

            urbanisms.hasMany(models.users, {
                foreignKey: 'urbanism_id',
            });
        }
    };
    urbanisms.init({
        parish_id: DataTypes.INTEGER,
        city_id: DataTypes.INTEGER,
        name: DataTypes.STRING,
        households_qty: DataTypes.INTEGER,
        latitude: DataTypes.STRING,
        longitude: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'urbanisms',

    });
    return urbanisms;
};