var validUrl = require('valid-url');
var download = require('image-downloader');
var fs = require('fs');

var helpers = {};

helpers.isValidUrl = (url) => {
  return validUrl.isUri(url) && url.startsWith('https://www.marktplaats');
}

helpers.downloadImages = (images, title) => {

  for (var i = 0; i < images.length; i++) {

    var options = {
      url: images[i],
      dest: title + ' | ' + i + '.jpg'
    }

    download.image(options)
      .then(({
        filename,
        image
      }) => {
        console.log('File saved to', filename)
      }).catch((err) => {
        throw err
      })
  }

};

module.exports = helpers;
