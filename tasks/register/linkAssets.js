module.exports = function (grunt) {
  grunt.registerTask('linkAssets', [
    'sails-linker:devJs',
    'sails-linker:devStyles',
    'sails-linker:devTpl',
    'sails-linker:devJsHandlebars',
    'sails-linker:devStylesHandlebars',
    'sails-linker:devTplHandlebars'
  ]);
};
