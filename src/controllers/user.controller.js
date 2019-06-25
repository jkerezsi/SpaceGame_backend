const service = require('../services/user.service');

const userLogin = (req, res) => {
  const { username, password } = req.body;

  service.postUser(username, password)
    .then(() => {
      res.json({
        message: 'ok'
      });
    })
    .catch((err) => {
      res.json({
        err
      })
    })
}


module.exports = { userLogin };