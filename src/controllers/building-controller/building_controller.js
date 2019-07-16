const { checkType } = require('../../services/building-services/checkBuildingType_service');
const { decode } = require('../../decoder');
const { checkMoney } = require('../../services/building-services/checkMoney_service');
const { createBuilding } = require('../../services/building-services/addBuilding_service');
const { requestSettingsKingdomResources } = require('../../services/settings-service/settings-requestResource');
const { payingForBuilding } = require('../../services/building-services/payForBuilding');

const addBuilding = (req, res) => {
  checkType(req.body.type, req.body.token)
    .then(() => decode(req.body.token))
    .then(userId => checkMoney(userId))
    .then(data => requestSettingsKingdomResources(data.userId))
    .then(data => payingForBuilding(data, data.userId))
    .then(data => createBuilding(req.body.type, data))
    .then(data => res.status(200).json(data))
    .catch((err) => {
      res.status(400).json(err.message);
    });
};

module.exports = {
  addBuilding,
};
