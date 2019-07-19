const jwt = require('jsonwebtoken');


const decode = token => new Promise((resolve, reject) => {
  if (token.length < 1) {
    reject(new Error('No token provided'));
  } else {
    const decoded = jwt.decode(token);
    console.log(decoded)
    resolve(decoded);
  }
});


module.exports = { decode };
