// var gulp = require("gulp");
// var watch = require('gulp-watch');
// var browserSync = require('browser-sync').create();
//
// gulp.task('browser-sync', function() {
// 	browserSync.init({
// 		server: {
// 			baseDir: "./build"
// 		}
// 	});
// });
//
// gulp.task('watch', function () {
// 	return watch(['assets/**/*.css', 'assets/!**/!*.html'], { ignoreInitial: false })
// 		.pipe(gulp.dest('build'));
// });


var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
// var sass        = require('gulp-sass');

gulp.task('serve',  function() {

	browserSync.init({
		server: "./assets"
	});

	gulp.watch("assets/**/*.css").on('change', browserSync.reload);;
	gulp.watch("assets/**/*.html").on('change', browserSync.reload);
});

//
// gulp.task('sass', function() {
// 	return gulp.src("assets/**/*.scss")
// 		.pipe(sass())
// 		.pipe(gulp.dest("./build/css"))
// 		.pipe(browserSync.stream());
// });
//
// gulp.task('default', ['serve']);