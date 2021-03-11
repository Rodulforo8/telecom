'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class parroquias extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {

            parroquias.hasMany(models.urbanisms, {
                foreignKey: 'parish_id',

            });

        }
    };
    parroquias.init({
        id_parroquia: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        id_municipio: DataTypes.INTEGER,
        parroquia: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'parroquias',
        timestamps: false
    });
    return parroquias;
};