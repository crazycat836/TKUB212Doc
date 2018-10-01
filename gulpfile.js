const gulp = require('gulp');
const pug = require('gulp-pug');
const cleanup = require('gulp-clean');

// turn jade into html
gulp.task('pug', function () {
    return gulp.src('src/pugs/*.pug')
        .pipe(pug({pretty: true})) // pip to pug plugin
        .pipe(gulp.dest('src/views')); // tell gulp our output folder
});


// Clean Task
gulp.task('clean', function () {
    return gulp.src(['dist/*', 'src/views/*'], {read: false})
        .pipe(cleanup());
});

gulp.task('default', gulp.series('clean', 'pug'));
