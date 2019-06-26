const usernameLengthChecker = (username, password) => new Promise((resolve, reject) => {
  if (password.length >= 1 && username.length < 1) {
    reject(new Error('Username is required.'));
  } else {
    resolve();
  }
});

module.exports = { usernameLengthChecker };
