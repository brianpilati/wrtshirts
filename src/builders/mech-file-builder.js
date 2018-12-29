const options = require('../libs/options');
const fs = require('fs');
const htmlBuilder = require('../libs/html-builder');
const FilePath = require('../libs/file-path');
const titleBuilder = require('../libs/title-builder');
const sizes = require('../libs/enums/font-size.enum');
const styleEnums = require('../libs/enums/style-enum');

function getFilePath(mech) {
  let filePath;

  filePath = `${FilePath.getBasePath()}/deployment/mech/${mech}/index.html`;
  FilePath.ensureDirectoryExistence(filePath);
  return FilePath.encodePath(filePath);
}

function buildPageData() {
  const pageData = {};
  [
    {
      data: require('../data/t-shirts'),
      type: styleEnums.tshirt
    },
    {
      data: require('../data/hoodies'),
      type: styleEnums.hoodie
    },
    {
      data: require('../data/long-sleeve-shirts'),
      type: styleEnums.longsleeve
    },
    {
      data: require('../data/sweatshirts'),
      type: styleEnums.sweatshirt
    }
  ].forEach(mechCollection => {
    mechCollection.data.forEach(item => {
      if (!pageData.hasOwnProperty(item.name)) {
        pageData[item.name] = [];
      }
      item.type = mechCollection.type;
      pageData[item.name].push(item);
    });
  });

  return pageData;
}

class MechFileBuilder {
  buildMechPage() {
    const mechs = buildPageData();

    const results = Object.keys(mechs).map(mech => {
      return new Promise(resolve => {
        const mechPath = getFilePath(mech);
        const mechHtml = mechs[mech].map(mechApparel => {
          return `
            <div class="mech">
              <div>
                ${mechApparel.code}
              </div>
              <div class="mech-apparel-type">
                ${titleBuilder.title(mechApparel.type, sizes.small)}
              </div>
            </div>
            `;
        });

        const htmlData = htmlBuilder.buildMechHtml(mech, mechHtml.join(''));
        fs.writeFile(mechPath, htmlData, err => {
          if (err) {
            return console.log(err);
          }

          resolve(`The ${mech} file was saved!`);
        });
      });
    });

    return Promise.all(results);
  }

  async buildAllPages() {
    return await this.buildMechPage();
  }
}

module.exports = new MechFileBuilder();

if (options.isCommandLine()) {
  const mechFileBuilder = new MechFileBuilder();

  mechFileBuilder.buildAllPages().then(function(results) {
    results.map(result => {
      console.log(result);
    });
  });
}
