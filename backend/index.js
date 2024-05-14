const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const programRoutes = require('./routes/programs'); // Import the programs route

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/programs', programRoutes); // Use the programs route

// Database connection
mongoose.connect(`mongodb+srv://gpokharel02:gpokharel02@chatappp.qkoibo4.mongodb.net/sumiran`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB...', err));

// Start server
const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Listening on port ${port}...`));
