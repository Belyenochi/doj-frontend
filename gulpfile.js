#!/usr/bin/env node

// dependencies
var gulp = require('gulp')
  , path = require('path');

var concat = require('gulp-concat')
  , uglify = require('gulp-uglify')
  , cleanCSS = require('gulp-clean-css')
  , sourcemaps = require('gulp-sourcemaps');

var webpack = require("webpack");

gulp.task('browserify-vendor', function() {
  // return browserify()
  //   .require(dependencies)
  //   .bundle()
  //   .pipe(source('vendor.bundle.js'))
  //   .pipe(gulpif(production, streamify(uglify({ mangle: false }))))
  //   .pipe(gulp.dest('public/js'));
});

gulp.task('styles', function() {
  return gulp.src('./public/stylesheet/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
  });
  // return gulp.src('app/stylesheets/main.less')
  //   .pipe(plumber())
  //   .pipe(less())
  //   .pipe(autoprefixer())
  //   .pipe(gulpif(production, cssmin()))
  //   .pipe(gulp.dest('public/css'));
});

gulp.task('browserify', ['browserify-vendor'], function() {
  // return browserify('app/main.js')
  //   .external(dependencies)
  //   .transform(babelify)
  //   .bundle()
  //   .pipe(source('bundle.js'))
  //   .pipe(gulpif(production, streamify(uglify({ mangle: false }))))
  //   .pipe(gulp.dest('public/js'));
});

gulp.task('browserify-watch', ['browserify-vendor'], function() {
  // var bundler = watchify(browserify('app/main.js', watchify.args));
  // bundler.external(dependencies);
  // bundler.transform(babelify);
  // bundler.on('update', rebundle);
  // return rebundle();
  //
  // function rebundle() {
  //   var start = Date.now();
  //   return bundler.bundle()
  //     .on('error', function(err) {
  //       gutil.log(gutil.colors.red(err.toString()));
  //     })
  //     .on('end', function() {
  //       gutil.log(gutil.colors.green('Finished rebundling in', (Date.now() - start) + 'ms.'));
  //     })
  //     .pipe(source('bundle.js'))
  //     .pipe(gulp.dest('public/js/'));
  // }
});

gulp.task('webpack', function() {
  gulp.start('webpack');
});

gulp.task('watch', function() {
  gulp.watch('public/stylesheet/**/*.css', ['styles']);
  gulp.watch('public/javascript/**/*.js', ['browserify-watch']);
  gulp.watch('module/**/*.jsx', ['webpack']);
});

gulp.task('release', ['styles']);
gulp.task('develop', ['styles', 'webpack', 'watch']);
gulp.task('default', ['develop']);
