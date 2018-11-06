const express = require('express');

const app = express();

app.get('/', (_req, res) => res.send('working'));

module.exports = {
  app,
};
