// // const mongoose = require("mongoose");

// // const kycSchema = new mongoose.Schema(
// //   {
// //     fullName: { type: String, required: true },
// //     phoneNumber: { type: String, required: true },
// //     licenseImagePath: { type: String },
// //     status: {
// //       type: String,
// //       enum: ["pending", "approved", "rejected"],
// //       default: "pending",
// //     },
// //   },
// //   { timestamps: true }
// // );

// // module.exports = mongoose.model("Kyc", kycSchema);

// const mongoose = require("mongoose");

// const kycSchema = new mongoose.Schema(
//   {
//     fullName: { type: String, required: true },
//     phoneNumber: { type: String, required: true },
//     licenseImagePath: { type: String },
//     status: {
//       type: String,
//       enum: ["pending", "approved", "rejected"],
//       default: "pending",
//     },
//     carId: { type: mongoose.Schema.Types.ObjectId, ref: "admincar", default: null },
//     bookingType: {
//       type: String,
//       enum: ["self-drive", "with-driver", null],
//       default: null,
//     },
//     selectedDateTime: { type: Date, default: null },
//     endDateTime: { type: Date, default: null },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Kyc", kycSchema);

const mongoose = require("mongoose");

const kycSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    licenseImagePath: { type: String },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    carId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "admincar",
      default: null,
    },
    bookingType: {
      type: String,
      enum: ["self-drive", "with-driver", null],
      default: null,
    },
    startDateTime: { type: Date, default: null }, // Add this field
    endDateTime: { type: Date, default: null },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Kyc", kycSchema);
