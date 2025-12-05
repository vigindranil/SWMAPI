const express = require('express');
const router = express.Router();
const wasteReportController = require('../controllers/wasteReportController');

router.get('/waste-report', wasteReportController.getReport);
router.get('/property-waste-report', wasteReportController.getPropertyReport);
router.get('/location-wise-property-waste-report', wasteReportController.getLocationWisePropertyReport);
router.get('/waste-collection-dashboard', wasteReportController.getWasteCollectiondashboard);
module.exports = router;
