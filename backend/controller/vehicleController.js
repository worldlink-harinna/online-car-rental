// // // // backend/controller/vehicleController.js
// // // const Vehicle = require("../models/Vehicle");

// // // const addVehicle = async (req, res) => {
// // //   try {
// // //     // Validate mandatory fields (simplified)
// // //     const {
// // //       ownerName,
// // //       vehicleName,
// // //       type,
// // //       gearType,
// // //       seatNumbers,
// // //       perDayRate,
// // //       rentalType,
// // //       phoneNumber,
// // //     } = req.body;

// // //     if (
// // //       !ownerName ||
// // //       !vehicleName ||
// // //       !type ||
// // //       !gearType ||
// // //       !seatNumbers ||
// // //       !perDayRate ||
// // //       !rentalType ||
// // //       !phoneNumber
// // //     ) {
// // //       return res.status(400).json({ message: "Required fields missing" });
// // //     }

// // //     // Validate mandatory files
// // //     if (
// // //       !req.files ||
// // //       !req.files.vehicleFrontImage ||
// // //       !req.files.bluebookDocument
// // //     ) {
// // //       return res.status(400).json({ message: "Required files missing" });
// // //     }

// // //     const newVehicle = new Vehicle({
// // //       ownerName,
// // //       vehicleName,
// // //       type,
// // //       gearType,
// // //       seatNumbers,
// // //       airCondition: req.body.airCondition || "",
// // //       vehicleNumber: req.body.vehicleNumber || "",
// // //       perDayRate,
// // //       rentalType,
// // //       phoneNumber,
// // //       vehicleFrontImage: req.files.vehicleFrontImage[0].filename,
// // //       vehicleBackImage: req.files.vehicleBackImage
// // //         ? req.files.vehicleBackImage[0].filename
// // //         : "",
// // //       interiorImage: req.files.interiorImage
// // //         ? req.files.interiorImage[0].filename
// // //         : "",
// // //       bluebookDocument: req.files.bluebookDocument[0].filename,
// // //       insuranceDocument: req.files.insuranceDocument
// // //         ? req.files.insuranceDocument[0].filename
// // //         : "",
// // //       status: "Pending",
// // //     });

// // //     await newVehicle.save();
// // //     res
// // //       .status(201)
// // //       .json({ message: "Vehicle added successfully", vehicle: newVehicle });
// // //   } catch (error) {
// // //     console.error("Error adding vehicle:", error);
// // //     res.status(500).json({ message: "Server error" });
// // //   }
// // // };
// // // const getVehicles = async (req, res) => {
// // //   try {
// // //     const vehicles = await Vehicle.find(); // fetch all vehicles from the database
// // //     res.json(vehicles);
// // //   } catch (error) {
// // //     console.error("Error fetching vehicles:", error);
// // //     res.status(500).json({ message: "Server error" });
// // //   }
// // // };

// // // module.exports = { addVehicle };

// // const Vehicle = require("../models/Vehicle");

// // const addVehicle = async (req, res) => {
// //   try {
// //     // Validate mandatory fields (simplified)
// //     const {
// //       ownerName,
// //       vehicleName,
// //       type,
// //       gearType,
// //       seatNumbers,
// //       perDayRate,
// //       rentalType,
// //       phoneNumber,
// //     } = req.body;

// //     if (
// //       !ownerName ||
// //       !vehicleName ||
// //       !type ||
// //       !gearType ||
// //       !seatNumbers ||
// //       !perDayRate ||
// //       !rentalType ||
// //       !phoneNumber
// //     ) {
// //       return res.status(400).json({ message: "Required fields missing" });
// //     }

// //     // Validate mandatory files
// //     if (
// //       !req.files ||
// //       !req.files.vehicleFrontImage ||
// //       !req.files.bluebookDocument
// //     ) {
// //       return res.status(400).json({ message: "Required files missing" });
// //     }

// //     const newVehicle = new Vehicle({
// //       ownerName,
// //       vehicleName,
// //       type,
// //       gearType,
// //       seatNumbers,
// //       airCondition: req.body.airCondition || "",
// //       vehicleNumber: req.body.vehicleNumber || "",
// //       perDayRate,
// //       rentalType,
// //       phoneNumber,
// //       vehicleFrontImage: req.files.vehicleFrontImage[0].filename,
// //       vehicleBackImage: req.files.vehicleBackImage
// //         ? req.files.vehicleBackImage[0].filename
// //         : "",
// //       interiorImage: req.files.interiorImage
// //         ? req.files.interiorImage[0].filename
// //         : "",
// //       bluebookDocument: req.files.bluebookDocument[0].filename,
// //       insuranceDocument: req.files.insuranceDocument
// //         ? req.files.insuranceDocument[0].filename
// //         : "",
// //       status: "Pending",
// //     });

// //     await newVehicle.save();
// //     res
// //       .status(201)
// //       .json({ message: "Vehicle added successfully", vehicle: newVehicle });
// //   } catch (error) {
// //     console.error("Error adding vehicle:", error);
// //     res.status(500).json({ message: "Server error" });
// //   }
// // };

// // const getVehicles = async (req, res) => {
// //   try {
// //     const vehicles = await Vehicle.find(); // fetch all vehicles from the database
// //     res.json(vehicles);
// //   } catch (error) {
// //     console.error("Error fetching vehicles:", error);
// //     res.status(500).json({ message: "Server error" });
// //   }
// // };
// // const updateVehicleStatus = async (req, res) => {
// //   try {
// //     const { id } = req.params;
// //     const { status } = req.body;

// //     const vehicle = await Vehicle.findById(id);
// //     if (!vehicle) {
// //       return res.status(404).json({ message: "Vehicle not found" });
// //     }

// //     vehicle.status = status;
// //     await vehicle.save();

// //     res.json({ message: "Status updated", vehicle });
// //   } catch (error) {
// //     console.error("Error updating vehicle status:", error);
// //     res.status(500).json({ message: "Server error" });
// //   }
// // };

// // module.exports = { addVehicle, getVehicles, updateVehicleStatus };

// const Vehicle = require("../models/Vehicle");

// const addVehicle = async (req, res) => {
//   try {
//     const {
//       ownerName,
//       vehicleName,
//       type,
//       gearType,
//       seatNumbers,
//       perDayRate,
//       rentalType,
//       phoneNumber,
//       email,
//     } = req.body;

//     if (
//       !ownerName ||
//       !vehicleName ||
//       !type ||
//       !gearType ||
//       !seatNumbers ||
//       !perDayRate ||
//       !rentalType ||
//       !phoneNumber ||
//       !email
//     ) {
//       return res.status(400).json({ message: "Required fields missing" });
//     }

//     if (
//       !req.files ||
//       !req.files.vehicleFrontImage ||
//       !req.files.bluebookDocument
//     ) {
//       return res.status(400).json({ message: "Required files missing" });
//     }

//     const newVehicle = new Vehicle({
//       ownerName,
//       vehicleName,
//       type,
//       gearType,
//       seatNumbers,
//       airCondition: req.body.airCondition || "",
//       vehicleNumber: req.body.vehicleNumber || "",
//       perDayRate,
//       rentalType,
//       phoneNumber,
//       vehicleFrontImage: req.files.vehicleFrontImage[0].filename,
//       vehicleBackImage: req.files.vehicleBackImage
//         ? req.files.vehicleBackImage[0].filename
//         : "",
//       interiorImage: req.files.interiorImage
//         ? req.files.interiorImage[0].filename
//         : "",
//       bluebookDocument: req.files.bluebookDocument[0].filename,
//       insuranceDocument: req.files.insuranceDocument
//         ? req.files.insuranceDocument[0].filename
//         : "",
//       status: "Pending",
//       email,
//     });

//     await newVehicle.save();
//     res
//       .status(201)
//       .json({ message: "Vehicle added successfully", vehicle: newVehicle });
//   } catch (error) {
//     console.error("Error adding vehicle:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// const getVehicles = async (req, res) => {
//   try {
//     const vehicles = await Vehicle.find();
//     res.json(vehicles);
//   } catch (error) {
//     console.error("Error fetching vehicles:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// const updateVehicleStatus = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { status } = req.body;

//     const vehicle = await Vehicle.findById(id);
//     if (!vehicle) {
//       return res.status(404).json({ message: "Vehicle not found" });
//     }

//     vehicle.status = status;
//     await vehicle.save();

//     res.json({ message: "Status updated", vehicle });
//   } catch (error) {
//     console.error("Error updating vehicle status:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// module.exports = { addVehicle, getVehicles, updateVehicleStatus };

// const Vehicle = require("../models/Vehicle");

// const Vehicle = require("../models/Vehicle");

const Vehicle = require("../models/Vehicle");

const addVehicle = async (req, res) => {
  try {
    const {
      ownerName,
      vehicleName,
      carType,
      gearType,
      seatNumbers,
      perDayRate,
      rentalType,
      phoneNumber,
      email,
    } = req.body;

    if (
      !ownerName ||
      !vehicleName ||
      !carType ||
      !gearType ||
      !seatNumbers ||
      !perDayRate ||
      !rentalType ||
      !phoneNumber ||
      !email
    ) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    if (
      !req.files ||
      !req.files.vehicleFrontImage ||
      !req.files.bluebookDocument
    ) {
      return res.status(400).json({ message: "Required files missing" });
    }

    const newVehicle = new Vehicle({
      ownerName,
      vehicleName,
      carType,
      gearType,
      seatNumbers,
      airCondition: req.body.airCondition || "",
      vehicleNumber: req.body.vehicleNumber || "",
      perDayRate,
      rentalType,
      phoneNumber,
      vehicleFrontImage: req.files.vehicleFrontImage[0].filename,
      vehicleBackImage: req.files.vehicleBackImage
        ? req.files.vehicleBackImage[0].filename
        : "",
      interiorImage: req.files.interiorImage
        ? req.files.interiorImage[0].filename
        : "",
      bluebookDocument: req.files.bluebookDocument[0].filename,
      insuranceDocument: req.files.insuranceDocument
        ? req.files.insuranceDocument[0].filename
        : "",
      status: "Pending",
      email,
    });

    await newVehicle.save();
    res
      .status(201)
      .json({ message: "Vehicle added successfully", vehicle: newVehicle });
  } catch (error) {
    console.error("Error adding vehicle:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const getVehicles = async (req, res) => {
  try {
    const { email } = req.query;

    const filter = {};
    if (email) filter.email = email;

    const vehicles = await Vehicle.find(filter);
    res.json(vehicles);
  } catch (error) {
    console.error("Error fetching vehicles:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const updateVehicleStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const vehicle = await Vehicle.findById(id);
    if (!vehicle) {
      return res.status(404).json({ message: "Vehicle not found" });
    }

    vehicle.status = status;
    await vehicle.save();

    res.json({ message: "Status updated", vehicle });
  } catch (error) {
    console.error("Error updating vehicle status:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const getVehicleById = async (req, res) => {
  try {
    const { id } = req.params;
    const vehicle = await Vehicle.findById(id);

    if (!vehicle) {
      return res.status(404).json({ message: "Vehicle not found" });
    }

    res.json(vehicle);
  } catch (error) {
    console.error("Error fetching vehicle:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ NEW: Search vehicles by vehicleName (case-insensitive)
const searchVehicles = async (req, res) => {
  try {
    const { q } = req.query;

    if (!q) {
      return res.status(400).json({ message: "Search query is required" });
    }

    const vehicles = await Vehicle.find({
      vehicleName: { $regex: q, $options: "i" },
    });

    res.json(vehicles);
  } catch (error) {
    console.error("Error searching vehicles:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  addVehicle,
  getVehicles,
  updateVehicleStatus,
  getVehicleById,
  searchVehicles, // ✅ export the search controller
};
