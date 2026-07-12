'use strict';

/**
 * kon service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::kon.kon');
