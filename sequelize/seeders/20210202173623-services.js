'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {


        await queryInterface.bulkInsert('services', [{
            name: "Internet",
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            name: "TRANSPORTE DE DATOS",
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            name: "VOD",
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            name: "IPTV",
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});
    },
    down: async(queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('services', null, {});
    }
};