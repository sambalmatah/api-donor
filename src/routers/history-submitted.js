const express = require('express');
const historySubmittedController = require('../controllers/history-submitted.js');
const router = express.Router();


// GET history
router.get('/:id', historySubmittedController.getHistorySubmitted);



module.exports = router;
