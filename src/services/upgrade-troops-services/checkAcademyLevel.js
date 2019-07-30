
const checkAcademyLevel = (kingdom, troopID) => new Promise((resolve, reject) => {
  if (kingdom.buildings[1].level <= kingdom.troops[troopID - 1].level) {
    reject(new Error('Upgrade is not allowed, academy level is too low!'));
  } else if (kingdom.resources[1].amount < 10) {
    reject(new Error('You cannot afford to upgrade this troop!'));
  } else {
    resolve(console.log('academy ok'));
  }
});

module.exports = { checkAcademyLevel };
