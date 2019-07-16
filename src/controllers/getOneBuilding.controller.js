const { getOneBuilding } = require('../services/getOneBulinding/getOneBulinding.service');
const { decode } = require('../services/decoder.js');

const getOneBuildingControll = (req, res) => {

  const { token } = req.headers;
  const { buildingId } = req.query;
  decode(token)
    .then(userId => getOneBuilding(userId, buildingId))
    .then(data => res.status(200).json(data))
    .catch((err) => {
      res.status(400).json(err);
    });
};
module.exports = { getOneBuildingControll };
