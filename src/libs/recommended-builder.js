const tshirts = require('../data/t-shirts');

module.exports = {
  getActiveRecommendedShirts() {
    const requests = tshirts.map(tshirt => {
      return new Promise(resolve => {
        resolve(`<div class="recommended">${tshirt.code}</div>`);
      });
    });

    return Promise.all(requests).then(_results_ => _results_.join(''));
  }
};
