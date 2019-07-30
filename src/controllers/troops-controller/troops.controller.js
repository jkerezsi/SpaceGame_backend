const { decode } = require('../../services/decoder');
const { checkToken } = require('../../services/troops-services/checkToken_service');
const { requestSettingsKingdomResources } = require('../../services/settings-service/settings-requestResource');
const { checkResources, payForTroop, createTroop } = require('../../services/troops-services/troops_service');


const getTroops = (req, res) => {
  checkToken(req.headers.token)
    .then(() => decode(req.headers.token))
    .then(userId => requestSettingsKingdomResources(userId))
    .then(data => res.status(200).json({ troops: data.troops }))
    .catch((err) => {
      res.status(400).json(err.message);
    });
};

const createTroops = (req, res) => {
  checkToken(req.headers.token)
    .then(() => decode(req.headers.token))
    .then(userId => checkResources(userId))
    .then(kingdom => payForTroop(kingdom, kingdom.userId))
    .then(kingdom => createTroop(kingdom))
    .then(data => res.status(200).json(data))
    .catch(err => res.status(400).json(err.message));
};

module.exports = {
  getTroops,
  createTroops,
};
