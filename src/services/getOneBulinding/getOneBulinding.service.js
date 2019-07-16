const Kingdom = require('../../models/kingdom.model');

const getOneBuilding = (userIdp, buildingID) => new Promise((resolve, reject) => {
  console.log(buildingID);
  Kingdom.findOne({ userId: userIdp }, '-resources', (err, data) => {
    Kingdom.buildings.id(buildingID);
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});

module.exports = { getOneBuilding };
