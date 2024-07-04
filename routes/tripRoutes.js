const express = require('express');
const router = express.Router();
const tripController = require('../controllers/tripController');

router.post('/create', tripController.createTrip);
router.get('/', tripController.getTrips);
router.put('/:id/status', tripController.updateTripStatus);

module.exports = router;