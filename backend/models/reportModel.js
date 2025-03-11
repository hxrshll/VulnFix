const mongoose = require('mongoose');

const reportSchema = mongoose.Schema({
  dependency: String,
  version: String,
  severity: String,
  status: { type: String, default: 'Pending' },
}, { timestamps: true });

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;
