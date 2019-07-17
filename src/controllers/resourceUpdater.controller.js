const { requestResourcesWithKdId } = require('../services/Resources/requestResourcesWithKdId.service');
const { decode } = require('../services/decoder');
const { resourcesUpdater } = require('../services/Resources/resourceUpdater.service');

const resourceUpdate = (req, res, next) => {
  decode(req.body.token)
    .then(userId => requestResourcesWithKdId(userId))
    .then(kingdomInfo => resourcesUpdater(kingdomInfo))
    .catch((err) => {
      res.status(400).json(err);
    });
  next();
};

module.exports = {
  resourceUpdate,
};
