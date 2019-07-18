const Kingdom = require('../../models/kingdom.model');
const Resources = require('../../models/resources.model');
const Buildings = require('../../models/building.model');
const { registerToken } = require('../../models/register-token');


const createKingdom = (userId, username, kingdomName) => new Promise((resolve, reject) => {
  if (kingdomName === undefined) {
    kingdomName = `${username}'s kingdom`;
  }
  const townhall = new Buildings({ type: 'townhall' });
  const goldResources = new Resources({ type: 'Gold' });
  const foodResources = new Resources({ type: 'Food' });
  const newKingdom = new Kingdom({ kingdomName, userId });
  newKingdom.buildings.push(townhall);
  newKingdom.resources.push(foodResources, goldResources);
  newKingdom.save((err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(registerToken(data.userId, data._id.toString()));
    }
  });
});

module.exports = { createKingdom };
