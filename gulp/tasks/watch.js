var vargulp = require('gulp');
var varwatch = require('gulp-watch');
var varbrowsersync = require('browser-sync').create();

vargulp.task('default', function () {
    console.log("Yippee!!!  You have created a gulp task.");
});

vargulp.task('html', function () {
    console.log("You have just made changes to index.html.");
});

vargulp.task('watch', function () {

    varbrowsersync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });
    
    varwatch('./app/index.html', function () {
        varbrowsersync.reload();
    });

    varwatch('./app/assets/styles/**/*.css', function () {
        vargulp.start('cssInjection');
    });
    
    vargulp.task('cssInjection', ['styles'], function () {
        return vargulp.src('./app/temp/styles/styles.css')
            .pipe(varbrowsersync.stream());
    });

});

