const express = require('express');
const userController = require('../controllers/user.controller');
const loginController = require('../controllers/login-controller/login-controller');
const kingdomSettings = require('../controllers/settings-controller/settings-controller');

const router = express.Router();

router.post('/register', userController.userRegister);
router.post('/login', loginController.login);
router.put('/kingdom', kingdomSettings.kingdomNameUpdate);

module.exports = router;
