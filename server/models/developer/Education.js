const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema
const EducationSchema = new Schema({
    institution: {
        type: String,
        required: true,
    },
    credential: {
        type: String,
        required: true,
    },
    program: {
        type: String,
        required: true,
    },
    from: {
        type: Date,
        required: true,
    },
    to: {
        type: Date,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    gpa: {
        type: Number,
        required: false,
    },
    percentage: {
        type: Number,
        required: false
    }
});

module.exports = Education = mongoose.model("education", EducationSchema);