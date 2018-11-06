const express = require('express');
const error = require('./error');
const pre = require('./pre');
const apiRouter = require('./xhr');

module.exports = {
  pre: [express.json(), pre.logger],
  xhr: apiRouter,
  html: [],
  error: [error.xhr],
};
