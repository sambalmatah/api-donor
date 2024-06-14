const express = require('express');
const historyContributorController = require('../controllers/history-contributor.js');
const router = express.Router();


// GET history
router.get('/:id', historyContributorController.getHistoryContributor);



module.exports = router;
