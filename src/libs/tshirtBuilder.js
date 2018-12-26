const FilePath = require('./filePath');
const tshirts = require('../data/t-shirts');

module.exports = {
  getActiveTShirts() {
    const requests = tshirts.map(tshirt => {
      return new Promise(resolve => {
        const link = FilePath.encodePath(`/tshirts/${tshirt}/index.html`);
        resolve(
          `<div class="tshirt"><a class="tshirt-container" href="${link}"><div class="letter">${tshirt}</div></a></div>`
        );
      });
    });

    return Promise.all(requests).then(_results_ => _results_.join(''));
  }
};
