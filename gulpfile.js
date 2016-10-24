var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var autoprefix = require('gulp-autoprefixer');

gulp.task('compress', function() {
    return gulp.src('src/vertical-timeline.js')
        .pipe(uglify())
        .pipe(rename({extname: '.min.js'}))
        .pipe(gulp.dest('dist'));
});

gulp.task('copy', function() {
    return gulp.src('src/vertical-timeline.js')
        .pipe(gulp.dest('dist'));
});

gulp.task('sass', function() {
    return gulp.src('src/vertical-timeline.scss')
        .pipe(sass())
        .pipe(autoprefix())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['compress', 'copy', 'sass'], function() {
    gulp.watch('src/*.js', ['compress', 'copy']);
    gulp.watch('src/*.scss', ['sass']);
});
