const mongoose = require('mongoose');

const db = mongoose.createConnection(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  keepAlive: true,
});

module.exports = db;
