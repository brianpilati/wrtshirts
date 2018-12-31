const styles = require('../libs/enums/style-enum');

module.exports = [
  {
    name: '',
    description: '',
    code: ''
  }
].sort((a, b) => {
  return a.name > b.name ? 1 : -1;
});
