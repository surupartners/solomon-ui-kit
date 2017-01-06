/* jslint node: true */

"use strict";

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require("gulp-rename"),
    del = require('del'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', ['css']);
gulp.task('scss', ['css']);

gulp.task('css', ['clean:css'], function () {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'expanded',
        includePaths: ['node_modules']
    }).on('error', sass.logError))
    .pipe(autoprefixer({browsers: ['IE 8', '> 0.1%']}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(cleanCSS())
    .pipe(gulp.dest('build/css'));
});

gulp.task('clean:css', function () {
  return del([
    'build/css/**/*',
  ]);
});
