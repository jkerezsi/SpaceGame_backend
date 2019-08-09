const Kingdom = require('../../models/kingdom.model');

const troopsLeaderboard = () => new Promise((resolve, reject) => {
  Kingdom.aggregate([
    {
      $project: {
        _id: 0,
        kingdomName: 1,
        troops: { $cond: { if: { $isArray: '$troops' }, then: { $size: '$troops' }, else: 'NA' } },
      },

    },
  ], (err, troops) => {
    if (err || troops === null) {
      reject(new Error('Database error.'));
    } else {
      resolve(troops);
    }
  });
});

const sortByNumberOfTroops = kingdomTroops => new Promise((resolve) => {
  resolve(kingdomTroops.sort((a, b) => (b.troops) - (a.troops)));
});

module.exports = {
  troopsLeaderboard,
  sortByNumberOfTroops,
};
