// gulp
const {src, dest, parallel, watch} = require('gulp');
const rename = require('gulp-rename');
// layout
const pug = require('gulp-pug');
// styles
const sass = require('gulp-sass')(require('sass'));
    const autoprefixer = require('gulp-autoprefixer');
    const sourcemaps = require('gulp-sourcemaps');
    
// scripts
// const concat = require('gulp-concat');
// const uglify = require('gulp-uglify');

// svg
const svgmin = require('gulp-svgmin');

function svg(done) {
    src('dev/img/*.svg')
    .pipe(svgmin())
    .pipe(dest('public/images'))
    .pipe(browserSync.stream());
    done()
}

// browser-sync
const browserSync = require('browser-sync').create();

//images
const webp = require('gulp-webp');

function browsersync() {
    browserSync.init({ 
        server: { baseDir: 'public' }
        // notify: false, 
        // online: true 
    })
}

function style() {
    return src('dev/sass/*.sass')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({overrideBrowserslist: ['last 15 versions']}))
    .pipe(sourcemaps.write())
    .pipe(dest('public/'))
    .pipe(browserSync.stream());
}

// SIMPLE COPY
function copyfonts() {
    return src('./dev/fonts/*.**')
    .pipe(dest('./public/fonts'))
}
function copyFavicon() {
    return src('./dev/fav/**.*')
    .pipe(dest('./public/fav'))
}
function libs() {
    return src('./dev/libs/**.*')
    .pipe(dest('./public/libs'))
    .pipe(browserSync.stream());
}

// PUG
function views() {
return src('./dev/*.pug')
    .pipe(
    pug({
        doctype: 'html',
        pretty: true
    })
    )
    .pipe(dest('./public'))
    .pipe(browserSync.stream());
};

function scripts() {
    return src('dev/*.js')
    // .pipe(uglify())
    // .pipe(concat('scripts.min.js'))
    .pipe(dest('public/'))
    .pipe(browserSync.stream());
    }

function images(){
    return src(['./dev/img/**/*.png', './dev/img/**/*.jpg'])
        .pipe(webp())
        .pipe(dest('public/images/'))
        .pipe(browserSync.stream());
    }

function copy_libs(){
    return src('./dev/libs/**/*.*')
        .pipe(dest('public/libs/'))
        }

function watchers() {
    watch(['dev/*.pug', 'dev/templates/**/*.pug'], views);
    // watch('public/page-shtukaturka.html', copypage_shtukaturka);
    // watch('public/page-stajka.html', copypage_stajka);
    watch('dev/img/**/*', images);
    watch('dev/img/*.svg', svg);
    watch(['dev/sass/*.sass'], style);
    watch('dev/libs/**/*', copy_libs);
    watch('dev/*.js', scripts);
}

exports.views = views;
exports.libs = libs;
exports.style = style;
exports.images = images;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.copyfonts = copyfonts;
exports.svg = svg;
exports.copy_libs = copy_libs;

exports.default = parallel(views, copyfonts, scripts, style, svg, libs, copy_libs, images, copyFavicon, watchers, browsersync);
