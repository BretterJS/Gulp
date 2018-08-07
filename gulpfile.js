// Gulp - Sass/Autoprefixer + Babel

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');


var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

gulp.task('sass', function () {
  
    gulp.src('src/scss/*scss')
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('es6', function() {
  gulp.src('src/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/js'));
});


gulp.task('watch', function () {
  gulp.watch('src/scss/*.scss', ['sass']);
  gulp.watch('src/html/*html', ['html']);
  gulp.watch('src/js/*js', ['es6']);
});

gulp.task('html', function() {
    gulp.src('src/html/*.html')
    .pipe(gulp.dest('dist/html'));
});
  
  gulp.task('default', ['sass', 'es6', 'html', 'watch']);
