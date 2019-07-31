
const Kingdom = require('../../models/kingdom.model');

const upgradeTroopLevel = (level, troopID) => new Promise((resolve, reject) => {
  Kingdom.findOneAndUpdate({ 'troops._id': troopID }, {
    $set: {
      'troops.$.level': level + 1,
    },
  }, { new: true }, (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});


module.exports = { upgradeTroopLevel };
