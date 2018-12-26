const styles = require('../libs/enums/style-enum');

module.exports = [
  {
    name: 'Test 1'
  },
  {
    name: 'Test 1'
  },
  {
    name: 'Test 1'
  },
  {
    name: 'Test 1'
  },
  {
    name: 'Test 1'
  },
  {
    name: 'Gallum',
    description: '',
    code:
      '<div id="amzn-assoc-ad-dee30cf8-0720-473c-8405-4b37ec5eebc6"></div><script async src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=dee30cf8-0720-473c-8405-4b37ec5eebc6"></script>'
  },
  {
    name: 'Orkin',
    description: '',
    code:
      '<div id="amzn-assoc-ad-dee30cf8-0720-473c-8405-4b37ec5eebc6"></div><script async src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=dee30cf8-0720-473c-8405-4b37ec5eebc6"></script>'
  }
].sort((a, b) => {
  return a.name > b.name ? 1 : -1;
});
