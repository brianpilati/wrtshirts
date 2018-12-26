const FilePath = require('./filePath');
const sweatshirts = require('../data/sweatshirts');

module.exports = {
  getActiveSweatShirts() {
    const requests = sweatshirts.map(sweatshirt => {
      return new Promise(resolve => {
        const link = FilePath.encodePath(`/sweatshirts/${sweatshirt.name}/index.html`);
        resolve(
          `<div class="tshirt"><a class="tshirt-container" href="${link}"><div class="letter">${
            sweatshirt.name
          }</div></a></div>`
        );
      });
    });

    return Promise.all(requests).then(_results_ => _results_.join(''));
  }
};
