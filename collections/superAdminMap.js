'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SuperAdminMap = new Schema({
  category: { type: String, required: true, trim: true },
  name: { type: String, required: true, trim: true },
  website: { type: String, required: true, trim: true },
  describe: { type: String, trim: true },
  logo: { type: String, trim: true },
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});


module.exports = mongoose.model('SuperAdminMap', SuperAdminMap);
