const Kingdom = require('../../models/kingdom.model');


const checkMoney = userIdp => new Promise((resolve, reject) => {
  Kingdom.findOne({ userId: userIdp }, (err, data) => {
    if (err) {
      reject(err);
    } else if (data.resources[1].amount < 100) {
      reject(new Error('You cannot afford this.'));
    } else {
      resolve(data);
    }
  });
});

module.exports = { checkMoney };
