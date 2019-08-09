const { decode } = require('../services/decoder');
const { checkToken } = require('../services/troops-services/checkToken_service');
const { requestUserKingdom } = require('../services/kingdom-service/kingdom-service');
const { troopsLeaderboard, sortByNumberOfTroops } = require('../services/troops-leaderboard-service/troops-leaderboard-service');


const getTroopsLeaderboard = (req, res) => {
  checkToken(req.headers.token)
    .then(() => decode(req.headers.token))
    .then(userId => requestUserKingdom(userId))
    .then(() => troopsLeaderboard())
    .then(unsortedTroopInfo => sortByNumberOfTroops(unsortedTroopInfo))
    .then(data => res.status(200).json(data))
    .catch((err) => {
      res.status(400).json(err.message);
    });
};

module.exports = {
  getTroopsLeaderboard,
};
