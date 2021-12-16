const express = require("express");
const router = express.Router();

// Import model
const Job = require("../../models/developer/Job");

// Fetch and respond with documents/error
router.get("/", (req, res) => {
	Job.find()
		.then((job) => {
			res.status(200).send(job);
		})
		.catch((err) => {
			res.status(500).send(err);
		});
});

module.exports = router;