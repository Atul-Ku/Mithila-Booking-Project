const Banner = require('../models/Banner');

exports.addBanner = async (req, res) => {
    const { imageUrl } = req.body;
    try {
        const newBanner = new Banner({ imageUrl });
        await newBanner.save();
        res.json(newBanner);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.getBanners = async (req, res) => {
    try {
        const banners = await Banner.find();
        res.json(banners);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.deleteBanner = async (req, res) => {
    try {
        await Banner.findByIdAndRemove(req.params.id);
        res.json({ msg: 'Banner removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
