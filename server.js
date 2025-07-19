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

// Create UserSchame Table 
const stockSchema = new mongoose.Schema({
    company: String,
	description: String,
	initial_price: Number,
	price_2002: Number,
	price_2007: Number,
	symbol: String,
})

const stock = mongoose.model("stock", stockSchema);

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost: ${PORT}`)
})
