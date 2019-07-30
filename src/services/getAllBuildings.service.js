const Kingdom = require('../models/kingdom.model');


const requestAllBuildings = userIdp => new Promise((resolve, reject) => {
  console.log(userIdp);
  Kingdom.findOne({ userId: userIdp }, (err, usersstuff) => {
    if (err) {
      reject(new Error('Could not find kingdom'));
    } else {
      console.log(usersstuff);
      resolve(usersstuff);
    }
  });
});

module.exports = { requestAllBuildings };
