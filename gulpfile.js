var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var minifycss = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');

gulp.task('styles', function () {
    gulp.src('src/scss/*.scss')
        .pipe(sass())
        .pipe(minifycss())
        .pipe(rename("styles.css"))
        .pipe(gulp.dest('bin/css'));
});

gulp.task('markup', function () {
    gulp.src('src/html/*.html')
      .pipe(minifyHTML({comments: false}))
      .pipe(gulp.dest('./bin'));
  });

gulp.task('compile', ['styles', 'markup']);

gulp.task('watch', function () {
  gulp.watch('src/**/*', ['compile']);
});

gulp.task('default', ['compile', 'watch']);