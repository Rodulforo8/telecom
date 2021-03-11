'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {


        await queryInterface.bulkInsert('banks', [{
            "name": "bancamiga banco universal ",
            "country": "venezuela",
            "logo": "http://138.197.105.129:3000/banks/logos/BancamigaBancoUniversal.jpeg",
            "method": 1,
            "account_number": "11111111111111",
            "account_type": "type",
            "associated_email": "bancamiga@banca.com",
            "associated_phone": "0500553311",
            "associated_rif": " J-31628759-9",
            "pm_enable": true,
            "createdAt": new Date(),
            "updatedAt": new Date()
        }], {});

    },

    down: async(queryInterface, Sequelize) => {

        await queryInterface.bulkDelete('banks', null, {});

    }
};