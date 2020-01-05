const gulp = require('gulp'),
  sass = require('gulp-sass'),
  browserSync = require('browser-sync'),
  autoprefixer = require('gulp-autoprefixer'),
  rimraf = require('rimraf'),
  rigger = require('gulp-rigger');

const paths = {
  src: {
    html: 'src/*.html',
    style: 'src/css/main.scss',
    js: 'src/js/*.js',
    img: 'src/img/**/*.*',
    fonts: 'fonts/**/*.*'
  },
  build: {
    html: 'build/',
    js: 'build/js/',
    style: 'build/css/',
    img: 'build/img/',
    fonts: 'build/fonts/'
  },
  watch: {
    html: 'src/**/*.html',
    js: 'src/js/**/*.js',
    style: 'src/css/**/*.scss',
    img: 'src/img/**/*.*',
    fonts: 'src/fonts/**/*.*'
  },
  clean: './build'
};

gulp.task('sass', function () {
  gulp.src(paths.src.style)
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest(paths.build.style))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('html', function () {
  gulp.src(paths.src.html)
    .pipe(rigger())
    .pipe(gulp.dest(paths.build.html))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('js', function () {
  gulp.src(paths.src.js)
    .pipe(rigger())
    .pipe(gulp.dest(paths.build.js))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('img', function () {
  gulp.src(paths.src.img)
    .pipe(gulp.dest(paths.build.img))
    .pipe(browserSync.reload({stream: true}));
});


gulp.task('server', function () {
  browserSync({
    server: {baseDir: paths.build.html},
    notify: false
  });
});

gulp.task('watch', ['sass', 'html', 'js', 'img'], function () {
  gulp.watch(paths.watch.style, ['sass']);
  gulp.watch(paths.watch.html, ['html']);
  gulp.watch(paths.watch.js, ['js']);
  gulp.watch(paths.watch.img, ['img']);
});

gulp.task('default', ['server', 'sass', 'img', 'watch']);


