const { requestAllBuildings } = require('../services/getAllBuildings.service');
const { decode } = require('../services/decoder.js');

const getAllBuildings = (req, res) => {
  decode(req.headers.token)
    .then(userId => requestAllBuildings(userId))
    .then(data => res.status(200).json(data))
    .catch((err) => {
      res.status(400).json(err);
    });
};
module.exports = {
  getAllBuildings,
};