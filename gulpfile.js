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
    gulp.src('src/demo1/*.jsx')
        .pipe(react())
        .pipe(gulp.dest('src/demo1/'));
});

gulp.task('browser-sync', function () {
    var files = [
        'src/**/*.html',
        'src/**/*.css',
        'src/**/*.js'
    ];

    // Serve files from the root of this project
    browserSync.init(files,{
        open: true,
        port: 8964,
        server: {
            baseDir: "./src"
        }
    });

    //gulp.watch("**/*.html").on("change", browserSync.reload);
    //gulp.watch("**/*.css").on("change", browserSync.reload);

});

gulp.task('default',['browser-sync']);

//gulp.task('default',['webserver']);