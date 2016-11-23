var gulp = require('gulp');
var clean = require('gulp-clean');
var react = require('gulp-react');
var plumber = require('gulp-plumber');
var concatcss = require('gulp-concat-css');
var browserify = require('gulp-browserify');

gulp.task('clean', function(){
    return gulp.src('build')
        .pipe(clean())
});

gulp.task('copy', ['clean'], function(){
    return gulp.src('src/index.html')
        .pipe(plumber())
        .pipe(gulp.dest('build'))
});

gulp.task('copycss', ['clean'], function(){
    return gulp.src('src/css/*.css')
        .pipe(plumber())
        .pipe(gulp.dest('build/css'))
});

gulp.task('copyfont', ['clean'], function(){
    return gulp.src('src/fonts/*.*')
        .pipe(plumber())
        .pipe(gulp.dest('build/fonts'))
});

gulp.task('concatcss', ['clean', 'copycss'], function(){
    return gulp.src('build/css/*.css')
        .pipe(plumber())
        .pipe(concatcss("index.css"))
        .pipe(gulp.dest('build/css/'))
});

gulp.task('copyimgUi', ['clean'], function(){
    return gulp.src('src/css/images/*.*')
        .pipe(plumber())
        .pipe(gulp.dest('build/css/images'))
});

gulp.task('copyjs', ['clean'], function(){
    return gulp.src('src/*.js')
        .pipe(plumber())
        .pipe(gulp.dest('build'))
});

gulp.task('copylib', ['clean'], function(){
    return gulp.src('src/lib/*.js')
        .pipe(plumber())
        .pipe(gulp.dest('build/lib'))
});

gulp.task('react',['copy', 'clean'], function(){
    return gulp.src('src/component/*.jsx')
        .pipe(react())
        .pipe(gulp.dest('build/js'))
});

//gulp.task('browserify', ['react'], function(){
//    return gulp.src('build/js/index.js')
//        .pipe(browserify())
//        .pipe(gulp.dest('build'))
//});
gulp.task( 'browserify',['react'], function() {
    return gulp.src( 'build/js/app.js' )
        .pipe( browserify() )
        .pipe( gulp.dest( 'build/js' ) )
    ;
});

gulp.task('default', ['clean', 'copy', 'copyjs', 'copyfont', 'copyimgUi','copycss', 'concatcss', 'react', 'copylib', 'browserify'])
