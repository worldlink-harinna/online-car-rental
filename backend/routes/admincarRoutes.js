const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const admincarController = require("../controller/admincarController");

// Multer storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});

// Multer middleware
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );

    if (mimetype && extname) {
      return cb(null, true);
    }
    cb(new Error("Only JPEG, JPG, and PNG files are allowed!"));
  },
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
});
// Add a new car (with a photo)
// router.post("/add", upload.single("photos"), admincarController.addCar);
router.post("/add", upload.array("photos", 5), admincarController.addCar);

// Get all cars
router.get("/", admincarController.getCars);
router.get("/search", admincarController.getCarsByName);
router.get("/:id", admincarController.getCarById);

// Delete a car by ID
router.delete("/:id", admincarController.deleteCar);

module.exports = router;
