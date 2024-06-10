const express = require('express');
const router = express.Router();
const verifyProfileController = require('../controllers/verify-profile.js');

// Verify
router.get('/', verifyProfileController.verifyProfile);

module.exports = router;