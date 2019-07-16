const checkToken = token => new Promise((resolve, reject) => {
  if (token === '') {
    reject(new Error('Token is required.'));
  } else {
    resolve();
  }
});

module.exports = { checkToken };
