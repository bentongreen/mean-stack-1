
var gulp = require('gulp');

gulp.task('serve', ['sass', 'webpack', 'watch', 'server', 'html', 'partials']);
gulp.task('default', ['sass', 'webpack', 'watch', 'server', 'html', 'partials']);
