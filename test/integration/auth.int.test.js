const request = require('supertest');
const app = require('../../app');
const { users, validUser, registeredUser, wrongPwdUser } = require('../seed.js');
const { connect, seed, drop, close } = require('../config.js');

describe('Auth Integration Testing Environment', () => {

  beforeAll(connect);
  beforeEach(seed({
    Model: require('../../models/user'),
    data: users
  }));
  afterEach(drop);
  afterAll(close);

  test('Should send back a new user and token upon signup', async () => {
    expect.assertions(3);

    const response = await request(app)
      .post('/api/auth/client/signup')
      .send(validUser);
    expect(response.status).toBe(201);
    expect(response.body.userId).toBeDefined();
    expect(response.body.token).toBeDefined();

  });

  test('Should deny existing user upon signup', async () => {
    expect.assertions(2);
    const response = await request(app)
      .post('/api/auth/client/signup')
      .send(registeredUser);
    expect(response.statusCode).toBe(403);
    expect(response.body.reason).toBe('That user already exists');

  });

  test('Should return existing user and token upon login', async () => {
    expect.assertions(3);

    const response = await request(app)
      .post('/api/auth/client/login')
      .send(registeredUser);
    expect(response.status).toBe(201);
    expect(response.body.userId).toBeDefined();
    expect(response.body.token).toBeDefined();
  });

  test('Should deny non-existing user upon login', async () => {
    expect.assertions(2);

    const response = await request(app)
      .post('/api/auth/client/login')
      .send(validUser);
    expect(response.status).toBe(403);
    expect(response.body.reason).toBe('User does not exist');

  });

  test('Should deny wrong password upon login', async () => {
    expect.assertions(2);

    const response = await request(app)
      .post('/api/auth/client/login')
      .send(wrongPwdUser);
    expect(response.status).toBe(403);
    expect(response.body.reason).toBe('Password does not match');

  });
});
