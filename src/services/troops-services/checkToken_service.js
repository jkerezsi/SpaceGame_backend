const checkToken = token => new Promise((resolve, reject) => {
  if (token === undefined || token.length < 1) {
    reject(new Error('Token is required.'));
  } else {
    resolve();
  }
});

module.exports = { checkToken };
