module.exports = function (grunt) {

  grunt.config.set('browserSync', {
    dev: {
      bsFiles: {
        src: ['views/**/*', 'assets/**/*']
      },
      options: {
        proxy: "localhost:1337",
        watchTask: true,
        online: true,
        minify: false,
        injectChanges: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-browser-sync');
};
