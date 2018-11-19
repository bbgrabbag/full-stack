module.exports = {
  xhr: (err, _req, res, _next) => {
    if (err.name === 'ValidationError') {
      res.status(404);
    }
    res.send({ reason: err.message });
  },
};
