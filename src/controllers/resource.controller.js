const { requestResources } = require('../services/Resources/resource.service');
const { decode } = require('../services/decoder');

const getResources = (req, res) => {
  decode(req.headers.token)
    .then(userId => requestResources(userId))
    .then(data => res.status(200).json(data))
    .catch((err) => {
      res.status(400).json(err);
    });
};
module.exports = {
  getResources,
};
