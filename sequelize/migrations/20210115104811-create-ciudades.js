'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('ciudades', {

            id_ciudad: {
                type: Sequelize.INTEGER,
                primaryKey: true,
            },
            id_estado: {
                type: Sequelize.INTEGER,
                references: {
                    model: {
                        tableName: 'estados',
                    },
                    key: 'id_estado'
                },
            },
            ciudad: {
                type: Sequelize.STRING
            },
            capital: {
                type: Sequelize.INTEGER
            }
        });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('ciudades');
    }
};