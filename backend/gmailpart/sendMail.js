const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const sendBookingEmail = async (data) => {
  try {
    // Create reusable transporter object using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your gmail address from .env
        pass: process.env.EMAIL_PASS, // Your app password from .env
      },
    });

    // Email content with inline logo image
    const mailOptions = {
      from: `"Drifty" <${process.env.EMAIL_USER}>`,
      to: data.email,
      subject: "Booking Request - Drifty",
      html: `
        <div>
          <img src="cid:logo" alt="Drifty Logo" width="200" />
        </div>
        <h2>Dear Customer, ${data.customerName},</h2>
        <p>Your Request Has Been Submitted Successfully.</p>
        <p>We are pleased to confirm that we have received your booking request. Here are the details of your reservation:</p>
        <p><strong>Car:</strong> ${data.carModel}</p>
        <p><strong>Pickup:</strong> ${new Date(
          data.pickupDateTime
        ).toLocaleString()}</p>
        <p><strong>Dropoff:</strong> ${new Date(
          data.dropoffDateTime
        ).toLocaleString()}</p>
        <p><strong>Location:</strong> ${data.pickupLocation || "N/A"}</p>
        <br/>
        <p>We’ll review your booking and get in touch with further details shortly. If you need to make any changes or have questions about your booking, don’t hesitate to reach out. We’re here to help!</p>
        <p>Thank you for choosing us. We look forward to serving you!</p>
        <p>Team Drifty</p>
      `,
      attachments: [
        {
          filename: "logo1.jpg",
          path: path.join(__dirname, "..", "path", "logo1.png"), // Correct relative path from this file
          cid: "logo",
        },
      ],
    };

    // Send mail
    const info = await transporter.sendMail(mailOptions);
    console.log("📧 Email sent:", info.response);
  } catch (error) {
    console.error("❌ Email sending failed:", error.message);
  }
};

module.exports = sendBookingEmail;
