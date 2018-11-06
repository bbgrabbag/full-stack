const express = require('express');
const middleware = require('./middleware');

const app = express();

app.use(middleware.pre);

app.use('/api', require('./middleware').xhr);

app.use(middleware.error);

module.exports = {
  app,
};
