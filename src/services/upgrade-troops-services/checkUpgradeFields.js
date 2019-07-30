
const checkUpgradeFields = troopID => new Promise((resolve, reject) => {
  if (troopID === '' || troopID === undefined) {
    reject(new Error('TroopID is missing.'));
  } else {
    resolve();
  }
});

module.exports = { checkUpgradeFields };
