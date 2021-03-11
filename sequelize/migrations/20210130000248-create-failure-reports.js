'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('failure_reports', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            subject: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.STRING
            },
            type: {
                type: Sequelize.INTEGER
            },
            service_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: {
                        tableName: 'services',
                    },
                    key: 'id'
                },
            },
            client_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: {
                        tableName: 'users',
                    },
                    key: 'id'
                },
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
        await queryInterface.dropTable('failure_reports');
    }
};