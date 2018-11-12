const User = require('../user');

const getModel = (name) => {
  switch (name) {
    case 'User':
      return User;
    default:
      throw Error('Model does not exist');
  }
};

const createNewDoc = name => (doc) => {
  const Model = getModel(name);
  return new Model(doc).save();
};

const findOne = name => query => getModel(name).findOne(query);

module.exports = {
  saveNewUser: createNewDoc('User'),
  findOneUser: findOne('User'),
};
