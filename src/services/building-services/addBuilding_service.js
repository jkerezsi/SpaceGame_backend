const Buildings = require('../../models/building.model');

const createBuilding = (buildingType, whichKingdom) => new Promise((resolve, reject) => {
  const building = new Buildings({
    type: buildingType,
    started_at: (new Date().getTime() / 10),
    finished_at: (new Date().getTime() / 10) + 60,
  });

  whichKingdom.buildings.push(building);
  whichKingdom.save((err, data) => {
    if (err) {
      reject(err);
    } else {
      const lastOne = data.buildings[data.buildings.length - 1];
      resolve(lastOne);
    }
  });
});

module.exports = { createBuilding };
