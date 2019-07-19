
const Kingdom = require('../../models/kingdom.model');

const upgradeTroopLevel = (kingdom, troopID) => new Promise((resolve, reject) => {
  const newLevel = kingdom.troops[troopID].level + 1;
  Kingdom.findOneAndUpdate({ 'troops._id': troopID }, '-_id troops.$', {
    $set: {
      'troops.$.level': newLevel,
    },
  }, (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});


module.exports = { upgradeTroopLevel };
