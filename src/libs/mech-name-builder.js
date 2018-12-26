const FilePath = require('./filePath');
const tshirts = require('../data/t-shirts');

module.exports = {
  getActiveMechNames() {
    const requests = tshirts.map(mech => {
      return new Promise(resolve => {
        const link = FilePath.encodePath(`/mech/${mech.name}/index.html`);
        resolve(
          `<div class="tshirt"><a class="tshirt-container" href="${link}"><div class="letter">${
            mech.name
          }</div></a></div>`
        );
      });
    });

    return Promise.all(requests).then(_results_ => _results_.join(''));
  }
};
