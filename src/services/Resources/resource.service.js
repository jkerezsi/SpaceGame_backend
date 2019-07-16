const Kingdom = require('../../models/kingdom.model');


const requestResources = userId => new Promise((resolve, reject) => {
  Kingdom.findOne({ userId }, '-_id -resources._id -userId -__v -kingdomName', (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});

module.exports = { requestResources };
