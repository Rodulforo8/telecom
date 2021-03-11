'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('parroquias', {

            id_parroquia: {
                type: Sequelize.INTEGER,
                primaryKey: true,
            },
            id_municipio: {
                type: Sequelize.INTEGER,
                references: {
                    model: {
                        tableName: 'municipios',
                    },
                    key: 'id_municipio'
                },
            },
            parroquia: {
                type: Sequelize.STRING
            }
        });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('parroquias');
    }
};