const bcrypt = require('bcrypt');

const salt = bcrypt.genSaltSync(10);

module.exports = {
  async hashPassword(next) {
    if (this.isNew) {
      const hash = await bcrypt.hash(this.password, salt);
      this.password = hash;
    }
    next();
  },
  async auth(passwordAttempt) {
    return bcrypt.compare(passwordAttempt, this.password);
  },
};
