const { decode } = require('../../services/decoder');
const { checkToken } = require('../../services/troops-services/checkToken_service');
const { checkUpgradeFields } = require('../../services/upgrade-troops-services/checkUpgradeFields');
const { checkAcademyLevel } = require('../../services/upgrade-troops-services/checkAcademyLevel');
const { upgradeTroopLevel } = require('../../services/upgrade-troops-services/upgradeTroopLevel');
const { updateGoldAmount } = require('../../services/upgrade-troops-services/upgradeTroopGold');
const { requestUserKingdom } = require('../../services/kingdom-service/kingdom-service');


const upgradeTroops = (req, res) => {
  console.log(req.body);
  console.log(req.headers.token);
  checkUpgradeFields(req.params.troopId);
  checkToken(req.headers.token)
    .then(() => decode(req.headers.token))
    .then(userId => requestUserKingdom(userId))
    .then(kingdom => checkAcademyLevel(kingdom, req.body.level))
    .then(kingdom => updateGoldAmount(kingdom, req.params.troopId))
    .then(() => upgradeTroopLevel(req.body.level, req.params.troopId))
    .then(data => res.status(200).json(data))
    .catch((err) => {
      res.status(400).json(err.message);
    });
};

module.exports = {
  upgradeTroops,
};
