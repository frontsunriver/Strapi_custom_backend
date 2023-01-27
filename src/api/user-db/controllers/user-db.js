'use strict';

/**
 * user-db controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::user-db.user-db');

