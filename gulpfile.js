'use strict';
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
gulp.task('js',function () {
   return gulp.src('app/**/*.js')
       .pipe(browserSync.stream());
});
gulp.task('default',['js'],function () {
   browserSync.init({
       files:'app/**/*',
       server:'./'
   })
});
