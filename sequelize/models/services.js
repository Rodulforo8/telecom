'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class services extends Model {

        static associate(models) {
            services.hasMany(models.failure_reports, {
                foreignKey: 'service_id',
            });
            services.hasMany(models.plans, {
                foreignKey: 'service_id',
            });
        }
    };
    services.init({
        name: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'services',
    });
    return services;
};