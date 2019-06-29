const { checkFormFields } = require('../services/login-service');
const { searchUsernameAndPassword } = require('../services/user-service');

const login = (req, res) => {
    checkFormFields(req.body.username, req.body.password)
    .then(() => searchUsernameAndPassword(req.body.username, req.body.password))
    .then(data => res.status(200).json(data))
    .catch(err => res.status(400).json(err));
}

module.exports = {
    login,
}