// // // // // // const express = require("express");
// // // // // // const router = express.Router();
// // // // // // const Booking = require("../models/Booking");
// // // // // // const sendBookingEmail = require("../gmailpart/sendMail");

// // // // // // // Helper to parse and validate ISO datetime
// // // // // // const parseISODate = (input) => {
// // // // // //   const date = new Date(input);
// // // // // //   return isNaN(date.getTime()) ? new Date().toISOString() : date.toISOString();
// // // // // // };

// // // // // // // Create a new booking
// // // // // // router.post("/", async (req, res) => {
// // // // // //   try {
// // // // // //     const {
// // // // // //       vehicleId,
// // // // // //       name,
// // // // // //       rate,
// // // // // //       date,
// // // // // //       customerName,
// // // // // //       email,
// // // // // //       phone,
// // // // // //       pickupDateTime,
// // // // // //       dropoffDateTime,
// // // // // //     } = req.body;

// // // // // //     // Validate required fields
// // // // // //     if (!vehicleId || !name || !rate || !pickupDateTime || !dropoffDateTime) {
// // // // // //       return res.status(400).json({
// // // // // //         success: false,
// // // // // //         error:
// // // // // //           "Required fields missing: vehicleId, name, rate, pickupDateTime, dropoffDateTime are required.",
// // // // // //       });
// // // // // //     }

// // // // // //     const now = new Date().toISOString();

// // // // // //     const booking = new Booking({
// // // // // //       vehicleId,
// // // // // //       name,
// // // // // //       rate,
// // // // // //       date: parseISODate(date || now),
// // // // // //       customerName: customerName || name || "Unknown",
// // // // // //       email: email || "regmirajib70@gmail.com",
// // // // // //       phone: phone || "+977 9801234567",
// // // // // //       pickupDateTime: parseISODate(pickupDateTime || now),
// // // // // //       dropoffDateTime: parseISODate(dropoffDateTime || now),
// // // // // //     });

// // // // // //     const savedBooking = await booking.save();

// // // // // //     // Corrected emailData object
// // // // // //     const emailData = {
// // // // // //       customerName: savedBooking.customerName,
// // // // // //       carModel: savedBooking.name,
// // // // // //       pickupDateTime: savedBooking.pickupDateTime,
// // // // // //       dropoffDateTime: savedBooking.dropoffDateTime,
// // // // // //       pickupLocation: "Herald College, Chandragiri",
// // // // // //       email:  savedBooking.email,
// // // // // // // Use customer's email
// // // // // //     };

// // // // // //     // Attempt to send email
// // // // // //     try {
// // // // // //       await sendBookingEmail(emailData);
// // // // // //       console.log("✅ Email sent successfully");
// // // // // //     } catch (err) {
// // // // // //       console.error("❌ Email error:", err.message);
// // // // // //       // Continue without failing the booking
// // // // // //     }

// // // // // //     res.status(201).json({
// // // // // //       success: true,
// // // // // //       message: "Booking created successfully",
// // // // // //       booking: savedBooking,
// // // // // //     });
// // // // // //   } catch (err) {
// // // // // //     console.error("Booking error:", err);
// // // // // //     res
// // // // // //       .status(500)
// // // // // //       .json({ success: false, error: "Booking failed due to server error." });
// // // // // //   }
// // // // // // });

// // // // // // // Get all bookings
// // // // // // router.get("/", async (req, res) => {
// // // // // //   try {
// // // // // //     const bookings = await Booking.find().sort({ createdAt: -1 });
// // // // // //     res.status(200).json({ success: true, bookings });
// // // // // //   } catch (err) {
// // // // // //     console.error("Get bookings error:", err);
// // // // // //     res.status(500).json({ success: false, error: "Failed to fetch bookings" });
// // // // // //   }
// // // // // // });

// // // // // // // Get booking by ID
// // // // // // router.get("/:id", async (req, res) => {
// // // // // //   try {
// // // // // //     const booking = await Booking.findById(req.params.id);
// // // // // //     if (!booking) {
// // // // // //       return res
// // // // // //         .status(404)
// // // // // //         .json({ success: false, error: "Booking not found" });
// // // // // //     }
// // // // // //     res.status(200).json({ success: true, booking });
// // // // // //   } catch (err) {
// // // // // //     console.error("Get booking error:", err);
// // // // // //     res.status(500).json({ success: false, error: "Failed to fetch booking" });
// // // // // //   }
// // // // // // });

// // // // // // // Update booking status
// // // // // // router.patch("/:id/status", async (req, res) => {
// // // // // //   try {
// // // // // //     const { status } = req.body;

// // // // // //     if (!["pending", "confirmed", "cancelled"].includes(status)) {
// // // // // //       return res.status(400).json({ success: false, error: "Invalid status" });
// // // // // //     }

// // // // // //     const booking = await Booking.findByIdAndUpdate(
// // // // // //       req.params.id,
// // // // // //       { status },
// // // // // //       { new: true }
// // // // // //     );

// // // // // //     if (!booking) {
// // // // // //       return res
// // // // // //         .status(404)
// // // // // //         .json({ success: false, error: "Booking not found" });
// // // // // //     }

// // // // // //     res.status(200).json({ success: true, booking });
// // // // // //   } catch (err) {
// // // // // //     console.error("Update booking status error:", err);
// // // // // //     res
// // // // // //       .status(500)
// // // // // //       .json({ success: false, error: "Failed to update booking status" });
// // // // // //   }
// // // // // // });

// // // // // // module.exports = router;

// // // // // // const express = require("express");
// // // // // // const router = express.Router();
// // // // // // const Booking = require("../models/Booking");
// // // // // // const sendBookingEmail = require("../gmailpart/sendMail");

// // // // // // // Helper to parse and validate ISO datetime
// // // // // // const parseISODate = (input) => {
// // // // // //   const date = new Date(input);
// // // // // //   return isNaN(date.getTime()) ? new Date().toISOString() : date.toISOString();
// // // // // // };

// // // // // // // Create a new booking
// // // // // // router.post("/", async (req, res) => {
// // // // // //   try {
// // // // // //     const {
// // // // // //       vehicleId,
// // // // // //       name,
// // // // // //       rate,
// // // // // //       date,
// // // // // //       customerName,
// // // // // //       email,
// // // // // //       phone,
// // // // // //       pickupDateTime,
// // // // // //       dropoffDateTime,
// // // // // //     } = req.body;

// // // // // //     if (!vehicleId || !name || !rate || !pickupDateTime || !dropoffDateTime) {
// // // // // //       return res.status(400).json({
// // // // // //         success: false,
// // // // // //         error: "Required fields missing.",
// // // // // //       });
// // // // // //     }

// // // // // //     const now = new Date().toISOString();

// // // // // //     const booking = new Booking({
// // // // // //       vehicleId,
// // // // // //       name,
// // // // // //       rate,
// // // // // //       date: parseISODate(date || now),
// // // // // //       customerName: customerName || name || "Unknown",
// // // // // //       email: email || "regmirajib70@gmail.com",
// // // // // //       phone: phone || "+977 9801234567",
// // // // // //       pickupDateTime: parseISODate(pickupDateTime || now),
// // // // // //       dropoffDateTime: parseISODate(dropoffDateTime || now),
// // // // // //     });

// // // // // //     const savedBooking = await booking.save();

// // // // // //     const emailData = {
// // // // // //       customerName: savedBooking.customerName,
// // // // // //       carModel: savedBooking.name,
// // // // // //       pickupDateTime: savedBooking.pickupDateTime,
// // // // // //       dropoffDateTime: savedBooking.dropoffDateTime,
// // // // // //       pickupLocation: "Herald College, Chandragiri",
// // // // // //       email: savedBooking.email,
// // // // // //     };

// // // // // //     try {
// // // // // //       await sendBookingEmail(emailData);
// // // // // //     } catch (err) {
// // // // // //       console.error("❌ Email error:", err.message);
// // // // // //     }

// // // // // //     res
// // // // // //       .status(201)
// // // // // //       .json({
// // // // // //         success: true,
// // // // // //         message: "Booking created successfully",
// // // // // //         booking: savedBooking,
// // // // // //       });
// // // // // //   } catch (err) {
// // // // // //     res
// // // // // //       .status(500)
// // // // // //       .json({ success: false, error: "Booking failed due to server error." });
// // // // // //   }
// // // // // // });

// // // // // // // Get all bookings
// // // // // // router.get("/", async (req, res) => {
// // // // // //   try {
// // // // // //     const bookings = await Booking.find().sort({ createdAt: -1 });
// // // // // //     res.status(200).json({ success: true, bookings });
// // // // // //   } catch (err) {
// // // // // //     res.status(500).json({ success: false, error: "Failed to fetch bookings" });
// // // // // //   }
// // // // // // });

// // // // // // // Get active bookings
// // // // // // router.get("/active", async (req, res) => {
// // // // // //   try {
// // // // // //     const activeBookings = await Booking.find({ status: "confirmed" }).sort({
// // // // // //       createdAt: -1,
// // // // // //     });
// // // // // //     res.status(200).json({ success: true, bookings: activeBookings });
// // // // // //   } catch (err) {
// // // // // //     res
// // // // // //       .status(500)
// // // // // //       .json({ success: false, error: "Failed to fetch active bookings" });
// // // // // //   }
// // // // // // });

// // // // // // // Export the router
// // // // // // module.exports = router;

// // // // // // const express = require("express");
// // // // // // const router = express.Router();
// // // // // // const Booking = require("../models/Booking");
// // // // // // const Vehicle = require("../models/Vehicle");
// // // // // // const sendBookingEmail = require("../gmailpart/sendMail");
// // // // // // const mongoose = require("mongoose");

// // // // // // // Helper to parse and validate ISO datetime
// // // // // // const parseISODate = (input) => {
// // // // // //   const date = new Date(input);
// // // // // //   return isNaN(date.getTime()) ? new Date().toISOString() : date.toISOString();
// // // // // // };

// // // // // // // Create a new booking
// // // // // // router.post("/", async (req, res) => {
// // // // // //   try {
// // // // // //     const {
// // // // // //       vehicleId,
// // // // // //       name,
// // // // // //       rate,
// // // // // //       date,
// // // // // //       customerName,
// // // // // //       email,
// // // // // //       phone,
// // // // // //       pickupDateTime,
// // // // // //       dropoffDateTime,
// // // // // //     } = req.body;

// // // // // //     if (!vehicleId || !name || !rate || !pickupDateTime || !dropoffDateTime) {
// // // // // //       return res
// // // // // //         .status(400)
// // // // // //         .json({ success: false, error: "Required fields missing" });
// // // // // //     }

// // // // // //     const booking = new Booking({
// // // // // //       vehicleId,
// // // // // //       name,
// // // // // //       rate,
// // // // // //       date: parseISODate(date),
// // // // // //       customerName: customerName || "Unknown",
// // // // // //       email: email || "regmirajib70@gmail.com",
// // // // // //       phone: phone || "+977 9801234567",
// // // // // //       pickupDateTime: parseISODate(pickupDateTime),
// // // // // //       dropoffDateTime: parseISODate(dropoffDateTime),
// // // // // //     });

// // // // // //     const savedBooking = await booking.save();

// // // // // //     await sendBookingEmail({
// // // // // //       customerName: savedBooking.customerName,
// // // // // //       carModel: savedBooking.name,
// // // // // //       pickupDateTime: savedBooking.pickupDateTime,
// // // // // //       dropoffDateTime: savedBooking.dropoffDateTime,
// // // // // //       email: savedBooking.email,
// // // // // //     });

// // // // // //     res
// // // // // //       .status(201)
// // // // // //       .json({
// // // // // //         success: true,
// // // // // //         message: "Booking created successfully",
// // // // // //         booking: savedBooking,
// // // // // //       });
// // // // // //   } catch (err) {
// // // // // //     console.error("Booking error:", err);
// // // // // //     res
// // // // // //       .status(500)
// // // // // //       .json({ success: false, error: "Booking failed due to server error." });
// // // // // //   }
// // // // // // });

// // // // // // // Get Active Vehicles
// // // // // // router.get("/active", async (req, res) => {
// // // // // //   try {
// // // // // //     const activeBookings = await Booking.find({
// // // // // //       status: { $in: ["pending", "confirmed"] },
// // // // // //     }).lean();

// // // // // //     const vehicles = await Promise.all(
// // // // // //       activeBookings.map(async (booking) => {
// // // // // //         const vehicle = await Vehicle.findById(booking.vehicleId);
// // // // // //         return { ...booking, vehicleDetails: vehicle || null };
// // // // // //       })
// // // // // //     );

// // // // // //     res.status(200).json({ success: true, activeVehicles: vehicles });
// // // // // //   } catch (err) {
// // // // // //     console.error("Get active vehicles error:", err);
// // // // // //     res
// // // // // //       .status(500)
// // // // // //       .json({ success: false, error: "Failed to fetch active vehicles" });
// // // // // //   }
// // // // // // });

// // // // // // module.exports = router;

// // // // // const express = require("express");
// // // // // const router = express.Router();
// // // // // const Booking = require("../models/Booking");
// // // // // const Vehicle = require("../models/Vehicle");
// // // // // const sendBookingEmail = require("../gmailpart/sendMail");

// // // // // // Helper to parse and validate ISO datetime
// // // // // const parseISODate = (input) => {
// // // // //   const date = new Date(input);
// // // // //   return isNaN(date.getTime()) ? new Date().toISOString() : date.toISOString();
// // // // // };

// // // // // // Create a new booking
// // // // // router.post("/", async (req, res) => {
// // // // //   try {
// // // // //     const {
// // // // //       vehicleId,
// // // // //       name,
// // // // //       rate,
// // // // //       date,
// // // // //       customerName,
// // // // //       email,
// // // // //       phone,
// // // // //       pickupDateTime,
// // // // //       dropoffDateTime,
// // // // //       totalPrice,
// // // // //     } = req.body;

// // // // //     if (
// // // // //       !vehicleId ||
// // // // //       !name ||
// // // // //       !rate ||
// // // // //       !pickupDateTime ||
// // // // //       !dropoffDateTime ||
// // // // //       !totalPrice
// // // // //     ) {
// // // // //       return res
// // // // //         .status(400)
// // // // //         .json({ success: false, error: "Required fields missing" });
// // // // //     }

// // // // //     // 🧠 FETCH vehicle from database first
// // // // //     const vehicle = await Vehicle.findById(vehicleId);

// // // // //     if (!vehicle) {
// // // // //       return res
// // // // //         .status(404)
// // // // //         .json({ success: false, error: "Vehicle not found" });
// // // // //     }

// // // // //     const booking = new Booking({
// // // // //       vehicleId,
// // // // //       name,
// // // // //       rate,
// // // // //       totalPrice,
// // // // //       date: parseISODate(date),
// // // // //       customerName: customerName || "Unknown",
// // // // //       email: email || "regmirajib70@gmail.com",
// // // // //       phone: phone || "+977 9801234567",
// // // // //       pickupDateTime: parseISODate(pickupDateTime),
// // // // //       dropoffDateTime: parseISODate(dropoffDateTime),
// // // // //       ownerName: vehicle.ownerName || "Unknown",
// // // // //       ownerPhone: vehicle.phoneNumber || "N/A",
// // // // //     });

// // // // //     const savedBooking = await booking.save();

// // // // //     await sendBookingEmail({
// // // // //       customerName: savedBooking.customerName,
// // // // //       carModel: savedBooking.name,
// // // // //       pickupDateTime: savedBooking.pickupDateTime,
// // // // //       dropoffDateTime: savedBooking.dropoffDateTime,
// // // // //       email: savedBooking.email,
// // // // //     });

// // // // //     res.status(201).json({
// // // // //       success: true,
// // // // //       message: "Booking created successfully",
// // // // //       booking: savedBooking,
// // // // //     });
// // // // //   } catch (err) {
// // // // //     console.error("Booking error:", err);
// // // // //     res
// // // // //       .status(500)
// // // // //       .json({ success: false, error: "Booking failed due to server error." });
// // // // //   }
// // // // // });

// // // // // // Get Active Vehicles
// // // // // router.get("/active", async (req, res) => {
// // // // //   try {
// // // // //     const activeBookings = await Booking.find({
// // // // //       status: { $in: ["pending", "confirmed"] },
// // // // //     }).lean();

// // // // //     const vehicles = await Promise.all(
// // // // //       activeBookings.map(async (booking) => {
// // // // //         const vehicle = await Vehicle.findById(booking.vehicleId);
// // // // //         return { ...booking, vehicleDetails: vehicle || null };
// // // // //       })
// // // // //     );

// // // // //     res.status(200).json({ success: true, activeVehicles: vehicles });
// // // // //   } catch (err) {
// // // // //     console.error("Get active vehicles error:", err);
// // // // //     res
// // // // //       .status(500)
// // // // //       .json({ success: false, error: "Failed to fetch active vehicles" });
// // // // //   }
// // // // // });

// // // // // module.exports = router;

// // // // const express = require("express");
// // // // const router = express.Router();
// // // // const Booking = require("../models/Booking");
// // // // const Vehicle = require("../models/Vehicle");
// // // // const sendBookingEmail = require("../gmailpart/sendMail");

// // // // // Helper to parse and validate ISO datetime
// // // // const parseISODate = (input) => {
// // // //   const date = new Date(input);
// // // //   return isNaN(date.getTime()) ? new Date().toISOString() : date.toISOString();
// // // // };

// // // // // Create a new booking
// // // // router.post("/", async (req, res) => {
// // // //   try {
// // // //     const {
// // // //       vehicleId,
// // // //       name,
// // // //       rate,
// // // //       date,
// // // //       customerName,
// // // //       email,
// // // //       phone,
// // // //       pickupDateTime,
// // // //       dropoffDateTime,
// // // //       totalPrice,
// // // //       ownerName, // Already included in request
// // // //       ownerPhone, // Already included in request
// // // //     } = req.body;

// // // //     if (
// // // //       !vehicleId ||
// // // //       !name ||
// // // //       !rate ||
// // // //       !pickupDateTime ||
// // // //       !dropoffDateTime ||
// // // //       !totalPrice
// // // //     ) {
// // // //       return res
// // // //         .status(400)
// // // //         .json({ success: false, error: "Required fields missing" });
// // // //     }

// // // //     // 🧠 FETCH vehicle from database first
// // // //     const vehicle = await Vehicle.findById(vehicleId);

// // // //     if (!vehicle) {
// // // //       return res
// // // //         .status(404)
// // // //         .json({ success: false, error: "Vehicle not found" });
// // // //     }

// // // //     // Log what we have from both sources for debugging
// // // //     console.log("From request:", { ownerName, ownerPhone });
// // // //     console.log("From vehicle:", {
// // // //       vehicleOwnerName: vehicle.ownerName,
// // // //       vehicleOwnerPhone: vehicle.phoneNumber,
// // // //     });

// // // //     // Prioritize what was sent in the request, fallback to vehicle data
// // // //     const finalOwnerName = ownerName || vehicle.ownerName || "Unknown";
// // // //     const finalOwnerPhone = ownerPhone || vehicle.phoneNumber || "N/A";

// // // //     const booking = new Booking({
// // // //       vehicleId,
// // // //       name,
// // // //       rate,
// // // //       totalPrice,
// // // //       date: parseISODate(date),
// // // //       customerName: customerName || "Unknown",
// // // //       email: email || "regmirajib70@gmail.com",
// // // //       phone: phone || "+977 9801234567",
// // // //       pickupDateTime: parseISODate(pickupDateTime),
// // // //       dropoffDateTime: parseISODate(dropoffDateTime),
// // // //       ownerName: finalOwnerName,
// // // //       ownerPhone: finalOwnerPhone,
// // // //     });

// // // //     const savedBooking = await booking.save();

// // // //     await sendBookingEmail({
// // // //       customerName: savedBooking.customerName,
// // // //       carModel: savedBooking.name,
// // // //       pickupDateTime: savedBooking.pickupDateTime,
// // // //       dropoffDateTime: savedBooking.dropoffDateTime,
// // // //       email: savedBooking.email,
// // // //     });

// // // //     res.status(201).json({
// // // //       success: true,
// // // //       message: "Booking created successfully",
// // // //       booking: savedBooking,
// // // //     });
// // // //   } catch (err) {
// // // //     console.error("Booking error:", err);
// // // //     res
// // // //       .status(500)
// // // //       .json({ success: false, error: "Booking failed due to server error." });
// // // //   }
// // // // });

// // // // // Get Active Vehicles
// // // // router.get("/active", async (req, res) => {
// // // //   try {
// // // //     const activeBookings = await Booking.find({
// // // //       status: { $in: ["pending", "confirmed"] },
// // // //     }).lean();

// // // //     const vehicles = await Promise.all(
// // // //       activeBookings.map(async (booking) => {
// // // //         const vehicle = await Vehicle.findById(booking.vehicleId);
// // // //         return { ...booking, vehicleDetails: vehicle || null };
// // // //       })
// // // //     );

// // // //     res.status(200).json({ success: true, activeVehicles: vehicles });
// // // //   } catch (err) {
// // // //     console.error("Get active vehicles error:", err);
// // // //     res
// // // //       .status(500)
// // // //       .json({ success: false, error: "Failed to fetch active vehicles" });
// // // //   }
// // // // });

// // // // module.exports = router;
// // // const express = require("express");
// // // const router = express.Router();
// // // const Booking = require("../models/Booking");
// // // const Vehicle = require("../models/Vehicle");
// // // const sendBookingEmail = require("../gmailpart/sendMail");

// // // const parseISODate = (input) => {
// // //   const date = new Date(input);
// // //   return isNaN(date.getTime()) ? new Date().toISOString() : date.toISOString();
// // // };

// // // router.post("/", async (req, res) => {
// // //   try {
// // //     const {
// // //       vehicleId,
// // //       name,
// // //       rate,
// // //       date,
// // //       customerName,
// // //       email,
// // //       phone,
// // //       pickupDateTime,
// // //       dropoffDateTime,
// // //       totalPrice,
// // //       ownerName,
// // //       ownerPhone,
// // //     } = req.body;

// // //     console.log("Received booking data:", req.body); // Debug log

// // //     if (
// // //       !vehicleId ||
// // //       !name ||
// // //       !rate ||
// // //       !pickupDateTime ||
// // //       !dropoffDateTime ||
// // //       !totalPrice
// // //     ) {
// // //       return res
// // //         .status(400)
// // //         .json({ success: false, error: "Required fields missing" });
// // //     }

// // //     const vehicle = await Vehicle.findById(vehicleId);
// // //     if (!vehicle) {
// // //       return res
// // //         .status(404)
// // //         .json({ success: false, error: "Vehicle not found" });
// // //     }

// // //     const booking = new Booking({
// // //       vehicleId,
// // //       name,
// // //       rate,
// // //       totalPrice,
// // //       date: parseISODate(date),
// // //       customerName: customerName || "Unknown",
// // //       email: email || "regmirajib70@gmail.com",
// // //       phone: phone || "+977 9801234567",
// // //       pickupDateTime: parseISODate(pickupDateTime),
// // //       dropoffDateTime: parseISODate(dropoffDateTime),
// // //       ownerName: ownerName || "Unknown Owner",
// // //       ownerPhone: ownerPhone || "Not Available",
// // //     });

// // //     const savedBooking = await booking.save();
// // //     console.log("Saved booking:", savedBooking); // Debug log

// // //     await sendBookingEmail({
// // //       customerName: savedBooking.customerName,
// // //       carModel: savedBooking.name,
// // //       pickupDateTime: savedBooking.pickupDateTime,
// // //       dropoffDateTime: savedBooking.dropoffDateTime,
// // //       email: savedBooking.email,
// // //     });

// // //     res.status(201).json({
// // //       success: true,
// // //       message: "Booking created successfully",
// // //       booking: savedBooking,
// // //     });
// // //   } catch (err) {
// // //     console.error("Booking error:", err);
// // //     res
// // //       .status(500)
// // //       .json({ success: false, error: "Booking failed due to server error." });
// // //   }
// // // });

// // // router.get("/latest", async (req, res) => {
// // //   try {
// // //     const latestBooking = await Booking.findOne().sort({ createdAt: -1 });
// // //     res.status(200).json({ success: true, booking: latestBooking });
// // //   } catch (err) {
// // //     res.status(500).json({ success: false, error: "Failed to fetch booking" });
// // //   }
// // // });
// // // module.exports = router;

// // const express = require("express");
// // const router = express.Router();
// // const Booking = require("../models/Booking");
// // const Vehicle = require("../models/Vehicle");
// // const sendBookingEmail = require("../gmailpart/sendMail");

// // // Utility function to parse and validate ISO date strings
// // const parseISODate = (input) => {
// //   const date = new Date(input);
// //   return isNaN(date.getTime()) ? new Date().toISOString() : date.toISOString();
// // };

// // // POST: Create a new booking
// // router.post("/", async (req, res) => {
// //   try {
// //     const {
// //       vehicleId,
// //       name,
// //       rate,
// //       date,
// //       customerName,
// //       email,
// //       phone,
// //       pickupDateTime,
// //       dropoffDateTime,
// //       totalPrice,
// //       ownerName,
// //       ownerPhone,
// //     } = req.body;

// //     console.log("Received booking data:", req.body); // Debug log

// //     // Validate required fields
// //     if (
// //       !vehicleId ||
// //       !name ||
// //       !rate ||
// //       !pickupDateTime ||
// //       !dropoffDateTime ||
// //       !totalPrice
// //     ) {
// //       return res
// //         .status(400)
// //         .json({ success: false, error: "Required fields missing" });
// //     }

// //     // Check if vehicle exists
// //     const vehicle = await Vehicle.findById(vehicleId);
// //     if (!vehicle) {
// //       return res
// //         .status(404)
// //         .json({ success: false, error: "Vehicle not found" });
// //     }

// //     // Create new booking
// //     const booking = new Booking({
// //       vehicleId,
// //       name,
// //       rate,
// //       totalPrice,
// //       date: parseISODate(date),
// //       customerName: customerName || "Unknown",
// //       email: email || "regmirajib70@gmail.com",
// //       phone: phone || "+977 9801234567",
// //       pickupDateTime: parseISODate(pickupDateTime),
// //       dropoffDateTime: parseISODate(dropoffDateTime),
// //       ownerName: ownerName || "Unknown Owner",
// //       ownerPhone: ownerPhone || "Not Available",
// //     });

// //     // Save booking to database
// //     const savedBooking = await booking.save();
// //     console.log("Saved booking:", savedBooking); // Debug log

// //     // Send confirmation email
// //     await sendBookingEmail({
// //       customerName: savedBooking.customerName,
// //       carModel: savedBooking.name,
// //       pickupDateTime: savedBooking.pickupDateTime,
// //       dropoffDateTime: savedBooking.dropoffDateTime,
// //       email: savedBooking.email,
// //     });

// //     res.status(201).json({
// //       success: true,
// //       message: "Booking created successfully",
// //       booking: savedBooking,
// //     });
// //   } catch (err) {
// //     console.error("Booking error:", err);
// //     res
// //       .status(500)
// //       .json({ success: false, error: "Booking failed due to server error." });
// //   }
// // });

// // // GET: Fetch the latest booking
// // router.get("/latest", async (req, res) => {
// //   try {
// //     const latestBooking = await Booking.findOne().sort({ createdAt: -1 });
// //     if (!latestBooking) {
// //       return res
// //         .status(404)
// //         .json({ success: false, error: "No bookings found" });
// //     }
// //     res.status(200).json({ success: true, booking: latestBooking });
// //   } catch (err) {
// //     console.error("Error fetching latest booking:", err);
// //     res.status(500).json({ success: false, error: "Failed to fetch booking" });
// //   }
// // });

// // // GET: Fetch all bookings
// // router.get("/", async (req, res) => {
// //   try {
// //     const bookings = await Booking.find().sort({ createdAt: -1 }); // Sort by newest first
// //     res.status(200).json({ success: true, bookings });
// //   } catch (err) {
// //     console.error("Error fetching bookings:", err);
// //     res.status(500).json({ success: false, error: "Failed to fetch bookings" });
// //   }
// // });

// // module.exports = router;

// // const express = require("express");
// // const router = express.Router();
// // const Booking = require("../models/Booking");
// // const Vehicle = require("../models/Vehicle");
// // const sendBookingEmail = require("../gmailpart/sendMail");
// // const mongoose = require("mongoose");

// // // Helper to parse and validate ISO datetime
// // const parseISODate = (input) => {
// //   const date = new Date(input);
// //   return isNaN(date.getTime()) ? new Date().toISOString() : date.toISOString();
// // };

// // // Create a new booking
// // router.post("/", async (req, res) => {
// //   try {
// //     const {
// //       vehicleId,
// //       name,
// //       rate,
// //       date,
// //       customerName,
// //       email,
// //       phone,
// //       pickupDateTime,
// //       dropoffDateTime,
// //     } = req.body;

// //     if (!vehicleId || !name || !rate || !pickupDateTime || !dropoffDateTime) {
// //       return res
// //         .status(400)
// //         .json({ success: false, error: "Required fields missing" });
// //     }

// //     const booking = new Booking({
// //       vehicleId,
// //       name,
// //       rate,
// //       date: parseISODate(date),
// //       customerName: customerName || "Unknown",
// //       email: email || "regmirajib70@gmail.com",
// //       phone: phone || "+977 9801234567",
// //       pickupDateTime: parseISODate(pickupDateTime),
// //       dropoffDateTime: parseISODate(dropoffDateTime),
// //     });

// //     const savedBooking = await booking.save();

// //     await sendBookingEmail({
// //       customerName: savedBooking.customerName,
// //       carModel: savedBooking.name,
// //       pickupDateTime: savedBooking.pickupDateTime,
// //       dropoffDateTime: savedBooking.dropoffDateTime,
// //       email: savedBooking.email,
// //     });

// //     res.status(201).json({
// //       success: true,
// //       message: "Booking created successfully",
// //       booking: savedBooking,
// //     });
// //   } catch (err) {
// //     console.error("Booking error:", err);
// //     res
// //       .status(500)
// //       .json({ success: false, error: "Booking failed due to server error." });
// //   }
// // });

// // // Get Active Vehicles
// // router.get("/active", async (req, res) => {
// //   try {
// //     const activeBookings = await Booking.find({
// //       status: { $in: ["pending", "confirmed"] },
// //     }).lean();

// //     const vehicles = await Promise.all(
// //       activeBookings.map(async (booking) => {
// //         const vehicle = await Vehicle.findById(booking.vehicleId);
// //         return { ...booking, vehicleDetails: vehicle || null };
// //       })
// //     );

// //     res.status(200).json({ success: true, activeVehicles: vehicles });
// //   } catch (err) {
// //     console.error("Get active vehicles error:", err);
// //     res
// //       .status(500)
// //       .json({ success: false, error: "Failed to fetch active vehicles" });
// //   }
// // });

// // module.exports = router;

// const express = require("express");
// const router = express.Router();
// const Booking = require("../models/Booking");
// const Vehicle = require("../models/Vehicle");
// const sendBookingEmail = require("../gmailpart/sendMail");
// const mongoose = require("mongoose");

// // Helper to parse and validate ISO datetime
// const parseISODate = (input) => {
//   const date = new Date(input);
//   return isNaN(date.getTime()) ? new Date().toISOString() : date.toISOString();
// };

// // Create a new booking
// router.post("/", async (req, res) => {
//   try {
//     const {
//       vehicleId,
//       name,
//       rate,
//       date,
//       bookingType,
//       customerName,
//       email,
//       phone,
//       pickupDateTime,
//       dropoffDateTime,
//       ownerName,
//       phoneNumber,
//     } = req.body;

//     if (
//       !vehicleId ||
//       !name ||
//       !rate ||
//       !bookingType ||
//       !pickupDateTime ||
//       !dropoffDateTime ||
//       !ownerName ||
//       !phoneNumber
//     ) {
//       return res
//         .status(400)
//         .json({ success: false, error: "Required fields missing" });
//     }

//     const booking = new Booking({
//       vehicleId,
//       name,
//       rate,
//       date: parseISODate(date),
//       bookingType,
//       customerName: customerName || "Unknown",
//       email: email || "regmirajib70@gmail.com",
//       phone: phone || "+9779801234567",
//       pickupDateTime: parseISODate(pickupDateTime),
//       dropoffDateTime: parseISODate(dropoffDateTime),
//       ownerName: ownerName || "Drifty",
//       phoneNumber: phoneNumber || "9844177965",
//     });

//     const savedBooking = await booking.save();

//     await sendBookingEmail({
//       customerName: savedBooking.customerName,
//       carModel: savedBooking.name,
//       pickupDateTime: savedBooking.pickupDateTime,
//       dropoffDateTime: savedBooking.dropoffDateTime,
//       email: savedBooking.email,
//       ownerName: savedBooking.ownerName,
//       phoneNumber: savedBooking.phoneNumber,
//     });

//     res.status(201).json({
//       success: true,
//       message: "Booking created successfully",
//       booking: savedBooking,
//     });
//   } catch (err) {
//     console.error("Booking error:", err);
//     res
//       .status(500)
//       .json({ success: false, error: "Booking failed due to server error." });
//   }
// });

// // Get Active Vehicles
// router.get("/active", async (req, res) => {
//   try {
//     const activeBookings = await Booking.find({
//       status: { $in: ["pending", "confirmed"] },
//     }).lean();

//     const vehicles = await Promise.all(
//       activeBookings.map(async (booking) => {
//         const vehicle = await Vehicle.findById(booking.vehicleId);
//         return { ...booking, vehicleDetails: vehicle || null };
//       })
//     );

//     res.status(200).json({ success: true, activeVehicles: vehicles });
//   } catch (err) {
//     console.error("Get active vehicles error:", err);
//     res
//       .status(500)
//       .json({ success: false, error: "Failed to fetch active vehicles" });
//   }
// });

// module.exports = router;

// const express = require("express");
// const router = express.Router();
// const Booking = require("../models/Booking");
// const Vehicle = require("../models/Vehicle");
// const sendBookingEmail = require("../gmailpart/sendMail");
// const mongoose = require("mongoose");

// // Helper to parse and validate ISO datetime
// const parseISODate = (input) => {
//   const date = new Date(input);
//   return isNaN(date.getTime()) ? new Date().toISOString() : date.toISOString();
// };

// // Create a new booking
// router.post("/", async (req, res) => {
//   try {
//     const {
//       vehicleId,
//       carId, // Included for compatibility, but not stored in schema
//       name,
//       rate,
//       totalPrice,
//       date,
//       bookingType,
//       customerName,
//       email,
//       phone,
//       pickupDateTime,
//       dropoffDateTime,
//       ownerName,
//       phoneNumber,
//     } = req.body;

//     if (
//       !vehicleId ||
//       !name ||
//       !rate ||
//       !totalPrice ||
//       !bookingType ||
//       !pickupDateTime ||
//       !dropoffDateTime ||
//       !ownerName ||
//       !phoneNumber
//     ) {
//       return res
//         .status(400)
//         .json({ success: false, error: "Required fields missing" });
//     }

//     // Validate totalPrice is a positive number
//     if (typeof totalPrice !== "number" || totalPrice <= 0) {
//       return res
//         .status(400)
//         .json({ success: false, error: "Invalid total price" });
//     }

//     const booking = new Booking({
//       vehicleId,
//       name,
//       rate,
//       totalPrice, // Save totalPrice
//       date: parseISODate(date),
//       bookingType,
//       customerName: customerName || "Unknown",
//       email: email || "regmirajib70@gmail.com",
//       phone: phone || "+9779801234567",
//       pickupDateTime: parseISODate(pickupDateTime),
//       dropoffDateTime: parseISODate(dropoffDateTime),
//       ownerName: ownerName || "Drifty",
//       phoneNumber: phoneNumber || "9844177965",
//     });

//     const savedBooking = await booking.save();

//     await sendBookingEmail({
//       customerName: savedBooking.customerName,
//       carModel: savedBooking.name,
//       pickupDateTime: savedBooking.pickupDateTime,
//       dropoffDateTime: savedBooking.dropoffDateTime,
//       email: savedBooking.email,
//       ownerName: savedBooking.ownerName,
//       phoneNumber: savedBooking.phoneNumber,
//       totalPrice: savedBooking.totalPrice, // Include totalPrice in email
//     });

//     res.status(201).json({
//       success: true,
//       message: "Booking created successfully",
//       booking: savedBooking,
//     });
//   } catch (err) {
//     console.error("Booking error:", err);
//     res
//       .status(500)
//       .json({ success: false, error: "Booking failed due to server error." });
//   }
// });

// // Get Active Vehicles
// router.get("/active", async (req, res) => {
//   try {
//     const activeBookings = await Booking.find({
//       status: { $in: ["pending", "confirmed"] },
//     }).lean();

//     const vehicles = await Promise.all(
//       activeBookings.map(async (booking) => {
//         const vehicle = await Vehicle.findById(booking.vehicleId);
//         return { ...booking, vehicleDetails: vehicle || null };
//       })
//     );

//     res.status(200).json({ success: true, activeVehicles: vehicles });
//   } catch (err) {
//     console.error("Get active vehicles error:", err);
//     res
//       .status(500)
//       .json({ success: false, error: "Failed to fetch active vehicles" });
//   }
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");
const Vehicle = require("../models/Vehicle");
const sendBookingEmail = require("../gmailpart/sendMail");
const mongoose = require("mongoose");

// Helper to parse and validate ISO datetime
const parseISODate = (input) => {
  const date = new Date(input);
  return isNaN(date.getTime()) ? new Date().toISOString() : date.toISOString();
};

// Get all bookings
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find().lean();
    res.status(200).json({ success: true, bookings });
  } catch (err) {
    console.error("Get bookings error:", err);
    res.status(500).json({ success: false, error: "Failed to fetch bookings" });
  }
});

// Create a new booking
router.post("/", async (req, res) => {
  try {
    const {
      vehicleId,
      carId, // Included for compatibility, but not stored in schema
      name,
      rate,
      totalPrice,
      date,
      bookingType,
      customerName,
      email,
      phone,
      pickupDateTime,
      dropoffDateTime,
      ownerName,
      phoneNumber,
    } = req.body;

    if (
      !vehicleId ||
      !name ||
      !rate ||
      !totalPrice ||
      !bookingType ||
      !pickupDateTime ||
      !dropoffDateTime ||
      !ownerName ||
      !phoneNumber
    ) {
      return res
        .status(400)
        .json({ success: false, error: "Required fields missing" });
    }

    // Validate totalPrice is a positive number
    if (typeof totalPrice !== "number" || totalPrice <= 0) {
      return res
        .status(400)
        .json({ success: false, error: "Invalid total price" });
    }

    const booking = new Booking({
      vehicleId,
      name,
      rate,
      totalPrice,
      date: parseISODate(date),
      bookingType,
      customerName: customerName || "Unknown",
      email: email || "regmirajib70@gmail.com",
      phone: phone || "+9779801234567",
      pickupDateTime: parseISODate(pickupDateTime),
      dropoffDateTime: parseISODate(dropoffDateTime),
      ownerName: ownerName || "Drifty",
      phoneNumber: phoneNumber || "9844177965",
    });

    const savedBooking = await booking.save();

    await sendBookingEmail({
      customerName: savedBooking.customerName,
      carModel: savedBooking.name,
      pickupDateTime: savedBooking.pickupDateTime,
      dropoffDateTime: savedBooking.dropoffDateTime,
      email: savedBooking.email,
      ownerName: savedBooking.ownerName,
      phoneNumber: savedBooking.phoneNumber,
      totalPrice: savedBooking.totalPrice,
    });

    res.status(201).json({
      success: true,
      message: "Booking created successfully",
      booking: savedBooking,
    });
  } catch (err) {
    console.error("Booking error:", err);
    res
      .status(500)
      .json({ success: false, error: "Booking failed due to server error." });
  }
});

// Get Active Vehicles
router.get("/active", async (req, res) => {
  try {
    const activeBookings = await Booking.find({
      status: { $in: ["pending", "confirmed"] },
    }).lean();

    const vehicles = await Promise.all(
      activeBookings.map(async (booking) => {
        const vehicle = await Vehicle.findById(booking.vehicleId);
        return { ...booking, vehicleDetails: vehicle || null };
      })
    );

    res.status(200).json({ success: true, activeVehicles: vehicles });
  } catch (err) {
    console.error("Get active vehicles error:", err);
    res
      .status(500)
      .json({ success: false, error: "Failed to fetch active vehicles" });
  }
});
// Cancel Booking Route
router.post("/cancel/:id", async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({ success: false, error: "Booking not found" });
    }

    // If already cancelled
    if (booking.status === "cancelled") {
      return res.status(400).json({ success: false, error: "Booking already cancelled" });
    }

    const now = new Date();
    const pickupTime = new Date(booking.pickupDateTime);
    const createdAt = new Date(booking.createdAt);

    const minutesSinceBooking = Math.floor((now - createdAt) / (1000 * 60));
    const hoursUntilPickup = (pickupTime - now) / (1000 * 60 * 60);

    let refund = 0;

    if (minutesSinceBooking <= 15) {
      refund = booking.totalPrice; // Full refund
    } else if (hoursUntilPickup > 24) {
      refund = booking.totalPrice;
    } else if (hoursUntilPickup >= 12 && hoursUntilPickup <= 24) {
      refund = booking.totalPrice * 0.5;
    } else {
      refund = 0; // No refund
    }

    booking.status = "cancelled";
    await booking.save();

    res.status(200).json({
      success: true,
      message: "Booking cancelled successfully",
      refundAmount: refund,
      updatedBooking: booking,
    });
  } catch (error) {
    console.error("Cancel booking error:", error);
    res.status(500).json({ success: false, error: "Failed to cancel booking" });
  }
});


module.exports = router;
