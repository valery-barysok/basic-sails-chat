module.exports = function (grunt) {
  grunt.registerTask('prod', [
    'compileAssets',
    'concat',
    'uglify',
    'cssmin',
    'sails-linker:prodJs',
    'sails-linker:prodStyles',
    'sails-linker:devTpl',
    'sails-linker:prodJsHandlebars',
    'sails-linker:prodStylesHandlebars',
    'sails-linker:devTplHandlebars'
  ]);
};
