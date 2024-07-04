const Trip = require('../models/Trip');
const Van = require('../models/Van');
const Driver = require('../models/Driver');

exports.createTrip = async (req, res) => {
    const { city, duration, package } = req.body;
    try {
        const newTrip = new Trip({ city, duration, package });
        await newTrip.save();
        res.json(newTrip);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.getTrips = async (req, res) => {
    try {
        const trips = await Trip.find();
        res.json(trips);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.updateTripStatus = async (req, res) => {
    const { status, vanId, driverId } = req.body;
    try {
        const trip = await Trip.findById(req.params.id);
        if (!trip) {
            return res.status(404).json({ msg: 'Trip not found' });
        }
        trip.status = status;

        if (status === 'Confirmed') {
            const van = await Van.findById(vanId);
            const driver = await Driver.findById(driverId);
            // Assume sendNotification is a function to send SMS/WhatsApp
            sendNotification(trip.package.mobileNumber, `Your trip is confirmed with Van: ${van.name}, Driver: ${driver.name}`);
        }

        await trip.save();
        res.json(trip);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
