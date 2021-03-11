'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('user_plans', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            client_id: {
                type: Sequelize.INTEGER,

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
                onDelete: 'CASCADE',
                references: {
                    model: {
                        tableName: 'plans',
                    },
                    key: 'id'
                },
            },
            // urbanism_id: {
            //     type: Sequelize.INTEGER,
            //     onDelete: 'CASCADE',
            //     references: {
            //         model: {
            //             tableName: 'plans',
            //         },
            //         key: 'id'
            //     },
            // },
            // installation_type: {
            //     type: Sequelize.INTEGER
            // },
            status: {
                type: Sequelize.INTEGER
            },
            start_date: {
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
        await queryInterface.dropTable('user_plans');
    }
};