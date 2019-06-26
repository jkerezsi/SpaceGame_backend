const Kingdom = require('../models/kingdom.model');

const createKingdom = (username, kingdomName, userId) => new Promise((resolve, reject) => {
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
