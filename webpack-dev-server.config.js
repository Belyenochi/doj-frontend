const webpack = require('webpack');
const path = require('path');

const config = {
  // Entry point to the project
  entry: {
    'polyfill': './app/polyfill.js',
    'vendor': './app/vendor.js',
    'main': './app/App.dev.js',
  },

  // Output file config
  output: {
    path: './www', // Path of output file
    filename: 'js/[name].bundle.js',
    sourceMapFilename: 'js/[name].map',
    chunkFilename: 'js/[id].chunk.js',
  },

  // output: {
  //   filename: 'js/bundle.js', // Name of output file
  // },

  // Configuration for dev server
  devServer: {
    contentBase: 'www',
    host: '0.0.0.0',
    port: 4000,
    hot: true,
    inline: true,
  },

  plugins: [
    // Allows for sync with browser while developing (like BrowserSync)
    new webpack.HotModuleReplacementPlugin(),
    // Allows error warninggs but does not stop compiling. Will remove when eslint is added
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['main', 'vendor', 'polyfill'],
      minChunks: Infinity,
    }),
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
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader',
      },
      {
        test: /\.(ttf|eot|svg|woff2?)(\?v=.+?)?$/,
        loader: 'url-loader?limit=1048576'
      },
    ],
  },
};

module.exports = config;