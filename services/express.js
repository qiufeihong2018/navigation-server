'use strict';

const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const config = require('../config')();
const log = require('./logger').createLogger();
const app = express();

// Connect to mongodb
function connect() {
  const options = {
    socketTimeoutMS: 3000,
    keepAlive: true,
    reconnectTries: 3,
    useNewUrlParser: true
  };
  mongoose.connect(config.database, options);
}
connect();

// Mongoose error handler
mongoose.connection.on('error', function(err) {
  // logger.error(err);
});

// Mongoose reconnect when closed
mongoose.connection.on('disconnected', function() {
  connect();
});

mongoose.connection.on('connected', function() {
  log.info('mongodb connected successfull');
});

// Session configuration
const sess = {
  resave: true,
  saveUninitialized: true,
  secret: 'I am hungry',
  cookie: {
    maxAge: 24 * 60 * 60 * 1000
  }
};

app.set('port', process.env.PORT || config.expressHttpPort); // Set http port
app.use(bodyParser.json()); // For parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
app.use(session(sess)); // Set session middleware

// passport config
var User = require('../collections/user');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get('/api/v1/auth', require('../routers/userAuthentication'));
