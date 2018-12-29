const nowDateTime = getFormattedDate();
const constants = require('./constants');

function buildArticleTags(genres) {
  let articleTags = '';
  if (genres) {
    genres.split(/,\s/g).forEach(function(genre) {
      articleTags += `<meta property="article:tag" content="${genre}" />`;
    });
  }
  return articleTags;
}

function buildLinks(index) {
  let links = `<link rel="canonical" href="${constants.siteUrl}/" />`;

  if (index < 50) {
    links += `<link rel="next" href="${constants.siteUrl}/page/${index + 1}/" />`;
  } else if (index === 50) {
    links += `<link rel="next" href="${constants.siteUrl}" />`;
  }

  if (index === 2) {
    links += `<link rel="prev" href="${constants.siteUrl}" />`;
  } else if (index > 2) {
    links += `<link rel="prev" href="${constants.siteUrl}/page/${index - 1}" />`;
  }

  return links;
}

function formatDigits(digit) {
  return digit < 10 ? `0${digit}` : digit;
}

function getFormattedDate() {
  const now = new Date();
  const timezone = now.getTimezoneOffset() === 360 ? '-06:00' : '-07:00';

  return `${now.getUTCFullYear()}-${formatDigits(now.getUTCMonth() + 1)}-${formatDigits(
    now.getUTCDate()
  )}T${formatDigits(now.getUTCHours())}:${formatDigits(now.getUTCMinutes())}:${formatDigits(
    now.getUTCSeconds()
  )}${timezone}`;
}

module.exports = {
  buildApparel: function(apparel) {
    return `
      <head>
        <meta charset="utf-8" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico">
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
        <title>
          &quot;${apparel.name}&quot; by ${constants.artist} on ${constants.siteName}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="war robots, t-shirt, shirt, pixonic, apparel, free, best, favorite, sweatshirts, long-sleeve shirts, hoodies, tshirt" /> 
        <meta name="description" content="&quot;${apparel.name}&quot; by ${
      constants.artist
    } shirts, t-shirts, long-sleeve shirts, sweatshirts and hoodies. Fulfillment by Amazon.com. 2-day Shipping with Amazon Prime" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="&quot;${apparel.title}&quot; by ${
      constants.artist
    } t-shirt shirt long-sleeve, sweatshirts and hoodies on ${constants.siteName}" />
        <meta name="og:description" content="&quot;${apparel.name}&quot; by ${
      constants.artist
    } shirts, t-shirts, long-sleeve shirts, sweatshirts and hoodies. Fulfillment by Amazon.com. 2-day Shipping with Amazon Prime" />
        <meta property="article:section" content="${constants.artist}" />

        <meta name="twitter:creator" content="@war robots" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content="&quot;${apparel.name}&quot; by ${
      constants.artist
    } shirts, t-shirts, long-sleeve shirts, sweatshirts and hoodies. Fulfillment by Amazon.com. 2-day Shipping with Amazon Prime" />

        <meta name="twitter:site" content="@war robots" />
        ${buildArticleTags(apparel.genre)}
        <meta property="article:modified_time" content="${nowDateTime}" />
        <meta property="og:updated_time" content="${nowDateTime}" />
        <meta property="article:publisher" content="https://www.facebook.com/war robots" />
        <meta property="article:published_time" content="${apparel.createdDate}" />
        <link rel="stylesheet" href="/css/global-styles.css">
        <link rel="stylesheet" href="/css/tshirt-styles.css">
        <link rel="stylesheet" href="/css/apparel-styles.css">
      </head>
    `;
  },

  buildIndexHead: function(index) {
    return `
      <head>
        <meta charset="utf-8" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico">
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
        <title>${constants.siteName} - t-shirt shirt &amp; Tips </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="keywords" content="war robots, t-shirt, shirt, pixonic, apparel, free, best, favorite, sweatshirts, long-sleeve shirts, hoodies, tshirt" /> 

        <meta name="description" content="${
          constants.siteName
        } is your source for  shirts, t-shirts, long-sleeve shirts, sweatshirts and hoodies. Fulfillment by Amazon.com. 2-day Shipping with Amazon Prime" />

        <meta name="og:description" content="${
          constants.siteName
        } is your source for  shirts, t-shirts, long-sleeve shirts, sweatshirts and hoodies. Fulfillment by Amazon.com. 2-day Shipping with Amazon Prime" />

        <meta name="twitter:description" content="${
          constants.siteName
        } is your source for  shirts, t-shirts, long-sleeve shirts, sweatshirts and hoodies. Fulfillment by Amazon.com. 2-day Shipping with Amazon Prime" />

        <meta property="og:locale" content="en_US" />

        ${buildLinks(index)}

        <link rel="publisher" href="https://www.facebook.com/war robots" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="${constants.siteName}" />
        <meta property="og:url" content="${constants.siteUrl}" />
        <meta property="og:site_name" content="${constants.siteName}" />

        <meta name="twitter:creator" content="@war robots" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta prooperty="twitter:title" content="${constants.siteName} - t-shirt shirt &amp; Tips" />
        <meta name="twitter:site" content="@war robots" />
        <meta property="website:modified_time" content="${nowDateTime}" />
        <meta property="og:updated_time" content="${nowDateTime}" />
        <meta property="website:published_time" content="${nowDateTime}" />
        <link rel="stylesheet" href="/css/slick-theme.css" />
        <link rel="stylesheet" href="/css/slick.css" />
        <link rel="stylesheet" href="/css/global-styles.css" />
        <link rel="stylesheet" href="/css/home-styles.css" />
      </head>
    `;
  }
};
