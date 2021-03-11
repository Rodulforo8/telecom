'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {

        await queryInterface.bulkInsert('modules', [{
                name: 'planes',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                name: 'servicios',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                name: 'paquetes de instalacion',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                name: 'zonificacion',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                name: 'metodos de pago',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                name: 'configuracion servidor de internet',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'registro de cliente',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'auto registro',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                name: 'gestion de usuario',
                createdAt: new Date(),
                updatedAt: new Date()
            },

        ], {});

    },

    down: async(queryInterface, Sequelize) => {


        await queryInterface.bulkDelete('modules', null, {});

    }
};