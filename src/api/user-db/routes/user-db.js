'use strict';

/**
 * user-db router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::user-db.user-db');