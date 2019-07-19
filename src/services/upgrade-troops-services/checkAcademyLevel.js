const Kingdom = require('../../models/kingdom.model');

const checkAcademyLevel = (kingdom, troopID) => new Promise((resolve, reject) => {
  if (kingdom.academy.level <= kingdom.troops[troopID].level) {
    reject(new Error('Upgrade is not allowed, academy level is too low!'));
  } else if (kingdom.resources[1].amount < 10) {
    reject(new Error('You cannot afford to upgrade this troop!'));
  } else {
    resolve(kingdom);
  }
});

module.exports = { checkAcademyLevel };
