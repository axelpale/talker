var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: './src/demo',
  output: {
    filename: 'app.js',
    path: path.join(__dirname, '/dist'),
    sourceMapFilename: '[file].map',
    library: 'lately',  // module name in global scope
    libraryTarget: 'umd'
  },

  devtool: 'source-map',

  mode: 'production'
}
