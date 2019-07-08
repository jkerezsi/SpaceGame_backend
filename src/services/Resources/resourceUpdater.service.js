const Kingdom = require('../../models/kingdom.model');


function newResourceAmount(newTimestamp, oldTimestamp, generation) {
  const timeDifference = Math.floor((newTimestamp - oldTimestamp) / 60000);
  return timeDifference * generation;
}


const resourcesUpdater = allResources => new Promise((resolve, reject) => {
  const currentTimestamp = new Date();

  const foodTimestamp = allResources.resources[0].UpdatedAt;
  const foodAmount = allResources.resources[0].amount;
  const foodGeneration = allResources.resources[0].generation;

  const goldTimestamp = allResources.resources[1].UpdatedAt;
  const goldAmount = allResources.resources[1].amount;
  const goldGeneration = allResources.resources[1].generation;

  Kingdom.updateOne({ _id: allResources._id },
    {
      $set: {
        'resources.0.UpdatedAt': currentTimestamp,
        'resources.1.UpdatedAt': currentTimestamp,
        'resources.0.amount': newResourceAmount(currentTimestamp, foodTimestamp, foodGeneration) + foodAmount,
        'resources.1.amount': newResourceAmount(currentTimestamp, goldTimestamp, goldGeneration) + goldAmount,
      },
    }, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
});
module.exports = { resourcesUpdater };
