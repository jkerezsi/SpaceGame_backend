const service = require('../services/user.service');
const loginLengthCheckerService = require('../services/lengths_checker.service');
const isPasswordGivenService = require('../services/passwordlength_checker.service');
const isUsernameGivenService = require('../services/usernamelength_checker.service');
const passwordMinimumService = require('../services/password_minimum_length.service');


const userRegister = (req, res) => {
  const { username, password } = req.body;

  loginLengthCheckerService.passwordUsernameLengthChecker(username, password)
    .then(() => isUsernameGivenService.usernameLengthChecker(username, password))
    .then(() => isPasswordGivenService.passwordLengthChecker(username, password))
    .then(() => passwordMinimumService.passwordMinimumChecker(username, password))
    .then(() => service.postUser(username, password))
    .then((data) => { res.json(data); })
    .catch((err) => {
      if (err.message === 'User validation failed: username: Username is already taken.') {
        res.status(409).json(err.errors.username.message);
      } else {
        res.status(400).json(err.message);
      }
    });
};

module.exports = { userRegister };
