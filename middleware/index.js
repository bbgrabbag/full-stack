const express = require('express');
const error = require('./error');
const pre = require('./pre');

module.exports = {
  pre: [express.json(), pre.logger],
  error: [error.xhr],
};
