var loaderUtils = require('loader-utils');
var autoprefixer = require('autoprefixer-core');

module.exports = function (source) {
  if (this.cacheable) {
    this.cacheable();
  }

  var params = loaderUtils.parseQuery(this.query);

  if (params.browsers && !Array.isArray(params.browsers)) {
    params.browsers = params.browsers.split(',');
  }
  if (params.cascade == 'false') {
    params.cascade = false;
  }

  var options = { };
  if (params.safe) {
    delete params.safe;
    options.safe = true;
  }

  var processed = autoprefixer(params).process(source, options);
  this.callback(null, processed.css, processed.map);
};
