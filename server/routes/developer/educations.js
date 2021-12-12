const express = require("express");
const router = express.Router();

// Import model
const Education = require("../../models/developer/Education");

// Fetch and respond with documents/error
router.get("/", (req, res) => {
	Education.find()
		.then((education) => {
			res.status(200).send(education);
		})
		.catch((err) => {
			res.status(500).send(err);
		});
});

module.exports = router;