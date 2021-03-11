'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('payment_reports', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            client_id: {
                type: Sequelize.INTEGER,
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
                references: {
                    model: {
                        tableName: 'users',
                    },
                    key: 'id'
                },
            },
            plan_id: {
                type: Sequelize.INTEGER,
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
                references: {
                    model: {
                        tableName: 'plans',
                    },
                    key: 'id'
                },
            },
            payment_amount: {
                type: Sequelize.INTEGER
            },
            payment_method_id: {
                type: Sequelize.INTEGER
            },

            bank_id: {
                type: Sequelize.INTEGER,
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
                references: {
                    model: {
                        tableName: 'banks',
                    },
                    key: 'id'
                },
            },
            reference_number: {
                type: Sequelize.STRING
            },
            payment_date: {
                type: Sequelize.DATE
            },
            report_date: {
                type: Sequelize.DATE
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
        await queryInterface.dropTable('payment_reports');
    }
};