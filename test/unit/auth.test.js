const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const { findOneUser } = require('../../db/lib');

let connection;
const opts = { useNewUrlParser: true };

beforeAll(async () => {
  connection = await mongoose.createConnection(global.__MONGO_URI__, opts);
});

afterEach(function () {
  connection.deleteModel(/.+/);
});

afterAll(async () => {
  await connection.close();
});

test('Existing user', async () => {
  const users = JSON.parse(fs.readFileSync(path.join(__dirname, "../seed.json")));
  const User = connection.model('User');
  await User.insertMany(users);

  const user = await findOneUser({username: 'eiusmod'});
  expect(user).not.toBeNull();
})

