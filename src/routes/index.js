const express = require('express');

const router = express.Router();

const helloWorldController = require('../controllers/hello-world');

router.get('/helloworld', helloWorldController.helloWorldController);

module.exports = router;
