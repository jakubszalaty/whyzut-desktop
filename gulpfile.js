'use strict'

const gulp = require('gulp')
const vulcanize = require('gulp-vulcanize')

gulp.task('vulcanize', function () {
    return gulp.src('webelements/main-app/main-app.html')
        .pipe(vulcanize({
            stripComments: true,
            inlineScripts: true,
            inlineCss: true
        }))
        .pipe(gulp.dest(`${__dirname}/dist/`))
})

gulp.task('moveAssets', function () {
    return gulp.src([
        'bower_components/webcomponentsjs/webcomponents-lite.js',
        'bower_components/moment/moment.js',
        'bower_components/moment/min/moment-with-locales.js',
        'bower_components/moment/locale/pl.js',
        'bower_components/jquery/dist/jquery.js',
    ])
        .pipe(gulp.dest(`${__dirname}/dist/`))
})

gulp.task('default', ['vulcanize', 'moveAssets'])
