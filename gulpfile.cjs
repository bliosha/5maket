const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

gulp.task('scripts', function () {
    return gulp.src('src/js/**/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('images', function () {
    return gulp.src('src/assets/img/**/*')
        .pipe(gulp.dest('dist/images'));
});

// Головний таск, який запускає лише scripts та images
gulp.task('default', gulp.series('scripts', 'images'));
