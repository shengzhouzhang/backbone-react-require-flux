module.exports = function(grunt) {
  'use strict';
  
  // Project configuration.
  grunt.initConfig({
    jsx: {
      client: {
        src: 'public/scripts/components/tooltip.jsx',
        dest: 'public/scripts/components/tooltip.js'
      }
    },
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

  grunt.loadNpmTasks('grunt-jsx');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('linter', ['jshint']);

};