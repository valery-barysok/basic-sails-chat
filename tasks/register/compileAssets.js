module.exports = function (grunt) {
  grunt.registerTask('compileAssets', [
    'bower:install',
    'clean:dev',
    'jst:dev',
    'less:dev',
    'less:bootstrap',
    'copy:dev',
    'coffee:dev'
  ]);
};
