'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
  username: String,
  password: String
});

const options = {
  interval: 200,
  maxInterval: 6 * 60 * 1000,
  maxAttempts: 6,
  limitAttempts: true
};
User.plugin(passportLocalMongoose, options);

module.exports = mongoose.model('User', User);
