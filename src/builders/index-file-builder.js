const fs = require('fs');
const options = require('../libs/options');
const htmlBuilder = require('../libs/html-builder');
const FilePath = require('../libs/file-path');
const recommendedBuilder = require('../libs/recommended-builder');
const mechNameBuilder = require('../libs/mech-name-builder');
const apparelBuilder = require('../libs/apparel-builder');

const pagesToBuild = 50;

function getFilePath(index) {
  let filePath;
  if (index === 1) {
    filePath = `${FilePath.getBasePath()}/deployment/index.html`;
  } else {
    filePath = `${FilePath.getBasePath()}/deployment/page/${index}/index.html`;
    FilePath.ensureDirectoryExistence(filePath);
  }

  return FilePath.encodePath(filePath);
}
const pages = Array.apply(null, { length: pagesToBuild }).map(Number.call, Number);

class IndexFileBuilder {
  async buildPages() {
    const recommendedShirts = await recommendedBuilder.getActiveRecommendedShirts();
    const mechNames = await mechNameBuilder.getMechNames();
    const longsleeveShirts = await apparelBuilder.getFrontPageApparel(require('../data/long-sleeve-shirts'));
    const hoodies = await apparelBuilder.getFrontPageApparel(require('../data/hoodies'));
    const tshirts = await apparelBuilder.getFrontPageApparel(require('../data/t-shirts'));
    const sweatshirts = await apparelBuilder.getFrontPageApparel(require('../data/sweatshirts'));

    pages.map(index => {
      index++;
      const indexFilePath = getFilePath(index);
      const page = htmlBuilder.buildIndexHtml(
        index,
        tshirts,
        sweatshirts,
        hoodies,
        longsleeveShirts,
        mechNames,
        recommendedShirts
      );
      fs.writeFile(indexFilePath, page, err => {
        if (err) {
          return console.log(err);
        }
        console.log(`The ${indexFilePath} file was saved!`);
      });
    });
  }
}

module.exports = new IndexFileBuilder();

if (options.isCommandLine()) {
  new IndexFileBuilder().buildPages().then(function(results) {
    console.log('Finished');
  });
}
