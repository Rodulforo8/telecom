'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('network_equipments', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                onDelete: 'CASCADE',
                type: Sequelize.INTEGER
            },
            brand: {
                type: Sequelize.STRING
            },
            model: {
                type: Sequelize.STRING
            },
            photo: {
                type: Sequelize.STRING
            },
            identifier: {
                type: Sequelize.STRING,
                unique: true
            },

            type: {
                type: Sequelize.ENUM('ROUTER', 'SWITCH', 'OLT', 'SERVER', 'ONU', 'ONT')
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
        await queryInterface.dropTable('network_equipments');
    }
};