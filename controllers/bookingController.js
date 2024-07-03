const asyncHandler = require('express-async-handler');
const Booking = require('../models/Booking');

// @desc    Create new booking
// @route   POST /api/bookings
// @access  Private

const addBooking = asyncHandler(async (req, res) => {
  const {
    cabCategory,
    from,
    to,
    date,
    time,
    price,
  } = req.body;

  const booking = new Booking({
    user: req.user._id,
    cabCategory,
    from,
    to,
    date,
    time,
    price,
  });

  const createdBooking = await booking.save();
  res.status(201).json(createdBooking);
});

module.exports = { addBooking };
