const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();

const helloWorldController = require('../controllers/hello-world');

router.get('/helloworld', helloWorldController.helloWorldController);

router.post('/newUser', userController.userLogin);


module.exports = router;
