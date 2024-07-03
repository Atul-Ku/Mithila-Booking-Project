const asyncHandler = require('express-async-handler');
const Cab = require('../models/Cab');
const TripPackage = require('../models/TripPackage');

// @desc    Create new cab
// @route   POST /api/admin/cabs
// @access  Private/Admin

const createCab = asyncHandler(async (req, res) => {
  const {
    name,
    imageUrl,
    category,
    pricePerKm,
    terms,
    inclusions,
    exclusions,
  } = req.body;

  const cab = new Cab({
    name,
    imageUrl,
    category,
    pricePerKm,
    terms,
    inclusions,
    exclusions,
  });

  const createdCab = await cab.save();
  res.status(201).json(createdCab);
});

// @desc    Create new trip package
// @route   POST /api/admin/tripPackages
// @access  Private/Admin

const createTripPackage = asyncHandler(async (req, res) => {
  const {
    city,
    duration,
    packageName,
    description,
    price,
    itinerary,
    inclusions,
    exclusions,
  } = req.body;

  const tripPackage = new TripPackage({
    city,
    duration,
    packageName,
    description,
    price,
    itinerary,
    inclusions,
    exclusions,
  });

  const createdTripPackage = await tripPackage.save();
  res.status(201).json(createdTripPackage);
});

module.exports = { createCab, createTripPackage };
