const wasteReportService = require('../services/wasteReportService');

class WasteReportController {
  async getReport(req, res) {
    try {
      const {
        month,
        year,
        fromDate,
        toDate,
        stateID,
        districtID,
        blockID,
        gpID,
        level
      } = req.query;

      const params = {
        month: month || null,
        year: year ? parseInt(year) : null,
        fromDate: fromDate || null,
        toDate: toDate || null,
        stateID: stateID ? parseInt(stateID) : 0,
        districtID: districtID ? parseInt(districtID) : 0,
        blockID: blockID ? parseInt(blockID) : 0,
        gpID: gpID ? parseInt(gpID) : 0,
        level: level ? parseInt(level) : 0
      };

      const data = await wasteReportService.getWasteReport(params);

      res.status(200).json({
        success: true,
        data: data,
        count: data.length
      });
    } catch (error) {
      console.error('Controller error:', error);
      res.status(500).json({
        success: false,
        message: error.message || 'An error occurred while fetching the waste report'
      });
    }
  }
  async getPropertyReport(req, res) {
    try {
      const {
        month,
        year,
        fromDate,
        toDate,
        stateID,
        districtID,
        blockID,
        gpID,
        level
      } = req.query;

      const params = {
        month: month || null,
        year: year ? parseInt(year) : null,
        fromDate: fromDate || null,
        toDate: toDate || null,
        stateID: stateID ? parseInt(stateID) : 0,
        districtID: districtID ? parseInt(districtID) : 0,
        blockID: blockID ? parseInt(blockID) : 0,
        gpID: gpID ? parseInt(gpID) : 0,
        level: level ? parseInt(level) : 0
      };

      const data = await wasteReportService.getPropertyWasteReport(params);

      res.status(200).json({
        success: true,
        data: data,
        count: data.length
      });
    } catch (error) {
      console.error('Controller error:', error);
      res.status(500).json({
        success: false,
        message: error.message || 'An error occurred while fetching the waste report'
      });
    }
  }
}

module.exports = new WasteReportController();
