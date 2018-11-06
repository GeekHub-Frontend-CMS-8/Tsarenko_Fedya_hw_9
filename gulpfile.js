var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('assets/sass/**/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('build/css'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task("html", function () {
	return gulp.src("assets/**/*.html")
		.pipe(gulp.dest("build"))
		.pipe(browserSync.reload({stream: true}))
});

gulp.task("watch", [ 'sass', "html"], function () {
    browserSync.init({
        server: "./build",
		notify: false,
		ui: {
        	port: 9999
		}
    });
    gulp.watch('assets/sass/**/*.sass', ["sass"]);
    gulp.watch('assets/**/*.html' , ['html']);
});
