#!/usr/bin/env node

// dependencies
var path = require('path')
  , webpack = require('webpack');

module.exports = {
  cache: true,
  // devtool: 'cheap-source-map',
  entry: {
    'lib_01_base': ['jquery', 'underscore', 'keycode'],
    'lib_02_react': ['react', 'react-dom', 'react-router'],
    'lib_03_material': ['react-tap-event-plugin', 'material-ui'],
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
      name: 'lib_00_common',
      filename: "lib_00_common.dll.js",
    }),
    new webpack.DllPlugin({
      path: path.join(__dirname, '../public/core/', '[name]_manifest.json'),
      name: '[name]_library',
      context: path.join(__dirname, '../'),
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: { warnings: false },
    // }),
  ]
};
