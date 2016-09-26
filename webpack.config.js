#!/usr/bin/env node

// dependencies
var webpack = require('webpack')
  , path = require('path');

module.exports = {
  entry: './module/main/',
  output: {
    path: __dirname,
    filename: './public/javascript/bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loaders: [
          'react-hot',
          'babel-loader',
        ],
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
    ]
  }
}
