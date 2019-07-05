const { requestResourcesWithKdId } = require('../services/Resources/resourcesUpdater.service');
const { decode } = require('../services/decoder.js');
const { resourcesUpdater } = require('../services/Resources/test');

const resourceUpdate = (req, res) => {
  decode(req.body.token)
    .then(userId => requestResourcesWithKdId(userId))
    .then(info => resourcesUpdater(info))
    .then(data => res.status(200).json(data))
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports = {
  resourceUpdate,
};
