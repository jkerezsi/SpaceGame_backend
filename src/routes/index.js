const express = require('express');
const userController = require('../controllers/user.controller');
const loginController = require('../controllers/login-controller/login-controller');
const resourceController = require('../controllers/resource.controller');

const router = express.Router();

router.post('/register', userController.userRegister);
router.post('/login', loginController.login);
router.get('/kingdom/resource', resourceController.getResources);

module.exports = router;
