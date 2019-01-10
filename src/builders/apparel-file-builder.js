const options = require('../libs/options');
const fs = require('fs');
const htmlBuilder = require('../libs/html-builder');
const FilePath = require('../libs/file-path');
const titleBuilder = require('../libs/title-builder');
const sizes = require('../libs/enums/font-size.enum');
const SiteBuilder = require('../libs/site-map-builder');
const siteBuilder = new SiteBuilder('apparel');

function getFilePath(apparelType) {
  let filePath;

  filePath = `${FilePath.getBasePath()}/deployment/${apparelType}/index.html`;
  FilePath.ensureDirectoryExistence(filePath);
  const encodedPath = FilePath.encodePath(filePath);
  siteBuilder.addLink(encodedPath);
  return encodedPath;
}

function getAllShirts() {
  return require('../data/long-sleeve-shirts')
    .concat(require('../data/t-shirts'), require('../data/hoodies'), require('../data/sweatshirts'))
    .sort((a, b) => {
      return a.name > b.name ? 1 : -1;
    });
}

class ApparelFileBuilder {
  buildApparelPage(items, apparelType, apparelTitle) {
    const apparelPath = getFilePath(apparelType);
    return new Promise(resolve => {
      const apparelHtml = items.map(item => {
        return `
        <div class="apparel">
          <div>
            ${titleBuilder.title(item.name, sizes.small)}
          </div>
          <div>
            ${item.code}
          </div>
        </div>
        `;
      });

      const htmlData = htmlBuilder.buildApparelHtml(apparelTitle, apparelHtml.join(''));
      fs.writeFile(apparelPath, htmlData, err => {
        if (err) {
          return console.log(err);
        }

        resolve(`The ${apparelType} file was saved!`);
      });
    });
  }

  async buildAllPages() {
    return Promise.all([
      await this.buildApparelPage(require('../data/long-sleeve-shirts'), 'long-sleeves', 'Long Sleeve Shirts'),
      await this.buildApparelPage(require('../data/t-shirts'), 'tshirts', 'T-Shirts'),
      await this.buildApparelPage(require('../data/hoodies'), 'hoodies', 'Hoodies'),
      await this.buildApparelPage(require('../data/sweatshirts'), 'sweatshirts', 'Sweatshirts'),
      await this.buildApparelPage(getAllShirts(), 'recommended', 'Recommended Shirts')
    ]).then(results => {
      siteBuilder.buildSiteMap();
      return results;
    });
  }
}

module.exports = new ApparelFileBuilder();

if (options.isCommandLine()) {
  const apparelFileBuilder = new ApparelFileBuilder();

  apparelFileBuilder.buildAllPages().then(function(results) {
    results.map(result => {
      console.log(result);
    });
  });
}
