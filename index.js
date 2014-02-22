var loaderUtils = require('loader-utils');
var autoprefixer = require('autoprefixer');
var path = require('path');
var fs = require('fs');

module.exports = function(source) {
  if (this.cacheable) {
    this.cacheable();
  }

  var options = loaderUtils.parseQuery(this.query);
  var processed;
  var browsers = ['> 1%', 'last 2 versions',
  'Firefox ESR', 'Opera 12.1'];

  if (options.browsers) {
    if (Array.isArray(options.browsers)) {
      browsers = options.browsers;
    } else {
      browsers = options.browsers.split(',');
    }
  }

  console.log('browsers: ', browsers);
  processed = autoprefixer.apply(autoprefixer, browsers)
    .process(source);

  this.callback(null, processed.css, processed.map);
};
