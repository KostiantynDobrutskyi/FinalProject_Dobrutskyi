const {src, dest, watch, parallel, series} = require('gulp'),
    sync = require("browser-sync").create(),
    del = require("del"),
    plugins = require("gulp-load-plugins")({
        scope: ["devDependencies"]
    });


function html() {
    return src("src/views/*.html")
        .pipe(plugins.htmlExtend())
        .pipe(dest("dist"))
        .pipe(sync.stream())
}

function js() {
    return src("src/scripts/**/*.js")
        .pipe(plugins.concat("app.min.js"))
        // .pipe(plugins.uglify())
        .pipe(dest("dist/js"))
        .pipe(sync.stream())
}

function scriptsVendor() {
    return src([
        "node_modules/jquery/dist/jquery.min.js",
        "node_modules/knockout/build/output/knockout-latest.js",
        "node_modules/bootstrap/dist/js/bootstrap.min.js"
    ])
        .pipe(plugins.concat("vendor.min.js"))
        .pipe(plugins.uglify())
        .pipe(dest("dist/js"))
}

function stylesApp() {
    return src("src/styles/app.less")
        .pipe(plugins.plumber())
        .pipe(plugins.less())
        .pipe(plugins.autoprefixer())
        .pipe(plugins.rename({suffix: ".min"}))
        .pipe(plugins.cssnano())
        .pipe(dest("dist/css"))
        .pipe(sync.stream())
}

function stylesVendor() {
    return src([
        "node_modules/bootstrap/dist/css/bootstrap.min.css",
        "node_modules/slick-carousel/slick/slick.css",
        "node_modules/slick-carousel/slick/slick-theme.css",
        "node_modules/simplelightbox/dist/simplelightbox.min.css",
        "node_modules/toastr/build/toastr.min.css"
    ])
        .pipe(plugins.concat("vendor.min.css"))
        .pipe(dest("dist/css"))
}

function loaderVendor() {
    return src([
        "node_modules/slick-carousel/slick/ajax-loader.gif"
    ])
        .pipe(dest("dist/css"))
}

function plugin() {
    return src([
        "node_modules/slick-carousel/slick/slick.min.js",
        "node_modules/simplelightbox/dist/simple-lightbox.min.js",
        "node_modules/toastr/build/toastr.min.js",
        "node_modules/jquery-validation/dist/jquery.validate.min.js"
    ])
        .pipe(plugins.concat("plugins.min.js"))
        .pipe(dest("dist/js/plugins"))
}

function fontsVendor() {
    return src([
        "node_modules/bootstrap/dist/fonts/*"
    ])
        .pipe(dest("dist/fonts"))
}

function fontsPlugins() {
    return src([
        "node_modules/slick-carousel/slick/fonts/*"
    ])
        .pipe(dest("dist/css/fonts"))
}

function images() {
    return src(
        ["src/images/**/*.*"]
    )
        .pipe(dest("dist/images"))
}

function json() {
    return src([
        "src/*.json"
    ])
        .pipe(dest("dist"))
}


function clean(cb) {
    del.sync("dist");
    cb();
}

function watcher() {
    sync.init({
        server: "dist"
    });
    watch("src/styles/**/*.less", parallel(stylesApp));

    watch("src/scripts/*.js", parallel(js));

    watch("src/views/**/*.html", parallel(html));

}

exports.default = series(clean, parallel(
    html,
    js,
    stylesVendor,
    scriptsVendor,
    stylesApp,
    loaderVendor,
    plugin,
    fontsVendor,
    fontsPlugins,
    images,
    json), watcher);