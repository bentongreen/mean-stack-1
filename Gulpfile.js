var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("sass", function() {
  gulp.src("public/sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./public/css"));
});

gulp.task("watch", function() {
  gulp.watch("public/sass/**/*.scss", ["sass"]);
});

// var gulp = require("gulp");
// var sass = require("gulp-sass");
// var autoprefixer = require("autoprefixer");
// var sourcemaps = require("gulp-sourcemaps");
// var input = "public/sass/**/*.scss";
// var output = "./public/css";
// var autoprefixerOptions = {
//   browsers: ['last 2 versions']
// };

// gulp.task("sass", function() {
//   return gulp
//     .src(input)
//     .pipe(sourcemaps.init())
//     .pipe(sass().on("error", sass.logError))
//     .pipe(sourcemaps.write("./stylesheets/maps"))
//     .pipe(autoprefixer(autoprefixerOptions))
//     .pipe(gulp.dest(output));
// });

// gulp.task("watch", function() {
//   gulp.watch("public/sass/**/*.scss", ["sass"]);
// });
