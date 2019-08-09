const {
  requestKingdoms, requestUserKingdom, saveLocationToKingdom, addLocationToKingdom,
} = require('../../services/kingdom-service/kingdom-service');
const { checkCountryCodePresence } = require('../../services/kingdom-service/country-code-service');
const { decode } = require('../../services/decoder');

const getAllKingdoms = (req, res) => {
  requestKingdoms()
    .then(kingdoms => res.status(200).json({ kingdoms }))
    .catch((err) => {
      res.status(400).json(err.message);
    });
};

const saveLocationAndGetKingdom = (req, res) => {
  checkCountryCodePresence(req)
    .then(() => decode(req.headers.token))
    .then(userId => saveLocationToKingdom(userId, req.body.country_code))
    .then(userId => requestUserKingdom(userId))
    .then(kingdom => res.status(200).json(kingdom))
    .catch((err) => {
      res.status(400).json(err.message);
    });
};

const addLocationAndGetKingdom = (req, res) => {
  checkCountryCodePresence(req)
    .then(() => decode(req.headers.token))
    .then(userId => addLocationToKingdom(userId, req.body.country_code))
    .then(userId => requestUserKingdom(userId))
    .then(kingdom => res.status(200).json(kingdom))
    .catch((err) => {
      res.status(400).json(err.message);
    });
};

module.exports = {
  getAllKingdoms,
  saveLocationAndGetKingdom,
  addLocationAndGetKingdom,
};
