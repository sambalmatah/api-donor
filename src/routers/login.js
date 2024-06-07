const express = require('express');
const router = express.Router();
const loginControllers = require('../controllers/login.js');

// LOGIN - GET(BODY)
router.get('/', loginControllers.loginUser);



module.exports = router