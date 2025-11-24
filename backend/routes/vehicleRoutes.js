// const express = require("express");
// const multer = require("multer");
// const path = require("path");
// const { addVehicle } = require("../controller/vehicleController");

// const router = express.Router();

// // Multer storage setup to save files to disk with unique names
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/"); // make sure this folder exists or create it
//   },

//   filename: function (req, file, cb) {
//     const ext = path.extname(file.originalname);
//     cb(null, file.fieldname + "-" + Date.now() + ext);
//   },
// });

// // File filter to accept images and pdf only
// const fileFilter = (req, file, cb) => {
//   const allowedTypes = [
//     "image/jpeg",
//     "image/png",
//     "image/gif",
//     "application/pdf",
//   ];
//   if (allowedTypes.includes(file.mimetype)) {
//     cb(null, true);
//   } else {
//     cb(
//       new Error("Invalid file type. Only JPG, PNG, GIF, and PDF are allowed."),
//       false
//     );
//   }
// };

// const upload = multer({
//   storage,
//   limits: { fileSize: 5 * 1024 * 1024 }, // 5MB max
//   fileFilter,
// });

// // Use fields() to handle multiple named files with their max count
// const uploadFields = upload.fields([
//   { name: "vehicleFrontImage", maxCount: 1 },
//   { name: "vehicleBackImage", maxCount: 1 },
//   { name: "interiorImage", maxCount: 1 },
//   { name: "bluebookDocument", maxCount: 1 },
//   { name: "insuranceDocument", maxCount: 1 },
// ]);

// router.post("/addVehicle", uploadFields, addVehicle);

// module.exports = router;

// const express = require("express");
// const multer = require("multer");
// const path = require("path");
// const {
//   addVehicle,
//   getVehicles,
//   updateVehicleStatus,
//   getVehicleById,
// } = require("../controller/vehicleController");

// const router = express.Router();

// // Multer setup for file uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     const ext = path.extname(file.originalname);
//     cb(null, file.fieldname + "-" + Date.now() + ext);
//   },
// });

// const fileFilter = (req, file, cb) => {
//   const allowedTypes = [
//     "image/jpeg",
//     "image/png",
//     "image/gif",
//     "application/pdf",
//   ];
//   if (allowedTypes.includes(file.mimetype)) {
//     cb(null, true);
//   } else {
//     cb(
//       new Error("Invalid file type. Only JPG, PNG, GIF, and PDF are allowed."),
//       false
//     );
//   }
// };

// const upload = multer({
//   storage,
//   limits: { fileSize: 5 * 1024 * 1024 }, // 5MB max
//   fileFilter,
// });

// const uploadFields = upload.fields([
//   { name: "vehicleFrontImage", maxCount: 1 },
//   { name: "vehicleBackImage", maxCount: 1 },
//   { name: "interiorImage", maxCount: 1 },
//   { name: "bluebookDocument", maxCount: 1 },
//   { name: "insuranceDocument", maxCount: 1 },
// ]);

// // POST route to add a vehicle with file uploads
// router.post("/addVehicle", uploadFields, addVehicle);

// // GET route to fetch all vehicles
// router.get("/", getVehicles);

// // PUT route to update vehicle status
// router.put("/:id/status", updateVehicleStatus);
// router.get("/:id", getVehicleById);

// module.exports = router;

const express = require("express");
const multer = require("multer");
const path = require("path");
const {
  addVehicle,
  getVehicles,
  updateVehicleStatus,
  getVehicleById,
  searchVehicles, // ✅ Added search controller
} = require("../controller/vehicleController");

const router = express.Router();

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + "-" + Date.now() + ext);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "application/pdf",
  ];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(
      new Error("Invalid file type. Only JPG, PNG, GIF, and PDF are allowed."),
      false
    );
  }
};

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB max
  fileFilter,
});

const uploadFields = upload.fields([
  { name: "vehicleFrontImage", maxCount: 1 },
  { name: "vehicleBackImage", maxCount: 1 },
  { name: "interiorImage", maxCount: 1 },
  { name: "bluebookDocument", maxCount: 1 },
  { name: "insuranceDocument", maxCount: 1 },
]);

// POST route to add a vehicle with file uploads
router.post("/addVehicle", uploadFields, addVehicle);

// GET route to fetch all vehicles
router.get("/", getVehicles);

// ✅ NEW: Search vehicles by name
router.get("/search", searchVehicles);

// PUT route to update vehicle status
router.put("/:id/status", updateVehicleStatus);

// GET route to get a vehicle by ID
router.get("/:id", getVehicleById);

module.exports = router;
