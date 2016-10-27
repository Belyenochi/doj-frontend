#!/usr/bin/env node

// dependencies
var path = require('path')
  , webpack = require('webpack');

module.exports = {
  cache: true,
  devtool: 'cheap-source-map',
  entry: {
    'lib_01_stable': ['react', 'react-dom', 'react-router', 'material-ui'],
    'lib_02_utility': ['react-title-component', 'keycode', 'history'],
    'lib_03_others': ['react-tap-event-plugin'],
  },
  output: {
    path: path.join(__dirname, '../public/core/'),
    filename: '[name].dll.js',
    library: '[name]_library',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'stage-0', 'react'],
          cacheDirectory: true,
        }
      },
    ],
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
