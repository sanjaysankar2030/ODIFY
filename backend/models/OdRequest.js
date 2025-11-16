const mongoose = require("mongoose");

const odSchema = new mongoose.Schema({
  studentName: String,
  department: String,
  eventName: String,
  eventType: String,
  startDate: Date,
  endDate: Date,
  reason: String,
});

module.exports = mongoose.model("OdRequest", odSchema);
