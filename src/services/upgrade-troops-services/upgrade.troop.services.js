const Kingdom = require('../../models/kingdom.model');

const checkAcademyLevel = (kingdom, troopLevel) => new Promise((resolve, reject) => {
  if (kingdom.buildings[1].level <= troopLevel) {
    reject(new Error('Upgrade is not allowed, academy level is too low!'));
  } else if (kingdom.resources[1].amount < 10) {
    reject(new Error('You cannot afford to upgrade this troop!'));
  } else {
    resolve(kingdom);
  }
});

const checkUpgradeFields = (troopID, level) => new Promise((resolve, reject) => {
  if (troopID === '' || troopID === undefined) {
    reject(new Error('TroopID is missing.'));
  } else if (level === '' || level === undefined) {
    reject(new Error('Troop level is missing.'));
  } else {
    resolve();
  }
});


const filterTroop = (allTroops, troopID) => new Promise((resolve, reject) => {
  if (troopID === '') {
    reject(new Error('Troop ID is needed!'));
  }
  const oneTroop = allTroops.troops.filter(troop => troop._id.toString() === troopID);
  resolve(oneTroop);
});


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


module.exports = {
  upgradeTroopLevel,
  checkAcademyLevel,
  checkUpgradeFields,
  filterTroop,
  updateGoldAmount,
};

