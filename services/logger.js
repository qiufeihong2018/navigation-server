'use strict';

var winston = require('winston');
var config = require('../config')();

exports.createLogger = function() {
  const logFile = config.logFile;
  const transports = [];

  if (logFile) {
    transports.push(new (winston.transports.File)({
      level: 'info',
      filename: logFile,
      timestamp: function() {
        return dateFormat('yyyy-MM-dd hh:mm:ss');
      },
      formatter: function(options) {
        // Return string will be passed to logger.
        return options.timestamp() + ' [' + options.level.toUpperCase() + '] ' +
        (undefined !== options.message ? options.message : '') +
        (options.meta && Object.keys(options.meta).length ?
          '\n\t' + JSON.stringify(options.meta) : '');
      }
    }));
  } else {
    transports.push(new (winston.transports.Console)({
      level: 'debug',
      timestamp: function() {
        return dateFormat('yyyy-MM-dd hh:mm:ss');
      },
      formatter: function(options) {
        // Return string will be passed to logger.
        return options.timestamp() +
        ' [' + options.level.toUpperCase() + '] ' +
        (undefined !== options.message ? options.message : '') +
        (options.meta && Object.keys(options.meta).length ?
          '\n\t' + JSON.stringify(options.meta) : '');
      }
    }));
  }

  return new (winston.createLogger)({
    transports: transports
  });
};

exports.getDateString = function(date) {
  if (!date) {
    date = new Date();
  }
  var year = date.getFullYear().toString();
  var month = date.getMonth().toString();
  var day = date.getDate().toString();
  var hour = date.getHours().toString();
  var min = date.getMinutes().toString();

  return year + '-' + month + '-' + day + ' ' + hour + ':' + min;
};

/**
 * this a function to transform a Date instance
 * to a giving format string.
 * for example:
 *  dataeFormat("yyyy-MM-dd hh:mm:ss S")
 * @param format string.This param is to describe date format, like "yyyy-MM-dd hh:mm:ss S"
 * @date Date instance. if this param is null, then this function will set current date as the date
 * */
const dateFormat = exports.dateFormat = function(format, date) {
  if (!date) {
    date = new Date();
  }
  var o = {
    'M+': date.getMonth() + 1,                 // 月份
    'd+': date.getDate(),                    // 日
    'h+': date.getHours(),                   // 小时
    'm+': date.getMinutes(),                 // 分
    's+': date.getSeconds(),                 // 秒
    'S+': date.getMilliseconds()             // 毫秒
  };
  if (/(y+)/.test(format))
    format = format.replace(RegExp.$1, strConcat(date.getFullYear(), RegExp.$1.length));
  for (var k in o)
    if (new RegExp('(' + k + ')').test(format)) {
      const timeStr = (('' + o[k]).length === 1) ? ('0' + o[k]) : o[k];
      format = format.replace(RegExp.$1, strConcat(timeStr, RegExp.$1.length));
    }

  return format;
};

function strConcat(str, length) {

  let string = '' + str;
  if (string.length >= length) {
    return string.substring(string.length - length, string.length);
  } else {
    let count = string.length;
    while (count < length) {
      string = ' ' + string;
      count++;
    }
    return string;
  }
}
