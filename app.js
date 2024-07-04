const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
// const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const bodyParser = require('body-parser');

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
// app.use()
// app.use(express.json({ extended: false }));

// Define Routes

// app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/banners', require('./routes/bannerRoutes'));
app.use('/api/events', require('./routes/eventRoutes'));
app.use('/api/categories', require('./routes/categoryRoutes'));
app.use('/api/vans', require('./routes/vanRoutes'));
app.use('/api/drivers', require('./routes/driverRoutes'));
app.use('/api/trips', require('./routes/tripRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));