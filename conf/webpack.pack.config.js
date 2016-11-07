#!/usr/bin/env node

// dependencies
var path = require('path')
  , webpack = require('webpack');

module.exports = {
  cache: true,
  devtool: 'cheap-source-map',
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
          cacheDirectory: true,
        }
      },
    ],
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: { warnings: false },
    // }),
    new webpack.DllReferencePlugin({
      context: path.join(__dirname, '..'),
      manifest: require('../public/core/lib_01_bootstrap_manifest.json'),
    }),
    new webpack.DllReferencePlugin({
      context: path.join(__dirname, '..'),
      manifest: require('../public/core/lib_02_react_manifest.json'),
    }),
    new webpack.DllReferencePlugin({
      context: path.join(__dirname, '..'),
      manifest: require('../public/core/lib_03_redux_manifest.json'),
    }),
    new webpack.DllReferencePlugin({
      context: path.join(__dirname, '..'),
      manifest: require('../public/core/lib_04_material_manifest.json'),
    }),
    new webpack.DllReferencePlugin({
      context: path.join(__dirname, '..'),
      manifest: require('../public/core/lib_05_others_manifest.json'),
    }),
  ]
};
