var gulp    = require('gulp'),
    connect = require('gulp-connect'),
    open    = require('gulp-open');

gulp.task('connect', function () {
  connect.server({
    port: 8088,
    livereload: true
  });
});

gulp.task('open', function () {
  gulp.src(__filename)
    .pipe(open({uri: ('http://localhost:8088/')}));
});

gulp.task('default', ['connect', 'open']);
