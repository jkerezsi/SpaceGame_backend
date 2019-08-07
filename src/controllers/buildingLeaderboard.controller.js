const { decode } = require('../services/decoder');
const { checkToken } = require('../services/troops-services/checkToken_service');
const { requestUserKingdom } = require('../services/kingdom-service/kingdom-service');
const { buidingsLeaderboard, sortByNumberOfBuildings } = require('../services/building-leaderboard-service/building-leaderboard-service');


const getBuidingLeaderboard = (req, res) => {
  checkToken(req.headers.token)
    .then(() => decode(req.headers.token))
    .then(userId => requestUserKingdom(userId))
    .then(() => buidingsLeaderboard())
    .then(unsortedBuildingInfo => sortByNumberOfBuildings(unsortedBuildingInfo))
    .then(data => res.status(200).json(data))
    .catch((err) => {
      res.status(400).json(err.message);
    });
};

module.exports = {
  getBuidingLeaderboard,
};
