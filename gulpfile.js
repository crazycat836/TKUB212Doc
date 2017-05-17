var gulp = require('gulp'),
    jade = require('gulp-jade'),
    clean = require('gulp-clean'),
    runSequence = require('run-sequence');


gulp.task('default', function(callback) {
    runSequence('clean',
        'jade',
        callback);
});

// turn jade into html
gulp.task('jade', function() {
    return gulp.src('src/jades/*.jade')
        .pipe(jade({ pretty: true })) // pip to jade plugin
        .pipe(gulp.dest('src/views')); // tell gulp our output folder
});

// Clean Task
gulp.task('clean', function() {
    return gulp.src(['dist/*', 'src/views/*'], { read: false })
        .pipe(clean());
});
