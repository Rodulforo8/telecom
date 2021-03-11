'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('plans', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.STRING
            },
            monthly_price: {
                type: Sequelize.DOUBLE
            },
            long_term_price: {
                type: Sequelize.DOUBLE
            },
            long_term_type: {
                type: Sequelize.INTEGER
            },
            service_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: {
                        tableName: 'services',
                    },
                    key: 'id'
                },
            },
            mbps_up: {
                type: Sequelize.INTEGER
            },
            mpbs_down: {
                type: Sequelize.INTEGER
            },
            max_limit_parent_up: {
                type: Sequelize.INTEGER
            },
            max_limit_parent_down: {
                type: Sequelize.INTEGER
            },
            reuse_factor: {
                type: Sequelize.INTEGER(3),
            },
            max_limit_up: {
                type: Sequelize.INTEGER
            },
            limit_at_up: {
                type: Sequelize.INTEGER,
            },
            max_limit_down: {
                type: Sequelize.INTEGER
            },
            limit_at_down: {
                type: Sequelize.INTEGER
            },
            burst_limit_upload: {
                type: Sequelize.INTEGER
            },
            burst_limit_download: {
                type: Sequelize.INTEGER
            },
            burst_threshold_upload: {
                type: Sequelize.INTEGER
            },
            burst_threshold_download: {
                type: Sequelize.INTEGER
            },
            burst_time: {
                type: Sequelize.INTEGER(3),
            },
            burst: {
                type: Sequelize.BOOLEAN,
            },
            burst_x100: {
                type: Sequelize.INTEGER,
            },
            priority: {
                type: Sequelize.INTEGER(1),
            },
            parent: {
                type: Sequelize.ENUM('DOWNLOAD', 'UPLOAD'),
            },
            max_device_public_internet: {
                type: Sequelize.INTEGER(2),
            },
            max_limit_value: {
                type: Sequelize.INTEGER
            },
            bw_required: {
                type: Sequelize.INTEGER
            },
            weight: {
                type: Sequelize.INTEGER
            },
            bucket: {
                type: Sequelize.DOUBLE
            },
            active_service_quantity: {
                type: Sequelize.INTEGER
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
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('plans');
    }
};