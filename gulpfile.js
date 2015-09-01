'use strict';
var gulp = require('gulp');
var fs = require('fs-extra');
var path = require('path');

gulp.task('clean', function (done) {
    fs.remove(path.join(__dirname, '/build'), done);
});

gulp.task('build', ['clean'], function () {
    var webpack = require('gulp-webpack');

    return gulp.src('')
        .pipe(webpack({
            target: 'node',
            context: path.join(__dirname, '/test/'),
            entry: './test.js',
            output: {
                path: path.join(__dirname, '/build/'),
                filename: 'test.js',
            },
        }))
        .pipe(gulp.dest('build/'));
});

gulp.task('test', ['build'], function () {
    var mocha = require('gulp-mocha');
    require('should');

    return gulp.src('build/*.js', {read: false})
        .pipe(mocha());
});

gulp.task('default', ['test']);
