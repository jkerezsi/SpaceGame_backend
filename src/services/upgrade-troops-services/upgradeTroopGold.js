const Kingdom = require('../../models/kingdom.model');

const updateGoldAmount = (kingdom, troopID) => new Promise((resolve, reject) => {
  const newGoldAmount = kingdom.resources[1].amount - 10;
  Kingdom.findOneAndUpdate({ 'troops._id': troopID }, '-_id troops.$', {
    $set: {
      'resources[1].amount': newGoldAmount,
    },
  }, (err) => {
    if (err) {
      reject(err);
      console.log('gold not ok');
    } else {
      resolve(kingdom);
      console.log('gold ok');
    }
  });
});


module.exports = { updateGoldAmount };

