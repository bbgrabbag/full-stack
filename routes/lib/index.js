const jwt = require('jsonwebtoken');
const { saveNewUser, findOneUser } = require('../../models/lib');

const catchError = cb => (req, res, next) => cb(req, res, next).catch(next);

const handleExistingUser = async (req, res, next) => {
  const user = await findOneUser({ username: req.body.username });
  if (user) {
    res.status(403);
    throw Error('That user already exists');
  } else {
    next();
  }
};

const findUser = async (req, _res, next) => {
  const user = await findOneUser({ username: req.body.username });
  if (!user) {
    throw Error('User does not exist');
  } else {
    req.user = user;
    next();
  }
};

const validatePassword = async (req, _res, next) => {
  const matches = await req.user.auth(req.body.password);
  if (matches) {
    next();
  } else {
    throw Error('Password does not match');
  }
};

const addUser = async (req, _res, next) => {
  const user = await saveNewUser(req.body);
  req.user = user;
  next();
};

const sendToken = async (req, res, _next) => {
  const token = jwt.sign({ userId: req.user._id }, process.env.SECRET);
  res.status(201).send({ userId: req.user._id, token });
};

module.exports = {
  client: {
    signup: [handleExistingUser, addUser, sendToken].map(catchError),
    login: [findUser, validatePassword, sendToken].map(catchError),
  },
};
