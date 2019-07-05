const Kingdom = require('../../models/kingdom.model');


const requestSettingsKingdomResources = userIdp => new Promise((resolve, reject) => {
  Kingdom.findOne({ userId: userIdp }, (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});

module.exports = { requestSettingsKingdomResources };
