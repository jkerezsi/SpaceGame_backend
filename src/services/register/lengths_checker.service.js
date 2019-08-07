const passwordUsernameLengthChecker = (username, password) => new Promise((resolve, reject) => {
  if (username === undefined || password === undefined) {
    reject(new Error('Username and password are required.'));
  } else if (username.length < 1 && password.length < 1) {
    reject(new Error('Username and password are required.'));
  } else {
    resolve();
  }
});

module.exports = { passwordUsernameLengthChecker };
