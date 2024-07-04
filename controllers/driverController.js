const Driver = require('../models/Driver');

exports.addDriver = async (req, res) => {
    const { name, mobileNumber, address, aadhaarNumber, otherDetails } = req.body;
    try {
        const newDriver = new Driver({ name, mobileNumber, address, aadhaarNumber, otherDetails });
        await newDriver.save();
        res.json(newDriver);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.getDrivers = async (req, res) => {
    try {
        const drivers = await Driver.find();
        res.json(drivers);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.deleteDriver = async (req, res) => {
    try {
        await Driver.findByIdAndRemove(req.params.id);
        res.json({ msg: 'Driver removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
