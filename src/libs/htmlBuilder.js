var headBuilder = require('./headBuilder');
var bodyBuilder = require('./bodyBuilder');

module.exports = {
  buildIndexHtml(index, tshirts, sweatshirts, hoodies, longsleeveShirts, mechName) {
    const indexPage = bodyBuilder.buildIndexBody(tshirts, sweatshirts, hoodies, longsleeveShirts, mechName);
    return `
      <!DOCTYPE html>
      <html lang="en">
        ${headBuilder.buildIndexHead(index)}
        ${indexPage}
      </html>
    `;
  }
};
