const gulp = require ('gulp');
const rename = require ('gulp-rename');
const connect = require ('gulp-connect');

function html(){
    return gulp
    .src("./src/html/*.html")
    .pipe(rename(function (path){
        path.extname = ".html"
    }))
    .pipe(gulp.dest("./tmp"))
    .pipe(connect.reload());
}


function watchHTML(){
    return gulp
        .watch("./src/html/*.html", {
            ignoreInitial: false
        }, html);
}

gulp.task("dev", function(done){
    watchHTML();
    connect.server({
        livereload: true, 
        root: "tmp"
    })
    done();
});