#!/usr/bin/env node

// dependencies
var path = require('path')
  , webpack = require('webpack');

module.exports = {
  cache: true,
  devtool: 'cheap-source-map',
  entry: {
    'lib_01_react': ['react', 'react-dom', 'react-router', 'react-title-component'],
    'lib_02_redux': ['redux', 'react-redux'],
    'lib_03_material': ['material-ui', 'react-tap-event-plugin', 'react-responsive'],
    'lib_04_others': ['keycode', 'history'],
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
    new webpack.optimize.CommonsChunkPlugin({
      name: 'lib_00_common',
      filename: "lib_00_common.dll.js",
    }),
    new webpack.DllPlugin({
      path: path.join(__dirname, '../public/core/', '[name]_manifest.json'),
      name: '[name]_library',
      context: path.join(__dirname, '..'),
    }),
  ],
};
