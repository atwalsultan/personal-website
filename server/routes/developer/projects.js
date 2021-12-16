const express = require("express");
const router = express.Router();

// Import model
const Project = require("../../models/developer/Project");

// Fetch and respond with documents/error
router.get("/", (req, res) => {
	Project.find()
		.then((project) => {
			res.status(200).send(project);
		})
		.catch((err) => {
			res.status(500).send(err);
		});
});

module.exports = router;