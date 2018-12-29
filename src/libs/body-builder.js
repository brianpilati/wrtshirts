const adBuilder = require('./ad-builder');
const headerBuilder = require('./header-builder');
const titleBuilder = require('./title-builder');
const breadCrumbBuilder = require('./breadCrumbBuilder');

module.exports = {
  buildIndexBody(tshirts, sweatshirts, hoodies, longsleeveShirts, mechName, recommendedShirts) {
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
                <div class="mech-names">
                  ${mechName} 
                </div>
                <div class="article-title">
                  <a href="/tshirts">${titleBuilder.title('T-Shirts')}</a> <hr>
                </div>
                <div class="tshirts">
                  ${tshirts}
                </div>
                <div><a href="/tshirts"><div class="see-more-button">See More ...</div></a></div>
                <div class="article-title">
                  ${titleBuilder.title('Hoodies')} <hr>
                </div>
                <div class="tshirts">
                  ${hoodies}
                </div>
                <div><a href="/tshirts"><div class="see-more-button">See More ...</div></a></div>
                <div class="article-title">
                  ${titleBuilder.title('Sweatshirts')} <hr>
                </div>
                <div class="tshirts">
                  ${sweatshirts}
                </div>
                <div><a href="/tshirts"><div class="see-more-button">See More ...</div></a></div>
                <div class="article-title">
                  <a href="/long-sleeves/index.html">${titleBuilder.title('Long-Sleeve Shirts')}</a> <hr>
                </div>
                <div class="tshirts">
                  ${longsleeveShirts}
                </div>
                <div><a href="/long-sleeves/index.html"><div class="see-more-button">See More ...</div></a></div>
                <div class="article-title">
                  ${titleBuilder.title('Recommended Shirts')} <hr>
                </div>
                <div class="recommendations">
                  ${recommendedShirts}
                </div>
              </article>
            </div>
            <footer class="footer">
              <div class="large-footer-ad">
                ${adBuilder.buildFooterAd()}
              </div>
              <div class="small-footer-ad">
                ${adBuilder.buildSmallFooterAd()}
              </div>
            </footer>
          </div>
          <script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
          <script type="text/javascript" src="/libs/slick.min.js"></script>
          <script type="text/javascript">
            $(document).ready(function(){
              $('.recommendations').slick({
                centerMode: true,
                infinite: true,
                centerPadding: '60px',
                slidesToShow: 5,
                responsive: [
                  {
                    breakpoint: 992,
                    settings: {
                      centerMode: true,
                      centerPadding: '20px',
                      slidesToShow: 3
                    }
                  }
                ]
              });
            });
          </script>
        </body>
      `;
  },

  buildApparelBody(apparelType, apparel) {
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
                  ${apparelType}
                </div>
                <div class="artist-container">
                  ${apparel}
                </div>
                </div>
              </article>
            </div>
            <footer class="footer">
              <div class="large-footer-ad">
                ${adBuilder.buildFooterAd()}
              </div>
              <div class="small-footer-ad">
                ${adBuilder.buildSmallFooterAd()}
              </div>
            </footer>
          </div>
        </body>
      `;
  }
};
