module.exports = function(grunt) {
  'use strict';
  
  // Project configuration.
  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },

      all: [
        'Gruntfile.js',
        'server.js', 
        'routes/*.js', 
        'test/*.js',
        'public/scripts/**/*.js'
      ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('linter', ['jshint']);

};