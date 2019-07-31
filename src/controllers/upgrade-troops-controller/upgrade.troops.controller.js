const { decode } = require('../../services/decoder');
const { checkToken } = require('../../services/troops-services/checkToken_service');
const { requestUserKingdom } = require('../../services/kingdom-service/kingdom-service');
const {
  checkUpgradeFields, checkAcademyLevel, updateGoldAmount, upgradeTroopLevel, filterTroop,
} = require('../../services/upgrade-troops-services/upgrade.troop.services');

const upgradeTroops = (req, res) => {
  checkUpgradeFields(req.params.troopId, req.body.level)
    .then(() => checkToken(req.headers.token))
    .then(() => decode(req.headers.token))
    .then(userId => requestUserKingdom(userId))
    .then(kingdom => checkAcademyLevel(kingdom, req.body.level))
    .then(kingdom => updateGoldAmount(kingdom, req.params.troopId))
    .then(() => upgradeTroopLevel(req.body.level, req.params.troopId))
    .then(kingdom => filterTroop(kingdom, req.params.troopId))
    .then(data => res.status(200).json(data))
    .catch((err) => {
      res.status(400).json(err.message);
    });
};

module.exports = {
  upgradeTroops,
};
