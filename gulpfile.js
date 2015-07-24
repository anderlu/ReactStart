/**
 * User: Anderlu
 * Date: 15/7/24
 * Time: 上午10:34
 */
var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver', function() {
    gulp.src('src')
        .pipe(webserver({
            livereload: true,
            directoryListing: true,
            open: true
        }));
});

gulp.task('default',['webserver']);