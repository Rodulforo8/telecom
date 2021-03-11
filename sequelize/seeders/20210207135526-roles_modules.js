'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {

        await queryInterface.bulkInsert('role_modules', [{
                module_id: 1,
                role_id: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                module_id: 2,
                role_id: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                module_id: 3,
                role_id: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                module_id: 4,
                role_id: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                module_id: 5,
                role_id: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                module_id: 6,
                role_id: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                module_id: 7,
                role_id: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                module_id: 8,
                role_id: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                module_id: 9,
                role_id: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});

    },

    down: async(queryInterface, Sequelize) => {

        await queryInterface.bulkDelete('role_modules', null, {});

    }
};