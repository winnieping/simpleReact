var webpack = require('webpack');
var path = require('path');

var config = {
  entry: {
    app:'./src/js/index.js',
  },
  output: {
    path: './build/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader?presets[]=es2015&presets[]=react' 
      }
    ]
  }
}
module.exports = config;