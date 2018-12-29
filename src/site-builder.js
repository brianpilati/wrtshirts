const indexFileBuilder = require('./builders/index-file-builder');
const apparelFileBuilder = require('./builders/apparel-file-builder');
const mechFileBuilder = require('./builders/mech-file-builder');

function outputResults(message, results) {
  console.log(`\n\n${message} Results:\n`);
  results.map(result => {
    console.log(result);
  });
}

console.log('\n\nStarting to build Index File');
indexFileBuilder.buildPages().then(results => {
  outputResults('IndexFileBulder', results);
});

console.log('\n\nStarting to build Apparel Type Files');
apparelFileBuilder.buildAllPages().then(results => {
  outputResults('ApparelFileBulder', results);
});

console.log('\n\nStarting to build Mech Files');
mechFileBuilder.buildAllPages().then(results => {
  outputResults('MechFileBulder', results);
});
