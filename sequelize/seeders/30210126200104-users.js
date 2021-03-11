'use strict';
var moment = require('moment')
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('users', [{
                name: "admin",
                lastname: "pacific-telecom",
                dni: "0000000001",
                address: "Monagas Maturin",
                address_alt: "Av BellaVista",
                phone: "123123123",
                email: "telecom-admin@company.com",
                password: "$2a$10$D7o6aHq7eFMX6L9OkpMrQu1XFyDKXZd.t8CoSUneKZmMIodv6rQfm",
                role: 1,
                urbanism_id: 1,
                document_img: 'http://138.197.105.129:3000/user/document/ramdomuser.jpeg',
                active: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "operator",
                lastname: "pacific-telecom",
                dni: "0000000002",
                address: "Monagas Maturin",
                address_alt: "Av BellaVista",
                phone: "123133122",
                email: "telecom-operator@company.com",
                password: "$2a$10$UKuIG496sxERNklXPft0NO7A8.3btK/JQtb1Kl5L.mwxobxS1rHm6",
                role: 2,
                urbanism_id: 1,
                document_img: 'http://138.197.105.129:3000/user/document/ramdomuser.jpeg',
                active: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                name: "client",
                lastname: "client telecom",
                dni: "0000000003",
                address: "Monagas Maturin",
                address_alt: "Av BellaVista",
                phone: "123133122",
                email: "client@client.com",
                password: "$2a$10$Ej1gS69.n.dRV9tf1C7FK.1HHgQ3gcVJPD0nayFdKeMQVjq2eN696",
                role: 3,
                urbanism_id: 1,
                document_img: 'http://138.197.105.129:3000/user/document/ramdomuser.jpeg',
                active: 1,
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
        await queryInterface.bulkDelete('users', null, {});
    }
};