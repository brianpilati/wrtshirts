const FilePath = require('./filePath');
const longSleeveShirts = require('../data/long-sleeve-shirts');

module.exports = {
  getActiveLongSleeveShirts() {
    const requests = longSleeveShirts.map(longsleeveShirt => {
      return new Promise(resolve => {
        const link = FilePath.encodePath(`/longsleeve/${longsleeveShirt.name}/index.html`);
        resolve(
          `<div class="tshirt"><a class="tshirt-container" href="${link}"><div class="letter">${
            longsleeveShirt.name
          }</div></a></div>`
        );
      });
    });

    return Promise.all(requests).then(_results_ => _results_.join(''));
  }
};
