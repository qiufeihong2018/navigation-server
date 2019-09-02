'use strict';

var config = {
  development: {
    // mongodb
    database: 'mongodb://localhost/map',
    expressHttpPort: 1600,
  },
  local: {
    // mongodb
    database: 'mongodb://127.0.0.1/map',
    expressHttpPort: 1600
  },
  production: {
    // mongodb
    database: 'mongodb://127.0.0.1/map',
    expressHttpPort: 1600
  }
};


module.exports = function(mode) {
  var env;
  if (!mode) {
    env = process.env.NODE_ENV || 'development';
  } else if (mode && (mode === 'development' || 'local' || 'production')) {
    env = mode;
  } else {
    throw new Error(`config can only be 'development' || 'local' || 'production', 
    but you give ${mode}`);
  }
  var returnVal = config[env];
  return returnVal;
};
