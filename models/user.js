const mongoose = require('mongoose');
const db = require('../db');
const { hashPassword } = require('./utils');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre('save', hashPassword);

module.exports = db.model('User', userSchema);
