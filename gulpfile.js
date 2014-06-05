var gulp = require('gulp');
var gutil = require('gulp-util');

var clean = require('gulp-clean');
var browserify = require('gulp-browserify');
var livereload = require('gulp-livereload');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var lr = require('tiny-lr');
var server = lr();

gulp.task('clean', function() {
    gulp.src('build/**', {read: false})
        .pipe(clean());
});

gulp.task('scripts', function() {
    gulp.src('src/first.coffee', {read: false})
        .pipe(browserify({
            debug: !gulp.env.production,
            transform: ['coffeeify'],
            extensions: ['.coffee']
        }))
        .on('error', gutil.log)
        .pipe(concat('main.js'))
        .pipe(gulp.dest('build'))
        .pipe(livereload(server));
});

gulp.task('sass', function() {
    gulp.src(['src/**/*.scss'])
        .pipe(sass())
        .pipe(concat('main.css'))
        .pipe(gulp.dest('build'))
        .pipe(livereload(server));
});

gulp.task('html', function() {
    gulp.src(['src/**/*.html'])
        .pipe(gulp.dest('build'))
        .pipe(livereload(server));
});

gulp.task('lr-server', function() {
    server.listen(35729, function(err) {
        if (err) {
            gutil.log(gutil.colors.red('ERROR'), err);
        }
    });
});

gulp.task('server', function(next) {
    var connect = require('connect'),
        server = connect();
    server.use(connect.static('build')).listen(process.env.PORT || 8000, next);
});

gulp.task('build', ['clean', 'html', 'sass', 'scripts']);

gulp.task('default', ['build', 'lr-server', 'server'], function() {
    gulp.watch('src/**/*.html', {maxListeners: 999}, ['html']);
    gulp.watch('src/**/*.coffee', {maxListeners: 999}, ['scripts']);
    gulp.watch('src/**/*.scss', {maxListeners: 999}, ['sass']);
});
