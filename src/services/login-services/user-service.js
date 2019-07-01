const { Login } = require('../../models/login-models/login');
const { User } = require('../../models/login-models/user');

const searchUsernameAndPassword = (username, password) => new Promise((resolve, reject) => {
  Login.findOne({
    username,
    password,
  },
  (err, loginFound) => {
    if (loginFound <= 0) {
      reject(new Error('Username or password is incorrect.'));
    } else {
      resolve(new User(loginFound._id.toString()));
    }
  });
});

module.exports = { searchUsernameAndPassword };
