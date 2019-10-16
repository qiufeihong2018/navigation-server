'use strict';

/**
 * Logger is to custom winston to provide different log pattern in 'development',
 * 'production' and other mode.
 * 'development' will use Console and File output with 'debug' level
 * 'production' will use DailyRotateFile output with 'info' level,
 *  and the maxFiles is 7d.
 *  other mode will use File output with 'info' level.
 */
const {
  createLogger,
  format,
  transports
} = require('winston');
const {
  combine,
  timestamp,
  label,
  printf
} = format;

require('winston-daily-rotate-file');
const config = require('../config')();
const MODE = require('../constant/system').MODE;
let mode = process.env.NODE_ENV;
if (!mode) mode = MODE.DEVE;

let logFile = config.logFile;

logFile = logFile.replace('.log', ''); // remove '.log' from the logFile

const trans = [];
const ts = {
  console: new transports.Console({
    level: 'debug'
  }),
  file: new transports.File({
    filename: `${logFile}.log`,
    level: 'info'
  })
};
// daily rotate file transport config
const dailyRotateFileTrans = new (transports.DailyRotateFile)({
  filename: `${logFile}-%DATE%.log`,
  datePattern: 'YYYY-MM-DD-HH',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '7d'
});
// Dynamically change the log level of the transfer
if (mode === MODE.DEVE) {
  trans.push(ts.console);
  ts.file.level = 'debug';
  trans.push(ts.file);
} else if (mode === MODE.PROD) {
  trans.push(dailyRotateFileTrans);
} else {
  trans.push(ts.file);
}
exports.createLogger = function(source) {
  const myFormat = combine(
    label({
      label: source
    }),
    timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    printf(({
      level,
      message,
      label,
      timestamp
    }) => {
      return `${timestamp} [${label}][${level.toUpperCase()}]: ${message}`;
    })
  );
  return new (createLogger)({
    format: myFormat,
    transports: trans
  });
};
