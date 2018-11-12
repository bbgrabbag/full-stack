const bcrypt = require('bcrypt');

const salt = bcrypt.genSaltSync(10);

module.exports = {
  hashPassword: async function hashPassword(next) {
    if (this.isNew) {
      const hash = await bcrypt.hash(this.password, salt);
      this.password = hash;
    }
    next();
  },
  auth: async function auth(passwordAttempt) {
    return bcrypt.compare(passwordAttempt, this.password);
  },
};
