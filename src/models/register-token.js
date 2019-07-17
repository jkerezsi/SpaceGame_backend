const jwt = require('jsonwebtoken');

function registerToken(userId, kingdomId) {
  return ({
    userId,
    kingdomId,
    token: jwt.sign(userId, 'vaporwave'),
  });
}

module.exports = {
  registerToken,
};
