'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {

        await queryInterface.bulkInsert('user_plans', [{
            client_id: 3,
            plan_id: 1,
            status: 0,
            start_date: new Date(),
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});
    },

    down: async(queryInterface, Sequelize) => {

        await queryInterface.bulkDelete('user_plans', null, {});
    }
};