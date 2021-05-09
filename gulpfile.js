const gulp = require('gulp');
const sass = require('gulp-sass');

sass.compiler = require('dart-sass');

gulp.task('sass', function() {
  return gulp.src('./scss/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('.'))
});

gulp.task('sass:watch', function() {
  return gulp.watch('./scss/*.scss', gulp.series(['sass']));
});
