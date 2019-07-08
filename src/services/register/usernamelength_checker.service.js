const usernameLengthChecker = username => new Promise((resolve, reject) => {
  if (username.length < 1) {
    reject(new Error('Username is required.'));
  } else {
    resolve();
  }
});

module.exports = { usernameLengthChecker };
