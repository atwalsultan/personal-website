const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema
const ProjectSchema = new Schema({
    name: {
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
        required: true,
    },
    tech: {
        type: Array,
        required: true,
    },
    links: {
        type: Object,
        required: true,
    },
});

module.exports = Project = mongoose.model("project", ProjectSchema);