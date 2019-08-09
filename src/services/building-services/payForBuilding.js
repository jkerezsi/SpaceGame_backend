const Kingdom = require('../../models/kingdom.model');


const payingForBuilding = (kingdom, userIdp) => new Promise((resolve, reject) => {
  const newAmount = kingdom.resources[1].amount - 100;
  Kingdom.findOneAndUpdate({ userId: userIdp }, {
    $set: {
      'resources.1.amount': newAmount,
    },
  }, (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});

module.exports = { payingForBuilding };
