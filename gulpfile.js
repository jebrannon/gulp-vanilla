var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var minifycss = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');

// Compile SCSS, compress CSS and output 'style.css'
gulp.task('styles', function () {
  gulp.src('src/scss/*.scss')
    .pipe(sass())
    .pipe(minifycss())
    .pipe(rename("styles.css"))
    .pipe(gulp.dest('bin/css'));
});

// Minify HTML and output
gulp.task('markup', function () {
  gulp.src('src/html/*.html')
    .pipe(minifyHTML({comments: false}))
    .pipe(gulp.dest('./bin'));
});

// Compile whole site task
gulp.task('compile', ['styles', 'markup']);

// Watch task
gulp.task('watch', function () {
  gulp.watch('src/**/*', ['compile']);
});

//  Default 'Init' task list
gulp.task('default', ['compile', 'watch']);