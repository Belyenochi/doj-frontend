const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'build');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
  // Entry point to the project
  entry: [
    'babel-polyfill',
    path.resolve(__dirname, 'app/App.js'),
  ],

  // Output file config
  output: {
    path: buildPath, // Path of output file
    filename: 'bundle.js', // Name of output file
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    // Transfer Files
    new CopyWebpackPlugin([
      {from: 'www/css', to: 'css'},
      {from: 'www/font', to: 'font'},
      {from: 'www/index.html'},
    ]),
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
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(ttf|eot|svg|woff2?)(\?v=.+?)?$/,
        loader: 'url-loader?limit=1048576'
      },
    ],
  },
};

module.exports = config;