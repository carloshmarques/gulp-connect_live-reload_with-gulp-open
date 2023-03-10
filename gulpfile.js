'use strict';
// List dependencies here
const { series } = require('gulp');
const gulp = require('gulp');
const connect = require('gulp-connect');
const open = require('gulp-open');


// list variables here

var outputDir = "./";
var inputDir = "./build/";

// list functions  here

function webserver(cb){
  var options = {
    uri: 'http://localhost:8080'
  }
    connect.server({
        root: outputDir,
        livereload: true
    });

    gulp
    .src(outputDir +'index.html')
    .pipe(open(options))
  
    cb();
  };


function html(cb){
    gulp
    .src(inputDir+ '/*.html')
      .pipe(gulp.dest(outputDir))
      .pipe(connect.reload());
  
    cb();
  };



 function watch(cb) {
  var options = {
    uri: 'http://localhost:8080'
  }
    connect.server({
        root: outputDir,
        livereload: true
    });

    gulp
    .src(outputDir +'index.html')
    .pipe(open(options))


    gulp.watch(inputDir+ '*.html', html)
       cb();
  }; 




//// exports here

exports.default = series(
   watch
  )


exports.webserver = webserver
exports.html = html
exports.watch = watch



  function defaultTask(cb) {   

    cb();
 }
 