const Kingdom = require('../models/kingdom.model');


const requestAllBuildings = userIdp => new Promise((resolve, reject) => {
  Kingdom.findOne({ userId: userIdp }, '-_id buildings', (err, usersstuff) => {
    if (err) {
      reject(new Error('Could not find kingdom'));
    } else {
      resolve(usersstuff);
    }
  });
});

module.exports = { requestAllBuildings };
