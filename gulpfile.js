/**
 * User: Anderlu
 * Date: 15/7/24
 * Time: 上午10:34
 */
var gulp = require('gulp');
var webserver = require('gulp-webserver');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var react = require('gulp-react');

gulp.task('webserver', function() {
    gulp.src('src')
        .pipe(webserver({
            port:8964,
            livereload: true,
            directoryListing: false,
            open: true,
            fallback: 'index.html'
        }));
});

gulp.task('transformJsx', function() {
    gulp.src('src/**/*.jsx')
        .pipe(react())
        .pipe(gulp.dest('build/'));
});

gulp.task('moveHtml', function(){
    gulp.src('src/**/*.html')
        .pipe(gulp.dest('build/'));
});
gulp.task('moveCss', function(){
    gulp.src('src/**/*.css')
        .pipe(gulp.dest('build/'));
});


gulp.task('browserSync', function () {
    var files = [
        'build/**/*.html',
        'build/**/*.css',
        'build/**/*.js'
    ];

    // Serve files from the root of this project
    browserSync.init(files,{
        open: true,
        port: 8964,
        server: {
            baseDir: "./build"
        }
    });
    //gulp.watch("**/*.html").on("change", browserSync.reload);
    //gulp.watch("**/*.css").on("change", browserSync.reload);
});

gulp.task('watch', function () {
    gulp.watch('src/**/*.jsx', ['transformJsx']);
    gulp.watch('src/**/*.html', ['moveHtml']);
    gulp.watch('src/**/*.css', ['moveCss']);
});

gulp.task('develop', ['transformJsx', 'moveHtml', 'moveCss', 'watch', 'browserSync']);

gulp.task('default',['browserSync']);

//gulp.task('default',['webserver']);