const express = require('express');
const router = express.Router();
const driverController = require('../controllers/driverController');

router.post('/add', driverController.addDriver);
router.get('/', driverController.getDrivers);
router.delete('/:id', driverController.deleteDriver);

module.exports = router;