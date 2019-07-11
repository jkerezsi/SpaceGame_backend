const Kingdom = require('../models/kingdom.model');


const requestAllBuildings = userIdp => new Promise((resolve, reject) => {
  Kingdom.findOne({ userId: userIdp }, '-_id -resources -userId -__v -kingdomName', (err, data) => {
    if (err) {
      reject(err);
    } else if (data == null) {
      reject(new Error('Could not find kingdom'));
    } else {
      resolve(data);
    }
  });
});

module.exports = { requestAllBuildings };
