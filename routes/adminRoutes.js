const express = require('express');
const { createCab, createTripPackage } = require('../controllers/adminController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// router.post('/users', protect, admin );


router.post('/cabs', protect, admin, createCab);
router.post('/tripPackages', protect, admin, createTripPackage);

module.exports = router;