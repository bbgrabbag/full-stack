const express = require('express');

const apiRouter = express.Router();

apiRouter.use('/auth', require('../auth'));

module.exports = apiRouter;
