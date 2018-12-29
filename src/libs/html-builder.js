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
  },

  buildApparelHtml(apparelType, apparel) {
    const indexPage = bodyBuilder.buildApparelBody(apparelType, apparel);
    return `
      <!DOCTYPE html>
      <html lang="en">
        ${headBuilder.buildApparel({
          name: apparelType
        })}
        ${indexPage}
      </html>
    `;
  },

  buildMechHtml(mechName, apparel) {
    const indexPage = bodyBuilder.buildApparelBody(mechName, apparel);
    return `
      <!DOCTYPE html>
      <html lang="en">
        ${headBuilder.buildApparel({
          name: mechName
        })}
        ${indexPage}
      </html>
    `;
  }
};
