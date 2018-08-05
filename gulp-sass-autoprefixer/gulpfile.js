// Gulp - Sass + Sourcemaps + Autoprefixer

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

var input = "./src/scss/*scss";
var output = "./dist/css";


var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

gulp.task('sass', function () {
  return gulp
    .src(input)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer())
    .pipe(gulp.dest(output));
});

gulp.task('sass:watch', function () {
  gulp.watch('scss/*.scss', ['sass']);
});

gulp.task('copyFiles', function() {
  gulp.src('src/*.html')
    .pipe(gulp.dest('dist/html'))
  gulp.src('src/js/*.js')
    .pipe(gulp.dest('dist/js'))
  gulp.src('src/images/*.png')
    .pipe(gulp.dest('dist/images'))
  gulp.src('src/images/*.jpg')
    .pipe(gulp.dest('dist/images'))
  gulp.src('src/*.svg')
    .pipe(gulp.dest('dist/images'))

});
  
  gulp.task('default', ['sass', 'sass:watch', 'copyFiles']);
