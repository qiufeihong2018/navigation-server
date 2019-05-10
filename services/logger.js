'use strict';

const { createLogger, format, transports } = require('winston');
const config = require('../config')();
const MODE = require('../constant/system').MODE;
const { combine, timestamp, label, printf } = format;

let mode = process.env.NODE_ENV;
if (!mode) mode = MODE.DEVE;

let logFile = config.logFile;
if (!logFile) logFile = '../log/log';

const trans = [];
const consoleTrans = new transports.Console({ level: 'debug' });
const fileTrans = new transports.File({ filename: logFile, level: 'info' });

exports.createLogger = function(source) {
  if (mode === MODE.DEVE) {
    trans.push(consoleTrans);
    fileTrans.level = 'debug';
    trans.push(fileTrans);
  } else if (mode === MODE.PROD) {
    trans.push(fileTrans);
  } else {
    trans.push(fileTrans);
  }
  const myFormat = combine(
    label({ label: source }),
    timestamp({ format: 'YYYY-MM-DD hh:mm:ss' }),
    printf(({ level, message, label, timestamp }) => {
      return `${timestamp} [${label}][${level.toUpperCase()}]: ${message}`;
    })
  );
  return new (createLogger)({
    format: myFormat,
    transports: trans
  });
};
