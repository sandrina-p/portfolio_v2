var gulp = require('gulp'),

    //general plugins
    rename = require('gulp-rename'),
    argv = require('yargs').argv, // flags to command-line
    gulpif = require('gulp-if'), // execute some task conditions (ex dev vs prod)
    gutil = require('gulp-util'), // better error logs like pump
    changed = require('gulp-changed'), // NOTE: only compiles what was changed
    cached = require('gulp-cached'), // NOTE: i'm not sure if this is working correctly
    stripDebug = require('gulp-strip-debug'), //bye bye console.logs
    chalk = require('chalk'), //because after all i'm a designer and i need some colors on terminal x)

    php2html = require("gulp-php2html"), //turn php into static files to upload on github

    browserSync = require('browser-sync'), // i'm not sure how this and connect-php works ...
    php = require('gulp-connect-php'), // ... but you can read more about it here -> http://stackoverflow.com/a/37040763/4737729
    reload = browserSync.reload;

    //scss stuff
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),
    sassInheritance = require('gulp-sass-multi-inheritance'), // watch partials
    importCss = require('gulp-import-css'), //combine css imports (not scss)

    //javascript plugins
    uglify = require('gulp-uglify'),
    include = require("gulp-include"), //append js
    babel = require('gulp-babel'); // ES2015 rocks

var folderScripts = 'assets/scripts',
    folderStyles = 'assets/styles',
    srcScss = [ folderStyles+'/**/*.scss', '!'+folderStyles+'/**/_*.scss'];



function logEnv() {
    var chWarn = chalk.bold.red,
        chGood = chalk.bold.green,
        envv = argv.production ? chGood('production') : chWarn('development');
    console.log('environment: ' + envv);
}

// ------------ tasks ------------- //

gulp.task('scripts', function(){
    console.log('start task scripts');
    gulp.src([
            folderScripts+'/**/*.js',
            '!'+folderScripts+'/**/_*.js',
            '!'+folderScripts+'/**/*.min.js'
        ])
        //TODO find a way to not duplicate this *1
        .pipe(include())
        .pipe(babel({
            presets: ["es2015-script"],
            compact: false //use uglify
        }))

        // .on('error', console.log)
        .pipe(gulpif(argv.production, stripDebug()))
        .pipe(gulpif(argv.production,
            uglify().on('error', gutil.log)
        ))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulpif(global.isWatching, cached('cachedPlace')))
        .pipe(gulp.dest( function(file) { return file.base; } ));
        //end TODO find a way to not duplicate this *1
    logEnv();
});


// sass, rename .min, autoprefixer, cleanCSS minimize
gulp.task('scss', function(){
    console.log('start task scss');
    gulp.src(srcScss)
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(rename({ suffix: '.min' }))
        .pipe(autoprefixer({
            browsers: ['last 2 version', 'safari 6', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'],
            cascade: true
        }))
        .pipe(importCss())
        .pipe(cleanCSS({compatibility: 'ie9'}))
        .pipe(gulpif(global.isWatching, cached('cachedPlace')))
        .pipe(gulp.dest(folderStyles))
        .pipe(browserSync.stream()); //TODO-SYNC
    logEnv();
});


// watch for partials when they are changed to change their parent.
gulp.task('scssPartials', function() {
    return gulp.src('assets/**/*.scss')
        .pipe(gulpif(global.isWatching, cached(srcScss))) //filter out unchanged scss files, only works when watching
        .pipe(sassInheritance({dir: 'assets'}).on('error', gutil.log)); //find files that depend on the files that have changed
});

gulp.task('min-all', ['scripts', 'scss'] );

gulp.task('gen-html', function(){
    gulp.src("index.php")
    .pipe(php2html())
    .pipe(gulp.dest(""));
});


gulp.task('php', function() {
    php.server({ base: 'http://localhost:8888/git/s008080', port: 8888, keepalive: true});
});

gulp.task('browser-sync',['php'], function() {
    browserSync({
        proxy: '127.0.0.1:8888',
        port: 8888,
        notify: false,
        open: false,
        ghostMode: false
    });

    gulp.watch(folderStyles+"/**/*.scss", ['scss']);
    gulp.watch(["*.phtml", "*.php"]).on('change', browserSync.reload);
});


gulp.task('setWatch', function() {
    global.isWatching = true;
});

gulp.task('watch', ['setWatch', 'scssPartials', 'browser-sync'], function(){
    gulp.watch([
            folderScripts+'/**/*.js',
            '!'+folderScripts+'/**/*.min.js'
        ], { usePolling: true }, ['scripts']);
    gulp.watch(['**/*.php'], ['gen-html']);
});



gulp.task('tasks', function(){
        var chTitle = chalk.bold.blue;
        var chBold = chalk.bold;
        console.log(chBold('Gulp tasks available')+"\n"
            +chTitle('$ gulp watch')+"\n"
            	+"     watch .js (!*.min.js, !_*.js) modifications on assets/scripts and apply scripts task.  Use '--production' to also minify them.\n"
                +"     watch .scss (!_*.scss) modifications on assets/styles and apply styles task. \n"
                +"     also executes gulp gen-html \n"

            +"\n"+chTitle('$ gulp scripts')+"\n"
            	+"     create .min of all .js (!*.min.js, !_*.js) on assets/scripts \n"
            	+"     Use '--production' to also minify and delete console_logs \n"

            +"\n"+chTitle('$ gulp styles')+"\n"
            	+"     compile and minify all scss (!_*.scss) on assets/styles to .min.css \n"

            // +"\n"+chTitle('$ gulp min-this --js [path/to/file.js]')+"\n"
            // 	+"     minify only a specific .js file. Useful for js on assets/plugins \n"
            //
            // +"\n"+chTitle('$ gulp min-this --scss [path/to/file.scss]')+"\n"
            // 	+"     compile only a specific .scss file. Useful for scss on assets/plugins \n"
            //
            // +"\n"+chTitle('$ gulp min-this --jsscss [path/to/folder]')+"\n"
            // 	+"     compile all .js files inside that specific folder. \n"
            //
            // +"\n"+chTitle('$ gulp min-this --scssfolder [path/to/folder]')+"\n"
            // 	+"     compile all .scss files inside that specific folder. \n"

            +"\n"+chTitle('$ gulp min-all')+"\n"
            	+"     run scripts and styles tasks. use '--production' to also minify them.\n"
            +"\n"+chTitle('$ gulp gen-html')+"\n"
            	+"     compile index.php to index.html. because bitbucket doesn't like php.\n"

        );
});

gulp.task('default', function() {
        console.log('hello person. type "gulp tasks" to know what tasks are available');
});
