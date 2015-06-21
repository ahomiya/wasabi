// Plugin dependencies
var gulp            = require('gulp'),                        // Gulp
    concat          = require('gulp-concat'),                 // Concatinate
    uglify          = require('gulp-uglify')                  // Minify

// -----------------------------------------------------------------------------
// Configurations
var packages        = './packages'                            // Packages

// -----------------------------------------------------------------------------
// Globs
var js              = {
    src             : './src/toolkit',                        // Sources
    dist            : './dist/toolkit'                        // Distribution
};

// -----------------------------------------------------------------------------
// Packages
var packages        = {
  js                : js.src + '/**/*'                        // JS
};

// -----------------------------------------------------------------------------
// Build tasks
// Concatenating, minifying, optimizing and organizing files

// Concatenate
gulp.task('build:js.concat', function() {
  return gulp.src(packages.js)
    .pipe(concat('jquery.utilities.js'))
    .pipe(gulp.dest(js.dist));
});

// Minified
gulp.task('build:js.minify', function() {
  return gulp.src(packages.js)
    .pipe(concat('jquery.utilities.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(js.dist));
});

// Custom
gulp.task('build:js.custom', function() {
  return gulp.src(packages.js)
    .pipe(gulp.dest(js.dist));
});
