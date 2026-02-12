const gulp = require('gulp');

// This task copies everything from 'src' to 'dist'
gulp.task('build', function() {
  return gulp.src('src/**/*')
    .pipe(gulp.dest('dist'));
});
