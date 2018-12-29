const FilePath = require('./filePath');
const longSleeveShirts = require('../data/long-sleeve-shirts');

module.exports = {
  getActiveLongSleeveShirts() {
    const requests = longSleeveShirts.map(longsleeveShirt => {
      return new Promise(resolve => {
        resolve(`<div class="tshirt">${longsleeveShirt.code}</div>`);
      });
    });

    return Promise.all(requests).then(_results_ => _results_.join(''));
  }
};
