const passwordMinimumChecker = (username, password) => new Promise((resolve, reject) => {
  if (password.length < 8) {
    reject(new Error('Password must be at least 8 characters.'));
  } else {
    resolve();
  }
});

module.exports = { passwordMinimumChecker };
