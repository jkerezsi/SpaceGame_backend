const { requestAllBuildings } = require('../services/getAllBuildings.service');
const { filterOutOneBuiding } = require('../services/getOneBulinding/filterOutOneBuiding.service');
const { decode } = require('../services/decoder.js');

const getOneBuildingControll = (req, res) => {
  const { token } = req.headers;
  const { buildingId } = req.params;

  decode(token)
    .then(userId => requestAllBuildings(userId))
    .then(allBuidings => filterOutOneBuiding(allBuidings, buildingId))
    .then(data => res.status(200).json(data))
    .catch((err) => {
      res.status(400).json(err);
    });
};
module.exports = { getOneBuildingControll };
