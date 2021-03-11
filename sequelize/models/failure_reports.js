'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class failure_reports extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            failure_reports.belongsTo(models.users, {
                foreignKey: 'client_id',
                targetKey: 'id',
                as: 'client'
            });

            failure_reports.belongsTo(models.services, {
                foreignKey: 'service_id',
                targetKey: 'id',
                as: 'service'
            });

            failure_reports.belongsTo(models.services, {
                foreignKey: 'service_id',
                targetKey: 'id',
                as: 'failure_reports'
            });
        }
    };
    failure_reports.init({
        subject: DataTypes.STRING,
        description: DataTypes.STRING,
        type: DataTypes.INTEGER,
        service_id: DataTypes.INTEGER,
        client_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'failure_reports',
    });
    return failure_reports;
};