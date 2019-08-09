const User = require('../../models/register.model');

const checkUserId = userId => new Promise((resolve, reject) => {
  User.findOne({ _id: userId }, (err, data) => {
    if (err || data === null) {
      reject(new Error('Invalid token.'));
    } else {
      resolve(userId);
    }
  });
});

module.exports = { checkUserId };
