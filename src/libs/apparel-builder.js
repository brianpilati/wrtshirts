const constants = require('./constants');

module.exports = {
  getFrontPageApparel(apparel) {
    return new Promise(resolve => {
      resolve(
        apparel
          .slice(0, constants.frontPageShirts)
          .map(item => {
            return `<div class="tshirt">${item.code}</div>`;
          })
          .join(' ')
      );
    });
  }
};
