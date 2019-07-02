const service = require('../services/user.service');
const loginLengthCheckerService = require('../services/lengths_checker.service');
const isPasswordGivenService = require('../services/passwordlength_checker.service');
const isUsernameGivenService = require('../services/usernamelength_checker.service');
const passwordMinimumService = require('../services/password_minimum_length.service');
const createKingdomService = require('../services/kingdom.service');

const userRegister = (req, res) => {
  const { username, password, kingdomName } = req.body;

  loginLengthCheckerService.passwordUsernameLengthChecker(username, password)
    .then(() => isUsernameGivenService.usernameLengthChecker(username))
    .then(() => isPasswordGivenService.passwordLengthChecker(password))
    .then(() => passwordMinimumService.passwordMinimumChecker(password))
    .then(() => service.postUser(username, password))
    .then(userId => createKingdomService.createKingdom(userId._id, username, kingdomName))
    .then((data) => { res.json({ userID: data.userId, username, kingdomID: data._id }); })
    .catch((err) => {
      if (err.errors) {
        res.status(409).json(err.errors.username.message);
      } else {
        res.status(400).json(err.message);
      }
    });
};

module.exports = { userRegister };
