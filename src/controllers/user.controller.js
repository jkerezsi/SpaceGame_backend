const service = require('../services/register/user.service');
const loginLengthCheckerService = require('../services/register/lengths_checker.service');
const isPasswordGivenService = require('../services/register/passwordlength_checker.service');
const isUsernameGivenService = require('../services/register/usernamelength_checker.service');
const passwordMinimumService = require('../services/register/password_minimum_length.service');
const createKingdomService = require('../services/register/kingdom.service');

const userRegister = (req, res) => {
  const { username, password } = req.body;
  const kingdom = req.body.kingdom || `${username}'s kingdom`;

  loginLengthCheckerService.passwordUsernameLengthChecker(username, password)
    .then(() => isUsernameGivenService.usernameLengthChecker(username))
    .then(() => isPasswordGivenService.passwordLengthChecker(password))
    .then(() => passwordMinimumService.passwordMinimumChecker(password))
    .then(() => service.postUser(username, password))
    .then(userId => createKingdomService.createKingdom(userId._id, username, kingdom))
    .then((data) => { res.json({ userID: data.userId, username, kingdomID: data._id }); })
    .catch((err) => {
      if (err.errors) {
        res.status(409).json({ status: 'error', message: err.errors.username.message });
      } else {
        res.status(400).json({ status: 'error', message: err.message });
      }
    });
};

module.exports = { userRegister };
