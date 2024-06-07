const express = require('express');
const route = express.Router();
const loginControllers = require('../controllers/login.js');

// LOGIN - GET(BODY)
route.get('/', loginControllers.loginUser);



module.exports = route