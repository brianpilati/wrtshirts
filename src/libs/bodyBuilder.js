const adBuilder = require('./adBuilder');
const headerBuilder = require('./headerBuilder');
const titleBuilder = require('./titleBuilder');
const breadCrumbBuilder = require('./breadCrumbBuilder');

module.exports = {
  buildIndexBody(tshirts) {
    return `
        <body>
          <div class="background-splash"></div>
          <div class="page-container">
            ${headerBuilder.getHeader()}
            <div class="page-body">
              <article class="article">
                <div class="article-title">
                  ${titleBuilder.title('Robot By Name')} <hr>
                </div>
                <div class="genres">
                  Names
                </div>
                <div class="article-title">
                  ${titleBuilder.title('T-Shirts')} <hr>
                </div>
                <div class="genres">
                  ${tshirts}
                </div>
                <div class="article-title">
                  ${titleBuilder.title('Hoodies')} <hr>
                </div>
                <div class="genres">
                  Hoodies
                </div>
                <div class="article-title">
                  ${titleBuilder.title('Long-Sleeve Shirts')} <hr>
                </div>
                <div class="genres">
                  Long-Sleeve Shirts
                </div>
                <div class="article-title">
                  ${titleBuilder.title('Recommended Shirts')} <hr>
                </div>
              </article>
            </div>
            <footer class="footer">Footer</footer>
          </div>
        </body>
      `;
  },

  buildTShirtBody(genre) {
    return `
        <body>
          <div class="background-splash"></div>
          <div class="page-container">
            ${headerBuilder.getHeader()}
            <div class="page-body">
              <aside>
                ${adBuilder.buildAsideAds()}
              </aside>
              <article class="article">
                ${breadCrumbBuilder.buildBreadCrumb()}
                <div class="article-title">
                  ${genre}
                </div>
                <div class="artist-container">
                  ${genres}
                </div>
                </div>
              </article>
              ${adBuilder.buildFooterAd()}
              <footer class="footer">Footer</footer>
            </div>
          </div>
        </body>
      `;
  }
};
