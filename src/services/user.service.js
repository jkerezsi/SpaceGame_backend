const User = require('../models/try');

const postUser = (username, password) => new Promise((resolve, reject) => {
  const newUser = new User({ username, password });

  newUser.save((err) => {
    if (err) {
      reject(err);
    } else {
      resolve();
    }
  });
});

module.exports = { postUser };
