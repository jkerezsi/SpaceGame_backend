const express = require('express');
const userController = require('../controllers/user.controller');
const loginController = require('../controllers/login-controller/login-controller');
const kingdomSettings = require('../controllers/settings-controller/settings-controller');
const resourceController = require('../controllers/resource.controller');
const authorizationController = require('../controllers/authorization-controller/authorization-controller');
const kingdomController = require('../controllers/kingdom-controller/kingdom-controller');
const getAllBuildingsController = require('../controllers/getAllBuildings.controller');
const addBuildingController = require('../controllers/building-controller/building_controller');

const router = express.Router();

router.post('/', loginController.login);
router.post('/register', userController.userRegister);
router.post('/login', loginController.login);
router.post('/auth', authorizationController.authorize);
router.put('/kingdom', kingdomSettings.kingdomNameUpdate);
router.get('/kingdom/resource', resourceController.getResources);
router.get('/kingdom/map', kingdomController.getAllKingdoms);
router.post('/kingdom/map/add', kingdomController.addLocationAndGetKingdom);
router.post('/register/map', kingdomController.saveLocationAndGetKingdom);
router.get('/kingdom/resource', resourceController.getResources);
router.put('/kingdom', kingdomSettings.kingdomNameUpdate);
router.get('/kingdom/buildings', getAllBuildingsController.getAllBuildings);
router.post('/kingdom/buildings', addBuildingController.addBuilding);

module.exports = router;
