'use strict';

const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const config = require('../config')();
const mongo = require('./mongo');
const log = require('./logger').createLogger('express');
const app = express();

exports.start = function() {
  mongo.connect();

  // Session configuration
  const sess = {
    resave: true,
    saveUninitialized: true,
    secret: 'I am hungry',
    cookie: {
      maxAge: 24 * 60 * 60 * 1000
    }
  };

  app.use(bodyParser.json()); // For parsing application/json
  // For parsing application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(session(sess)); // Set session middleware

  // passport config
  var User = require('../collections/user');
  app.use(passport.initialize());
  app.use(passport.session());
  passport.use(new LocalStrategy(User.authenticate()));
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());

  app.use('/api/v1/auth', require('../routers/userAuthentication'));

  // start server
  app.set('port', config.expressHttpPort); // Set http port

  app.listen(config.expressHttpPort, () => {
    // 开启端口打印日志
    log.info(`express running on ${config.expressHttpPort} port`);
  });
};
