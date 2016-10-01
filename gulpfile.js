#!/usr/bin/env node

// dependencies
var gulp = require('gulp')
  , path = require('path')
  , webpack = require('webpack');

gulp.task('clean', function() {
  // rimraf('./dist', callback);
});

gulp.task('build', ['clean'], () => init());

gulp.task('watch', ['build'], function() {
  gulp.watch('app/**/*')
    .on('change', () => pack());
});

gulp.task('release', ['clean', 'build']);

gulp.task('develop', ['clean', 'build', 'watch']);

function init() {
  webpack(require('./webpack.init.config'), function(err, stats) {
    console.log(stats.toString());
    pack();
  });
}

function pack() {
  webpack(require('./webpack.pack.config'), function(err, stats) {
    console.log(stats.toString());
  });
}
