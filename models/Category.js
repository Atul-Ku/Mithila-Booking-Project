const mongoose = require('mongoose');

const SubCategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  vans: [{
    name: { type: String },
    pricePerKm: { type: Number },
    terms: { type: String },
    inclusions: { type: String },
    exclusions: { type: String },
  }],
});

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  subcategories: [SubCategorySchema],
});

module.exports = mongoose.model('Category', CategorySchema);