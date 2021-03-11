'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('banks', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING,
                unique: true
            },
            country: {
                allowNull: false,
                type: Sequelize.STRING
            },
            logo: {
                type: Sequelize.STRING
            },
            method: {
                type: Sequelize.INTEGER
            },
            account_number: {
                allowNull: false,
                type: Sequelize.STRING,
                unique: true
            },
            associated_email: {
                allowNull: false,
                type: Sequelize.STRING,
                unique: true
            },
            account_type: {
                allowNull: false,
                type: Sequelize.STRING
            },
            associated_phone: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            associated_rif: {
                allowNull: false,
                type: Sequelize.STRING,
                unique: true
            },
            pm_enable: {
                type: Sequelize.BOOLEAN
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('banks');
    }
};