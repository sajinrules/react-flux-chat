var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var server = require('gulp-server-livereload');

gulp.task('browserify',function(){
	browserify('./src/js/main.js')
		.transform('reactify')
		.bundle()
		.pipe(source('main.js'))
		.pipe(gulp.dest('dist/js'));
});

gulp.task('copy',function(){
	gulp.src('src/index.html')
		.pipe(gulp.dest('dist'))

	gulp.src('src/assets/**/*.*')
		.pipe(gulp.dest('dist/assets'))
})

gulp.task('serve', function() {
  gulp.src('./dist')
    .pipe(server({
      livereload: true,
      defaultFile: 'index.html',
      open:{
      	browser: 'chrome'
      }
    }));
});

gulp.task('default',['browserify','copy','serve'],function(){
	//return gulp.watch('src/**/*.*',['browserify','copy','serve']);
})