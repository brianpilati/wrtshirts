const titleBuilder = require('./title-builder');
const sizes = require('./enums/style-enum');

module.exports = {
  getHeader: function() {
    return `
      <header class="page-header tiki-tropic">
        <div class="wr-title-container">
          <div class="wr-title">
            <a href="/">
              ${titleBuilder.getSiteTitle(sizes.large)}
            </a>
          </div>
          <div class="wr-sub-title">
            The Ultimate Collection of War Robots T-Shirts 
          </div>
        </div>
        <div>
          <img src="/assets/icons/logo.png" alt="War Robots T-Shirts">
        </div>
      </header>
    `;
  }
};
