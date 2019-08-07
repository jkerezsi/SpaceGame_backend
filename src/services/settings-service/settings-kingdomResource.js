const Kingdom = require('../../models/kingdom.model');


const requestAndUpdateSettingsResources = (newKingdomName, userId) => new Promise((resolve, reject) => {
  Kingdom.findOneAndUpdate({ userId }, { kingdomName: newKingdomName }, (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});

module.exports = { requestAndUpdateSettingsResources };
