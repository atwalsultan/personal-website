const express = require("express");
const router = express.Router();

// Import model
const Certification = require("../../models/developer/Certification");

// Fetch and respond with documents/error
router.get("/", (req, res) => {
	Certification.find()
		.then((certification) => {
			res.status(200).send(certification);
		})
		.catch((err) => {
			res.status(500).send(err);
		});
});

module.exports = router;