const Kingdom = require('../../models/kingdom.model');

const requestKingdomId = userIdp => new Promise((resolve, reject) => {
  console.log(userIdp)
  Kingdom.findOne({ userId: userIdp }, '-resources -__v -kingdomName', (err, data) => {
    if (err || data === null) {
      reject(new Error('No kingdom found.'));
    } else {
      resolve(data);
    }
  });
});

module.exports = { requestKingdomId };
