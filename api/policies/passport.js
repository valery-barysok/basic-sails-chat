/**
 * passport
 *
 * @module      :: Policy
 * @description :: Simple policy that initializes passport.js to use
 *
 * @docs        :: http://sailsjs.org/#!documentation/policies
 *
 */

var passport = require('passport');

module.exports = function (req, res, next) {
  passport.initialize()(req, res, function () {
    passport.session()(req, res, function () {
      res.locals.user = req.user;
      return next();
    });
  });
};
