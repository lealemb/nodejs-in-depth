const express = require('express');
const reouter = express.Router();
const authController = require('../controllers/authController');
const router = require('./root');

router.post('/', authController.handleLogin);

module.exports = router;