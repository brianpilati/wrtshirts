const indexFileBuilder = require('./builders/index-file-builder');
const apparelFileBuilder = require('./builders/apparel-file-builder');

function outputResults(message, results) {
  console.log(`\n\n${message} Results:\n`);
  results.map(result => {
    console.log(result);
  });
}

console.log('\n\nStarting to Index File');
indexFileBuilder.buildPages().then(results => {
  outputResults('IndexFileBulder', results);
});

console.log('\n\nStarting to Apparel Type File');
apparelFileBuilder.buildAllPages().then(results => {
  outputResults('ApparelFileBulder', results);
});
