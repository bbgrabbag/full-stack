const express = require('express');
const { client } = require('../lib');

const clientRouter = express.Router();

clientRouter.use('/signup', ...client.signup);
clientRouter.use('/login', ...client.login);

module.exports = clientRouter;
