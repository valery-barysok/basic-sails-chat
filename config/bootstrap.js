/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function (cb) {

  var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findOne(id, done);
  });

  passport.use(new LocalStrategy(
    function (name, password, done) {
      User.findOneByName(name)
        .then(function (user) {
          if (!user) {
            return [User.create({
              name: name,
              password: password
            })];
          }

          return [user];
        })
        .spread(function (user) {
          if (!user) {
            return done(null, false, { message: 'Unknown user ' + name });
          }
          user.checkPassword(password, function (err, res) {
            if (err) {
              return done(err);
            }
            if (!res) {
              return done(null, false, { message: 'Invalid password' });
            }
            done(null, user);
          })
        })
        .catch(done);
    }
  ));

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();
};
