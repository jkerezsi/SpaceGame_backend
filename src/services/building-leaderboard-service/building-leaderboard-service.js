const Kingdom = require('../../models/kingdom.model');

const buidingsLeaderboard = () => new Promise((resolve, reject) => {
  Kingdom.aggregate([
    {
      $project: {
        _id: 0,
        kingdomName: 1,
        numberOfBuildings: { $cond: { if: { $isArray: '$buildings' }, then: { $size: '$buildings' }, else: 'NA' } },
      },

    },
  ], (err, buidlings) => {
    if (err || buidlings === null) {
      reject(new Error('Database error.'));
    } else {
      resolve(buidlings);
    }
  });
});

const sortByNuberOfBuildings = kingdomBuildings => new Promise((resolve) => {
  resolve(kingdomBuildings.sort((a, b) => (b.numberOfBuildings) - (a.numberOfBuildings)));
});

module.exports = {
  buidingsLeaderboard,
  sortByNuberOfBuildings,
};
