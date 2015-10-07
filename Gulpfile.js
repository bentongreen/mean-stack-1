var gulp = require("gulp");
var sass = require("gulp-sass");
var webpack = require("webpack");
var stream = require("webpack-stream");

gulp.task("sass", function() {
  gulp.src("public/sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./public/css"));
});

gulp.task("stream", function(callback) {
  return gulp.src('js/**/*.js')
  .pipe(stream({
    output: {
      filename: 'packed.js'
    }
  }))
  .pipe(gulp.dest('./js'));
});

gulp.task("default", function() {
  gulp.watch("public/sass/**/*.scss", ["sass"]);
  gulp.watch("js/**/*.js", ["stream"]);
});
