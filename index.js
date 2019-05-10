'use strict';

const MODE = require('./constant/system').MODE;

process.env.NODE_ENV = MODE.DEVE;

require('./services/express');
