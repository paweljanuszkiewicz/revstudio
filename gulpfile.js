var gulp = require('gulp'),
    sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    run = require('gulp-run');

var srcPath = './resources/';
var destPath = './_assets/';

gulp.task('jekyll', function () {
    return run('jekyll build').exec();
});

gulp.task('styles', function () {
  return gulp.src(srcPath + 'sass/styles.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(prefix({
      browsers: ['last 4 versions'],
      cascade: false
    }))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(destPath));
});

gulp.task('scripts', function () {
  return gulp.src(
      ['node_modules/jquery/dist/jquery.js',
	  'node_modules/scrollreveal/dist/scrollreveal.js',
	  srcPath + 'js/assets/typed.js',
       srcPath + 'js/scripts/**/*.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('scripts.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(destPath));
});

gulp.task('watch', function () {
  gulp.watch(srcPath + 'sass/**/*.scss', ['styles']);
  gulp.watch(srcPath + 'js/**/*.js', ['scripts']);
  // gulp.watch(['./**/*.html', './**/*.md'], ['jekyll']);
});

gulp.task('default', ['styles', 'scripts']);
