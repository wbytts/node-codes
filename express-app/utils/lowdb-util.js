const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const fs = require('fs');

const dbFilePath = './lowdb-storage.json';

const writeFileRecursive = function (path, buffer) {
  let lastPath = path.substring(0, path.lastIndexOf('/'));
  fs.mkdirSync(lastPath, { recursive: true });
  fs.writeFileSync(path, buffer);
};

if (!fs.existsSync(dbFilePath)) {
  writeFileRecursive(dbFilePath, '', () => {});
}

const adapter = new FileSync(dbFilePath, {
  serialize: data => JSON.stringify(data),
  deserialize: data => JSON.parse(data),
});

const db = low(adapter);

module.exports = db;
