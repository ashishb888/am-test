var gulp = require('gulp');
var gutil = require('gulp-util');
var connect = require('gulp-connect');

gulp.task('default', ['connect', 'watch']);

gulp.task('connect', function() {
  gutil.log('connect');
  connect.server({
    port: 8888,
    root: 'www',
    livereload: true
  });
});

gulp.task('watch', function() {
  gutil.log('watch');
  gulp.watch(['www/**/*.*'], ['html']);
});

gulp.task('html', function() {
  gutil.log('watch');
  gulp.src('www/**/*.*')
    .pipe(connect.reload());
});
