const db = require('../db');
const { validUser, users } = require('./seed.js');

//Test functions
const { findOneUser, saveNewUser } = require('../models/lib');

afterAll(async done => {
  await db.dropDatabase(done)
})

test('Seed DB', async () => {
  const User = require('../models/user');
  const seededUsers = await User.create(users);
  expect(seededUsers.length).toBe(3);

})
describe('User Authentication', () => {
  it('Should find the user ', async () => {
    const user = await findOneUser({ username: 'eiusmod' });
    expect(user._id).toBeDefined();
  });

  it('Should not find the user', async () => {
    const noUser = await findOneUser({ username: "n/a" });
    expect(noUser).toBeNull;
  });

  it('Hashes password on save', async () => {
    const newUser = await saveNewUser(validUser);
    expect(newUser.password).not.toBe(validUser.password);
  });
});
