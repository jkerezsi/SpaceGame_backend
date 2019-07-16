/* eslint-disable no-unused-vars */
const Kingdom = require('../../models/kingdom.model');

const requestKingdoms = () => new Promise((resolve, reject) => {
  Kingdom.find({}, '-userId -resources -__v -buildings', (err, kingdoms) => {
    if (err) {
      reject(err);
    } else {
      resolve(kingdoms);
    }
  });
});

const saveLocationToKingdom = (userId, countryCode) => new Promise((resolve, reject) => {
  Kingdom.findOneAndUpdate({ userId }, { location: { country_code: countryCode } }, (err, kingdom) => {
    if (err) {
      reject(err);
    } else {
      resolve(userId);
    }
  });
});

const requestUserKingdom = userId => new Promise((resolve, reject) => {
  Kingdom.findOne({ userId }, '-resources.UpdatedAt -resources._id -__v', (err, kingdom) => {
    if (err || kingdom <= 0) {
      reject(new Error('User does not exist yet.'));
    } else {
      resolve(kingdom);
    }
  });
});

module.exports = {
  requestKingdoms,
  saveLocationToKingdom,
  requestUserKingdom,
};
