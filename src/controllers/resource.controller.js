const { requestResources } = require('../services/resource.service');

const getResoures = (req, res) => {
  requestResources('5d1b99976b9e0e15bd7b43d3').then(data => res.status(200).json(data))
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports = {
  getResoures,
};
