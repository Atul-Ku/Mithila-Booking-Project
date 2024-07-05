const express = require('express');
const dotenv = require('dotenv');
const cors=require("cors");
const connectDB = require('./Config/db');
const bookingRoutes = require('./routes/bookingRoutes');
const adminRoutes= require('./routes/authRoutes');
const bannerRoutes= require('./routes/bannerRoutes');
const eventRoutes = require('./routes/eventRoutes');
const oneWayRoutes = require('./routes/oneWayRoutes');
const roundRoutes = require('./routes/roundWayRoutes');
const rentalRoutes = require('./routes/rentalRoutes');
const airportRoutes = require('./routes/airportRoutes');
const vanRoutes = require('./routes/vanRoutes');
const driverRoutes = require('./routes/driverRoutes');
const tripRoutes = require('./routes/tripRoutes');
const corsOptions = require('./Config/interact');


dotenv.config();
connectDB();

const app = express();

// Initial Middleware.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

// Define Routes


app.use('/api/bookings', bookingRoutes);
app.use('/api/Admin', adminRoutes);
app.use('/api/banners', bannerRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/oneWay', oneWayRoutes);
app.use('/api/roundWay', roundRoutes);
app.use('/api/rental', rentalRoutes);
app.use('/api/airport', airportRoutes);
app.use('/api/vans', vanRoutes);
app.use('/api/drivers', driverRoutes);
app.use('/api/trips', tripRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));