const mongoose = require('mongoose');

const VanSchema = new mongoose.Schema({
  name: { type: String, required: true },
  number: { type: String, required: true },
  color: { type: String },
  owner: { type: String },
  otherDetails: { type: String },
});

module.exports = mongoose.model('Van', VanSchema);