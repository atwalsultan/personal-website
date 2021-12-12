// Imports
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 8080;

// Route handlers
const certifications = require('./routes/developer/certifications');
const educations = require('./routes/developer/educations');

// CORS
const cors = require("cors");
app.use(cors());

// Environment variables
require("dotenv").config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((e) => console.log(e));

// To handle JSON data
app.use(express.json());

// Routes
app.use('/certifications', certifications);
app.use('/educations', educations);

// Specify port and listen
app.listen(PORT, () => {
    console.log(`Server is ready at ${PORT}`);
});