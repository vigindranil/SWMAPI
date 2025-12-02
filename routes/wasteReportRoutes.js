const express = require('express');
const router = express.Router();
const wasteReportController = require('../controllers/wasteReportController');

router.get('/waste-report', wasteReportController.getReport);
router.get('/property-waste-report', wasteReportController.getPropertyReport);
module.exports = router;
