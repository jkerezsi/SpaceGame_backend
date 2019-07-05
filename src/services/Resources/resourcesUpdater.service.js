const Kingdom = require('../../models/kingdom.model');

const requestResourcesWithKdId = userIdp => new Promise((resolve, reject) => {
  Kingdom.findOne({ userId: userIdp }, '-resources._id -userId -__v -kingdomName', (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});

module.exports = { requestResourcesWithKdId };
