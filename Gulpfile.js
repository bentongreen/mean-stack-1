var gulp = require("gulp");
var sass = require("gulp-sass");
var webpack = require("webpack");
var stream = require("webpack-stream");
var livereload = require("gulp-livereload");

gulp.task("sass", function() {
  gulp.src("src/sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("public/css"))
    .pipe(livereload());
});

gulp.task("stream", function(callback) {
  return gulp.src('src/js/**/*.js')
  .pipe(stream({
    output: {
      filename: 'packed.js'
    }
  }))
  .pipe(gulp.dest('public/js/'));
});

gulp.task("serve", ["sass", "stream"], function () {
  // Start the server at the beginning of the task
  server.run(["server.js"]);

  gulp.watch(["src/sass/**/*.scss"], ["sass"]);
  gulp.watch(["src/app/**/*.js"], ["stream"]);

  gulp.watch(["server.js"], [server.run]);
});

gulp.task("default", ["sass", "serve"]);