'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('company_data', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      logo: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      dni: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      alt_phone: {
        type: Sequelize.STRING
      },
      sales_email: {
        type: Sequelize.STRING
      },
      support_email: {
        type: Sequelize.STRING
      },
      operations_email: {
        type: Sequelize.STRING
      },
      current_date: {
        type: Sequelize.DATE
      },
      current_hour: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('company_data');
  }
};