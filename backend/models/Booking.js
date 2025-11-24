// const mongoose = require("mongoose");

// const bookingSchema = new mongoose.Schema({
//   vehicleId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Vehicle",
//     required: true,
//   },
//   name: { type: String, required: true },
//   rate: { type: Number, required: true },
//   totalPrice: { type: Number, required: true },
//   date: { type: Date, required: true },
//   customerName: { type: String, required: true },
//   email: { type: String, required: true },
//   phone: { type: String, default: "+977 9801234567" },
//   pickupDateTime: { type: Date, required: true },
//   dropoffDateTime: { type: Date, required: true },
//   ownerName: { type: String },
//   ownerPhone: { type: String },
//   status: {
//     type: String,
//     enum: ["pending", "confirmed", "cancelled"],
//     default: "confirmed",
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// module.exports = mongoose.model("Booking", bookingSchema);

// const mongoose = require("mongoose");

// const bookingSchema = new mongoose.Schema({
//   vehicleId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Vehicle",
//     required: true,
//   },
//   name: { type: String, required: true },
//   rate: { type: Number, required: true },
//   date: { type: Date, required: true },
//   customerName: { type: String, required: true },
//   email: { type: String, required: true },
//   phone: { type: String, default: "+977 9801234567" },
//   pickupDateTime: { type: Date, required: true },
//   dropoffDateTime: { type: Date, required: true },
//   status: {
//     type: String,
//     enum: ["pending", "confirmed", "cancelled"],
//     default: "confirmed",
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// module.exports = mongoose.model("Booking", bookingSchema);

const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  vehicleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vehicle",
    required: true,
  },
  name: { type: String, required: true },
  rate: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  date: { type: Date, required: true },
  bookingType: { type: String, required: true }, // Added to store self-drive or with-driver
  customerName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, default: "+9779801234567" },
  pickupDateTime: { type: Date, required: true },
  dropoffDateTime: { type: Date, required: true },
  ownerName: { type: String, default: "Drifty" }, // Added ownerName field
  phoneNumber: { type: String, default: "9844177965" }, // Added phoneNumber field
  status: {
    type: String,
    enum: ["pending", "confirmed", "cancelled"],
    default: "confirmed",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Booking", bookingSchema);
