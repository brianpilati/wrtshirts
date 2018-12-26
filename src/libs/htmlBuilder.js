var headBuilder = require('./headBuilder');
var bodyBuilder = require('./bodyBuilder');

module.exports = {
  buildIndexHtml(index, tshirts) {
    const indexPage = bodyBuilder.buildIndexBody(tshirts);
    return `
      <!DOCTYPE html>
      <html lang="en">
        ${headBuilder.buildIndexHead(index)}
        ${indexPage}
      </html>
    `;
  }
};
