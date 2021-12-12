const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema
const CertificationSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    institution: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true
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
        required: true
    }
});

module.exports = Certification = mongoose.model("certification", CertificationSchema);