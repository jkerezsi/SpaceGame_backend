const { requestResources } = require('../services/Resources/resource.service');
const { decode } = require('../services/decoder.js');

const getResoures = (req, res) => {
  decode(req.body.token)
    .then(userId => requestResources(userId))
    .then(data => res.status(200).json(data))
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports = {
  getResoures,
};
