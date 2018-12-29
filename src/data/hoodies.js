const styles = require('../libs/enums/style-enum');

module.exports = [
  {
    name: 'Fujin',
    description: '',
    code:
      '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=kanikapilas-20&marketplace=amazon&region=US&placement=B07F9W3BG2&asins=B07F9W3BG2&linkId=aa2cb3ca7b5314d6c3929752c3c6b740&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff"></iframe>'
  },
  {
    name: 'Fujin Large',
    description: '',
    code:
      '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=kanikapilas-20&marketplace=amazon&region=US&placement=B07F9W3BG2&asins=B07F9W3BG2&linkId=aa2cb3ca7b5314d6c3929752c3c6b740&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff"></iframe>'
  },
  {
    name: 'Test 1',
    code:
      '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=kanikapilas-20&marketplace=amazon&region=US&placement=B07F9W3BG2&asins=B07F9W3BG2&linkId=aa2cb3ca7b5314d6c3929752c3c6b740&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff"></iframe>'
  },
  {
    name: 'Test 2',
    code:
      '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=kanikapilas-20&marketplace=amazon&region=US&placement=B07F9W3BG2&asins=B07F9W3BG2&linkId=aa2cb3ca7b5314d6c3929752c3c6b740&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff"></iframe>'
  },
  {
    name: 'Test 3',
    code:
      '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=kanikapilas-20&marketplace=amazon&region=US&placement=B07F9W3BG2&asins=B07F9W3BG2&linkId=aa2cb3ca7b5314d6c3929752c3c6b740&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff"></iframe>'
  },
  {
    name: 'Gallum',
    description: '',
    code:
      '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=kanikapilas-20&marketplace=amazon&region=US&placement=B07F9W3BG2&asins=B07F9W3BG2&linkId=aa2cb3ca7b5314d6c3929752c3c6b740&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff"></iframe>'
  },
  {
    name: 'Orkin',
    description: '',
    code:
      '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=kanikapilas-20&marketplace=amazon&region=US&placement=B07DBN12C9&asins=B07DBN12C9&linkId=d224d84550c4a42cf6cd878c617819c8&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff"></iframe>'
  }
].sort((a, b) => {
  return a.name > b.name ? 1 : -1;
});
