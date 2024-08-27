const express = require('express');
const connectDB = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Pass the Express app instance to userRoutes
userRoutes(app);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
  console.log(`all good`);
});