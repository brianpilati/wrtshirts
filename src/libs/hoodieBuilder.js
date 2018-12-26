const FilePath = require('./filePath');
const hoodies = require('../data/hoodies');

module.exports = {
  getActiveHoodies() {
    const requests = hoodies.map(hoodie => {
      return new Promise(resolve => {
        const link = FilePath.encodePath(`/hoodie/${hoodie.name}/index.html`);
        resolve(
          `<div class="tshirt"><a class="tshirt-container" href="${link}"><div class="letter">${
            hoodie.name
          }</div></a></div>`
        );
      });
    });

    return Promise.all(requests).then(_results_ => _results_.join(''));
  }
};
