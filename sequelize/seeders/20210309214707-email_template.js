'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {

        await queryInterface.bulkInsert('email_templates', [{
            "name": "Envio de Clave al Registrar",
            "text": "<p style=\"text-align:center\">##logo##</p><p></p><p style=\"text-align:center\">##mail.support##</p><p style=\"text-align:center\">Gracias por Utilizar Nuestros Servicios</p>",
            "status": true,
            "createdAt": new Date(),
            "updatedAt": new Date()
        }], {});
    },

    down: async(queryInterface, Sequelize) => {

        await queryInterface.bulkDelete('email_templates', null, {});
    }
};