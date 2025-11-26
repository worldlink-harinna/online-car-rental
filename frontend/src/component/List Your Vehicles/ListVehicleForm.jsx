// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./ListVehicleForm.css";

// function ListVehicleForm() {
//   const navigate = useNavigate();
//   const [vehicleDetails, setVehicleDetails] = useState({
//     ownerName: "",
//     vehicleName: "",
//     type: "",
//     gearType: "",
//     seatNumbers: "",
//     airCondition: "",
//     vehicleNumber: "",
//     perDayRate: "",
//     rentalType: "",
//     phoneNumber: "",
//     vehicleFrontImage: null,
//     vehicleBackImage: null,
//     interiorImage: null,
//     bluebookDocument: null,
//     insuranceDocument: null,
//     status: "Pending",
//   });
//   const [imagePreviews, setImagePreviews] = useState({
//     vehicleFrontImage: null,
//     vehicleBackImage: null,
//     interiorImage: null,
//     bluebookDocument: null,
//     insuranceDocument: null,
//   });
//   const [errors, setErrors] = useState({});
//   const [uploadErrors, setUploadErrors] = useState({});
//   const [termsAgreed, setTermsAgreed] = useState(false);
//   const [termsError, setTermsError] = useState("");
//   const [submissionStatus, setSubmissionStatus] = useState(null);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setVehicleDetails((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//     setErrors((prevState) => ({ ...prevState, [name]: "" }));
//   };

//   const handleImageChange = (event) => {
//     const { name, files } = event.target;
//     if (files && files[0]) {
//       const allowedTypes = [
//         "image/jpeg",
//         "image/png",
//         "image/gif",
//         "image/avif",
//         "application/pdf",
//       ];
//       if (!allowedTypes.includes(files[0].type)) {
//         setUploadErrors((prevState) => ({
//           ...prevState,
//           [name]:
//             "Invalid file type. Only JPG, PNG, GIF, AVIF and PDF are allowed.",
//         }));
//         setVehicleDetails((prevState) => ({ ...prevState, [name]: null }));
//         setImagePreviews((prevState) => ({ ...prevState, [name]: null }));
//         return;
//       }
//       if (files[0].size > 5 * 1024 * 1024) {
//         // 5MB limit
//         setUploadErrors((prevState) => ({
//           ...prevState,
//           [name]: "File size too large. Maximum 5MB allowed.",
//         }));
//         setVehicleDetails((prevState) => ({ ...prevState, [name]: null }));
//         setImagePreviews((prevState) => ({ ...prevState, [name]: null }));
//         return;
//       }
//       setVehicleDetails((prevState) => ({
//         ...prevState,
//         [name]: files[0],
//       }));
//       setImagePreviews((prevState) => ({
//         ...prevState,
//         [name]: URL.createObjectURL(files[0]),
//       }));
//       setUploadErrors((prevState) => ({ ...prevState, [name]: "" }));
//     } else {
//       setVehicleDetails((prevState) => ({
//         ...prevState,
//         [name]: null,
//       }));
//       setImagePreviews((prevState) => ({
//         ...prevState,
//         [name]: null,
//       }));
//       setUploadErrors((prevState) => ({ ...prevState, [name]: "" }));
//     }
//   };

//   const handleTermsChange = (event) => {
//     setTermsAgreed(event.target.checked);
//     setTermsError("");
//   };

//   const validateForm = () => {
//     let isValid = true;
//     const newErrors = {};
//     if (!vehicleDetails.ownerName.trim()) {
//       newErrors.ownerName = "Owner Name is required";
//       isValid = false;
//     }

//     if (!vehicleDetails.vehicleName.trim()) {
//       newErrors.vehicleName = "Vehicle Name is required";
//       isValid = false;
//     }
//     if (!vehicleDetails.type) {
//       newErrors.type = "Vehicle Type is required";
//       isValid = false;
//     }
//     if (!vehicleDetails.gearType) {
//       newErrors.gearType = "Gear Type is required";
//       isValid = false;
//     }
//     if (!vehicleDetails.seatNumbers) {
//       newErrors.seatNumbers = "Seat Numbers are required";
//       isValid = false;
//     } else if (
//       isNaN(vehicleDetails.seatNumbers) ||
//       parseInt(vehicleDetails.seatNumbers) <= 0
//     ) {
//       newErrors.seatNumbers = "Seat Numbers must be a positive number";
//       isValid = false;
//     }
//     if (!vehicleDetails.perDayRate) {
//       newErrors.perDayRate = "Per Day Rate is required";
//       isValid = false;
//     } else if (
//       isNaN(vehicleDetails.perDayRate) ||
//       parseFloat(vehicleDetails.perDayRate) < 0
//     ) {
//       newErrors.perDayRate = "Per Day Rate must be a non-negative number";
//       isValid = false;
//     }
//     if (!vehicleDetails.rentalType) {
//       newErrors.rentalType = "Rental Type is required";
//       isValid = false;
//     }
//     if (!vehicleDetails.phoneNumber.trim()) {
//       newErrors.phoneNumber = "Phone Number is required";
//       isValid = false;
//     } else if (!/^\d{10}$/.test(vehicleDetails.phoneNumber.trim())) {
//       newErrors.phoneNumber = "Phone Number must be 10 digits";
//       isValid = false;
//     }
//     if (!vehicleDetails.vehicleFrontImage) {
//       newErrors.vehicleFrontImage = "Vehicle Front Image is required";
//       isValid = false;
//     }
//     if (!vehicleDetails.bluebookDocument) {
//       newErrors.bluebookDocument = "Blue Book Document is required";
//       isValid = false;
//     }
//     if (!termsAgreed) {
//       setTermsError("You must agree to the terms and policies.");
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (validateForm()) {
//       setSubmissionStatus("loading");

//       // Create FormData object to handle text and file inputs
//       const formData = new FormData();
//       formData.append("ownerName", vehicleDetails.ownerName);

//       formData.append("vehicleName", vehicleDetails.vehicleName);
//       formData.append("type", vehicleDetails.type);
//       formData.append("gearType", vehicleDetails.gearType);
//       formData.append("seatNumbers", vehicleDetails.seatNumbers);
//       formData.append("airCondition", vehicleDetails.airCondition);
//       formData.append("vehicleNumber", vehicleDetails.vehicleNumber);
//       formData.append("perDayRate", vehicleDetails.perDayRate);
//       formData.append("rentalType", vehicleDetails.rentalType);
//       formData.append("phoneNumber", vehicleDetails.phoneNumber);
//       formData.append("status", vehicleDetails.status);

//       // Append files if they exist
//       if (vehicleDetails.vehicleFrontImage) {
//         formData.append("vehicleFrontImage", vehicleDetails.vehicleFrontImage);
//       }
//       if (vehicleDetails.vehicleBackImage) {
//         formData.append("vehicleBackImage", vehicleDetails.vehicleBackImage);
//       }
//       if (vehicleDetails.interiorImage) {
//         formData.append("interiorImage", vehicleDetails.interiorImage);
//       }
//       if (vehicleDetails.bluebookDocument) {
//         formData.append("bluebookDocument", vehicleDetails.bluebookDocument);
//       }
//       if (vehicleDetails.insuranceDocument) {
//         formData.append("insuranceDocument", vehicleDetails.insuranceDocument);
//       }

//       try {
//         const response = await fetch(
//           "http://localhost:3000/api/vehicles/addVehicle",
//           {
//             method: "POST",
//             body: formData,
//           }
//         );

//         const result = await response.json();

//         if (response.ok) {
//           setSubmissionStatus("success");
//           setTimeout(() => navigate("/drifty"), 2000);
//         } else {
//           setSubmissionStatus("error");
//           setErrors({ server: result.message || "Failed to submit the form" });
//           setTimeout(() => setSubmissionStatus(null), 3000);
//         }
//       } catch (error) {
//         console.error("Error submitting form:", error);
//         setSubmissionStatus("error");
//         setErrors({ server: "Network error. Please try again later." });
//         setTimeout(() => setSubmissionStatus(null), 3000);
//       }
//     } else {
//       console.log("Form has errors. Please correct them.");
//       setSubmissionStatus("error");
//       setTimeout(() => setSubmissionStatus(null), 3000);
//     }
//   };

//   const handleGoToHomepage = () => {
//     navigate("/profile");
//   };

//   return (
//     <div className="list-vehicle-form-container">
//       <div className="form-header">
//         <h2>Welcome, Pravesh Didi</h2>
//         <p className="form-date">
//           {new Date().toLocaleDateString("en-US", {
//             weekday: "short",
//             day: "2-digit",
//             month: "short",
//             year: "numeric",
//           })}
//         </p>
//       </div>

//       {submissionStatus === "success" && (
//         <div className="submission-message success">
//           Submitted Successfully!
//           <button
//             type="button"
//             onClick={() => navigate("/drifty")}
//             className="homepage-button"
//           >
//             Go to My Vehicles
//           </button>
//         </div>
//       )}

//       {submissionStatus === "error" && (
//         <div className="submission-message error">
//           Please correct the form errors.
//         </div>
//       )}

//       {errors.server && (
//         <div className="submission-message error">{errors.server}</div>
//       )}

//       {submissionStatus !== "success" && (
//         <>
//           <div className="form-section">
//             <h3>Car Details</h3>
//             <p className="section-description">
//               As your Gig storefront, your{" "}
//               <strong>title is the most important place</strong> to include
//               keywords that buyers would likely use to search for a service like
//               yours.
//             </p>
//             <div className="form-group">
//               <label htmlFor="ownerName">Owner Name</label>
//               <input
//                 type="text"
//                 id="ownerName"
//                 name="ownerName"
//                 value={vehicleDetails.ownerName}
//                 onChange={handleInputChange}
//               />
//               {errors.ownerName && (
//                 <p className="error-message">{errors.ownerName}</p>
//               )}
//             </div>

//             <div className="form-group">
//               <label htmlFor="vehicleName">Vehicle Name</label>
//               <input
//                 type="text"
//                 id="vehicleName"
//                 name="vehicleName"
//                 value={vehicleDetails.vehicleName}
//                 onChange={handleInputChange}
//               />
//               {errors.vehicleName && (
//                 <p className="error-message">{errors.vehicleName}</p>
//               )}
//             </div>

//             <div className="form-row">
//               <div className="form-group">
//                 <label htmlFor="type">Type</label>
//                 <select
//                   id="type"
//                   name="type"
//                   value={vehicleDetails.type}
//                   onChange={handleInputChange}
//                 >
//                   <option value="">Select Type</option>
//                   <option value="sedan">Sedan</option>
//                   <option value="suv">SUV</option>
//                   <option value="miniVan">Mini Van</option>
//                   <option value="miniVanEv">Mini Van EV</option>
//                 </select>
//                 {errors.type && <p className="error-message">{errors.type}</p>}
//               </div>

//               <div className="form-group">
//                 <label htmlFor="gearType">Gear Type</label>
//                 <select
//                   id="gearType"
//                   name="gearType"
//                   value={vehicleDetails.gearType}
//                   onChange={handleInputChange}
//                 >
//                   <option value="">Select Gear Type</option>
//                   <option value="manual">Manual</option>
//                   <option value="automatic">Automatic</option>
//                 </select>
//                 {errors.gearType && (
//                   <p className="error-message">{errors.gearType}</p>
//                 )}
//               </div>
//             </div>

//             <div className="form-row">
//               <div className="form-group">
//                 <label htmlFor="seatNumbers">Seat Numbers</label>
//                 <input
//                   type="number"
//                   id="seatNumbers"
//                   name="seatNumbers"
//                   value={vehicleDetails.seatNumbers}
//                   onChange={handleInputChange}
//                 />
//                 {errors.seatNumbers && (
//                   <p className="error-message">{errors.seatNumbers}</p>
//                 )}
//               </div>

//               <div className="form-group">
//                 <label htmlFor="airCondition">Air Condition</label>
//                 <select
//                   id="airCondition"
//                   name="airCondition"
//                   value={vehicleDetails.airCondition}
//                   onChange={handleInputChange}
//                 >
//                   <option value="">Select Option</option>
//                   <option value="yes">Yes</option>
//                   <option value="no">No</option>
//                 </select>
//               </div>
//             </div>

//             <div className="form-row">
//               <div className="form-group">
//                 <label htmlFor="vehicleNumber">Vehicle Number</label>
//                 <input
//                   type="text"
//                   id="vehicleNumber"
//                   name="vehicleNumber"
//                   value={vehicleDetails.vehicleNumber}
//                   onChange={handleInputChange}
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="perDayRate">Per Day Rate</label>
//                 <input
//                   type="number"
//                   id="perDayRate"
//                   name="perDayRate"
//                   value={vehicleDetails.perDayRate}
//                   onChange={handleInputChange}
//                   min="0"
//                 />
//                 {errors.perDayRate && (
//                   <p className="error-message">{errors.perDayRate}</p>
//                 )}
//               </div>
//             </div>

//             <div className="form-group">
//               <label htmlFor="rentalType">Rental Type</label>
//               <select
//                 id="rentalType"
//                 name="rentalType"
//                 value={vehicleDetails.rentalType}
//                 onChange={handleInputChange}
//               >
//                 <option value="">Select Rental Type</option>
//                 <option value="withDriver">With Driver</option>
//                 <option value="withoutDriver">Without Driver</option>
//                 <option value="Both">Both</option>
//               </select>
//               {errors.rentalType && (
//                 <p className="error-message">{errors.rentalType}</p>
//               )}
//             </div>

//             <div className="form-group">
//               <label htmlFor="phoneNumber">Phone Number</label>
//               <input
//                 type="tel"
//                 id="phoneNumber"
//                 name="phoneNumber"
//                 value={vehicleDetails.phoneNumber}
//                 onChange={handleInputChange}
//               />
//               {errors.phoneNumber && (
//                 <p className="error-message">{errors.phoneNumber}</p>
//               )}
//             </div>
//           </div>

//           <div className="form-section">
//             <h3>Vehicle Documents & Images</h3>
//             <div className="form-group">
//               <label htmlFor="vehicleFrontImage">Vehicle Front Image</label>
//               <input
//                 type="file"
//                 id="vehicleFrontImage"
//                 name="vehicleFrontImage"
//                 accept="image/*"
//                 onChange={handleImageChange}
//               />
//               {imagePreviews.vehicleFrontImage && (
//                 <img
//                   src={imagePreviews.vehicleFrontImage}
//                   alt="Vehicle Front Preview"
//                   className="image-preview"
//                 />
//               )}
//               {errors.vehicleFrontImage && (
//                 <p className="error-message">{errors.vehicleFrontImage}</p>
//               )}
//               {uploadErrors.vehicleFrontImage && (
//                 <p className="error-message">
//                   {uploadErrors.vehicleFrontImage}
//                 </p>
//               )}
//             </div>

//             <div className="form-group">
//               <label htmlFor="vehicleBackImage">Vehicle Back Image</label>
//               <input
//                 type="file"
//                 id="vehicleBackImage"
//                 name="vehicleBackImage"
//                 accept="image/*"
//                 onChange={handleImageChange}
//               />
//               {imagePreviews.vehicleBackImage && (
//                 <img
//                   src={imagePreviews.vehicleBackImage}
//                   alt="Vehicle Back Preview"
//                   className="image-preview"
//                 />
//               )}
//               {uploadErrors.vehicleBackImage && (
//                 <p className="error-message">{uploadErrors.vehicleBackImage}</p>
//               )}
//             </div>

//             <div className="form-group">
//               <label htmlFor="interiorImage">Interior View</label>
//               <input
//                 type="file"
//                 id="interiorImage"
//                 name="interiorImage"
//                 accept="image/*"
//                 onChange={handleImageChange}
//               />
//               {imagePreviews.interiorImage && (
//                 <img
//                   src={imagePreviews.interiorImage}
//                   alt="Interior Preview"
//                   className="image-preview"
//                 />
//               )}
//               {uploadErrors.interiorImage && (
//                 <p className="error-message">{uploadErrors.interiorImage}</p>
//               )}
//             </div>

//             <div className="form-group">
//               <label htmlFor="bluebookDocument">Blue Book Document</label>
//               <input
//                 type="file"
//                 id="bluebookDocument"
//                 name="bluebookDocument"
//                 accept="image/*, application/pdf"
//                 onChange={handleImageChange}
//               />
//               {imagePreviews.bluebookDocument &&
//                 (vehicleDetails.bluebookDocument &&
//                 vehicleDetails.bluebookDocument.type === "application/pdf" ? (
//                   <p>PDF uploaded: {vehicleDetails.bluebookDocument.name}</p>
//                 ) : (
//                   <img
//                     src={imagePreviews.bluebookDocument}
//                     alt="Blue Book Preview"
//                     className="image-preview"
//                   />
//                 ))}
//               {errors.bluebookDocument && (
//                 <p className="error-message">{errors.bluebookDocument}</p>
//               )}
//               {uploadErrors.bluebookDocument && (
//                 <p className="error-message">{uploadErrors.bluebookDocument}</p>
//               )}
//             </div>

//             <div className="form-group">
//               <label htmlFor="insuranceDocument">Insurance Document</label>
//               <input
//                 type="file"
//                 id="insuranceDocument"
//                 name="insuranceDocument"
//                 accept="image/*, application/pdf"
//                 onChange={handleImageChange}
//               />
//               {imagePreviews.insuranceDocument &&
//                 (vehicleDetails.insuranceDocument &&
//                 vehicleDetails.insuranceDocument.type === "application/pdf" ? (
//                   <p>PDF uploaded: {vehicleDetails.insuranceDocument.name}</p>
//                 ) : (
//                   <img
//                     src={imagePreviews.insuranceDocument}
//                     alt="Insurance Document Preview"
//                     className="image-preview"
//                   />
//                 ))}
//               {uploadErrors.insuranceDocument && (
//                 <p className="error-message">
//                   {uploadErrors.insuranceDocument}
//                 </p>
//               )}
//             </div>
//           </div>

//           <div className="form-notice">
//             <p className="notice-text">
//               <span className="notice-icon">ℹ️</span> Please note: It will take
//               around 5-7 hrs to verify, you will be notified.
//             </p>
//           </div>

//           <div className="form-agreement">
//             <label>
//               <input
//                 type="checkbox"
//                 checked={termsAgreed}
//                 onChange={handleTermsChange}
//               />
//               I have read and agree to all the{" "}
//               <a href="/terms-and-policies" target="_blank">
//                 terms and policies
//               </a>
//               .
//             </label>
//             {termsError && <p className="error-message">{termsError}</p>}
//           </div>

//           <button
//             type="submit"
//             className="submit-button"
//             onClick={handleSubmit}
//             disabled={submissionStatus === "loading"}
//           >
//             {submissionStatus === "loading" ? "Submitting..." : "Submit"}
//           </button>
//         </>
//       )}
//     </div>
//   );
// }

// export default ListVehicleForm;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./ListVehicleForm.css";

// function ListVehicleForm({ user }) {
//   const navigate = useNavigate();
//   const [vehicleDetails, setVehicleDetails] = useState({
//     ownerName: "",
//     vehicleName: "",
//     type: "",
//     gearType: "",
//     seatNumbers: "",
//     airCondition: "",
//     vehicleNumber: "",
//     perDayRate: "",
//     rentalType: "",
//     phoneNumber: "",
//     vehicleFrontImage: null,
//     vehicleBackImage: null,
//     interiorImage: null,
//     bluebookDocument: null,
//     insuranceDocument: null,
//     status: "Pending",
//   });
//   const [imagePreviews, setImagePreviews] = useState({
//     vehicleFrontImage: null,
//     vehicleBackImage: null,
//     interiorImage: null,
//     bluebookDocument: null,
//     insuranceDocument: null,
//   });
//   const [errors, setErrors] = useState({});
//   const [uploadErrors, setUploadErrors] = useState({});
//   const [termsAgreed, setTermsAgreed] = useState(false);
//   const [termsError, setTermsError] = useState("");
//   const [submissionStatus, setSubmissionStatus] = useState(null);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setVehicleDetails((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//     setErrors((prevState) => ({ ...prevState, [name]: "" }));
//   };

//   const handleImageChange = (event) => {
//     const { name, files } = event.target;
//     if (files && files[0]) {
//       const allowedTypes = [
//         "image/jpeg",
//         "image/png",
//         "image/gif",
//         "image/avif",
//         "application/pdf",
//       ];
//       if (!allowedTypes.includes(files[0].type)) {
//         setUploadErrors((prevState) => ({
//           ...prevState,
//           [name]:
//             "Invalid file type. Only JPG, PNG, GIF, AVIF and PDF are allowed.",
//         }));
//         setVehicleDetails((prevState) => ({ ...prevState, [name]: null }));
//         setImagePreviews((prevState) => ({ ...prevState, [name]: null }));
//         return;
//       }
//       if (files[0].size > 5 * 1024 * 1024) {
//         setUploadErrors((prevState) => ({
//           ...prevState,
//           [name]: "File size too large. Maximum 5MB allowed.",
//         }));
//         setVehicleDetails((prevState) => ({ ...prevState, [name]: null }));
//         setImagePreviews((prevState) => ({ ...prevState, [name]: null }));
//         return;
//       }
//       setVehicleDetails((prevState) => ({
//         ...prevState,
//         [name]: files[0],
//       }));
//       setImagePreviews((prevState) => ({
//         ...prevState,
//         [name]: URL.createObjectURL(files[0]),
//       }));
//       setUploadErrors((prevState) => ({ ...prevState, [name]: "" }));
//     } else {
//       setVehicleDetails((prevState) => ({
//         ...prevState,
//         [name]: null,
//       }));
//       setImagePreviews((prevState) => ({
//         ...prevState,
//         [name]: null,
//       }));
//       setUploadErrors((prevState) => ({ ...prevState, [name]: "" }));
//     }
//   };

//   const handleTermsChange = (event) => {
//     setTermsAgreed(event.target.checked);
//     setTermsError("");
//   };

//   const validateForm = () => {
//     let isValid = true;
//     const newErrors = {};
//     if (!vehicleDetails.ownerName.trim()) {
//       newErrors.ownerName = "Owner Name is required";
//       isValid = false;
//     }
//     if (!vehicleDetails.vehicleName.trim()) {
//       newErrors.vehicleName = "Vehicle Name is required";
//       isValid = false;
//     }
//     if (!vehicleDetails.type) {
//       newErrors.type = "Vehicle Type is required";
//       isValid = false;
//     }
//     if (!vehicleDetails.gearType) {
//       newErrors.gearType = "Gear Type is required";
//       isValid = false;
//     }
//     if (!vehicleDetails.seatNumbers) {
//       newErrors.seatNumbers = " getting Seat Numbers are required";
//       isValid = false;
//     } else if (
//       isNaN(vehicleDetails.seatNumbers) ||
//       parseInt(vehicleDetails.seatNumbers) <= 0
//     ) {
//       newErrors.seatNumbers = "Seat Numbers must be a positive number";
//       isValid = false;
//     }
//     if (!vehicleDetails.perDayRate) {
//       newErrors.perDayRate = "Per Day Rate is required";
//       isValid = false;
//     } else if (
//       isNaN(vehicleDetails.perDayRate) ||
//       parseFloat(vehicleDetails.perDayRate) < 0
//     ) {
//       newErrors.perDayRate = "Per Day Rate must be a non-negative number";
//       isValid = false;
//     }
//     if (!vehicleDetails.rentalType) {
//       newErrors.rentalType = "Rental Type is required";
//       isValid = false;
//     }
//     if (!vehicleDetails.phoneNumber.trim()) {
//       newErrors.phoneNumber = "Phone Number is required";
//       isValid = false;
//     } else if (!/^\d{10}$/.test(vehicleDetails.phoneNumber.trim())) {
//       newErrors.phoneNumber = "Phone Number must be 10 digits";
//       isValid = false;
//     }
//     if (!vehicleDetails.vehicleFrontImage) {
//       newErrors.vehicleFrontImage = "Vehicle Front Image is required";
//       isValid = false;
//     }
//     if (!vehicleDetails.bluebookDocument) {
//       newErrors.bluebookDocument = "Blue Book Document is required";
//       isValid = false;
//     }
//     if (!termsAgreed) {
//       setTermsError("You must agree to the terms and policies.");
//       isValid = false;
//     }
//     if (!user || !user.email) {
//       newErrors.email = "User email is required. Please log in.";
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (validateForm()) {
//       setSubmissionStatus("loading");

//       const formData = new FormData();
//       formData.append("ownerName", vehicleDetails.ownerName);
//       formData.append("vehicleName", vehicleDetails.vehicleName);
//       formData.append("type", vehicleDetails.type);
//       formData.append("gearType", vehicleDetails.gearType);
//       formData.append("seatNumbers", vehicleDetails.seatNumbers);
//       formData.append("airCondition", vehicleDetails.airCondition);
//       formData.append("vehicleNumber", vehicleDetails.vehicleNumber);
//       formData.append("perDayRate", vehicleDetails.perDayRate);
//       formData.append("rentalType", vehicleDetails.rentalType);
//       formData.append("phoneNumber", vehicleDetails.phoneNumber);
//       formData.append("status", vehicleDetails.status);
//       formData.append("email", user ? user.email : "");

//       if (vehicleDetails.vehicleFrontImage) {
//         formData.append("vehicleFrontImage", vehicleDetails.vehicleFrontImage);
//       }
//       if (vehicleDetails.vehicleBackImage) {
//         formData.append("vehicleBackImage", vehicleDetails.vehicleBackImage);
//       }
//       if (vehicleDetails.interiorImage) {
//         formData.append("interiorImage", vehicleDetails.interiorImage);
//       }
//       if (vehicleDetails.bluebookDocument) {
//         formData.append("bluebookDocument", vehicleDetails.bluebookDocument);
//       }
//       if (vehicleDetails.insuranceDocument) {
//         formData.append("insuranceDocument", vehicleDetails.insuranceDocument);
//       }

//       try {
//         const response = await fetch(
//           "http://localhost:3000/api/vehicles/addVehicle",
//           {
//             method: "POST",
//             body: formData,
//           }
//         );

//         const result = await response.json();

//         if (response.ok) {
//           setSubmissionStatus("success");
//           setTimeout(() => navigate("/drifty"), 2000);
//         } else {
//           setSubmissionStatus("error");
//           setErrors({ server: result.message || "Failed to submit the form" });
//           setTimeout(() => setSubmissionStatus(null), 3000);
//         }
//       } catch (error) {
//         console.error("Error submitting form:", error);
//         setSubmissionStatus("error");
//         setErrors({ server: "Network error. Please try again later." });
//         setTimeout(() => setSubmissionStatus(null), 3000);
//       }
//     } else {
//       console.log("Form has errors. Please correct them.");
//       setSubmissionStatus("error");
//       setTimeout(() => setSubmissionStatus(null), 3000);
//     }
//   };

//   const handleGoToHomepage = () => {
//     navigate("/profile");
//   };

//   return (
//     <div className="list-vehicle-form-container">
//       <div className="form-header">
//         <h2>Welcome, {user ? user.name : "Guest"}</h2>
//         <p className="form-date">
//           {new Date().toLocaleDateString("en-US", {
//             weekday: "short",
//             day: "2-digit",
//             month: "short",
//             year: "numeric",
//           })}
//         </p>
//       </div>

//       {submissionStatus === "success" && (
//         <div className="submission-message success">
//           Submitted Successfully!
//           <button
//             type="button"
//             onClick={() => navigate("/drifty")}
//             className="homepage-button"
//           >
//             Go to My Vehicles
//           </button>
//         </div>
//       )}

//       {submissionStatus === "error" && (
//         <div className="submission-message error">
//           Please correct the form errors.
//         </div>
//       )}

//       {errors.server && (
//         <div className="submission-message error">{errors.server}</div>
//       )}

//       {errors.email && (
//         <div className="submission-message error">{errors.email}</div>
//       )}

//       {submissionStatus !== "success" && (
//         <>
//           <div className="form-section">
//             <h3>Car Details</h3>
//             <p className="section-description">
//               As your Gig storefront, your{" "}
//               <strong>title is the most important place</strong> to include
//               keywords that buyers would likely use to search for a service like
//               yours.
//             </p>
//             <div className="form-group">
//               <label htmlFor="ownerName">Owner Name</label>
//               <input
//                 type="text"
//                 id="ownerName"
//                 name="ownerName"
//                 value={vehicleDetails.ownerName}
//                 onChange={handleInputChange}
//               />
//               {errors.ownerName && (
//                 <p className="error-message">{errors.ownerName}</p>
//               )}
//             </div>

//             <div className="form-group">
//               <label htmlFor="vehicleName">Vehicle Name</label>
//               <input
//                 type="text"
//                 id="vehicleName"
//                 name="vehicleName"
//                 value={vehicleDetails.vehicleName}
//                 onChange={handleInputChange}
//               />
//               {errors.vehicleName && (
//                 <p className="error-message">{errors.vehicleName}</p>
//               )}
//             </div>

//             <div className="form-row">
//               <div className="form-group">
//                 <label htmlFor="type">Type</label>
//                 <select
//                   id="type"
//                   name="type"
//                   value={vehicleDetails.type}
//                   onChange={handleInputChange}
//                 >
//                   <option value="">Select Type</option>
//                   <option value="sedan">Sedan</option>
//                   <option value="suv">SUV</option>
//                   <option value="miniVan">Mini Van</option>
//                   <option value="miniVanEv">Mini Van EV</option>
//                 </select>
//                 {errors.type && (
//                   <p className="error-message">{errors.carType}</p>
//                 )}
//               </div>

//               <div className="form-group">
//                 <label htmlFor="gearType">Gear Type</label>
//                 <select
//                   id="gearType"
//                   name="gearType"
//                   value={vehicleDetails.gearType}
//                   onChange={handleInputChange}
//                 >
//                   <option value="">Select Gear Type</option>
//                   <option value="manual">Manual</option>
//                   <option value="automatic">Automatic</option>
//                 </select>
//                 {errors.gearType && (
//                   <p className="error-message">{errors.gearType}</p>
//                 )}
//               </div>
//             </div>

//             <div className="form-row">
//               <div className="form-group">
//                 <label htmlFor="seatNumbers">Seat Numbers</label>
//                 <input
//                   type="number"
//                   id="seatNumbers"
//                   name="seatNumbers"
//                   value={vehicleDetails.seatNumbers}
//                   onChange={handleInputChange}
//                 />
//                 {errors.seatNumbers && (
//                   <p className="error-message">{errors.seatNumbers}</p>
//                 )}
//               </div>

//               <div className="form-group">
//                 <label htmlFor="airCondition">Air Condition</label>
//                 <select
//                   id="airCondition"
//                   name="airCondition"
//                   value={vehicleDetails.airCondition}
//                   onChange={handleInputChange}
//                 >
//                   <option value="">Select Option</option>
//                   <option value="yes">Yes</option>
//                   <option value="no">No</option>
//                 </select>
//               </div>
//             </div>

//             <div className="form-row">
//               <div className="form-group">
//                 <label htmlFor="vehicleNumber">Vehicle Number</label>
//                 <input
//                   type="text"
//                   id="vehicleNumber"
//                   name="vehicleNumber"
//                   value={vehicleDetails.vehicleNumber}
//                   onChange={handleInputChange}
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="perDayRate">Per Day Rate</label>
//                 <input
//                   type="number"
//                   id="perDayRate"
//                   name="perDayRate"
//                   value={vehicleDetails.perDayRate}
//                   onChange={handleInputChange}
//                   min="0"
//                 />
//                 {errors.perDayRate && (
//                   <p className="error-message">{errors.perDayRate}</p>
//                 )}
//               </div>
//             </div>

//             <div className="form-group">
//               <label htmlFor="rentalType">Rental Type</label>
//               <select
//                 id="rentalType"
//                 name="rentalType"
//                 value={vehicleDetails.rentalType}
//                 onChange={handleInputChange}
//               >
//                 <option value="">Select Rental Type</option>
//                 <option value="withDriver">With Driver</option>
//                 <option value="withoutDriver">Without Driver</option>
//                 <option value="Both">Both</option>
//               </select>
//               {errors.rentalType && (
//                 <p className="error-message">{errors.rentalType}</p>
//               )}
//             </div>

//             <div className="form-group">
//               <label htmlFor="phoneNumber">Phone Number</label>
//               <input
//                 type="tel"
//                 id="phoneNumber"
//                 name="phoneNumber"
//                 value={vehicleDetails.phoneNumber}
//                 onChange={handleInputChange}
//               />
//               {errors.phoneNumber && (
//                 <p className="error-message">{errors.phoneNumber}</p>
//               )}
//             </div>
//           </div>

//           <div className="form-section">
//             <h3>Vehicle Documents & Images</h3>
//             <div className="form-group">
//               <label htmlFor="vehicleFrontImage">Vehicle Front Image</label>
//               <input
//                 type="file"
//                 id="vehicleFrontImage"
//                 name="vehicleFrontImage"
//                 accept="image/*"
//                 onChange={handleImageChange}
//               />
//               {imagePreviews.vehicleFrontImage && (
//                 <img
//                   src={imagePreviews.vehicleFrontImage}
//                   alt="Vehicle Front Preview"
//                   className="image-preview"
//                 />
//               )}
//               {errors.vehicleFrontImage && (
//                 <p className="error-message">{errors.vehicleFrontImage}</p>
//               )}
//               {uploadErrors.vehicleFrontImage && (
//                 <p className="error-message">
//                   {uploadErrors.vehicleFrontImage}
//                 </p>
//               )}
//             </div>

//             <div className="form-group">
//               <label htmlFor="vehicleBackImage">Vehicle Back Image</label>
//               <input
//                 type="file"
//                 id="vehicleBackImage"
//                 name="vehicleBackImage"
//                 accept="image/*"
//                 onChange={handleImageChange}
//               />
//               {imagePreviews.vehicleBackImage && (
//                 <img
//                   src={imagePreviews.vehicleBackImage}
//                   alt="Vehicle Back Preview"
//                   className="image-preview"
//                 />
//               )}
//               {uploadErrors.vehicleBackImage && (
//                 <p className="error-message">{uploadErrors.vehicleBackImage}</p>
//               )}
//             </div>

//             <div className="form-group">
//               <label htmlFor="interiorImage">Interior View</label>
//               <input
//                 type="file"
//                 id="interiorImage"
//                 name="interiorImage"
//                 accept="image/*"
//                 onChange={handleImageChange}
//               />
//               {imagePreviews.interiorImage && (
//                 <img
//                   src={imagePreviews.interiorImage}
//                   alt="Interior Preview"
//                   className="image-preview"
//                 />
//               )}
//               {uploadErrors.interiorImage && (
//                 <p className="error-message">{uploadErrors.interiorImage}</p>
//               )}
//             </div>

//             <div className="form-group">
//               <label htmlFor="bluebookDocument">Blue Book Document</label>
//               <input
//                 type="file"
//                 id="bluebookDocument"
//                 name="bluebookDocument"
//                 accept="image/*, application/pdf"
//                 onChange={handleImageChange}
//               />
//               {imagePreviews.bluebookDocument &&
//                 (vehicleDetails.bluebookDocument &&
//                 vehicleDetails.bluebookDocument.type === "application/pdf" ? (
//                   <p>PDF uploaded: {vehicleDetails.bluebookDocument.name}</p>
//                 ) : (
//                   <img
//                     src={imagePreviews.bluebookDocument}
//                     alt="Blue Book Preview"
//                     className="image-preview"
//                   />
//                 ))}
//               {errors.bluebookDocument && (
//                 <p className="error-message">{errors.bluebookDocument}</p>
//               )}
//               {uploadErrors.bluebookDocument && (
//                 <p className="error-message">{uploadErrors.bluebookDocument}</p>
//               )}
//             </div>

//             <div className="form-group">
//               <label htmlFor="insuranceDocument">Insurance Document</label>
//               <input
//                 type="file"
//                 id="insuranceDocument"
//                 name="insuranceDocument"
//                 accept="image/*, application/pdf"
//                 onChange={handleImageChange}
//               />
//               {imagePreviews.insuranceDocument &&
//                 (vehicleDetails.insuranceDocument &&
//                 vehicleDetails.insuranceDocument.type === "application/pdf" ? (
//                   <p>PDF uploaded: {vehicleDetails.insuranceDocument.name}</p>
//                 ) : (
//                   <img
//                     src={imagePreviews.insuranceDocument}
//                     alt="Insurance Document Preview"
//                     className="image-preview"
//                   />
//                 ))}
//               {uploadErrors.insuranceDocument && (
//                 <p className="error-message">
//                   {uploadErrors.insuranceDocument}
//                 </p>
//               )}
//             </div>
//           </div>

//           <div className="form-notice">
//             <p className="notice-text">
//               <span className="notice-icon">ℹ️</span> Please note: It will take
//               around 5-7 hrs to verify, you will be notified.
//             </p>
//           </div>

//           <div className="form-agreement">
//             <label>
//               <input
//                 type="checkbox"
//                 checked={termsAgreed}
//                 onChange={handleTermsChange}
//               />
//               I have read and agree to all the{" "}
//               <a href="/terms-and-policies" target="_blank">
//                 terms and policies
//               </a>
//               .
//             </label>
//             {termsError && <p className="error-message">{termsError}</p>}
//           </div>

//           <button
//             type="submit"
//             className="submit-button"
//             onClick={handleSubmit}
//             disabled={submissionStatus === "loading"}
//           >
//             {submissionStatus === "loading" ? "Submitting..." : "Submit"}
//           </button>
//         </>
//       )}
//     </div>
//   );
// }

// export default ListVehicleForm;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ListVehicleForm.css";

function ListVehicleForm({ user }) {
  const navigate = useNavigate();
  const [vehicleDetails, setVehicleDetails] = useState({
    ownerName: "",
    vehicleName: "",
    carType: "",
    gearType: "",
    seatNumbers: "",
    airCondition: "",
    vehicleNumber: "",
    perDayRate: "",
    rentalType: "",
    phoneNumber: "",
    vehicleFrontImage: null,
    vehicleBackImage: null,
    interiorImage: null,
    bluebookDocument: null,
    insuranceDocument: null,
    status: "Pending",
  });
  const [imagePreviews, setImagePreviews] = useState({
    vehicleFrontImage: null,
    vehicleBackImage: null,
    interiorImage: null,
    bluebookDocument: null,
    insuranceDocument: null,
  });
  const [errors, setErrors] = useState({});
  const [uploadErrors, setUploadErrors] = useState({});
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [termsError, setTermsError] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setVehicleDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors((prevState) => ({ ...prevState, [name]: "" }));
  };

  const handleImageChange = (event) => {
    const { name, files } = event.target;
    if (files && files[0]) {
      const allowedTypes = [
        "image/jpeg",
        "image/png",
        "image/gif",
        "image/avif",
        "image/webp",
        "image/bmp",
        "image/svg",
        "application/pdf",
      ];
      if (!allowedTypes.includes(files[0].type)) {
        setUploadErrors((prevState) => ({
          ...prevState,
          [name]:
            "Invalid file type. Only JPG, PNG, GIF, AVIF and PDF are allowed.",
        }));
        setVehicleDetails((prevState) => ({ ...prevState, [name]: null }));
        setImagePreviews((prevState) => ({ ...prevState, [name]: null }));
        return;
      }
      if (files[0].size > 5 * 1024 * 1024) {
        setUploadErrors((prevState) => ({
          ...prevState,
          [name]: "File size too large. Maximum 5MB allowed.",
        }));
        setVehicleDetails((prevState) => ({ ...prevState, [name]: null }));
        setImagePreviews((prevState) => ({ ...prevState, [name]: null }));
        return;
      }
      setVehicleDetails((prevState) => ({
        ...prevState,
        [name]: files[0],
      }));
      setImagePreviews((prevState) => ({
        ...prevState,
        [name]: URL.createObjectURL(files[0]),
      }));
      setUploadErrors((prevState) => ({ ...prevState, [name]: "" }));
    } else {
      setVehicleDetails((prevState) => ({
        ...prevState,
        [name]: null,
      }));
      setImagePreviews((prevState) => ({
        ...prevState,
        [name]: null,
      }));
      setUploadErrors((prevState) => ({ ...prevState, [name]: "" }));
    }
  };

  const handleTermsChange = (event) => {
    setTermsAgreed(event.target.checked);
    setTermsError("");
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};
    if (!vehicleDetails.ownerName.trim()) {
      newErrors.ownerName = "Owner Name is required";
      isValid = false;
    }
    if (!vehicleDetails.vehicleName.trim()) {
      newErrors.vehicleName = "Vehicle Name is required";
      isValid = false;
    }
    if (!vehicleDetails.carType) {
      newErrors.carType = "Vehicle Type is required";
      isValid = false;
    }
    if (!vehicleDetails.gearType) {
      newErrors.gearType = "Gear Type is required";
      isValid = false;
    }
    if (!vehicleDetails.seatNumbers) {
      newErrors.seatNumbers = " getting Seat Numbers are required";
      isValid = false;
    } else if (
      isNaN(vehicleDetails.seatNumbers) ||
      parseInt(vehicleDetails.seatNumbers) <= 0
    ) {
      newErrors.seatNumbers = "Seat Numbers must be a positive number";
      isValid = false;
    }
    if (!vehicleDetails.perDayRate) {
      newErrors.perDayRate = "Per Day Rate is required";
      isValid = false;
    } else if (
      isNaN(vehicleDetails.perDayRate) ||
      parseFloat(vehicleDetails.perDayRate) < 0
    ) {
      newErrors.perDayRate = "Per Day Rate must be a non-negative number";
      isValid = false;
    }
    if (!vehicleDetails.rentalType) {
      newErrors.rentalType = "Rental Type is required";
      isValid = false;
    }
    if (!vehicleDetails.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone Number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(vehicleDetails.phoneNumber.trim())) {
      newErrors.phoneNumber = "Phone Number must be 10 digits";
      isValid = false;
    }
    if (!vehicleDetails.vehicleFrontImage) {
      newErrors.vehicleFrontImage = "Vehicle Front Image is required";
      isValid = false;
    }
    if (!vehicleDetails.bluebookDocument) {
      newErrors.bluebookDocument = "Blue Book Document is required";
      isValid = false;
    }
    if (!termsAgreed) {
      setTermsError("You must agree to the terms and policies.");
      isValid = false;
    }
    if (!user || !user.email) {
      newErrors.email = "User email is required. Please log in.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      setSubmissionStatus("loading");

      const formData = new FormData();
      formData.append("ownerName", vehicleDetails.ownerName);
      formData.append("vehicleName", vehicleDetails.vehicleName);
      formData.append("carType", vehicleDetails.carType);
      formData.append("gearType", vehicleDetails.gearType);
      formData.append("seatNumbers", vehicleDetails.seatNumbers);
      formData.append("airCondition", vehicleDetails.airCondition);
      formData.append("vehicleNumber", vehicleDetails.vehicleNumber);
      formData.append("perDayRate", vehicleDetails.perDayRate);
      formData.append("rentalType", vehicleDetails.rentalType);
      formData.append("phoneNumber", vehicleDetails.phoneNumber);
      formData.append("status", vehicleDetails.status);
      formData.append("email", user ? user.email : "");

      if (vehicleDetails.vehicleFrontImage) {
        formData.append("vehicleFrontImage", vehicleDetails.vehicleFrontImage);
      }
      if (vehicleDetails.vehicleBackImage) {
        formData.append("vehicleBackImage", vehicleDetails.vehicleBackImage);
      }
      if (vehicleDetails.interiorImage) {
        formData.append("interiorImage", vehicleDetails.interiorImage);
      }
      if (vehicleDetails.bluebookDocument) {
        formData.append("bluebookDocument", vehicleDetails.bluebookDocument);
      }
      if (vehicleDetails.insuranceDocument) {
        formData.append("insuranceDocument", vehicleDetails.insuranceDocument);
      }

      try {
        const response = await fetch(
          "http://localhost:3000/api/vehicles/addVehicle",
          {
            method: "POST",
            body: formData,
          }
        );

        const result = await response.json();

        if (response.ok) {
          setSubmissionStatus("success");
          setTimeout(() => navigate("/drifty"), 2000);
        } else {
          setSubmissionStatus("error");
          setErrors({ server: result.message || "Failed to submit the form" });
          setTimeout(() => setSubmissionStatus(null), 3000);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setSubmissionStatus("error");
        setErrors({ server: "Network error. Please try again later." });
        setTimeout(() => setSubmissionStatus(null), 3000);
      }
    } else {
      console.log("Form has errors. Please correct them.");
      setSubmissionStatus("error");
      setTimeout(() => setSubmissionStatus(null), 3000);
    }
  };

  const handleGoToHomepage = () => {
    navigate("/profile");
  };

  return (
    <div className="list-vehicle-form-container">
      <div className="form-header">
        <h2>Welcome, {user ? user.name : "Guest"}</h2>
        <p className="form-date">
          {new Date().toLocaleDateString("en-US", {
            weekday: "short",
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </p>
      </div>

      {submissionStatus === "success" && (
        <div className="submission-message success">
          Submitted Successfully!
          <button
            type="button"
            onClick={() => navigate("/drifty")}
            className="homepage-button"
          >
            Go to My Vehicles
          </button>
        </div>
      )}

      {submissionStatus === "error" && (
        <div className="submission-message error">
          Please correct the form errors.
        </div>
      )}

      {errors.server && (
        <div className="submission-message error">{errors.server}</div>
      )}

      {errors.email && (
        <div className="submission-message error">{errors.email}</div>
      )}

      {submissionStatus !== "success" && (
        <>
          <div className="form-section">
            <h3>Car Details</h3>
            <p className="section-description">
              As your Gig storefront, your{" "}
              <strong>title is the most important place</strong> to include
              keywords that buyers would likely use to search for a service like
              yours.
            </p>
            <div className="form-group">
              <label htmlFor="ownerName">Owner Name</label>
              <input
                type="text"
                id="ownerName"
                name="ownerName"
                value={vehicleDetails.ownerName}
                onChange={handleInputChange}
              />
              {errors.ownerName && (
                <p className="error-message">{errors.ownerName}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="vehicleName">Vehicle Name</label>
              <input
                type="text"
                id="vehicleName"
                name="vehicleName"
                value={vehicleDetails.vehicleName}
                onChange={handleInputChange}
              />
              {errors.vehicleName && (
                <p className="error-message">{errors.vehicleName}</p>
              )}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="carType">Type</label>
                <select
                  id="carType"
                  name="carType"
                  value={vehicleDetails.carType}
                  onChange={handleInputChange}
                >
                  <option value="">Select Type</option>
                  <option value="sedan">Sedan</option>
                  <option value="suv">SUV</option>
                  <option value="miniVan">Mini Van</option>
                  <option value="miniVanEv">Mini Van EV</option>
                </select>
                {errors.carType && (
                  <p className="error-message">{errors.carType}</p>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="gearType">Gear Type</label>
                <select
                  id="gearType"
                  name="gearType"
                  value={vehicleDetails.gearType}
                  onChange={handleInputChange}
                >
                  <option value="">Select Gear Type</option>
                  <option value="manual">Manual</option>
                  <option value="automatic">Automatic</option>
                </select>
                {errors.gearType && (
                  <p className="error-message">{errors.gearType}</p>
                )}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="seatNumbers">Seat Numbers</label>
                <input
                  type="number"
                  id="seatNumbers"
                  name="seatNumbers"
                  value={vehicleDetails.seatNumbers}
                  onChange={handleInputChange}
                />
                {errors.seatNumbers && (
                  <p className="error-message">{errors.seatNumbers}</p>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="airCondition">Air Condition</label>
                <select
                  id="airCondition"
                  name="airCondition"
                  value={vehicleDetails.airCondition}
                  onChange={handleInputChange}
                >
                  <option value="">Select Option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="vehicleNumber">Vehicle Number</label>
                <input
                  type="text"
                  id="vehicleNumber"
                  name="vehicleNumber"
                  value={vehicleDetails.vehicleNumber}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="perDayRate">Per Day Rate</label>
                <input
                  type="number"
                  id="perDayRate"
                  name="perDayRate"
                  value={vehicleDetails.perDayRate}
                  onChange={handleInputChange}
                  min="0"
                />
                {errors.perDayRate && (
                  <p className="error-message">{errors.perDayRate}</p>
                )}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="rentalType">Rental Type</label>
              <select
                id="rentalType"
                name="rentalType"
                value={vehicleDetails.rentalType}
                onChange={handleInputChange}
              >
                <option value="">Select Rental Type</option>
                <option value="withDriver">With Driver</option>
                <option value="withoutDriver">Without Driver</option>
                <option value="Both">Both</option>
              </select>
              {errors.rentalType && (
                <p className="error-message">{errors.rentalType}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={vehicleDetails.phoneNumber}
                onChange={handleInputChange}
              />
              {errors.phoneNumber && (
                <p className="error-message">{errors.phoneNumber}</p>
              )}
            </div>
          </div>

          <div className="form-section">
            <h3>Vehicle Documents & Images</h3>
            <div className="form-group">
              <label htmlFor="vehicleFrontImage">Vehicle Front Image</label>
              <input
                type="file"
                id="vehicleFrontImage"
                name="vehicleFrontImage"
                accept="image/*"
                onChange={handleImageChange}
              />
              {imagePreviews.vehicleFrontImage && (
                <img
                  src={imagePreviews.vehicleFrontImage}
                  alt="Vehicle Front Preview"
                  className="image-preview"
                />
              )}
              {errors.vehicleFrontImage && (
                <p className="error-message">{errors.vehicleFrontImage}</p>
              )}
              {uploadErrors.vehicleFrontImage && (
                <p className="error-message">
                  {uploadErrors.vehicleFrontImage}
                </p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="vehicleBackImage">Vehicle Back Image</label>
              <input
                type="file"
                id="vehicleBackImage"
                name="vehicleBackImage"
                accept="image/*"
                onChange={handleImageChange}
              />
              {imagePreviews.vehicleBackImage && (
                <img
                  src={imagePreviews.vehicleBackImage}
                  alt="Vehicle Back Preview"
                  className="image-preview"
                />
              )}
              {uploadErrors.vehicleBackImage && (
                <p className="error-message">{uploadErrors.vehicleBackImage}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="interiorImage">Interior View</label>
              <input
                type="file"
                id="interiorImage"
                name="interiorImage"
                accept="image/*"
                onChange={handleImageChange}
              />
              {imagePreviews.interiorImage && (
                <img
                  src={imagePreviews.interiorImage}
                  alt="Interior Preview"
                  className="image-preview"
                />
              )}
              {uploadErrors.interiorImage && (
                <p className="error-message">{uploadErrors.interiorImage}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="bluebookDocument">Blue Book Document</label>
              <input
                type="file"
                id="bluebookDocument"
                name="bluebookDocument"
                accept="image/*, application/pdf"
                onChange={handleImageChange}
              />
              {imagePreviews.bluebookDocument &&
                (vehicleDetails.bluebookDocument &&
                vehicleDetails.bluebookDocument.type === "application/pdf" ? (
                  <p>PDF uploaded: {vehicleDetails.bluebookDocument.name}</p>
                ) : (
                  <img
                    src={imagePreviews.bluebookDocument}
                    alt="Blue Book Preview"
                    className="image-preview"
                  />
                ))}
              {errors.bluebookDocument && (
                <p className="error-message">{errors.bluebookDocument}</p>
              )}
              {uploadErrors.bluebookDocument && (
                <p className="error-message">{uploadErrors.bluebookDocument}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="insuranceDocument">Insurance Document</label>
              <input
                type="file"
                id="insuranceDocument"
                name="insuranceDocument"
                accept="image/*, application/pdf"
                onChange={handleImageChange}
              />
              {imagePreviews.insuranceDocument &&
                (vehicleDetails.insuranceDocument &&
                vehicleDetails.insuranceDocument.type === "application/pdf" ? (
                  <p>PDF uploaded: {vehicleDetails.insuranceDocument.name}</p>
                ) : (
                  <img
                    src={imagePreviews.insuranceDocument}
                    alt="Insurance Document Preview"
                    className="image-preview"
                  />
                ))}
              {uploadErrors.insuranceDocument && (
                <p className="error-message">
                  {uploadErrors.insuranceDocument}
                </p>
              )}
            </div>
          </div>

          <div className="form-notice">
            <p className="notice-text">
              <span className="notice-icon">ℹ️</span> Please note: It will take
              around 5-7 hrs to verify, you will be notified.
            </p>
          </div>

          <div className="form-agreement">
            <label>
              <input
                type="checkbox"
                checked={termsAgreed}
                onChange={handleTermsChange}
              />
              I have read and agree to all the{" "}
              <a href="/terms-and-policies" target="_blank">
                terms and policies
              </a>
              .
            </label>
            {termsError && <p className="error-message">{termsError}</p>}
          </div>

          <button
            type="submit"
            className="submit-button"
            onClick={handleSubmit}
            disabled={submissionStatus === "loading"}
          >
            {submissionStatus === "loading" ? "Submitting..." : "Submit"}
          </button>
        </>
      )}
    </div>
  );
}

export default ListVehicleForm;

