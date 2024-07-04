const express = require('express');
const router = express.Router();
const vanController = require('../controllers/vanController');

router.post('/add', vanController.addVan);
router.get('/', vanController.getVans);
router.delete('/:id', vanController.deleteVan);

module.exports = router;