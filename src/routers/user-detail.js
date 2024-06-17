const express = require('express');
const router = express.Router();
const userDetailsController = require('../controllers/user-details.js')


// READ - GET
router.get('/:id', userDetailsController.getAllUserDetails);

// UPDATE - PATCH
router.patch('/:id', userDetailsController.updateUserDetails)



module.exports = router;