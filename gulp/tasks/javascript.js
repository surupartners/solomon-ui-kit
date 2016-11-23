/* jslint node: true */

"use strict";

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    uglify = require('gulp-uglify'),
    rename = require("gulp-rename"),
    del = require('del');

gulp.task('javascript', ['js']);
gulp.task('browserify', ['js']);

gulp.task('js', ['clean:js'], function () {
    var b = browserify([
        'src/js/index.js'
    ], {
        paths: ['src/js'],
        debug: true,
    });

    return b.bundle()
        .on('error', function (error) {
            gutil.log(gutil.colors.red(error.message));
            this.emit('end');
        })
        .pipe(source('index.js'))
        .pipe(buffer())
        .pipe(gulp.dest('build/js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));
});

gulp.task('clean:js', function () {
  return del([
    'build/js/**/*',
  ]);
});
