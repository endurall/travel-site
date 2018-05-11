var vargulp = require('gulp');
var varpostcss = require('gulp-postcss');
var varautoprefixer = require('autoprefixer');
var varcssvars =  require('postcss-simple-vars');
var varcssnested = require('postcss-nested');
var varcssimport = require('postcss-import');
var varcssmixins = require('postcss-mixins');

vargulp.task('styles', function () {
    return vargulp.src('./app/assets/styles/styles.css')
        .pipe(varpostcss([varcssimport, varcssmixins, varcssvars, varcssnested, varautoprefixer]))
        .on('error', function (errorInfo) {
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(vargulp.dest('./app/temp/styles'));
});