const { checkSettingsField } = require('../../services/settings-service/settings-service');
const { decode } = require('../../decoder');
const { requestAndUpdateSettingsResources } = require('../../services/settings-service/settings-kingdomResource');
const { requestSettingsKingdomResources } = require('../../services/settings-service/settings-requestResource');


const kingdomNameUpdate = (req, res) => {
  console.log(req.body);
  checkSettingsField(req.body.newKingdomName, req.body.token)
    .then(() => decode(req.body.token))
    .then(userId => requestAndUpdateSettingsResources(req.body.newKingdomName, userId))
    .then(data => requestSettingsKingdomResources(data.userId))
    .then(data => res.status(200).json(data))
    .catch((err) => {
      res.json(err);
    });
};

module.exports = {
  kingdomNameUpdate,
};
