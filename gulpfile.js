var gulp = require("gulp"),
    sync = require("browser-sync").create(),
    del = require("del"),
    plugins = require("gulp-load-plugins")({
        scope: ["devDependencies"]
    });

var IS_DEV = true;
gulp.task("html", function () {
    return gulp.src("src/views/*.html")
        .pipe(plugins.htmlExtend())
        .pipe(gulp.dest("dist"))
        .pipe(sync.stream())
});

gulp.task("js", function () {
    return gulp.src("src/scripts/**/*.js")
        .pipe(plugins.concat("app.min.js"))
        .pipe(gulp.dest("dist/js"))

});

gulp.task("images", function () {
    return gulp.src("src/images/**/*.*")
        .pipe(gulp.dest("dist/images"))
});

gulp.task("styles:app", function () {
    return gulp.src("src/styles/app.less")
        .pipe(plugins.plumber())
        .pipe(plugins.less())
        .pipe(plugins.autoprefixer())
        .pipe(plugins.rename({suffix: ".min"}))
        .pipe(gulp.dest("dist/css"))
        .pipe(sync.stream())
});

gulp.task("styles:vendor", function () {
    return gulp.src([
        "node_modules/bootstrap/dist/css/bootstrap.min.css"
    ])
        .pipe(plugins.concat("vendor.min.css"))
        .pipe(gulp.dest("dist/css"))


});

gulp.task("scripts:vendor", function () {
   return gulp.src([
       "node_modules/jquery/dist/jquery.min.js",
       "node_modules/bootstrap/dist/js/bootstrap.min.js"
   ])
       .pipe(plugins.concat("vendor.min.js"))
       .pipe(gulp.dest("dist/js"))
});

gulp.task("fonts:vendor", function () {
    return gulp.src([
        "node_modules/bootstrap/dist/fonts/*"
    ])
        .pipe(gulp.dest("dist/fonts"))


});

gulp.task("clean", function (cb) {
    del.sync("dist");
    cb();
});

gulp.task("build", ["clean"], function () {
    gulp.start(["html", "styles:app","styles:vendor","fonts:vendor","scripts:vendor","js","images"]);
});

gulp.task("watch", ["build"], function () {
    sync.init({
        server: "dist"
    });
    gulp.watch("src/styles/**/*.less", ["styles:app"]);

    gulp.watch("src/views/**/*.html", ["html"]);
    gulp.watch("dist/*.html").on("change", sync.reload())
});

gulp.task("default", ["watch"]);
