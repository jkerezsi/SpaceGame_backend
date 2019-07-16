const Troops = require('../../models/troops.model');

const createTroop = whichKingdom => new Promise((resolve, reject) => {
  const troop = new Troops({
    started_at: (new Date().getTime() / 1000),
    finished_at: (new Date().getTime() / 1000) + 60,
  });

  whichKingdom.troops.push(troop);
  whichKingdom.save((err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});

module.exports = { createTroop };
