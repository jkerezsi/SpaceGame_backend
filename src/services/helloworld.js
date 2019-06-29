const helloModel = require('../models/helloWorld');

const getHelloWorld = () => new Promise((resolve) => {
  resolve(helloModel);
});

module.exports = {
  getHelloWorld,
};