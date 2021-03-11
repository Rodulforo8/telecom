'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                onDelete: 'CASCADE',
                type: Sequelize.INTEGER
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING
            },
            lastname: {
                type: Sequelize.STRING
            },
            dni: {
                allowNull: false,
                type: Sequelize.STRING
            },
            address: {
                allowNull: true,
                type: Sequelize.STRING
            },
            address_alt: {
                allowNull: true,
                type: Sequelize.STRING
            },
            phone: {
                allowNull: false,
                type: Sequelize.STRING
            },
            email: {
                allowNull: false,
                type: Sequelize.STRING,
                unique: true
            },
            password: {
                allowNull: false,
                type: Sequelize.STRING
            },
            role: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: {
                        tableName: 'roles',
                    },
                    key: 'id'
                },
            },
            urbanism_id: {
                allowNull: true,
                type: Sequelize.INTEGER,
                references: {
                    model: {
                        tableName: 'urbanisms',
                    },
                    key: 'id'
                },
            },
            document_img: {
                allowNull: true,
                type: Sequelize.STRING
            },
            active: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.DATE.now
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.DATE.now
            }
        });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('users');
    }
};