var gulp = require('gulp'),

    //general plugins
    rename = require('gulp-rename'),
    argv = require('yargs').argv, // flags to command-line
    gulpif = require('gulp-if'), // execute some task conditions (ex dev vs prod)
    gutil = require('gulp-util'), // better error logs like pump
    changed = require('gulp-changed'), // only compiles what was changed
    cached = require('gulp-cached'), // DELETE used on scss - but i didn't understand what's the advantage on it.
    stripDebug = require('gulp-strip-debug'), //bye bye console.logs
    chalk = require('chalk'), //because after all i'm a designer and i need some colors on terminal x)

    browserSync = require('browser-sync'), // i'm not sure how this and connect-php works ...
    php = require('gulp-connect-php'), // ... but you can read more about it here -> http://stackoverflow.com/a/37040763/4737729

    //scss stuff
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'), //minify
    autoprefixer = require('gulp-autoprefixer'),
    sassInheritance = require('gulp-sass-multi-inheritance'), //watch partials
    importCss = require('gulp-import-css'), //combine css imports (not scss)

    //javascript plugins
    uglify = require('gulp-uglify'),
    include = require("gulp-include"), //append js
    babel = require('gulp-babel'); // better minimize


var reload = browserSync.reload;

var folderScripts = 'assets/scripts',
    folderStyles = 'assets/styles';



// ------------ tasks ------------- //

//////////////////
// task scripts //
//////////////////
gulp.task('scripts', function(){
    console.log('start task scripts');
    gulp.src([
            folderScripts+'/**/*.js',
            '!'+folderScripts+'/**/_*.js',
            '!'+folderScripts+'/**/*.min.js'
        ])
        //TODO find a way to not duplicate this *1
        .pipe(include())
            .on('error', console.log)
        .pipe(babel({
            presets: ["es2015-script"],
            compact: false //use uglify
        }))
        .pipe(gulpif(argv.production, stripDebug()))
        .pipe(gulpif(argv.production,
            uglify({
                compress: {
                    // drop_console: true, //is better stripDebug()
                    hoist_funs: false
                }
            }).on('error', gutil.log)
        ))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulpif(global.isWatching, cached('cachedPlace')))
        .pipe(gulp.dest( function(file) { return file.base; } ));
        //end TODO find a way to not duplicate this *1

    var envv = argv.production ? 'production' : 'development';
    console.log('environment: ' + envv);
});


////////////////
// task scss  //
////////////////
// sass, rename .min, autoprefixer, cleanCSS minimize
gulp.task('scss', function(){
    console.log('start task scss');
    gulp.src([
            folderStyles+'/**/*.scss',
            '!'+folderStyles+'/**/_*.scss'
        ])
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
    var envv = argv.production ? 'production' : 'development';
    console.log('environment: ' + envv);
});


////////////////////////
// task scssPartials  //
////////////////////////
// watch for partials when they are changed to change their parent.
gulp.task('scssPartials', function() {
    return gulp.src('assets/**/*.scss')
        .pipe(gulpif(global.isWatching, cached('scss'))) //filter out unchanged scss files, only works when watching
        .pipe(sassInheritance({dir: 'assets'}).on('error', gutil.log)); //find files that depend on the files that have changed
});


///////////////////
// task min-this //
///////////////////
// minify a specific file or folder (js or scss)
gulp.task('min-this', function(){
    //command line: $ gulp min-this --js [path/to/file.js]
    //command line: $ gulp min-this --scss [path/to/file.scss]
    //command line: $ gulp min-this --jsfolder [path/to/folder]
    ////command line: $ gulp min-this --scssfolder [path/to/folder]

    if ( !argv.js && !argv.scss && !argv.jsfolder && !argv.scssfolder) {
        console.log("UPS! You didnt tell me what file should I minify. Use 'gulp min-this --js [path/to/file.js]' or 'gulp min-this --scss [path/to/file.scss]' ");
        return false;
    }

    if (argv.js || argv.jsfolder) {
        gulp.src([
            argv.js ? argv.js
            : argv.jsfolder+'/**/*.js',
            '!'+argv.jsfolder+'/**/_*.js',
            '!'+argv.jsfolder+'/**/*.min.js'
            ])
            //TODO find a way to not duplicate this *1
            .pipe(include())
                .on('error', console.log)
            .pipe(babel({
                "presets": ["es2015-script"],
                compact: false //use uglify()
            }))
            .pipe(stripDebug())
            .pipe(uglify({
                compress: {
                    // drop_console: true, //is better stripDebug()
                    hoist_funs: false
                }
            }).on('error', gutil.log))
            .pipe(rename({ suffix: '.min' }))
            .pipe(gulp.dest( function(file) { return file.base; } ));
            //end TODO find a way to not duplicate this *1
        var miniffied = argv.js ? argv.js : argv.jsfolder;
        console.log(miniffied + " minified");
    }

    if (argv.scss || argv.scssfolder) {
        gulp.src([
            argv.scss ? argv.scssfolder
            : argv.scssfolder+'/**/*.scss',
            '!'+argv.scssfolder+'/**/_*.scss',
            ])
            .pipe(sass.sync().on('error', sass.logError))
            .pipe(rename({ suffix: '.min' }))
            .pipe(autoprefixer({
                browsers: ['last 2 version', 'safari 6', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'],
                cascade: true
            }))
            .pipe(importCss())
            .pipe(cleanCSS({compatibility: 'ie9'}))
            .pipe(gulp.dest( function(file) { return file.base; } ));

        var miniffied = argv.scss ? argv.scss : argv.scssfolder;
        console.log(argv.scss + " minified");
    }
});


/////////////////////
// task min-all //
/////////////////////
gulp.task('min-all', ['scripts', 'scss'] );



///////////////////////////
// task php&browser-sync //
///////////////////////////
gulp.task('php', function() {
    php.server({ base: 'http://localhost:8888/git/personal-sandrina-p/_main/v3/', port: 8888, keepalive: true});
});

gulp.task('browser-sync',['php'], function() {
    browserSync({
        proxy: '127.0.0.1:8888',
        port: 8888,
        open: true,
        notify: false
    });

    //watch for all scss, even on plugins folder
    gulp.watch("assets/**/*.scss", ['scss']);
    //watch all php and phtml files to refresh the page
    gulp.watch(["*.php", "*.phtml"]).on('change', browserSync.reload);
});

///////////////////
// task setWatch //
///////////////////
// apply some .pipe() only if global.isWatching == true
gulp.task('setWatch', function() {
    global.isWatching = true;
});

////////////////
// task watch //
////////////////                                   //TODO-SYNC
gulp.task('watch', ['setWatch', 'scssPartials', 'browser-sync'], function(){
    gulp.watch([
            folderScripts+'/**/*.js',
            '!'+folderScripts+'/**/*.min.js'
        ], { usePolling: true }, ['scripts']);
    gulp.watch(['**/*.php', '**/*.phtml'], { usePolling: true }, [reload]); //TODO-SYNC

    //TODO-SYNC, start block
    // gulp.watch([
    //         folderStyles+'/**/*.scss'
    //     ], ['scss']);
    //TODO-SYNC, end block
});



gulp.task('tasks', function(){
        var chTitle = chalk.bold.blue;
        var chBold = chalk.bold;
        console.log(chBold('Gulp tasks available')+"\n"
            +chTitle('$ gulp watch')+"\n"
            	+"     watch .js (!*.min.js, !_*.js) modifications on assets/scripts and apply scripts task.  Use '--production' to also minify them.\n"
                +"     watch .scss (!_*.scss) modifications on assets/styles and apply styles task. \n"

            +"\n"+chTitle('$ gulp scripts')+"\n"
            	+"     create .min of all .js (!*.min.js, !_*.js) on assets/scripts \n"
            	+"     Use '--production' to also minify and delete console_logs \n"

            +"\n"+chTitle('$ gulp styles')+"\n"
            	+"     compile and minify all scss (!_*.scss) on assets/styles to .min.css \n"

            +"\n"+chTitle('$ gulp min-this --js [path/to/file.js]')+"\n"
            	+"     minify only a specific .js file. Useful for js on assets/plugins \n"

            +"\n"+chTitle('$ gulp min-this --scss [path/to/file.scss]')+"\n"
            	+"     compile only a specific .scss file. Useful for scss on assets/plugins \n"

            +"\n"+chTitle('$ gulp min-this --jsscss [path/to/folder]')+"\n"
            	+"     compile all .js files inside that specific folder. \n"

            +"\n"+chTitle('$ gulp min-this --scssfolder [path/to/folder]')+"\n"
            	+"     compile all .scss files inside that specific folder. \n"

            +"\n"+chTitle('$ gulp min-all')+"\n"
            	+"     run scripts and styles tasks. use '--production' to also minify them.\n"
        );
});

//////////////////
// task default //
//////////////////
// gulp.task('default', ['watch'] );
gulp.task('default', function() {
        console.log('hello person. type "gulp tasks" to know what tasks are available');
});
