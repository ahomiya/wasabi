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
    src             : './src',                               // JS - Sources
    dist            : './dist'                               // JS - Distribution
};

// -----------------------------------------------------------------------------
// Packages
var packages        = {

  // JavaScript libraries
  js: {
    utilities: [
      js.src + '/**/*'
    ]
  }

};

// -----------------------------------------------------------------------------
// Build tasks
// Concatenating, minifying, and optimizing files

// Concatenate
gulp.task('js.build.concat', function() {
  return gulp.src(packages.js.utilities)
    .pipe(concat('jquery.utilities.js'))
    .pipe(gulp.dest(js.dist));
});

// Minified
gulp.task('js.build.minify', function() {
  return gulp.src(packages.js.utilities)
    .pipe(concat('jquery.utilities.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(js.dist));
});

// Custom
gulp.task('js.build.custom', function() {
  return gulp.src(packages.js.utilities)
    .pipe(gulp.dest(js.dist));
});
