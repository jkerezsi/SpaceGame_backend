const jwt = require('jsonwebtoken');


const decode = token => new Promise((resolve) => {
  const decoded = jwt.decode(token);
  resolve(decoded);
});


module.exports = { decode };
