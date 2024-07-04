const express = require('express');
const { addBooking } = require('../controllers/bookingController');

const router = express.Router();

router.post('/', addBooking);

module.exports = router;