'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {

        await queryInterface.bulkInsert('company_data', [{
            "logo": "http://138.197.105.129:3000/company_data/logo/PacificTelecomVenezuela.png",
            "url": "http://ptve.net",
            "name": "Pacific Telecom Venezuela",
            "dni": "J29891422-0",
            "phone": "asda",
            "alt_phone": "asdas",
            "sales_email": "ventas@ptve.net",
            "support_email": "soporte@ptve.net",
            "operations_email": "operaciones@ptve.net",
            "current_date": new Date(),
            "current_hour": new Date(),
            "createdAt": new Date(),
            "updatedAt": new Date()
        }], {});
    },

    down: async(queryInterface, Sequelize) => {

        await queryInterface.bulkDelete('company_data', null, {});
    }
};