const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subCategories: [{
        name: {
            type: String,
            required: true
        },
        vanInfo: {
            name: String,
            pricePerKm: Number,
            terms: String,
            inclusions: [String],
            exclusions: [String]
        }
    }]
});

module.exports = mongoose.model('Category', CategorySchema);