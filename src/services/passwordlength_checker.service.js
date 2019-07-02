const passwordLengthChecker = password => new Promise((resolve, reject) => {
  if (password.length < 1) {
    reject(new Error('Password is required.'));
  } else {
    resolve();
  }
});

module.exports = { passwordLengthChecker };
