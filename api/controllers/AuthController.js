/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var passport = require('passport');

module.exports = {

  authenticate: function (req, res, next) {
    passport.authenticate('local', function (err, user, info) {
      if (err) return next(err);

      if (!user) {
        return res.view('homepage', {
          username: req.body.username,
          message: info.message
        });
      }

      req.logIn(user, function (err) {
        if (err) return next(err);
        return res.redirect('/chat');
      });
    })(req, res, next);
  },

  signout: function (req, res) {
    req.logout();
    res.redirect('/');
  }
};

