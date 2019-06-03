'use strict';

/**
 * Logger is to custom winston to provide different log pattern in 'development',
 * 'production' and other mode.
 * 'development' will use Console and File output with 'debug' level
 * 'production' will use DailyRotateFile output with 'info' level,
 *  and the maxFiles is 30d.
 *  other mode will use File output with 'info' level.
 */
const { createLogger, format, transports } = require('winston');
require('winston-daily-rotate-file');
const config = require('../config')();
const MODE = require('../constant/system').MODE;
const { combine, timestamp, label, printf } = format;

let mode = process.env.NODE_ENV;
if (!mode) mode = MODE.DEVE;

let logFile = config.logFile;

// default log file is in the current log folder
if (!logFile) logFile = './log/express.log';
logFile = logFile.replace('.log', ''); // remove '.log' from the logFile

const trans = [];
const consoleTrans = new transports.Console({ level: 'debug' });
const fileTrans = new transports.File({ filename: `${logFile}.log`, level: 'info' });
// daily rotate file transport config
const dailyRotateFileTrans = new (transports.DailyRotateFile)({
  filename: logFile + '-%DATE%.log',
  datePattern: 'YYYY-MM-DD-HH',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '30d'
});

if (mode === MODE.DEVE) {
  trans.push(consoleTrans);
  fileTrans.level = 'debug';
  trans.push(fileTrans);
} else if (mode === MODE.PROD) {
  trans.push(dailyRotateFileTrans);
} else {
  trans.push(fileTrans);
}

exports.createLogger = function(source) {
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
