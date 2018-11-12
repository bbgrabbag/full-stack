const fs = require('fs');
const path = require('path');

//SEED DATA
const seed = JSON.parse(fs.readFileSync(path.join(__dirname, "./seed.json")));

module.exports = seed;
