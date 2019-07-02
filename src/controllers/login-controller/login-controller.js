const { checkFormFields } = require('../../services/login-services/login-service');
const { searchUsernameAndPassword } = require('../../services/login-services/user-service');

const login = (req, res) => {
  checkFormFields(req.body.username, req.body.password)
    .then(() => searchUsernameAndPassword(req.body.username, req.body.password))
    .then(data => res.status(200).json(data))
    .catch((err) => {
      if (err.message === 'Username or password is incorrect.') {
        res.status(401).json(err.message);
      } else {
        res.status(400).json(err.message);
      }
    });
};

module.exports = {
  login,
};
