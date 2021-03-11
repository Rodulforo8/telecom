'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('network_interfaces', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            type: {
                type: Sequelize.ENUM('FIJA', 'COMPUESTA'),
            },
            name: {
                type: Sequelize.STRING
            },
            mbps_up: {
                type: Sequelize.INTEGER
            },
            mbps_down: {
                type: Sequelize.INTEGER
            },
            identifier: {
                type: Sequelize.STRING,
                unique: true
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
        await queryInterface.dropTable('network_interfaces');
    }
};