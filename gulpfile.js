var gulp = require('gulp');
var babel = require('gulp-babel');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');


gulp.task('js', function () {
	gulp.src('./src/*.js')
		.pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))	
		.pipe(babel({presets: ['es2015']}))
        .pipe(uglify({preserveComments: 'some'}))
        .pipe(rename('user-scalable-no.min.js'))
		.pipe(gulp.dest('./'))
});

gulp.task('demo', function () {
	gulp.src('./src/*.html')
		.pipe(gulp.dest('./demo'))
});

gulp.task('watch', function () {
	gulp.watch('./src/*.js', ['js'])
	gulp.watch('./src/*.html', ['demo'])
});

gulp.task('default', ['js', 'demo', 'watch']);