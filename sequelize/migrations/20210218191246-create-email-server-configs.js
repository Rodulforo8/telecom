'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('email_server_configs', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            uuid: {
                type: Sequelize.UUID
            },
            url_server: {
                type: Sequelize.STRING
            },
            port: {
                type: Sequelize.INTEGER
            },
            status: {
                type: Sequelize.BOOLEAN
            },
            type_server: {
                type: Sequelize.STRING,
                defaultValue: 'SMTP'
            },
            username: {
                type: Sequelize.STRING
            },
            content: {
                type: Sequelize.STRING
            },
            iv: {
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
        await queryInterface.dropTable('email_server_configs');
    }
};