const Kyc = require("../models/kycModel");

const submitKyc = async (req, res) => {
  try {
    const {
      fullName,
      phoneNumber,
      carId,
      bookingType,
      startDateTime,
      endDateTime,
    } = req.body;

    // Log the incoming data for debugging
    console.log("Received KYC data:", {
      fullName,
      phoneNumber,
      carId,
      bookingType,
      startDateTime,
      endDateTime,
    });

    if (!fullName || !phoneNumber || !bookingType) {
      return res.status(400).json({
        message: "Full name, phone number, and booking type are required",
      });
    }

    const licenseImagePath = req.file ? `/uploads/${req.file.filename}` : null;

    const newKyc = new Kyc({
      fullName,
      phoneNumber,
      licenseImagePath,
      carId: carId || null,
      bookingType,
      startDateTime: startDateTime ? new Date(startDateTime) : null,
      endDateTime: endDateTime ? new Date(endDateTime) : null,
    });

    await newKyc.save();
    res
      .status(201)
      .json({ message: "KYC submitted successfully", kyc: newKyc });
  } catch (err) {
    console.error("KYC Submission Error:", err.stack);
    res
      .status(500)
      .json({ message: "Error submitting KYC", error: err.message });
  }
};

const getAllKyc = async (req, res) => {
  try {
    const kycs = await Kyc.find()
      .populate({
        path: "carId",
        select: "carName carNumber photos",
        options: { strictPopulate: false },
      })
      .sort({ createdAt: -1 });
    console.log(`Fetched ${kycs.length} KYC records`);
    res.status(200).json(kycs);
  } catch (err) {
    console.error("Error fetching KYC submissions:", err.stack);
    res
      .status(500)
      .json({ message: "Error fetching KYC submissions", error: err.message });
  }
};

const updateKycStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    console.log("Updating KYC:", id, status);
    const validStatuses = ["pending", "approved", "rejected"];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: "Invalid status value" });
    }

    const updatedKyc = await Kyc.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updatedKyc) {
      return res.status(404).json({ message: "KYC not found" });
    }

    res
      .status(200)
      .json({ message: "KYC status updated successfully", kyc: updatedKyc });
  } catch (err) {
    console.error("Error updating KYC status:", err.stack);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

module.exports = { submitKyc, getAllKyc, updateKycStatus };
