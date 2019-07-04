const express = require('express');
const userController = require('../controllers/user.controller');
const loginController = require('../controllers/login-controller/login-controller');
const settingsController = require('../controllers/settings-controller/settings-controller')
const router = express.Router();

router.post('/register', userController.userRegister);
router.post('/login', loginController.login);
router.put('/kingdom', settingsController.settings), 

module.exports = router;
