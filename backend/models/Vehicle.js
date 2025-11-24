const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema(
  {
    ownerName: { type: String, required: true },
    vehicleName: { type: String, required: true },
    carType : { type: String, required: true },
    gearType: { type: String, required: true },
    seatNumbers: { type: Number, required: true },
    airCondition: { type: String },
    vehicleNumber: { type: String },
    perDayRate: { type: Number, required: true },
    rentalType: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    vehicleFrontImage: { type: String, required: true },
    vehicleBackImage: { type: String },
    interiorImage: { type: String },
    bluebookDocument: { type: String, required: true },
    insuranceDocument: { type: String },
    status: { type: String, default: "Pending" },
    email: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Vehicle", vehicleSchema);
