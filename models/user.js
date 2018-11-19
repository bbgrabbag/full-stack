const mongoose = require('mongoose');
const { hashPassword, auth } = require('./utils');

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

module.exports = mongoose.model('User', userSchema);
