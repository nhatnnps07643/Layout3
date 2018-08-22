module.exports = function(gulp, $, browserSync) {
    gulp.task('copy-circle-progress', function() {
        return gulp.src([
                './bower_components/jquery-circle-progress/dist/circle-progress.min.js',
            ])
            .pipe(gulp.dest('./dist/js'));
    });
};