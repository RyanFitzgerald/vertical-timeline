const gulp = require('gulp');
const plumber = require('gulp-plumber');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('scripts', () => {
    return gulp.src('src/vertical-timeline.js')
        .pipe(plumber(plumber({
            errorHandler: function (err) {
                console.log(err);
                this.emit('end');
            }
        })))
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('dist'))
        .pipe(uglify({
            preserveComments: 'license'
        }))
        .pipe(rename({extname: '.min.js'}))
        .pipe(gulp.dest('dist'));
});

gulp.task('styles', () => {
    return gulp.src('src/vertical-timeline.scss')
        .pipe(plumber(plumber({
            errorHandler: function (err) {
                console.log(err);
                this.emit('end');
            }
        })))
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['scripts', 'styles'], function() {
    gulp.watch('src/*.js', ['scripts']);
    gulp.watch('src/*.scss', ['styles']);
});
