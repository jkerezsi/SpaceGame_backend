const express = require('express');
const userController = require('../controllers/user.controller');
const loginController = require('../controllers/login-controller/login-controller');
const kingdomSettings = require('../controllers/settings-controller/settings-controller');
const resourceController = require('../controllers/resource.controller');
const getOneBuildingController = require('../controllers/getOneBuilding.controller');
const authorizationController = require('../controllers/authorization-controller/authorization-controller');
const kingdomController = require('../controllers/kingdom-controller/kingdom-controller');
const getAllBuildingsController = require('../controllers/getAllBuildings.controller');
const addBuildingController = require('../controllers/building-controller/building_controller');
const resourceUpdaterController = require('../controllers/resourceUpdater.controller');
const getTroopsController = require('../controllers/troops-controller/troops.controller');
const upgradeTroopsController = require('../controllers/upgrade-troops-controller/upgrade.troops.controller');
const buildingLeaderboardContorller = require('../controllers/buildingLeaderboard.controller');

const router = express.Router();

router.post('/', loginController.login);
router.post('/register', userController.userRegister);
router.post('/login', loginController.login);
router.post('/auth', authorizationController.authorize);
router.put('/kingdom', resourceUpdaterController.resourceUpdate, kingdomSettings.kingdomNameUpdate);
router.get('/kingdom/resource', resourceController.getResources);
router.get('/kingdom/map', kingdomController.getAllKingdoms);
router.post('/register/map', resourceUpdaterController.resourceUpdate, kingdomController.saveLocationAndGetKingdom);
router.post('/kingdom/map/add', kingdomController.addLocationAndGetKingdom);
router.get('/kingdom/resource', resourceController.getResources);
router.put('/kingdom', resourceUpdaterController.resourceUpdate, kingdomSettings.kingdomNameUpdate);
router.get('/kingdom/buildings/:buildingId', getOneBuildingController.getOneBuildingController);
router.get('/kingdom/buildings', getAllBuildingsController.getAllBuildings);
router.put('/kingdom/troops/:troopId', upgradeTroopsController.upgradeTroops);
router.post('/kingdom/buildings', resourceUpdaterController.resourceUpdate, addBuildingController.addBuilding);
router.get('/kingdom/troops', getTroopsController.getTroops);
router.post('/kingdom/troops', getTroopsController.createTroops);
router.get('/leaderboard/buildings', buildingLeaderboardContorller.getBuidingLeaderboard);


module.exports = router;
