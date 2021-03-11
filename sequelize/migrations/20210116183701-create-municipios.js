'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('municipios', {

            id_municipio: {
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
            municipio: {
                type: Sequelize.STRING
            }
        });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('municipios');
    }
};