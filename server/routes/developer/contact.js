const express = require("express");
const router = express.Router();

const bodyParser = require("body-parser");
const urlEncodedParser = bodyParser.urlencoded({ extended: false });

// For environment variables
require("dotenv").config();

// Create and configure transporter
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS
    }
});

// Send out mails
router.post("/", urlEncodedParser, (req, res) => {
    const mailOptions = {
        to: process.env.EMAIL,
        subject: `Sultan Singh Atwal | Message from ${req.body.firstName}${req.body.lastName && ' ' + req.body.lastName}`,
        text: `Hi Sultan,\n${req.body.firstName}${req.body.lastName && ' ' + req.body.lastName} just submitted the contact form on your personal website. Here's what they wrote:\n\n\t"${req.body.message}"\n\nYou can reach out to them using the email they provided: ${req.body.email}`
    };

    // Send mail
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } 
        else {
            console.log('Email sent to Sultan: ' + info.response);

            // To submitter
            const mailOptionsUser = {
                to: req.body.email,
                subject: `Sultan Singh Atwal | Message Received`,
                text: `Hi ${req.body.firstName}${req.body.lastName && ' ' + req.body.lastName},\n\nThank you for your message!\n\nI will reach out to you as soon as possible. This thread is not monitored. Please do not reply to this email. If you have more questions/suggestions, you may submit the contact form again.\n\nRegards,\nSultan Singh Atwal`
            };

            // Send mail
            transporter.sendMail(mailOptionsUser, (error, info) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log(`Email sent to ${req.body.email}: ` + info.response);
                }
            });
        }
    });

    res.redirect('/dev/about');
});

module.exports = router;