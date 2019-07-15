const Kingdom = require('../../models/kingdom.model');

const requestKingdoms = () => new Promise((resolve, reject) => {
  Kingdom.find({}, '-userId -resources -__v -buildings', (err, kingdoms) => {
    if (err) {
      reject(err);
    } else {
      resolve(kingdoms);
    }
  });
});

module.exports = {
  requestKingdoms,
};
