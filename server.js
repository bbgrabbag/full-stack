require('dotenv').config();
const { db } = require('./db');
const { app } = require('./app');
const { onServerConnection, onDbConnection } = require('./lib');

db.on('open', onDbConnection);
app.listen(process.env.PORT, process.env.HOSTNAME, onServerConnection);
