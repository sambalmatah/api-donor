const express = require('express');
const userController = require('../controllers/users.js');
const router = express.Router();


// READ - GET
router.get('/', userController.getAllUsers);

// CREATE - POST (perlu request body dengan middleware)
router.post('/', userController.createNewUser);

// UPDATE - PATCH
router.patch('/:id', userController.updateUser);

// DELETE - DELETE
router.delete('/:id', userController.deleteUser);


module.exports = router;