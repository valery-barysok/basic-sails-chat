module.exports = function (grunt) {
  grunt.registerTask('linkAssetsBuild', [
    'sails-linker:devJsRelative',
    'sails-linker:devStylesRelative',
    'sails-linker:devTpl',
    'sails-linker:devJsRelativeHandlebars',
    'sails-linker:devStylesRelativeHandlebars',
    'sails-linker:devTplHandlebars'
  ]);
};
