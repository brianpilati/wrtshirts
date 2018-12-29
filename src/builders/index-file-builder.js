const fs = require('fs');
const htmlBuilder = require('../libs/html-builder');
const FilePath = require('../libs/filePath');
const tshirtBuilder = require('../libs/tshirt-builder');
const recommendedBuilder = require('../libs/recommended-builder');
const sweatshirtBuilder = require('../libs/sweatshirt-builder');
const hoodieBuilder = require('../libs/hoodie-builder');
const longSleeveShirtBuilder = require('../libs/long-sleeve-builder');
const mechNameBuilder = require('../libs/mech-name-builder');

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
    const mechNames = await mechNameBuilder.getActiveMechNames();
    const longsleeveShirts = await longSleeveShirtBuilder.getActiveLongSleeveShirts();
    const hoodies = await hoodieBuilder.getActiveHoodies();
    const sweatshirts = await sweatshirtBuilder.getActiveSweatShirts();
    const tshirts = await tshirtBuilder.getActiveTShirts();
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
