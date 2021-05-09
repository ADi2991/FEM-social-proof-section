const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');

sass.compiler = require('dart-sass');


gulp.task('sass', function() {
  return gulp.src('./scss/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('.'))
      .pipe(browserSync.stream())
});

gulp.task('serve', function() {
  browserSync.init({
    server: { baseDir: './' },
    browser: ['firefox']
  });

  const reloadBrowser = function(done) {
    browserSync.reload();
    done();
  }

  gulp.watch(
      ['./scss/*.scss', 'index.html'],
      gulp.series(['sass', reloadBrowser])
  );
});
