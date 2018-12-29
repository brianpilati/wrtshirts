const tshirts = require('../data/t-shirts');
const hoodies = require('../data/hoodies');
const longsleeves = require('../data/long-sleeve-shirts');
const sweatshirts = require('../data/sweatshirts');
const titleBuilder = require('./title-builder');
const sizes = require('./enums/style-enum');

function buildNames() {
  const names = {};
  [tshirts, hoodies, longsleeves, sweatshirts].forEach(apparelCollection => {
    apparelCollection.forEach(item => {
      names[item.name] = true;
    });
  });

  const allNames = Object.keys(names).sort((a, b) => {
    return a > b ? 1 : -1;
  });
  const totalNames = allNames.length;
  const modNames = totalNames % 4;
  if (modNames) {
    for (let index = modNames; index < 4; index++) {
      allNames.push('');
    }
  }
  return allNames;
}

module.exports = {
  getMechNames() {
    const requests = buildNames().map(name => {
      return new Promise(resolve => {
        resolve(`<div class="mech-name">${titleBuilder.title(name, sizes.medium)}</div>`);
      });
    });

    return Promise.all(requests).then(_results_ => _results_.join(''));
  }
};
