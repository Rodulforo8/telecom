'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {

        await queryInterface.bulkInsert('plans', [{
            name: 'test',
            description: 'test',
            monthly_price: 1,
            long_term_price: 1,
            long_term_type: 1,
            service_id: 1,
            mbps_up: 1,
            mpbs_down: 1,
            max_limit_parent_up: 1,
            max_limit_parent_down: 1,
            reuse_factor: 1,
            max_limit_up: 1,
            limit_at_up: 1,
            max_limit_down: 1,
            limit_at_down: 1,
            burst_limit_upload: 1,
            burst_limit_download: 1,
            burst_threshold_upload: 1,
            burst_threshold_download: 1,
            burst_time: 1,
            burst: false,
            burst_x100: 1,
            priority: 1,
            parent: 'DOWNLOAD',
            max_device_public_internet: 1,
            max_limit_value: 1,
            bw_required: 1,
            weight: 1,
            bucket: false,
            active_service_quantity: 1,
            createdAt: new Date(),
            updatedAt: new Date()

        }], {});

    },

    down: async(queryInterface, Sequelize) => {

        await queryInterface.bulkDelete('plans', null, {});

    }
};