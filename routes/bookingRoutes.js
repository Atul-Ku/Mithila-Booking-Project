const express = require('express');
const { addBooking } = require('../controllers/bookingController');
// const { protect } = require('../middleware/authMiddleware');
const {login} = require('../middleware/AdminauthMiddleware');

const router = express.Router();

router.post('/', login , addBooking);

module.exports = router;