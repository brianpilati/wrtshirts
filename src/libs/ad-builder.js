const footerAds = [
  {
    description: 'Gift Card',
    code:
      '<iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=48&l=ur1&category=giftcardsseasonal&banner=1MTNQ4AF02YAFT067SR2&f=ifr&linkID=cd2676437148a0c8766ade96f08c811e&t=kanikapilas-20&tracking_id=kanikapilas-20" width="728" height="90" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe>'
  },
  {
    description: 'Static',
    code:
      '<iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=48&l=ur1&category=musicandentertainmentrot&f=ifr&linkID=bd67bf9862ab2fc67ab0f29d66a2d1cf&t=kanikapilas-20&tracking_id=kanikapilas-20" width="728" height="90" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe>'
  }
];

const smallFooterAds = [
  {
    description: 'Gift Card',
    code:
      '<iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=12&l=ur1&category=giftcardsseasonal&banner=07J78V1QR9YDJDGD8JG2&f=ifr&linkID=c3c75a77a82a063fb9b5946d90cb6bc8&t=kanikapilas-20&tracking_id=kanikapilas-20" width="300" height="250" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe>'
  }
];

const otherAds = [
  {
    description: 'Gift Card',
    code:
      '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=qf_br_asin_til&ad_type=product_link&tracking_id=kanikapilas-20&marketplace=amazon&region=US&placement=B004LLIKVU&asins=B004LLIKVU&linkId=8a176470798a7d3ec6903760220d7b21&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff"></iframe>'
  }
];

let decisionOtherAds = Array.from(otherAds);

let decisionFooterAds = Array.from(footerAds);

let decisionSmallFooterAds = Array.from(smallFooterAds);

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function buildOtherAd() {
  const adIndex = getRandomArbitrary(0, decisionOtherAds.length);
  const ad = decisionOtherAds.splice(adIndex, 1);

  if (decisionOtherAds.length === 0) {
    decisionOtherAds = Array.from(otherAds);
  }

  return ad.pop().code;
}

function buildFooterAd() {
  const adIndex = getRandomArbitrary(0, decisionFooterAds.length);
  const ad = decisionFooterAds.splice(adIndex, 1);

  if (decisionFooterAds.length === 0) {
    decisionFooterAds = Array.from(footerAds);
  }

  return ad.pop().code;
}

function buildSmallFooterAd() {
  const adIndex = getRandomArbitrary(0, decisionSmallFooterAds.length);
  const ad = decisionSmallFooterAds.splice(adIndex, 1);

  if (decisionSmallFooterAds.length === 0) {
    decisionSmallFooterAds = Array.from(smallFooterAds);
  }

  return ad.pop().code;
}

module.exports = {
  buildAsideAds: function() {
    return `
      <div class="tshirt-container">
        <div class="tshirt">
          ${buildOtherAd()}
        </div>
      </div>
    `;
  },

  buildFooterAd: function() {
    return `
      <div class="bottom-banner-container">
        ${buildFooterAd()}
      </div>
    `;
  },

  buildSmallFooterAd: function() {
    return `
      <div class="bottom-banner-container">
        ${buildSmallFooterAd()}
      </div>
    `;
  }
};
