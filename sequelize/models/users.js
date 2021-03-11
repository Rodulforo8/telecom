'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class users extends Model {

        static associate(models) {

            users.hasMany(models.payment_reports, {
                foreignKey: 'client_id',
            });

            users.belongsTo(models.roles, {
                foreignKey: 'role',
                targetKey: 'id',
                as: 'client_role'
            });

            users.belongsTo(models.urbanisms, {
                foreignKey: 'urbanism_id',
                targetKey: 'id',
                as: 'urbanism'
            });

            users.hasMany(models.user_plans, {
                foreignKey: 'client_id',
            });
        }
    };
    users.init({
        name: DataTypes.STRING,
        lastname: DataTypes.STRING,
        dni: DataTypes.STRING,
        address: DataTypes.STRING,
        address_alt: DataTypes.STRING,
        phone: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        urbanism_id: DataTypes.INTEGER,
        role: DataTypes.INTEGER,
        document_img: DataTypes.STRING,
        active: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'users',
    });
    return users;
};