const nodemailer = require("nodemailer");

// Configure the transporter using your Gmail credentials
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER, // Use environment variable
    pass: process.env.GMAIL_PASS, // Use environment variable
  },
});

module.exports = transporter;
