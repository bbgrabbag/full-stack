require('dotenv').config();

const db = require('./db');
const app = require('./app');
const { onServerConnection, onDbConnection, onDbClose } = require('./lib');

db.on('open', onDbConnection);
db.on('close', onDbClose);
app.listen(process.env.PORT, process.env.HOSTNAME, onServerConnection);
