const express = require('express');
const donorTransactionDetailControllers = require('../controllers/donor-transaction-details.js');
const router = express.Router();

// READ - GET
router.get('/', donorTransactionDetailControllers.getAllTransactionDetails);

// CREATE - POST
router.post('/', donorTransactionDetailControllers.createTransactionDetails);

// UPDATE - PATCH
router.patch('/:id', donorTransactionDetailControllers.updateTransactionDetails);

// DELETE - DELETE
router.delete('/:id', donorTransactionDetailControllers.deleteTransactionDetails);



module.exports = router;