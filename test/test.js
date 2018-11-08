/* eslint-disable no-undef */
const mongoose = require('mongoose');

let connection;

const opts = { useNewUrlParser: true };

beforeAll(async () => {
  connection = await mongoose.createConnection(global.__MONGO_URI__, opts);
});

afterAll(async () => {
  await connection.close();
});

test('Node environment is test', async () => expect(process.env.NODE_ENV).toBe('test'));
test('MongoServer starts', async () => {
  expect(connection.readyState).toBe(1);
});



