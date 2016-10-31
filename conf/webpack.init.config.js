#!/usr/bin/env node

// dependencies
var path = require('path')
  , webpack = require('webpack');

module.exports = {
  cache: true,
  devtool: 'cheap-source-map',
  entry: {
    'react': ['react', 'react-dom', 'react-router'],
    'material': ['material-ui', 'react-tap-event-plugin'],
    'others': ['react-title-component', 'keycode', 'history'],
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
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: { warnings: false },
    // }),
    new webpack.DllPlugin({
      path: path.join(__dirname, '../public/core/', '[name]_manifest.json'),
      name: '[name]_library',
      context: path.join(__dirname, '../'),
    }),
  ]
};
