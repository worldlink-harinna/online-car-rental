// // const mongoose = require("mongoose");

// // const carSchema = new mongoose.Schema(
// //   {
// //     carName: String,
// //     carNumber: String,
// //     carType: String,
// //     phoneNumber: String,
// //     ratePerDay: String,
// //     seats: Number,
// //     bookingType: String,
// //     gearType: String,
// //     airCondition: String,
// //     photos: [String], // ✅ updated from photo: String
// //     driverName: String,
// //     ownerName: String,
// //   },
// //   { timestamps: true }
// // );

// // module.exports = mongoose.model("admincar", carSchema);
// const mongoose = require("mongoose");

// const carSchema = new mongoose.Schema(
//   {
//     carName: { type: String, required: true },
//     carNumber: { type: String, required: true },
//     carType: { type: String, required: true },
//     phoneNumber: { type: String },
//     ratePerDay: { type: Number, required: true }, // Changed to Number
//     seats: { type: Number, required: true },
//     bookingType: {
//       type: String,
//       enum: ["With Driver", "Without Driver", "Both"],
//       default: "Both",
//     },
//     gearType: { type: String, default: "Automatic" },
//     airCondition: { type: Boolean, default: false }, // Changed to Boolean
//     photos: [{ type: String }], // Array of strings for multiple photos
//     driverName: { type: String },
//     ownerName: { type: String, default: "Unknown Owner" },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("admincar", carSchema);
const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    carName: String,
    carNumber: String,
    carType: String,
    phoneNumber: String,
    ratePerDay: String,
    seats: Number,
    bookingType: String,
    gearType: String,
    airCondition: String,
    photos: [String], // ✅ updated from photo: String
    driverName: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("admincar", carSchema);
