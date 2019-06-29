const helloWorldService = require('../services/helloworld');

const helloWorldController = (req, res) => {
  helloWorldService.getHelloWorld()
    .then(data => res.status(200).json(data));
};

module.exports = {
  helloWorldController,
};