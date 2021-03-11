'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class banks extends Model {

        static associate(models) {
            banks.hasMany(models.payment_reports, {
                foreignKey: 'bank_id',
            });
        }
    };
    banks.init({
        name: DataTypes.STRING,
        country: DataTypes.STRING,
        logo: DataTypes.STRING,
        method: DataTypes.INTEGER,
        account_number: DataTypes.STRING,
        account_type: DataTypes.STRING,
        associated_email: DataTypes.STRING,
        associated_phone: DataTypes.STRING,
        associated_rif: DataTypes.STRING,
        pm_enable: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'banks',
    });
    return banks;
};