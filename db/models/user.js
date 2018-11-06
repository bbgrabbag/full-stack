const mongoose = require('mongoose');
const { db } = require('../index');
const { hashPassword, auth } = require('./lib');

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
userSchema.methods.auth = auth;

module.exports = db.model('User', userSchema);
