const express = require('express');
const cors = require('cors');
require('dotenv').config();

const wasteReportRoutes = require('./routes/wasteReportRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', wasteReportRoutes);

app.get('/', (req, res) => {
  res.json({
    message: 'Waste Report API',
    version: '1.0.0',
    endpoints: {
      wasteReport: '/api/waste-report'
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`API available at http://localhost:${PORT}`);
});

module.exports = app;
