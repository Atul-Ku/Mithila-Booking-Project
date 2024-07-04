const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

router.post('/add', eventController.addEvent);
router.get('/', eventController.getEvents);
router.delete('/:id', eventController.deleteEvent);

module.exports = router;