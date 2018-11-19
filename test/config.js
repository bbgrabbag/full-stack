const mongoose = require('mongoose');

module.exports = {
  connect: async (done) => {
    mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, keepAlive: true, useCreateIndex: true });
    mongoose.connection.on('connected', done);
  },
  seed: (...seedData) => async (done) => {
    await Promise.all(seedData.map(({ Model, data }) => (
      Model.create(data)))
    );
    done();
  },
  drop: async (done) => {
    await mongoose.connection.dropDatabase();
    done();
  },
  close: async (done) => {
    await mongoose.connection.close();
    done();
  },
};
