const gulp = require('gulp');
const connect = require('gulp-connect');

function fonts(){
    return gulp.src('./src/fonts/*')
    .pipe(gulp.dest('tmp/assets/fonts'))
    .pipe(connect.reload());
}

function buildFONTS(){
    return gulp.src('./src/fonts/*')
    .pipe(gulp.dest('dist/assets/fonts'))
}

function watchFONTS (){
    return gulp
        .watch("./src/fonts/*", {
            ignoreInitial: false,
        }, fonts);
}

module.exports = {
    watchFONTS,
    buildFONTS
}