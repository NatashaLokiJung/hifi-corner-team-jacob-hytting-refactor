const gulp = require('gulp');
const ejs = require('gulp-ejs');
const rename = require('gulp-rename');
const connect = require('gulp-connect');

function html(){
    return gulp
    .src("./src/html/templates/*.ejs")
    .pipe(ejs())
    .pipe(rename(function (path){
        if(path.basename != "index"){
            path.dirname = path.basename;
            path.basename = "index";
            path.extname = ".html";
        }else{
            path.extname = ".html";

        }
        path.extname = ".html"
    }))
    .pipe(gulp.dest("./tmp"))
    .pipe(connect.reload());
}

function buildHTML(){
    return gulp
    .src("./src/html/templates/*.ejs")
    .pipe(ejs())
    .pipe(rename(function (path){
        if(path.basename != "index"){
            path.dirname = path.basename;
            path.basename = "index";
            path.extname = ".html";
        }else{
            path.extname = ".html";

        }
        path.extname = ".html"
    }))
    .pipe(gulp.dest("./dist"));
}

function watchHTML(){
    return gulp
    // 3 argumenter = string, indstillinger og funktion der skal eksekveres
        .watch("./src/html/**/*.ejs",{
            ignoreInitial: false
        }, html);
}

module.exports = {
    watchHTML,
    buildHTML
}
