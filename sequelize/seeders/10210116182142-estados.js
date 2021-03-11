'use strict';
var moment = require('moment')
module.exports = {
    up: async(queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('estados', [{
                "id_estado": 1,
                "estado": "Amazonas",
                "iso_3166_2": "VE-X",

            },
            {
                "id_estado": 2,
                "estado": "Anzoátegui",
                "iso_3166_2": "VE-B",

            },
            {
                "id_estado": 3,
                "estado": "Apure",
                "iso_3166_2": "VE-C",

            },
            {
                "id_estado": 4,
                "estado": "Aragua",
                "iso_3166_2": "VE-D",

            },
            {
                "id_estado": 5,
                "estado": "Barinas",
                "iso_3166_2": "VE-E",

            },
            {
                "id_estado": 6,
                "estado": "Bolívar",
                "iso_3166_2": "VE-F",

            },
            {
                "id_estado": 7,
                "estado": "Carabobo",
                "iso_3166_2": "VE-G",

            },
            {
                "id_estado": 8,
                "estado": "Cojedes",
                "iso_3166_2": "VE-H",

            },
            {
                "id_estado": 9,
                "estado": "Delta Amacuro",
                "iso_3166_2": "VE-Y",

            },
            {
                "id_estado": 10,
                "estado": "Falcón",
                "iso_3166_2": "VE-I",

            },
            {
                "id_estado": 11,
                "estado": "Guárico",
                "iso_3166_2": "VE-J",

            },
            {
                "id_estado": 12,
                "estado": "Lara",
                "iso_3166_2": "VE-K",

            },
            {
                "id_estado": 13,
                "estado": "Mérida",
                "iso_3166_2": "VE-L",

            },
            {
                "id_estado": 14,
                "estado": "Miranda",
                "iso_3166_2": "VE-M",

            },
            {
                "id_estado": 15,
                "estado": "Monagas",
                "iso_3166_2": "VE-N",

            },
            {
                "id_estado": 16,
                "estado": "Nueva Esparta",
                "iso_3166_2": "VE-O",

            },
            {
                "id_estado": 17,
                "estado": "Portuguesa",
                "iso_3166_2": "VE-P",

            },
            {
                "id_estado": 18,
                "estado": "Sucre",
                "iso_3166_2": "VE-R",

            },
            {
                "id_estado": 19,
                "estado": "Táchira",
                "iso_3166_2": "VE-S",

            },
            {
                "id_estado": 20,
                "estado": "Trujillo",
                "iso_3166_2": "VE-T",

            },
            {
                "id_estado": 21,
                "estado": "Vargas",
                "iso_3166_2": "VE-W",

            },
            {
                "id_estado": 22,
                "estado": "Yaracuy",
                "iso_3166_2": "VE-U",

            },
            {
                "id_estado": 23,
                "estado": "Zulia",
                "iso_3166_2": "VE-V",

            },
            {
                "id_estado": 24,
                "estado": "Distrito Capital",
                "iso_3166_2": "VE-A",

            },
            {
                "id_estado": 25,
                "estado": "Dependencias Federales",
                "iso_3166_2": "VE-Z",

            }
        ]);
    },

    down: async(queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('estados', null, {});
    }
};