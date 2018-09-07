var gulp = require('gulp'),
    pug = require('gulp-pug'),
    clean = require('gulp-clean'),
    runSequence = require('run-sequence');


gulp.task('default', function(callback) {
    runSequence('clean',
        'pug',
        callback);
});

// turn jade into html
gulp.task('pug', function() {
    return gulp.src('src/pugs/*.pug')
        .pipe(pug({ pretty: true })) // pip to pug plugin
        .pipe(gulp.dest('src/views')); // tell gulp our output folder
});

// Clean Task
gulp.task('clean', function() {
    return gulp.src(['dist/*', 'src/views/*'], { read: false })
        .pipe(clean());
});
