const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const buildPath = path.resolve(__dirname, 'build');

const config = {
  // Entry point to the project
  entry: {
    'polyfill': './app/polyfill.js',
    'vendor': './app/vendor.js',
    'main': './app/App.js',
  },

  // Output file config
  output: {
    path: './build', // Path of output file
    filename: 'js/[name].bundle.js',
    sourceMapFilename: 'js/[name].map',
    chunkFilename: 'js/[id].chunk.js',
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['main', 'vendor', 'polyfill'],
      minChunks: Infinity,
    }),
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
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(ttf|eot|svg|woff2?)(\?v=.+?)?$/,
        loader: 'url-loader?limit=1048576'
      },
    ],
  },
};

module.exports = config;