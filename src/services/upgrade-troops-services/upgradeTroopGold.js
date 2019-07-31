const Kingdom = require('../../models/kingdom.model');

const updateGoldAmount = kingdom => new Promise((resolve, reject) => {
  const newGoldAmount = kingdom.resources[1].amount - 10;
  Kingdom.findOneAndUpdate({ _id: kingdom._id }, {
    $set: {
      'resources.1.amount': newGoldAmount,
    },
  }, { new: true }, (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});


module.exports = { updateGoldAmount };

