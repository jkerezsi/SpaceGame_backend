const jwt = require('jsonwebtoken');


const decode = token => new Promise((reject, resolve) => {
  if (token.length < 1) {
    reject(new Error('No token provided'));
  } else {
    const decoded = jwt.decode(token);
    resolve(decoded);
  }
});


module.exports = { decode };
