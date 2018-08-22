//PostCSS with Autoprefixer, Babel and Imagemin

let postcss = require('gulp-postcss');
let gulp = require('gulp');
let autoprefixer = require('autoprefixer');
let cssnano = require('cssnano');
let sourcemaps = require('gulp-sourcemaps');
let babel = require('gulp-babel');
let uglify = require('gulp-uglify');
let concat = require('gulp-concat');
let imagemin = require('gulp-imagemin');
 
gulp.task('css', () => {
    let plugins = [
        autoprefixer({browsers: ['last 1 version']}),
        cssnano()
    ];
    return gulp.src('./src/*.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./dist'));
});

gulp.task('es6', () => {
    gulp.src('src/js/*.js')
      .pipe(sourcemaps.init())
      .pipe(babel())
      .pipe(uglify())
      .pipe(concat())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('dist/js'));
  });
  
  gulp.task('html', () => {
    gulp.src('src/html/*.html')
    .pipe(gulp.dest('dist/html'))
  });


  gulp.task('images', () =>
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
  );
  

  gulp.task('watch', () => {
    gulp.watch('src/*.scss', ['sass']);
    gulp.watch('src/*html', ['html']);
    gulp.watch('src/*js', ['es6']);
  });

gulp.task('default', ['css', 'es6', 'html', 'images', 'watch']);
