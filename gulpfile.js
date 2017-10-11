var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('t1', function(){
return gulp.src('src/**/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dest'))
});