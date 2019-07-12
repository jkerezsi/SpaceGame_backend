const express = require('express');
const userController = require('../controllers/user.controller');
const loginController = require('../controllers/login-controller/login-controller');
const kingdomSettings = require('../controllers/settings-controller/settings-controller');
const resourceController = require('../controllers/resource.controller');
// const resourceUpdaterController = require('../controllers/resourceUpdater.controller');

const addBuildingController = require('../controllers/building-controller/building_controller');

const router = express.Router();

router.post('/', loginController.login);
router.post('/register', userController.userRegister);
router.post('/login', loginController.login);
router.get('/kingdom/resource', resourceController.getResources);
router.put('/kingdom', kingdomSettings.kingdomNameUpdate);

router.post('/kingdom/buildings', addBuildingController.addBuilding);

module.exports = router;
