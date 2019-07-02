const Kingdom = require('../models/kingdom.model');
const Resources = require('../models/resources.model');


const createKingdom = (userId, username, kingdomName) => new Promise((resolve, reject) => {
  if (kingdomName.length < 1) {
    kingdomName = `${username}'s kingdom`;
  }

  const goldResources = new Resources({ type: 'Gold' });
  const foodResources = new Resources({ type: 'Food' });
  const newKingdom = new Kingdom({ kingdomName, userId });
  newKingdom.resources.push(foodResources, goldResources);
  newKingdom.save((err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});

module.exports = { createKingdom };
