'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('estados', {

            id_estado: {
                type: Sequelize.INTEGER,
                primaryKey: true,
            },
            estado: {
                type: Sequelize.STRING
            },
            iso_3166_2: {
                type: Sequelize.STRING
            }
        });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('estados');
    }
};