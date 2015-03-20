module.exports = function (grunt) {
  grunt.registerTask('syncAssets', [
    'jst:dev',
    'less:dev',
    'less:bootstrap',
    'sync:dev',
    'coffee:dev'
  ]);
};
