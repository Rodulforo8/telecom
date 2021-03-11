'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('equipment_interface_networks', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            n_i: {
                type: Sequelize.INTEGER,
                onDelete: 'CASCADE',
                references: {
                    model: {
                        tableName: 'network_interfaces',
                    },
                    key: 'id'
                },
            },
            n_e: {
                type: Sequelize.INTEGER,
                onDelete: 'CASCADE',
                references: {
                    model: {
                        tableName: 'network_equipments',
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
        await queryInterface.dropTable('equipment_interface_networks');
    }
};