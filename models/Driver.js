const mongoose = require('mongoose');

const DriverSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  address: { type: String, required: true },
  aadhaarNumber: { type: String, required: true },
  otherDetails: { type: String },
});

module.exports = mongoose.model('Driver', DriverSchema);