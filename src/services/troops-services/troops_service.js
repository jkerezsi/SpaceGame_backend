const Kingdom = require('../../models/kingdom.model');
const Troops = require('../../models/troops.model');

const checkResources = userId => new Promise((resolve, reject) => {
  Kingdom.findOne({ userId }, (err, kingdom) => {
    if (err) {
      reject(err);
    } else if (kingdom.resources[1].amount < 10) {
      reject(new Error('You cannot afford this.'));
    } else if ((kingdom.buildings[0].level * 100) - kingdom.troops.length < 1) {
      reject(new Error('You reached the storage limit, upgrade your Townhall first.'));
    } else {
      resolve(kingdom);
    }
  });
});

const payForTroop = (kingdom, userId) => new Promise((resolve, reject) => {
  const newAmount = kingdom.resources[1].amount - 10;
  Kingdom.findOneAndUpdate({ userId }, {
    $set: {
      'resources.1.amount': newAmount,
    },
  }, (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});

const createTroop = kingdom => new Promise((resolve, reject) => {
  const troop = new Troops({
    started_at: (new Date().getTime() / 1000),
    finished_at: (new Date().getTime() / 1000) + 60,
  });
  kingdom.troops.push(troop);
  kingdom.save((err) => {
    if (err) {
      reject(err);
    } else {
      resolve(troop);
    }
  });
});

module.exports = {
  checkResources,
  payForTroop,
  createTroop,
};
