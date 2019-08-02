'use strict';

const mongoose = require('mongoose');
const log = require('./logger').createLogger('mongo');
const config = require('../config')();
// [koa警告DeprecationWarning: Mongoose: `findOneAndUpdate()` and `findOneAndDelete()` without the `use...](https://www.jianshu.com/p/f3128e7ae3c5)
mongoose.set('useFindAndModify', false);
let reconnectTimes = 0;// Mongodb reconnect times
let reConnectInterval = 0.1;// The interval seconecd time between two reconnection;
const maxReconnectInterval = 120;// The max interval time between two reconnection;

// Connect to mongodb
function connect() {
  const options = {
    socketTimeoutMS: 3000,
    keepAlive: true,
    reconnectTries: 4,
    useNewUrlParser: true
  };
  mongoose.connect(config.database, options);
}

// Mongoose error handler
mongoose.connection.on('error', function(err) {
  log.error(err);
});

// Mongoose reconnect when closed
mongoose.connection.on('disconnected', function() {
  reconnectTimes++;
  reConnectInterval = reConnectInterval * 2;
  if (reConnectInterval > maxReconnectInterval) reConnectInterval = maxReconnectInterval;
  log.warn(`mongodb will the ${reconnectTimes} times try reconnecting, ` +
           `after ${reConnectInterval} seconds ...`);
  setTimeout(() => {
    connect();
  }, reConnectInterval * 1000);
});

mongoose.connection.on('connected', function() {
  reconnectTimes = 0;
  reConnectInterval = 0.1;
  log.info('mongodb connected successfull');
});

exports.connect = connect;
