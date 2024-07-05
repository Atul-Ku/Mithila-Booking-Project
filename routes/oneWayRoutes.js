const express = require('express');
const router = express.Router();
const oneWayController = require('../controllers/oneWayController');

router.post('/add', oneWayController.addCategory);
router.get('/', oneWayController.getCategories);
router.put('/:id', oneWayController.updateCategory);
router.delete('/:id', oneWayController.deleteCategory);

module.exports = router;