const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'www');

const config = {

  // Entry point to the project
  entry: [
    path.resolve(__dirname, 'app/App.js'),
  ],
  // Output file config
  devtool: 'eval',
  output: {
    path: buildPath, // Path of output file
    filename: 'bundle.js', // Name of output file
  },

  // Configuration for dev server
  devServer: {
    contentBase: 'www',
    devtool: 'eval',
    hot: true,
    inline: true,
    port: 4000,
    // Required for webpack-dev-server.
    outputPath: buildPath,
  },

  plugins: [
    // Allows for sync with browser while developing (like BrowserSync)
    new webpack.HotModuleReplacementPlugin(),
    // Allows error warninggs but does not stop compiling. Will remove when eslint is added
    new webpack.NoErrorsPlugin(),
  ],

  module: {
    // Allow loading of non-es
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

};

module.exports = config;