const indexFileBuilder = require('./builders/index-file-builder');
const apparelFileBuilder = require('./builders/apparel-file-builder');
const mechFileBuilder = require('./builders/mech-file-builder');
const siteMapBuilder = require('./builders/site-map-file-builder');

class SiteBuilder {
  outputResults(message, results) {
    console.log(`\n\n${message} Results:\n`);
    if (Array.isArray(results)) {
      results.map(result => {
        console.log(result);
      });
    } else {
      console.log(results);
    }
  }

  buildIndex() {
    console.log('\n\nStarting to build Index File');
    return indexFileBuilder.buildPages().then(results => {
      this.outputResults('IndexFileBulder', results);
      return;
    });
  }

  buildApparel() {
    console.log('\n\nStarting to build Apparel Type Files');
    return apparelFileBuilder.buildAllPages().then(results => {
      this.outputResults('ApparelFileBulder', results);
      return;
    });
  }

  buildMech() {
    console.log('\n\nStarting to build Mech Files');
    return mechFileBuilder.buildAllPages().then(results => {
      this.outputResults('MechFileBulder', results);
      return;
    });
  }

  buildSiteMap() {
    console.log('\n\nStarting to build the Sitemap');
    return siteMapBuilder.buildSiteMap().then(results => {
      this.outputResults('SiteMapBuilder', results);
      return;
    });
  }

  async buildAll() {
    await this.buildIndex();
    await this.buildApparel();
    await this.buildMech();
    await this.buildSiteMap();
  }
}

const siteBuilder = new SiteBuilder();
siteBuilder.buildAll().then(() => {
  console.log('finished');
});
