'use strict';

const log =require('../services/logger').createLogger('test');
process.env.NODE_ENV = 'development';
console.log(process.env.NODE_ENV);

log.info('test');
