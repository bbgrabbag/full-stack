const express = require('express');

const authRouter = express.Router();

authRouter.use('/client', require('../client'));

module.exports = authRouter;
