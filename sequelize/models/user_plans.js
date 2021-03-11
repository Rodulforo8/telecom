'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class user_plans extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {

            user_plans.belongsTo(models.users, {
                foreignKey: 'client_id',
                targetKey: 'id',
                as: 'client'
            });

            user_plans.belongsTo(models.plans, {
                foreignKey: 'plan_id',
                targetKey: 'id',
                as: 'plan'
            });
        }
    };

    user_plans.init({
        client_id: DataTypes.INTEGER,
        plan_id: DataTypes.INTEGER,
        status: DataTypes.INTEGER,
        start_date: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'user_plans',
    });
    return user_plans;
};