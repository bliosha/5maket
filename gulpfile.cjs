const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

const sass = require('gulp-sass')(require('sass'));

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
gulp.task('html', function () {
    return gulp.src('src/**/*.html')
        .pipe(gulp.dest('dist'));
});
const browserSync = require('browser-sync').create();

gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    });

    gulp.watch('src/sass/**/*.scss', gulp.series('sass')).on('change', browserSync.reload);
    gulp.watch('src/js/**/*.js', gulp.series('scripts')).on('change', browserSync.reload);
    gulp.watch('src/**/*.html', gulp.series('html')).on('change', browserSync.reload);
});


// Головний таск, який запускає лише scripts та images
gulp.task('default', gulp.series('scripts', 'images'));
