#!/usr/bin/env node

// dependencies
var path = require('path')
  , webpack = require('webpack');

module.exports = {
  entry: {
    main: path.join(__dirname, '../app/App.js'),
  },
  output: {
    path: path.join(__dirname, '../public/core/'),
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'stage-0', 'react'],
          plugins: ["transform-decorators-legacy"],
          cacheDirectory: true,
        }
      },
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ]
};
