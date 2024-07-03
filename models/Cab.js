const mongoose = require('mongoose');

const cabSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: { 
    type: String, 
    required: true 
  },
  category: {
    type: String,
    required: true,
  },
  pricePerKm: {
    type: Number,
    required: true,
  },
  terms: {
    type: String,
    required: true,
  },
  inclusions: {
    type: String,
    required: true,
  },
  exclusions: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const Cab = mongoose.model('Cab', cabSchema);

module.exports = Cab;