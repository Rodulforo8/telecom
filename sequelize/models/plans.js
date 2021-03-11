'use strict';
const {
    Model,
    INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class plans extends Model {

        static associate(models) {

            plans.belongsTo(models.services, {
                foreignKey: 'service_id',
                targetKey: 'id',
                as: 'service'
            });

            plans.hasMany(models.user_plans, {
                foreignKey: 'plan_id',
            }, {
                onDelete: 'cascade',
                hooks: true,
            });

            plans.hasMany(models.payment_reports, {
                foreignKey: 'plan_id',
            }, {
                onDelete: 'cascade',
                hooks: true,
            });
        }
    };
    plans.init({
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        monthly_price: DataTypes.DOUBLE,
        long_term_price: DataTypes.DOUBLE,
        long_term_type: DataTypes.DOUBLE,
        service_id: DataTypes.INTEGER,
        mbps_up: DataTypes.INTEGER,
        mpbs_down: DataTypes.INTEGER,
        max_limit_parent_up: DataTypes.INTEGER,
        max_limit_parent_down: DataTypes.INTEGER,
        reuse_factor: DataTypes.INTEGER,
        max_limit_up: DataTypes.INTEGER,
        limit_at_up: DataTypes.INTEGER,
        max_limit_down: DataTypes.INTEGER,
        limit_at_down: DataTypes.INTEGER,
        burst_limit_upload: DataTypes.INTEGER,
        burst_limit_download: DataTypes.INTEGER,
        burst_threshold_upload: DataTypes.INTEGER,
        burst_threshold_download: DataTypes.INTEGER,
        burst_time: DataTypes.INTEGER,
        burst: DataTypes.BOOLEAN,
        burst_x100: DataTypes.INTEGER,
        priority: DataTypes.INTEGER,
        parent: DataTypes.ENUM('DOWNLOAD', 'UPLOAD'),
        max_device_public_internet: DataTypes.INTEGER,
        max_limit_value: DataTypes.INTEGER,
        bucket: DataTypes.DOUBLE,
        active_service_quantity: DataTypes.INTEGER,
        bw_required: DataTypes.INTEGER,
        weight: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'plans',
    });
    return plans;
};