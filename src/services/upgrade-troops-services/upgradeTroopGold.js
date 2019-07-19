
const updateGoldAmount = (kingdom, troopID) => new Promise((resolve, reject) => {
  const newGoldAmount = kingdom.resources[1].amount - 10;
  Kingdom.findOneAndUpdate({ 'troops._id': troopID }, '-_id troops.$', {
    $set: {
      'resources[1].amount': newGoldAmount,
    },
  }, (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});


module.exports = { updateGoldAmount };

