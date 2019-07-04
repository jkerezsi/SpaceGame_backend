const Kingdom = require('../../models/kingdom.model');


const requestResources = userIdp => new Promise((resolve, reject) => {
  Kingdom.findOne({ userId: userIdp }, '-_id -resources._id -userId -__v -kingdomName', (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});

module.exports = { requestResources };
