const express = require('express');
const router = express.Router();
const loginController = require('../controllers/login-controller/login-controller');
const helloWorldController = require('../controllers/hello-world');

router.get('/helloworld', helloWorldController.helloWorldController);

router.post('/login', loginController.login);

module.exports = router;