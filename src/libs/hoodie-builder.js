const FilePath = require('./filePath');
const hoodies = require('../data/hoodies');

module.exports = {
  getActiveHoodies() {
    const requests = hoodies.map(hoodie => {
      return new Promise(resolve => {
        resolve(`<div class="tshirt">${hoodie.code}</div>`);
      });
    });

    return Promise.all(requests).then(_results_ => _results_.join(''));
  }
};
