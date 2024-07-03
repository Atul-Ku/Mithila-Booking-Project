const mongoose = require('mongoose');

const tripPackageSchema = mongoose.Schema({
  city: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  packageName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  itinerary: [
    {
      spot: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      duration: {
        type: String,
        required: true,
      },
    },
  ],
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

const TripPackage = mongoose.model('TripPackage', tripPackageSchema);

module.exports = TripPackage;