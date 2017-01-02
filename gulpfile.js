#!/usr/bin/env node

// dependencies
var gulp = require('gulp')
  , path = require('path')
  , webpack = require('webpack');

gulp.task('clean', function() {
  // rimraf('./dist', callback);
});

gulp.task('build', ['clean'], () => dll());

gulp.task('watch', ['build'], function() {
  gulp.watch('app/**/*')
    .on('change', () => develop());
});

gulp.task('release', ['clean'], () => release());

gulp.task('develop', ['clean', 'build', 'watch']);

function dll() {
  webpack(require('./conf/webpack.dll.config.js'), function(err, stats) {
    console.log(stats.toString());
    develop();
  });
}

function develop() {
  webpack(require('./conf/webpack.develop.config.js'), function(err, stats) {
    console.log(stats.toString());
  });
}

function release() {
  webpack(require('./conf/webpack.release.config.js'), function(err, stats) {
    console.log(stats.toString());
  });
}