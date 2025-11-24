// // // const AdminCar = require("../models/adminCar");

// // // Add a new car
// // // exports.addCar = async (req, res) => {

// // //   try {
// // //     const {
// // //       carName,
// // //       carNumber,
// // //       carType,
// // //       phoneNumber,
// // //       ratePerDay, // ✅ Changed key name
// // //       driverName, // ✅ New field
// // //       seats,
// // //       bookingType,
// // //       gearType,
// // //       airCondition,
// // //     } = req.body;

// // //     // const photos = req.files ? req.files.map((file) 0=> file.filename) : [];
// // //     const photos = req.files ? req.files.map((file) => file.filename.trim()) : [];

// // //     const newCar = new AdminCar({
// // //       carName,
// // //       carNumber,
// // //       carType,
// // //       phoneNumber,
// // //       ratePerDay,
// // //       driverName,
// // //       seats,
// // //       bookingType,
// // //       gearType,
// // //       airCondition,
// // //       photos,
// // //     });

// // //     await newCar.save();
// // //     res.status(201).json(newCar);
// // //   } catch (err) {
// // //     console.error("Add Car Error:", err.message);
// // //     res.status(500).json({ error: "Failed to add car" });
// // //   }
// // // };

// // // // Get all cars
// // // exports.getCars = async (req, res) => {
// // //   try {
// // //     const cars = await AdminCar.find().sort({ createdAt: -1 });
// // //     res.json(cars);
// // //   } catch (err) {
// // //     console.error("Get Cars Error:", err.message);
// // //     res.status(500).json({ error: "Failed to fetch cars" });
// // //   }
// // // };
// // // exports.getCarById = async (req, res) => {
// // //   try {
// // //     const car = await AdminCar.findById(req.params.id);
// // //     if (!car) {
// // //       return res.status(404).json({ message: "Car not found" });
// // //     }
// // //     res.json(car);
// // //   } catch (err) {
// // //     console.error("Get Car By ID Error:", err.message);
// // //     res.status(500).json({ error: "Failed to fetch car details" });
// // //   }
// // // };

// // // // Delete a car by ID
// // // exports.deleteCar = async (req, res) => {
// // //   console.log("ID received:", req.params.id);
// // //   try {
// // //     const deletedCar = await AdminCar.findByIdAndDelete(req.params.id);

// // //     if (!deletedCar) {
// // //       console.log("Car not found");
// // //       return res.status(404).json({ message: "Car not found" });
// // //     }

// // //     res.status(200).json({ message: "Car deleted successfully" });
// // //   } catch (err) {
// // //     console.error("Delete Car Error:", err.message);
// // //     res.status(500).json({ error: "Failed to delete car" });
// // //   }
// // // };

// // const AdminCar = require("../models/adminCar");
// // const fs = require("fs");
// // const path = require("path");

// // exports.addCar = async (req, res) => {
// //   try {
// //     const {
// //       carName,
// //       carNumber,
// //       carType,
// //       phoneNumber,
// //       ratePerDay,
// //       driverName,
// //       seats,
// //       bookingType,
// //       gearType,
// //       airCondition,
// //       ownerName,
// //     } = req.body;

// //     const photos = req.files
// //       ? req.files.map((file) => file.filename.trim())
// //       : [];

// //     console.log("Received Form Data:", {
// //       carName,
// //       carNumber,
// //       carType,
// //       phoneNumber,
// //       ratePerDay,
// //       driverName,
// //       seats,
// //       bookingType,
// //       gearType,
// //       airCondition,
// //       ownerName,
// //       photos,
// //     });

// //     const newCar = new AdminCar({
// //       carName,
// //       carNumber,
// //       carType,
// //       phoneNumber,
// //       ratePerDay,
// //       driverName,
// //       seats,
// //       bookingType,
// //       gearType,
// //       airCondition,
// //       ownerName,
// //       photos,
// //     });

// //     await newCar.save();
// //     res.status(201).json(newCar);
// //   } catch (err) {
// //     console.error("Add Car Error:", err.message, err.stack);
// //     res.status(500).json({ error: "Failed to add car", details: err.message });
// //   }
// // };

// // exports.getCars = async (req, res) => {
// //   try {
// //     const cars = await AdminCar.find().sort({ createdAt: -1 });
// //     res.json(cars);
// //   } catch (err) {
// //     console.error("Get Cars Error:", err.message);
// //     res.status(500).json({ error: "Failed to fetch cars" });
// //   }
// // };

// // exports.getCarById = async (req, res) => {
// //   try {
// //     const car = await AdminCar.findById(req.params.id);
// //     if (!car) {
// //       return res.status(404).json({ message: "Car not found" });
// //     }
// //     res.json(car);
// //   } catch (err) {
// //     console.error("Get Car By ID Error:", err.message);
// //     res.status(500).json({ error: "Failed to fetch car details" });
// //   }
// // };

// // exports.deleteCar = async (req, res) => {
// //   console.log("ID received:", req.params.id);
// //   try {
// //     const deletedCar = await AdminCar.findByIdAndDelete(req.params.id);

// //     if (!deletedCar) {
// //       console.log("Car not found");
// //       return res.status(404).json({ message: "Car not found" });
// //     }

// //     // Delete associated photos from the uploads/ folder
// //     if (deletedCar.photos && deletedCar.photos.length > 0) {
// //       deletedCar.photos.forEach((filename) => {
// //         const filePath = path.join(__dirname, "../uploads", filename);
// //         fs.unlink(filePath, (err) => {
// //           if (err) console.error(`Failed to delete file ${filename}:`, err);
// //           else console.log(`Deleted file: ${filename}`);
// //         });
// //       });
// //     }

// //     res.status(200).json({ message: "Car deleted successfully" });
// //   } catch (err) {
// //     console.error("Delete Car Error:", err.message);
// //     res.status(500).json({ error: "Failed to delete car" });
// //   }
// // };

// // exports.getCarsByName = async (req, res) => {
// //   try {
// //     const { name } = req.query; // Get the search term from query parameter
// //     if (!name) {
// //       return res.status(400).json({ error: "Search term is required" });
// //     }

// //     const cars = await AdminCar.find({
// //       carName: { $regex: new RegExp(name, "i") }, // Case-insensitive search
// //     }).sort({ createdAt: -1 });

// //     if (cars.length === 0) {
// //       return res.status(404).json({ message: "No cars found with that name" });
// //     }

// //     res.json(cars);
// //   } catch (err) {
// //     console.error("Get Cars By Name Error:", err.message);
// //     res
// //       .status(500)
// //       .json({ error: "Failed to search cars", details: err.message });
// //   }
// // };

// const AdminCar = require("../models/adminCar");
// const fs = require("fs");
// const path = require("path");

// exports.addCar = async (req, res) => {
//   try {
//     const {
//       carName,
//       carNumber,
//       carType,
//       phoneNumber,
//       ratePerDay,
//       driverName,
//       seats,
//       bookingType,
//       gearType,
//       airCondition,
//       ownerName,
//     } = req.body;

//     // Validate required fields
//     if (!carName || !carNumber || !carType || !ratePerDay || !seats) {
//       return res.status(400).json({ error: "Required fields are missing" });
//     }

//     const photos = req.files
//       ? req.files.map((file) => file.filename.trim())
//       : [];

//     console.log("Received Form Data:", {
//       carName,
//       carNumber,
//       carType,
//       phoneNumber,
//       ratePerDay,
//       driverName,
//       seats,
//       bookingType,
//       gearType,
//       airCondition,
//       ownerName,
//       photos,
//     });

//     const newCar = new AdminCar({
//       carName,
//       carNumber,
//       carType,
//       phoneNumber,
//       ratePerDay: Number(ratePerDay), // Ensure number
//       driverName,
//       seats: Number(seats),
//       bookingType: bookingType || "Both",
//       gearType: gearType || "Automatic",
//       airCondition: airCondition === "true" || airCondition === true, // Convert to boolean
//       ownerName: ownerName || "Unknown Owner",
//       photos,
//     });

//     await newCar.save();
//     res.status(201).json(newCar);
//   } catch (err) {
//     console.error("Add Car Error:", err.message, err.stack);
//     res.status(500).json({ error: "Failed to add car", details: err.message });
//   }
// };

// exports.getCars = async (req, res) => {
//   try {
//     const cars = await AdminCar.find().sort({ createdAt: -1 });
//     res.json(cars);
//   } catch (err) {
//     console.error("Get Cars Error:", err.message);
//     res.status(500).json({ error: "Failed to fetch cars" });
//   }
// };

// exports.getCarById = async (req, res) => {
//   try {
//     const car = await AdminCar.findById(req.params.id);
//     if (!car) {
//       return res.status(404).json({ message: "Car not found" });
//     }
//     res.json(car);
//   } catch (err) {
//     console.error("Get Car By ID Error:", err.message);
//     res.status(500).json({ error: "Failed to fetch car details" });
//   }
// };

// exports.deleteCar = async (req, res) => {
//   console.log("ID received:", req.params.id);
//   try {
//     const deletedCar = await AdminCar.findByIdAndDelete(req.params.id);

//     if (!deletedCar) {
//       console.log("Car not found");
//       return res.status(404).json({ message: "Car not found" });
//     }

//     // Delete associated photos from the uploads/ folder
//     if (deletedCar.photos && deletedCar.photos.length > 0) {
//       deletedCar.photos.forEach((filename) => {
//         const filePath = path.join(__dirname, "../uploads", filename);
//         fs.unlink(filePath, (err) => {
//           if (err) console.error(`Failed to delete file ${filename}:`, err);
//           else console.log(`Deleted file: ${filename}`);
//         });
//       });
//     }

//     res.status(200).json({ message: "Car deleted successfully" });
//   } catch (err) {
//     console.error("Delete Car Error:", err.message);
//     res.status(500).json({ error: "Failed to delete car" });
//   }
// };

// exports.getCarsByName = async (req, res) => {
//   try {
//     const { name } = req.query;
//     if (!name) {
//       return res.status(400).json({ error: "Search term is required" });
//     }

//     const cars = await AdminCar.find({
//       carName: { $regex: new RegExp(name, "i") },
//     }).sort({ createdAt: -1 });

//     if (cars.length === 0) {
//       return res.status(404).json({ message: "No cars found with that name" });
//     }

//     res.json(cars);
//   } catch (err) {
//     console.error("Get Cars By Name Error:", err.message);
//     res
//       .status(500)
//       .json({ error: "Failed to search cars", details: err.message });
//   }
// };

const AdminCar = require("../models/adminCar");
const fs = require("fs");
const path = require("path");

exports.addCar = async (req, res) => {
  try {
    const {
      carName,
      carNumber,
      carType,
      phoneNumber,
      ratePerDay,
      driverName,
      seats,
      bookingType,
      gearType,
      airCondition,
    } = req.body;

    const photos = req.files
      ? req.files.map((file) => file.filename.trim())
      : [];

    console.log("Received Form Data:", {
      carName,
      carNumber,
      carType,
      phoneNumber,
      ratePerDay,
      driverName,
      seats,
      bookingType,
      gearType,
      airCondition,
      photos,
    });

    const newCar = new AdminCar({
      carName,
      carNumber,
      carType,
      phoneNumber,
      ratePerDay,
      driverName,
      seats,
      bookingType,
      gearType,
      airCondition,
      photos,
    });

    await newCar.save();
    res.status(201).json(newCar);
  } catch (err) {
    console.error("Add Car Error:", err.message, err.stack);
    res.status(500).json({ error: "Failed to add car", details: err.message });
  }
};

exports.getCars = async (req, res) => {
  try {
    const cars = await AdminCar.find().sort({ createdAt: -1 });
    res.json(cars);
  } catch (err) {
    console.error("Get Cars Error:", err.message);
    res.status(500).json({ error: "Failed to fetch cars" });
  }
};

exports.getCarById = async (req, res) => {
  try {
    const car = await AdminCar.findById(req.params.id);
    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }
    res.json(car);
  } catch (err) {
    console.error("Get Car By ID Error:", err.message);
    res.status(500).json({ error: "Failed to fetch car details" });
  }
};

exports.deleteCar = async (req, res) => {
  console.log("ID received:", req.params.id);
  try {
    const deletedCar = await AdminCar.findByIdAndDelete(req.params.id);

    if (!deletedCar) {
      console.log("Car not found");
      return res.status(404).json({ message: "Car not found" });
    }

    // Delete associated photos from the uploads/ folder
    if (deletedCar.photos && deletedCar.photos.length > 0) {
      deletedCar.photos.forEach((filename) => {
        const filePath = path.join(__dirname, "../uploads", filename);
        fs.unlink(filePath, (err) => {
          if (err) console.error(`Failed to delete file ${filename}:`, err);
          else console.log(`Deleted file: ${filename}`);
        });
      });
    }

    res.status(200).json({ message: "Car deleted successfully" });
  } catch (err) {
    console.error("Delete Car Error:", err.message);
    res.status(500).json({ error: "Failed to delete car" });
  }
};

exports.getCarsByName = async (req, res) => {
  try {
    const { name } = req.query; // Get the search term from query parameter
    if (!name) {
      return res.status(400).json({ error: "Search term is required" });
    }

    const cars = await AdminCar.find({
      carName: { $regex: new RegExp(name, "i") }, // Case-insensitive search
    }).sort({ createdAt: -1 });

    if (cars.length === 0) {
      return res.status(404).json({ message: "No cars found with that name" });
    }

    res.json(cars);
  } catch (err) {
    console.error("Get Cars By Name Error:", err.message);
    res
      .status(500)
      .json({ error: "Failed to search cars", details: err.message });
  }
};
