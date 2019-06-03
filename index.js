'use strict';

const MODE = require('./constant/system').MODE;
const app = require('./services/express');
// const log = require('./services/logger').createLogger('index');
process.env.NODE_ENV = MODE.DEVE;

app.start();
