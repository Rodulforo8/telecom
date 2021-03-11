'use strict';
var moment = require('moment')
module.exports = {
    up: async(queryInterface, Sequelize) => {

        await queryInterface.bulkInsert('roles', [{
                role: 'Admin',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                role: 'Operator',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                role: 'Client',

                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    down: async(queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('roles', null, {});
    }
};