'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('role_modules', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            role_id: {
                type: Sequelize.INTEGER,

                onDelete: 'CASCADE',
                references: {

                    model: {
                        tableName: 'roles',
                    },
                    key: 'id'
                },
            },
            module_id: {
                type: Sequelize.INTEGER,

                onDelete: 'CASCADE',
                references: {
                    model: {
                        tableName: 'modules',
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
        await queryInterface.dropTable('role_modules');
    }
};