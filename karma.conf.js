// Karma configuration
// Generated on Tue Dec 16 2014 14:43:48 GMT-0700 (MST)

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'javascripts/vendor/jquery.min.js',
      'javascripts/vendor/handlebars.js',
      'javascripts/vendor/ember.js',
      'javascripts/vendor/ember-data.js',
      'javascripts/application.js',
      'javascripts/router.js',
      'spec/**/*_spec.js'
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'javascripts/templates/**/*.handlebars' : 'ember'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true,
    plugins: [
      'karma-ember-preprocessor',
      'karma-jasmine',
      'karma-phantomjs-launcher'
    ],
  });
};
