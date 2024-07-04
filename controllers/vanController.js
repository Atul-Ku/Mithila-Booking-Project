const Van = require('../models/Van');

exports.addVan = async (req, res) => {
    const { name, number, color, owner, others } = req.body;
    try {
        const newVan = new Van({ name, number, color, owner, others });
        await newVan.save();
        res.json(newVan);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.getVans = async (req, res) => {
    try {
        const vans = await Van.find();
        res.json(vans);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.deleteVan = async (req, res) => {
    try {
        await Van.findByIdAndRemove(req.params.id);
        res.json({ msg: 'Van removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};