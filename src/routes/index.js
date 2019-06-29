const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const loginController = require('../controllers/login-controller');
const helloWorldController = require('../controllers/hello-world');

const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/helloworld', helloWorldController.helloWorldController);

router.post('/login', urlencodedParser, loginController.login);

module.exports = router;