'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('installation_packages', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            count_price: {
                type: Sequelize.DOUBLE
            },
            finantial_price: {
                type: Sequelize.DOUBLE
            },
            description: {
                type: Sequelize.STRING
            },
            onu_img: {
                type: Sequelize.STRING
            },
            // service_id: {
            //     type: Sequelize.INTEGER,
            //     onDelete: 'CASCADE',
            //     references: {
            //         model: {
            //             tableName: 'services',
            //         },
            //         key: 'id'
            //     },
            // },
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
        await queryInterface.dropTable('installation_packages');
    }
};