const indexFileBuilder = require('./builders/indexFileBuilder');

function outputResults(message, results) {
  console.log(`\n\n${message} Results\n`);
  console.log(results);
}

console.log('\n\nStarting to Process Files');
const indexFileBuilderResults = indexFileBuilder.buildPages();
outputResults('IndexFileBulder', indexFileBuilderResults);
