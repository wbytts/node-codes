const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('e:/temp/lowdb.json', {
  serialize: (data) => JSON.stringify(data),
  deserialize: (data) => JSON.parse(data)
});

const db = low(adapter);

module.exports = db;




