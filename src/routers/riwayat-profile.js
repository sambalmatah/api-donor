const express = require('express');
const historyProfileController = require('../controllers/riwayat-profile');
const router = express.Router();


// GET history
router.get('/:id', historyProfileController.getHistoryTransactions);



module.exports = router;
