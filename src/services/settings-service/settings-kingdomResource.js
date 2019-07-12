const Kingdom = require('../../models/kingdom.model');


const requestAndUpdateSettingsResources = (newKingdomName, userIdp) => new Promise((resolve, reject) => {
  Kingdom.findOneAndUpdate({ userId: userIdp }, { kingdomName: newKingdomName }, (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
      console.log(data);
    }
  });
});

module.exports = { requestAndUpdateSettingsResources };
