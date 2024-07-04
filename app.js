const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./Config/db');
const bookingRoutes = require('./routes/bookingRoutes');
const adminRoutes= require('./routes/authRoutes');
const bannerRoutes= require('./routes/bannerRoutes');
const eventRoutes = require('./routes/eventRoutes');
const categoryRoutes =  require('./routes/categoryRoutes');
const vanRoutes = require('./routes/vanRoutes');
const driverRoutes = require('./routes/driverRoutes');
const tripRoutes = require('./routes/tripRoutes');

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
// app.use()
// app.use(express.json({ extended: false }));

// Define Routes

// app.use('/api/users', userRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/Admin', adminRoutes);
app.use('/api/banners', bannerRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/vans', vanRoutes);
app.use('/api/drivers', driverRoutes);
app.use('/api/trips', tripRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));