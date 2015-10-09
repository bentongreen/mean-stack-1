

var requireDir = require('require-dir');

requireDir('./gulp/tasks', { recurse: true });

// var gulp = require("gulp");
// var sass = require("gulp-sass");
// var webpack = require("webpack-stream");
// var livereload = require("gulp-livereload");

// gulp.task("sass", function() {
//   gulp.src("src/sass/**/*.scss")
//     .pipe(sass().on("error", sass.logError))
//     .pipe(gulp.dest("public/css"))
//     .pipe(livereload());
// });

// gulp.task("webpack", function(callback) {
//   return gulp.src('src/js/**/*.js')
//   .pipe(webpack({
//     output: {
//       filename: 'packed.js'
//     }
//   }))
//   .pipe(gulp.dest('public/js/'));
// });

// gulp.task("serve", ["sass", "webpack"], function () {
//   // Start the server at the beginning of the task
//   server.run(["server.js"]);

//   gulp.watch(["src/sass/**/*.scss"], ["sass"]);
//   gulp.watch(["src/app/**/*.js"], ["webpack"]);
//   gulp.watch(["server.js"], [server.run]);
// });

// gulp.task("default", ["serve"]);


