const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema
const JobSchema = new Schema({
    company: {
        type: String,
        required: true,
    },
    role: {
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
    description: {
        type: String,
        required: true,
    },
    highlights: {
        type: Array,
        required: true,
    },
    location: {
        type: String,
        required: true
    },
    tech: {
        type: Array,
        required: true,
    },
    order: {
        type: Number,
        required: true,
    },
});

module.exports = Job = mongoose.model("job", JobSchema);