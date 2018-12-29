const tshirts = require('../data/t-shirts');

module.exports = {
  getActiveTShirts() {
    return new Promise(resolve => {
      resolve(
        tshirts
          .slice(0, 5)
          .map(tshirt => {
            return `<div class="tshirt">${tshirt.code}</div>`;
          })
          .join(' ')
      );
    });
  }
};
