'use strict';

/**
 * general-setting service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::general-setting.general-setting');
