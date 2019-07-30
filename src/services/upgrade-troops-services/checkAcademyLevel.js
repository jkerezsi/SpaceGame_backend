
const checkAcademyLevel = (kingdom, troopLevel) => new Promise((resolve, reject) => {
  if (kingdom.buildings[1].level <= troopLevel) {
    reject(new Error('Upgrade is not allowed, academy level is too low!'));
  } else if (kingdom.resources[1].amount < 10) {
    reject(new Error('You cannot afford to upgrade this troop!'));
  } else {
    resolve(kingdom);
    console.log('academy ok')
  }
});

module.exports = { checkAcademyLevel };
