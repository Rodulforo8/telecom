'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('urbanisms', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            parish_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: {
                        tableName: 'parroquias',
                    },
                    key: 'id_parroquia'
                },
            },
            city_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: {
                        tableName: 'ciudades',
                    },
                    key: 'id_ciudad'
                },
            },
            name: {
                type: Sequelize.STRING
            },
            households_qty: {
                type: Sequelize.INTEGER
            },
            latitude: {
                type: Sequelize.STRING
            },
            longitude: {
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
        await queryInterface.dropTable('urbanisms');
    }
};