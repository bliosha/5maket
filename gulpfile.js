const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

// Задача для компіляції SCSS в CSS
gulp.task('sass', function () {
    return gulp.src('src/sass/**/*.scss')  // Всі SCSS файли в папці src/sass
        .pipe(sass().on('error', sass.logError))  // Компиляція SCSS в CSS з логуванням помилок
        .pipe(autoprefixer())  // Додаємо автопрефікси
        .pipe(cleanCSS())  // Мінімізуємо CSS
        .pipe(gulp.dest('dist/css'));  // Зберігаємо згенерований CSS в dist/css
});

// Задача для мінімізації JS файлів
gulp.task('scripts', function () {
    return gulp.src('src/js/**/*.js')
        .pipe(concat('main.js'))  // Об'єднуємо всі JS файли в один
        .pipe(uglify())  // Мінімізуємо JS
        .pipe(gulp.dest('dist/js'));  // Зберігаємо згенерований JS в dist/js
});

// Задача для копіювання зображень
gulp.task('images', function () {
    return gulp.src('src/images/**/*')
        .pipe(gulp.dest('dist/images'));  // Копіюємо зображення в dist/images
});

// Головна задача для запуску всіх задач
gulp.task('default', gulp.series('sass', 'scripts', 'images'));
