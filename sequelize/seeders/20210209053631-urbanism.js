'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {

        await queryInterface.bulkInsert('urbanisms', [{
            parish_id: 680,
            city_id: 311,
            name: 'maturin',
            households_qty: 2,
            latitude: 'test',
            longitude: 'test',
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});

    },

    down: async(queryInterface, Sequelize) => {

        await queryInterface.bulkDelete('urbanisms', null, {});

    }
};