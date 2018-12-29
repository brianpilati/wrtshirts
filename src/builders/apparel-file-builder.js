const options = require('../libs/options');
const fs = require('fs');
const htmlBuilder = require('../libs/html-builder');
const FilePath = require('../libs/file-path');

function getFilePath(apparelType) {
  let filePath;

  filePath = `${FilePath.getBasePath()}/deployment/${apparelType}/index.html`;
  FilePath.ensureDirectoryExistence(filePath);
  return FilePath.encodePath(filePath);
}

class ApparelFileBuilder {
  async buildApparelPage(items, apparelType) {
    const apparelPath = getFilePath(apparelType);
    console.log(apparelPath);
    return new Promise(resolve => {
      const apparelHtml = htmlBuilder.buildApparelHtml([]);
      fs.writeFile(apparelPath, apparelHtml, err => {
        if (err) {
          return console.log(err);
        }

        resolve(`The ${apparelType} file was saved!`);
      });
    });
  }

  async buildAllPages() {
    return Promise.all(await this.buildApparelPage(require('../data/long-sleeve-shirts'), 'long-sleeves'), results => {
      return results;
    });
  }
}

module.exports = new ApparelFileBuilder();

if (options.isCommandLine()) {
  const apparelFileBuilder = new ApparelFileBuilder();

  apparelFileBuilder.buildAllPages().then(function(results) {
    console.log(results);
  });
}
