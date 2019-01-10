const fs = require('fs');
const FilePath = require('./file-path');

function getFilePath(name) {
  let filePath;

  filePath = `${FilePath.getBasePath()}/deployment/sitemap/${name}.txt`;
  FilePath.ensureDirectoryExistence(filePath);
  return FilePath.encodePath(filePath);
}

class SiteMapBuilder {
  constructor(fileName) {
    this.fileName = fileName;
    this.links = [];
  }

  buildSiteMap() {
    const siteData = this.links.join('\n');
    fs.writeFileSync(getFilePath(this.fileName), siteData);
    console.log(`The ${this.fileName} file was saved!`);
  }

  addLink(link) {
    this.links.push(link);
  }
}

module.exports = SiteMapBuilder;
