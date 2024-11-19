const express = require('express');
const reouter = express.Router();
const registerController = require('../controllers/registerController');
const router = require('./root');

router.post('/', registerController.handleNewUser);

module.exports = router;