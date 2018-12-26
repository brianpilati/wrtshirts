const fs = require('fs');
const htmlBuilder = require('../libs/htmlBuilder');
const FilePath = require('../libs/filePath');
const tshirtBuilder = require('../libs/tshirtBuilder');
const sweatshirtBuilder = require('../libs/sweatshirtBuilder');
const hoodieBuilder = require('../libs/hoodieBuilder');
const longSleeveShirtBuilder = require('../libs/longsleeveBuilder');
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

function buildPages() {
  return mechNameBuilder.getActiveMechNames().then(mechName => {
    return longSleeveShirtBuilder.getActiveLongSleeveShirts().then(longsleeveShirts => {
      return hoodieBuilder.getActiveHoodies().then(hoodies => {
        return sweatshirtBuilder.getActiveSweatShirts().then(sweatshirts => {
          return tshirtBuilder.getActiveTShirts().then(tshirts => {
            pages.map(index => {
              index++;
              const indexFilePath = getFilePath(index);
              const page = htmlBuilder.buildIndexHtml(index, tshirts, sweatshirts, hoodies, longsleeveShirts, mechName);
              fs.writeFile(indexFilePath, page, err => {
                if (err) {
                  return console.log(err);
                }
                console.log(`The ${indexFilePath} file was saved!`);
              });
            });
          });
        });
      });
    });
  });
}

class IndexFileBuilder {
  buildPages() {
    return buildPages();
  }
}

module.exports = new IndexFileBuilder();
