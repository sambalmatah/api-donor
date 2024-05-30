const express = require('express');
const donorTransactionController = require('../controllers/donor-transactions.js');
const router = express.Router();


// READ - GET
router.get('/', donorTransactionController.getAllTransactions);

// CREATE - POST
router.post('/', donorTransactionController.createNewTransaction);

// UPDATE - PATCH
router.patch('/:id', donorTransactionController.updateTransaction);

// DELETE - DELETE
router.delete('/:id', donorTransactionController.deleteTransaction);



module.exports = router;