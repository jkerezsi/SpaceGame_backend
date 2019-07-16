const Kingdom = require('../../models/kingdom.model');


const requestSettingsKingdomResources = userIdp => new Promise((resolve, reject) => {
  Kingdom.findOne({ userId: userIdp }, (err, whichKingdom) => {
    if (err) {
      reject(err);
    } else {
      resolve(whichKingdom);
    }
  });
});

module.exports = { requestSettingsKingdomResources };
