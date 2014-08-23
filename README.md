# autoprefixer-loader [![Build Status](https://travis-ci.org/passy/autoprefixer-loader.svg?branch=master)](https://travis-ci.org/passy/autoprefixer-loader)
An [autoprefixer](https://github.com/ai/autoprefixer) loader for [webpack](https://github.com/webpack/webpack).

## Usage

```js
var css = require('!raw!autoprefixer!./file.css'); // Just the CSS
var css = require('!css!autoprefixer!./file.css'); // CSS with processed url(...)s
```

See [css-loader](https://github.com/webpack/css-loader) to see the effect of processed `url(...)`s.

Or within the webpack config:

```js
module: {
  loaders: [{
    test: /\.css$/,
    loader: 'css-loader!autoprefixer-loader?browsers=last 2 version, Firefox 15'
  }]
}
```

Then you can: `var css = require('./file.css');`.

Use in tandem with the [style-loader](https://github.com/webpack/style-loader) to add the css rules to your `document`:

```js
module: {
  loaders: [
    { test: /\.css/, loader: 'style-loader!css-loader!autoprefixer-loader' }
  ]
}
```

and then `require('./file.css');` will compile and add the CSS to your page.

## Install

`npm install autoprefixer-loader --save-dev`

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style.

## Release History
* 0.1.0 - Initial release

## License
Licensed under the MIT license.
