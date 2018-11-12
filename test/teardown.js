const db = require('../db');

module.exports = async  () => {
  console.log('Teardown test DB')
  await db.close();
};
