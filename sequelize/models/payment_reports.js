'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class payment_reports extends Model {

        static associate(models) {
            payment_reports.belongsTo(models.banks, {
                foreignKey: 'bank_id',
                targetKey: 'id',
                as: 'bank'
            });
            payment_reports.belongsTo(models.users, {
                foreignKey: 'client_id',
                targetKey: 'id',
                as: 'user'
            }, {
                onDelete: 'cascade',
                hooks: true,
            });

            payment_reports.belongsTo(models.plans, {
                foreignKey: 'plan_id',
                targetKey: 'id',
                as: 'plan'
            }, {
                onDelete: 'cascade',
                hooks: true,
            });
        }
    };
    payment_reports.init({
        client_id: DataTypes.INTEGER,
        plan_id: DataTypes.INTEGER,
        payment_amount: DataTypes.INTEGER,
        payment_method_id: DataTypes.INTEGER,
        bank_id: DataTypes.INTEGER,
        reference_number: DataTypes.STRING,
        payment_date: DataTypes.DATE,
        report_date: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'payment_reports',
    });
    return payment_reports;
};