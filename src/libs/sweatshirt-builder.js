const sweatshirts = require('../data/sweatshirts');
const constants = require('./constants');

module.exports = {
  getActiveSweatShirts() {
    return new Promise(resolve => {
      resolve(
        sweatshirts
          .slice(0, constants.frontPageShirts)
          .map(sweatshirt => {
            return `<div class="tshirt">${sweatshirt.code}</div>`;
          })
          .join(' ')
      );
    });
  }
};
