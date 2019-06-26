const passwordLengthChecker = (username, password) => new Promise((resolve, reject) => {
  if (username.length >= 1 && password.length < 1) {
    reject(new Error('Password is required.'));
  } else {
    resolve();
  }
});

module.exports = { passwordLengthChecker };
