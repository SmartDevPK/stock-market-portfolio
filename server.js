// Load environment variables
require('dotenv').config();

// Import packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Port from .env or default
const PORT = process.env.PORT || 5000;

// Connect Mongoose to Database
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
	useUnifiedTopology: true,
})

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost: ${PORT}`)
})
