#!/usr/bin/env node

// dependencies
var path = require('path')
  , webpack = require('webpack');

module.exports = {
  cache: true,
  devtool: 'cheap-source-map',
  entry: {
    main: path.join(__dirname, '../app/main.js'),
  },
  output: {
    path: path.join(__dirname, '../public/core/'),
    filename: '[name].js',
  },
  module: {
    loaders: [{
      test: /\.js(x)?$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react'],
        cacheDirectory: true,
      }
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.less$/,
      loader: 'style!css!less'
    }],
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('../public/core/base-manifest.json'),
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('../public/core/react-manifest.json'),
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('../public/core/material-manifest.json'),
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: { warnings: false },
    // }),
  ]
};
