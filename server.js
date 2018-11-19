require('dotenv').config();
const mongoose = require('mongoose');

const app = require('./app');
const { onServerConnection, onDbConnection } = require('./lib');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  keepAlive: true,
}, onDbConnection);

app.listen(process.env.PORT, process.env.HOSTNAME, onServerConnection);
