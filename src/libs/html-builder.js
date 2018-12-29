var headBuilder = require('./head-builder');
var bodyBuilder = require('./body-builder');

module.exports = {
  buildIndexHtml(index, tshirts, sweatshirts, hoodies, longsleeveShirts, mechName, recommendedShirts) {
    const indexPage = bodyBuilder.buildIndexBody(
      tshirts,
      sweatshirts,
      hoodies,
      longsleeveShirts,
      mechName,
      recommendedShirts
    );
    return `
      <!DOCTYPE html>
      <html lang="en">
        ${headBuilder.buildIndexHead(index)}
        ${indexPage}
      </html>
    `;
  }
};