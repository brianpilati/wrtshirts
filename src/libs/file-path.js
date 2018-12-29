var path = require('path');
var fs = require('fs');

function getBasePath() {
  return path.join(__dirname, '..', '..');
}

function encodePath(path) {
  return typeof path === 'string' ? path.replace(/\s+|'/g, '-').toLowerCase() : '';
}

function ensureDirectoryExistence(filePath) {
  var dirname = path.dirname(encodePath(filePath));
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}

module.exports = {
  ensureDirectoryExistence(filePath) {
    ensureDirectoryExistence(filePath);
  },
  encodePath(path) {
    return encodePath(path);
  },
  getBasePath() {
    return getBasePath();
  }
};
