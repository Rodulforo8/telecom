'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('internet_server_configs', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            ip: {
                type: Sequelize.STRING
            },
            username: {
                type: Sequelize.STRING,

            },
            password: {
                type: Sequelize.STRING
            },
            port: {
                type: Sequelize.STRING
            },
            token: {
                type: Sequelize.STRING
            },
            url: {
                type: Sequelize.STRING
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
        await queryInterface.dropTable('internet_server_configs');
    }
};