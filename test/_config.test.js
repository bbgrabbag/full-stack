/* eslint-disable no-undef */
const db = require('../db');

beforeAll(async done => {
  db.on('connected', done);
})

//TESTS
test('Node environment is test', async () => {
  expect(process.env.NODE_ENV).toBe('test');
});

test('MongoServer starts', async () => {
  expect(db.readyState).toBe(1);
});
