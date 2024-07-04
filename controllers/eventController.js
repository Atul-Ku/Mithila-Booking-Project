const Event = require('../models/Event');

exports.addEvent = async (req, res) => {
    const { name, imageUrl, message } = req.body;
    try {
        const newEvent = new Event({ name, imageUrl, message });
        await newEvent.save();
        res.json(newEvent);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.getEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.deleteEvent = async (req, res) => {
    try {
        await Event.findByIdAndRemove(req.params.id);
        res.json({ msg: 'Event removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};