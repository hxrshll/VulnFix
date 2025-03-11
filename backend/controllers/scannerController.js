const Report = require('../models/reportModel');

const scanDependencies = async (req, res) => {
  try {
    const report = new Report({
      dependency: 'express',
      version: '4.17.1',
      severity: 'High',
    });
    await report.save();

    res.status(201).json(report);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { scanDependencies };
