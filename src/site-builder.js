const indexFileBuilder = require('./builders/index-file-builder');

function outputResults(message, results) {
  console.log(`\n\n${message} Results\n`);
}

console.log('\n\nStarting to Process Files');
const indexFileBuilderResults = indexFileBuilder.buildPages();
outputResults('IndexFileBulder', indexFileBuilderResults);
