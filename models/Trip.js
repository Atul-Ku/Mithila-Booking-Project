const mongoose = require('mongoose');

const TripSchema = new mongoose.Schema({
    city: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    package: {
        name: String,
        banners: [String],
        description: String,
        photoGallery: [String],
        itinerary: [{
            spot: String,
            heading: String,
            description: String,
            spotDuration: String
        }],
        vehicleDetails: {
            picture: String,
            name: String,
            seatDetails: String,
            acDetails: String,
            price: Number
        },
        tourInformation: {
            inclusions: [String],
            exclusions: [String]
        },
        paymentPolicy: String,
        termsAndConditions: String,
        mobileNumber: String
    },
    status: {
        type: String,
        default: 'Pending'
    }
});

module.exports = mongoose.model('Trip', TripSchema);