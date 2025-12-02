const pool = require('../config/database');

class WasteReportService {
  async getWasteReport(params) {
    const {
      month = null,
      year = null,
      fromDate = null,
      toDate = null,
      stateID = 0,
      districtID = 0,
      blockID = 0,
      gpID = 0,
      level = 0
    } = params;

    try {
      const [results] = await pool.query(
        'CALL sp_GetWasteReport(?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [month, year, fromDate, toDate, stateID, districtID, blockID, gpID, level]
      );

      return results[0];
    } catch (error) {
      console.error('Database error:', error);
      throw new Error('Failed to fetch waste report');
    }
  }

  async getPropertyWasteReport(params) {
    const {
      month = null,
      year = null,
      fromDate = null,
      toDate = null,
      stateID = 0,
      districtID = 0,
      blockID = 0,
      gpID = 0,
      level = 0
    } = params;

    try {
      const [results] = await pool.query(
        'CALL sp_GetPropertyTypeWasteReport(?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [month, year, fromDate, toDate, stateID, districtID, blockID, gpID, level]
      );

      return results[0];
    } catch (error) {
      console.error('Database error:', error);
      throw new Error('Failed to fetch waste report');
    }
  }
}

module.exports = new WasteReportService();
