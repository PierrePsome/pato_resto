


// 1 | Declaration des variables

let gulp = require('gulp');
let sass = require('gulp-sass')(require('sass'));
let rename = require('gulp-rename');
let sourcemaps = require('gulp-sourcemaps');
let autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();



// 2 | Mes tâches

gulp.task('sassed', function () {
    return gulp.src('dev/css/*.scss')

        .pipe(sourcemaps.init())

        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))

        .pipe(autoprefixer({cascade: false}))
        .pipe(rename("./styles.min.css"))
        .pipe(sourcemaps.write(''))
        .pipe(gulp.dest('prod/css'));
});

gulp.task('htmled', function () {
    return gulp.src('dev/*.html')
    .pipe(gulp.dest('prod'))
});

gulp.task('jsed', function () {
    return gulp.src('dev/js/*.js')
    .pipe(uglify())
    .pipe(rename("./main.min.js"))
    .pipe(gulp.dest('prod/js'))
});

gulp.task('imged', function () {
    return gulp.src('dev/img/*')
    .pipe(gulp.dest('prod/img'))
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "prod"
        }
    });
});



// 3 | Exécution des tâches

gulp.task('observation', gulp.parallel('sassed','htmled','jsed','imged','browser-sync', function () {
    gulp.watch('dev/css/**/*.scss', gulp.series('sassed'));
    gulp.watch('dev/*.html', gulp.series('htmled'));
    gulp.watch('dev/js/*.js', gulp.series('jsed'));
    gulp.watch('prod/**/*').on('change', browserSync.reload);
}));

gulp.task('default', gulp.series('observation'));


