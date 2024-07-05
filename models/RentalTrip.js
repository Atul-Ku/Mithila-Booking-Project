const mongoose = require('mongoose');

const vanSchema = new mongoose.Schema({
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
  }
});

const RentalTripSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    Van:vanSchema,
},
  { timestamps: true}
);

module.exports = new mongoose.model('RentalTrip', RentalTripSchema);