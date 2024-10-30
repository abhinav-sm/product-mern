const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const productRoutes = require('./routers/productRoutes.js');

// Load environment variables
dotenv.config();

// Connect to MongoDB
// connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;

connectDB().then(()=>{
  console.log("DB has been connected successfully!")
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})