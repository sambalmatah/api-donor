const express = require('express');
const router = express.Router();
const userDetailsController = require('../controllers/user-details.js')


// READ - GET
router.get('/', userDetailsController.getAllUserDetails);

// CREATE - POST
router.post('/', userDetailsController.createNewUserDetails);

// UPDATE - PATCH
router.patch('/:id', userDetailsController.updateUserDetails);

// DELETE - DETELE
router.delete('/:id', userDetailsController.deleteUserDetials);



module.exports = router;