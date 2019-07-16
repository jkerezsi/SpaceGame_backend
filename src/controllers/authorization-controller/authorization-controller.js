const { checkTokenPresence } = require('../../services/authorization-services/authorization-services');
const { decode } = require('../../services/decoder');
const { requestKingdomId } = require('../../services/authorization-services/id-service');
const { checkUserId } = require('../../services/authorization-services/token-service');

const authorize = (req, res) => {
  checkTokenPresence(req.headers)
    .then(() => decode(req.headers.token))
    .then(userId => checkUserId(userId))
    .then(userId => requestKingdomId(userId))
    .then((data) => { res.json({ userId: data.userId, kingdomId: data._id }); })
    .catch(err => res.json(err.message));
};

module.exports = {
  authorize,
};
