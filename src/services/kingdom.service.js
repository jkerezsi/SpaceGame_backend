const Kingdom = require('../models/kingdom.model');

const createKingdom = (userId, username, kingdomName) => new Promise((resolve, reject) => {
  if (kingdomName.length < 1) {
    kingdomName = `${username}'s kingdom`;
  }
  const newKingdom = new Kingdom({ kingdomName, userId });
  newKingdom.save((err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});

module.exports = { createKingdom };
