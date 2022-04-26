const writeFileRecursive = function (path, buffer) {
  let lastPath = path.substring(0, path.lastIndexOf('/'));
  fs.mkdirSync(lastPath, { recursive: true });
  fs.writeFileSync(path, buffer);
};

module.exports = {
  writeFileRecursive
};


