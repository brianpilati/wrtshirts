const sweatshirts = require('../data/sweatshirts');

module.exports = {
  getActiveSweatShirts() {
    const requests = sweatshirts.map(sweatshirt => {
      return new Promise(resolve => {
        resolve(`<div class="tshirt">${sweatshirt.code}</div>`);
      });
    });

    return Promise.all(requests).then(_results_ => _results_.join(''));
  }
};
