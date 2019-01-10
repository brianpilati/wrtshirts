const options = require('../libs/options');
const fs = require('fs');
const path = require('path');
const FilePath = require('../libs/file-path');
const constants = require('../libs/constants');

function getDirectory() {
  return `${FilePath.getBasePath()}/deployment/sitemap`;
}

function getPath() {
  return FilePath.encodePath(path.join(FilePath.getBasePath(), 'deployment'));
}

const re = new RegExp(getPath(), 'g');

function getSiteMaps() {
  const files = [];
  const filePath = getDirectory();
  fs.readdirSync(filePath).forEach(file => {
    files.push(`${filePath}/${file}`);
  });
  return files;
}

function getFilePath() {
  filePath = `${FilePath.getBasePath()}/deployment/sitemap.txt`;
  FilePath.ensureDirectoryExistence(filePath);
  return FilePath.encodePath(filePath);
}

class SiteMapBuilder {
  async buildSiteMap() {
    const allLinks = [];
    return new Promise(resolve => {
      getSiteMaps().map(file => {
        fs.readFileSync(file)
          .toString()
          .split('\n')
          .forEach(line => {
            allLinks.push(line.replace(re, constants.siteUrl));
          });
        fs.unlinkSync(file);
      });
      fs.rmdirSync(getDirectory());
      const siteData = allLinks.join('\n');
      fs.writeFile(getFilePath(), siteData, err => {
        if (err) {
          return console.log(err);
        }

        resolve('Sitemap built!');
      });
    });
  }
}

module.exports = new SiteMapBuilder();

if (options.isCommandLine()) {
  const siteMapBuilder = new SiteMapBuilder();

  siteMapBuilder.buildSiteMap().then(result => {
    console.log(result);
  });
}
