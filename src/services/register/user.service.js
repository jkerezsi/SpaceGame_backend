const User = require('../../models/register.model');

const postUser = (username, password) => new Promise((resolve, reject) => {
  const newUser = new User({ username, password });

  newUser.save((err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});

module.exports = { postUser };
