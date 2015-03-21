var bcrypt = require('bcryptjs');

module.exports = {

  hash: function (values, next) {
    bcrypt.hash(values.password, 10, function (err, hash) {
      if (err) {
        return next(err);
      }
      values.password = hash;
      next();
    });
  },

  compare: function (password, hash, next) {
    return bcrypt.compare(password, hash, next);
  }
};
