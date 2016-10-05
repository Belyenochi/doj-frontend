#!/usr/bin/env node

// dependencies
var path = require('path')
  , webpack = require('webpack');

module.exports = {
  cache: true,
  devtool: 'cheap-source-map',
  entry: {
    base: ['jquery', 'underscore'],
    react: ['react', 'react-dom', 'react-router', 'alt'],
    material: ['material-ui'],
  },
  output: {
    path: path.join(__dirname, '../public/core/'),
    filename: '[name].dll.js',
    library: '[name]_library',
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
    }],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: "common.dll.js",
    }),
    new webpack.DllPlugin({
      path: path.join(__dirname, '../public/core/', '[name]-manifest.json'),
      name: '[name]_library',
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: { warnings: false },
    // }),
  ]
};
