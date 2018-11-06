const { env } = require('../lib');

// eslint-disable-next-line no-unused-vars
const loggerDev = (req, _res, next) => {
  console.log(`
    METHOD: ${req.method}
    URL: ${req.url}
    BODY: ${Object.keys(req.body).reduce((t, v) => `${t}\n${v}: ${req.body[v]}`, '')}
  `);
  next();
};

module.exports = {
  logger: env(loggerDev, (_req, _res, next) => next()),
};
