const express = require('express');
const middleware = require('./middleware');
const mainRouter = require('./routes');

const app = express();

app.use(middleware.pre);
app.use(mainRouter);
app.use(middleware.error);

module.exports = {
  app,
};
