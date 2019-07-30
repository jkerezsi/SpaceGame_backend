
const Kingdom = require('../../models/kingdom.model');

const upgradeTroopLevel = (level, troopID) => new Promise((resolve, reject) => {
  console.log(level);
  console.log(troopID);
  Kingdom.findOne({ 'troops.id': troopID }, (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});


module.exports = { upgradeTroopLevel };
