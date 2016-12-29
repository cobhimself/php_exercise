"use strict"

var gulp = require('gulp'),
    exec = require('child_process').exec,
    markdown = require('gulp-markdown');

gulp.task('docs', function () {
  gulp.src(['README.md'])
    .pipe(markdown())
    .pipe(gulp.dest('docs'));
});
