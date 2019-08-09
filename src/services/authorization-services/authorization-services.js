const checkTokenPresence = headers => new Promise((resolve, reject) => {
  if (headers.token === '' || headers.token === undefined) {
    reject(new Error('No token provided.'));
  } else {
    resolve();
  }
});

module.exports = { checkTokenPresence };
