/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {

    name: {
      type: 'string',
      required: true,
      unique: true
    },

    password: {
      type: 'string',
      required: true
    },

    checkPassword: function(password, next) {
      return PasswordService.compare(password, this.toObject().password, next);
    }
  },

  beforeCreate: function(values, cb) {
    PasswordService.hash(values, cb);
  }
};
