const { requestKingdoms } = require('../../services/kingdom-service/kingdom-service');

const getKingdoms = (req, res) => {
  requestKingdoms()
    .then(data => res.status(400).json({ kingdoms: data }))
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports = {
  getKingdoms,
};
