const mongoose = require('mongoose');
const { validUser, users } = require('../seed.js');
const { connect, seed, drop, close } = require('../config.js');
const { findOneUser, saveNewUser } = require('../../models/lib');

describe('User Authentication', () => {

  beforeAll(connect);
  beforeEach(seed({
    Model: require('../../models/user'),
    data: users
  }));
  afterEach(drop);
  afterAll(close);

  test('DB is running', () => {
    expect.assertions(1);
    expect(mongoose.connection.readyState).toBe(1);
  });

  test('Should find the user ', async () => {
    expect.assertions(1);
    const user = await findOneUser({ username: 'eiusmod' });
    expect(user.username).toBe('eiusmod');
  });

  test('Should not find the user', async () => {
    expect.assertions(1);
      const noUser = await findOneUser({ username: 'n/a' });
      expect(noUser).toBe(null);
  });

  test('Hashes password on save', async () => {
    expect.assertions(1);
    const newUser = await saveNewUser(validUser);
    expect(newUser.password).not.toBe(validUser.password);
  });
});
