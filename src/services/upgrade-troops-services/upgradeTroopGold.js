const Kingdom = require('../../models/kingdom.model');

const updateGoldAmount = kingdom => new Promise((resolve, reject) => {
  console.log(typeof (kingdom._id));
  const newGoldAmount = kingdom.resources[1].amount - 10;
  Kingdom.updateOne({ _id: kingdom._id.toString() }, {
    $set: {
      'resources[1].amount': newGoldAmount,
    },
  }, (err, data) => {
    if (err) {
      reject(err);
      console.log('gold not ok');
    } else {
      resolve(data);
      console.log('gold ok');
    }
  });
});


module.exports = { updateGoldAmount };

