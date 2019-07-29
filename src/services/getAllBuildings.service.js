const Kingdom = require('../models/kingdom.model');


const requestAllBuildings = userIdp => new Promise((resolve, reject) => {
  Kingdom.findOne({ userId: userIdp }, '-_id -resources -userId -__v -kingdomName', (err, usersstuff) => {
    if (err) {
      reject(new Error('Could not find kingdom'));
    } else {
      console.log(usersstuff)
      resolve(usersstuff);
    }
  });
});

module.exports = { requestAllBuildings };
