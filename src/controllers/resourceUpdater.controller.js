const { requestResourcesWithKdId } = require('../services/Resources/resourcesUpdater.service');
const { decode } = require('../services/decoder.js');
const { resourcesUpdater } = require('../services/Resources/test');

const resourceUpdate = (req, res) => {
  decode(req.body.token)
    .then(userId => requestResourcesWithKdId(userId))
    .then(kingdomInfo => resourcesUpdater(kingdomInfo))
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports = {
  resourceUpdate,
};
