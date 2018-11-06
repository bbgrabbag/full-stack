module.exports = {
  xhr: (err, req, res, _next) => {
    res.send({ reason: err.message });
  },
};
