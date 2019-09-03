'use strict';

const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const config = require('../config')();
const mongo = require('./mongo');
const log = require('./logger').createLogger('express');
const app = express();

exports.start = function() {
  app.use(express.static(path.resolve(__dirname, '../public')));
  app.get('/#*', (req, res) => {
    const html = fs.readFileSync(path.resolve(__dirname, '../public/index.html'), 'utf-8');
    res.send(html);
  });

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

  app.use(bodyParser.json());
  // For parsing application/json
  // For parsing application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({
    extended: false
  }));

  app.use(session(sess)); // Set session middleware

  // requires the model with Passport-Local Mongoose plugged in
  var User = require('../collections/user');
  app.use(passport.initialize());
  app.use(passport.session());
  // use static authenticate method of model in LocalStrategy
  passport.use(new LocalStrategy(User.authenticate()));
  // use static serialize and deserialize of model for passport session support
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());


  app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
  });

  app.use('/api/v1/auth', require('../routers/userAuthentication'));
  app.use('/api/v1/admin', require('../routers/adminOperation'));
  app.use('/api/v1/superAdmin', require('../routers/superAdminOperation'));


  // start server
  app.set('port', config.expressHttpPort); // Set http port

  app.listen(config.expressHttpPort, () => {
    // 开启端口打印日志
    log.info(`express running on ${config.expressHttpPort} port`);
  });
};
