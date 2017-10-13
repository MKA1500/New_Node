var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

// concat & minify -> gulp t1

gulp.task('t1', function(){
return gulp.src('src/**/*.js')
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dest'))
});

// watcher -> gulp w1

gulp.task('w1', function(){
    gulp.watch('src/**/*.js', ['t1']);
});