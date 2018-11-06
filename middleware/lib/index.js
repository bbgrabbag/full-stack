module.exports = {
  env: (dev, prod) => (req, res, next) => {
    switch (process.env.NODE_ENV) {
      case 'dev':
        return dev(req, res, next);
      case 'production':
        return prod(req, res, next);
      default:
        return next();
    }
  },
};
