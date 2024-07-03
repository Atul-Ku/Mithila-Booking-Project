const express = require('express');
const { addBooking } = require('../controllers/bookingController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', protect, addBooking);

module.exports = router;