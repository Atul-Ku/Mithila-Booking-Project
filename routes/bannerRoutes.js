const express = require('express');
const router = express.Router();
const bannerController = require('../controllers/bannerController');

router.post('/add', bannerController.addBanner);
router.get('/', bannerController.getBanners);
router.delete('/:id', bannerController.deleteBanner);

module.exports = router;