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

const roundTripSchema = new mongoose.Schema({
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
    returnDate: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    van: vanSchema ,
},
    { timestamps: true}
);

module.exports = mongoose.model('RoundTrip', roundTripSchema)