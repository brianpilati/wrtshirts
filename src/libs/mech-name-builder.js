const tshirts = require('../data/t-shirts');

module.exports = {
  getActiveMechNames() {
    const requests = tshirts.map(mech => {
      return new Promise(resolve => {
        resolve(`<div class="tshirt">${mech.code}</div>`);
      });
    });

    return Promise.all(requests).then(_results_ => _results_.join(''));
  }
};
