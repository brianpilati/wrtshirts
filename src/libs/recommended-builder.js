const tshirts = require('../data/t-shirts');
const hoodies = require('../data/hoodies');
const longsleeves = require('../data/long-sleeve-shirts');
const sweatshirts = require('../data/sweatshirts');

function randomize(shirts) {
  const copyShirts = [...shirts];
  let length = shirts.length;
  const randomShirts = [];
  for (let index = 0; index < 5; index++) {
    const random = Math.floor(Math.random() * length);
    randomShirts.push(copyShirts.splice(random, 1).pop());
    length = copyShirts.length;
  }

  return randomShirts;
}

module.exports = {
  getActiveRecommendedShirts() {
    const shirts = randomize(tshirts).concat(randomize(hoodies), randomize(longsleeves), randomize(sweatshirts));

    const requests = shirts.map(shirt => {
      return new Promise(resolve => {
        resolve(`<div class="recommended">${shirt.code}</div>`);
      });
    });

    return Promise.all(requests).then(_results_ => _results_.join(''));
  }
};
