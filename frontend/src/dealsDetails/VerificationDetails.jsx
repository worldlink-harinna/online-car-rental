// import React from "react";
// import "./VerificationDetails.css";
// import {
//   ArrowLeft,
//   Car,
//   User,
//   FileText,
//   Calendar,
//   Clock,
//   DollarSign,
//   Settings,
//   MapPin,
//   Phone,
//   Mail,
//   Shield,
// } from "lucide-react";

// const VerificationDetails = ({ onClose, vehicle }) => {
//   const handleReject = () => {
//     // Handle rejection logic here
//     onClose();
//   };

//   const handleApprove = () => {
//     // Handle approval logic here
//     onClose();
//   };

//   return (
//     <div className="verification-details-overlay">
//       <div className="verification-details-container">
//         <div className="verification-header">
//           <button className="back-button" onClick={onClose}>
//             <ArrowLeft size={20} />
//             <span>Back</span>
//           </button>
//           <h2>Vehicle #{vehicle?.id}</h2>
//         </div>

//         <div className="verification-content">
//           <div className="details-section">
//             <div className="vehicle-details section-card">
//               <div className="section-header">
//                 <Car size={20} />
//                 <h3>Vehicle Details</h3>
//               </div>
//               <div className="details-grid">
//                 <div className="detail-item">
//                   <label>Make & Model</label>
//                   <span>Toyota Camry</span>
//                 </div>
//                 <div className="detail-item">
//                   <label>Vehicle Number</label>
//                   <span>TYC-4578</span>
//                 </div>
//                 <div className="detail-item">
//                   <label>Type</label>
//                   <span>Sedan</span>
//                 </div>
//                 <div className="detail-item">
//                   <label>Year</label>
//                   <span>2024</span>
//                 </div>
//                 <div className="detail-item">
//                   <label>Transmission</label>
//                   <span>Automatic</span>
//                 </div>
//                 <div className="detail-item">
//                   <label>AC Condition</label>
//                   <span className="status-tag success">Yes</span>
//                 </div>
//                 <div className="detail-item">
//                   <label>Seats</label>
//                   <span>5</span>
//                 </div>
//                 <div className="detail-item">
//                   <label>Booking Type</label>
//                   <span>Both (With / Without Driver)</span>
//                 </div>
//                 <div className="detail-item full-width">
//                   <label>Per-day Rate</label>
//                   <span className="price-tag">$65.00</span>
//                 </div>
//               </div>
//             </div>

//             <div className="owner-details section-card">
//               <div className="section-header">
//                 <User size={20} />
//                 <h3>Owner Information</h3>
//               </div>
//               <div className="details-grid">
//                 <div className="detail-item">
//                   <label>Full Name</label>
//                   <span>Pravesh</span>
//                 </div>
//                 <div className="detail-item">
//                   <label>Email Address</label>
//                   <span className="email">praveshlama@email.com</span>
//                 </div>
//                 <div className="detail-item">
//                   <label>Phone Number</label>
//                   <span>+977 9840815555</span>
//                 </div>
//                 <div className="detail-item">
//                   <label>Member Since</label>
//                   <span>07 Jun 2022</span>
//                 </div>
//                 <div className="detail-item">
//                   <label>ID Verified</label>
//                   <span className="status-tag success">Yes</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="documents-section section-card">
//             <div className="section-header">
//               <FileText size={20} />
//               <h3>Vehicle Documents & Images</h3>
//             </div>
//             <div className="documents-grid">
//               <div className="document-item">
//                 <div className="document-header">
//                   <Car size={16} />
//                   <h4>Vehicle Front View</h4>
//                 </div>
//                 <div className="document-preview">
//                   <img src="/vehicle-front.jpg" alt="Vehicle Front" />
//                   <span className="upload-date">Uploaded on May 1, 2025</span>
//                 </div>
//               </div>
//               <div className="document-item">
//                 <div className="document-header">
//                   <Car size={16} />
//                   <h4>Vehicle Back View</h4>
//                 </div>
//                 <div className="document-preview">
//                   <img src="/vehicle-back.jpg" alt="Vehicle Back" />
//                   <span className="upload-date">Uploaded on May 1, 2025</span>
//                 </div>
//               </div>
//               <div className="document-item">
//                 <div className="document-header">
//                   <Car size={16} />
//                   <h4>Interior View</h4>
//                 </div>
//                 <div className="document-preview">
//                   <img src="/interior.jpg" alt="Interior" />
//                   <span className="upload-date">Uploaded on May 1, 2025</span>
//                 </div>
//               </div>
//               <div className="document-item">
//                 <div className="document-header">
//                   <FileText size={16} />
//                   <h4>Blue Book Document</h4>
//                 </div>
//                 <div className="document-preview">
//                   <img src="/bluebook.jpg" alt="Blue Book" />
//                   <span className="upload-date">Expires on Dec 31, 2025</span>
//                 </div>
//               </div>
//               <div className="document-item">
//                 <div className="document-header">
//                   <Shield size={16} />
//                   <h4>Insurance Document</h4>
//                 </div>
//                 <div className="document-preview">
//                   <img src="/insurance.jpg" alt="Insurance" />
//                   <span className="upload-date">Expires on Dec 31, 2025</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="verification-actions">
//             <button className="reject-button" onClick={handleReject}>
//               <span className="button-icon">✕</span>
//               Reject Verification
//             </button>
//             <button className="approve-button" onClick={handleApprove}>
//               <span className="button-icon">✓</span>
//               Approve Verification
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VerificationDetails;

// import React from "react";
// import "./VerificationDetails.css";
// import { ArrowLeft, Car, User, FileText, Shield } from "lucide-react";

// const VerificationDetails = ({ onClose, vehicle }) => {
//   if (!vehicle) return null;

//   const handleReject = () => {
//     // Reject logic here
//     onClose();
//   };

//   const handleApprove = () => {
//     // Approve logic here
//     onClose();
//   };

//   // Helper to show N/A for empty or missing fields
//   const showOrNA = (value) => (value && value !== "" ? value : "N/A");

//   // Capitalize first letter for type or gearType
//   const capitalize = (str) =>
//     str ? str.charAt(0).toUpperCase() + str.slice(1) : "N/A";

//   // Check if AC is yes (case insensitive)
//   const acCondition = vehicle.airCondition?.toLowerCase() === "yes";

//   // Build image paths, fallback to placeholders
//   const baseImagePath = "/"; // adjust if needed
//   const vehicleFrontImg = vehicle.vehicleFrontImage
//     ? baseImagePath + vehicle.vehicleFrontImage
//     : "/vehicle-front.jpg";
//   const vehicleBackImg = vehicle.vehicleBackImage
//     ? baseImagePath + vehicle.vehicleBackImage
//     : "/vehicle-back.jpg";
//   const interiorImg = vehicle.interiorImage
//     ? baseImagePath + vehicle.interiorImage
//     : "/interior.jpg";
//   const bluebookDoc = vehicle.bluebookDocument
//     ? baseImagePath + vehicle.bluebookDocument
//     : "/bluebook.jpg";
//   const insuranceDoc = vehicle.insuranceDocument
//     ? baseImagePath + vehicle.insuranceDocument
//     : "/insurance.jpg";

//   return (
//     <div className="verification-details-overlay">
//       <div className="verification-details-container">
//         <div className="verification-header">
//           <button className="back-button" onClick={onClose}>
//             <ArrowLeft size={20} />
//             <span>Back</span>
//           </button>
//           <h2>Vehicle #{vehicle.id}</h2>
//         </div>

//         <div className="verification-content">
//           <div className="details-section">
//             <div className="vehicle-details section-card">
//               <div className="section-header">
//                 <Car size={20} />
//                 <h3>Vehicle Details</h3>
//               </div>
//               <div className="details-grid">
//                 <div className="detail-item">
//                   <label>Make & Model</label>
//                   <span>{showOrNA(vehicle.vehicleName)}</span>
//                 </div>
//                 <div className="detail-item">
//                   <label>Vehicle Number</label>
//                   <span>{showOrNA(vehicle.vehicleNumber)}</span>
//                 </div>
//                 <div className="detail-item">
//                   <label>Type</label>
//                   <span>{capitalize(vehicle.type)}</span>
//                 </div>
//                 <div className="detail-item">
//                   <label>Transmission</label>
//                   <span>{capitalize(vehicle.gearType)}</span>
//                 </div>
//                 <div className="detail-item">
//                   <label>AC Condition</label>
//                   <span
//                     className={`status-tag ${acCondition ? "success" : "fail"}`}
//                   >
//                     {acCondition ? "Yes" : "No"}
//                   </span>
//                 </div>
//                 <div className="detail-item">
//                   <label>Seats</label>
//                   <span>{vehicle.seatNumbers || "N/A"}</span>
//                 </div>
//                 <div className="detail-item">
//                   <label>Booking Type</label>
//                   <span>{showOrNA(vehicle.rentalType)}</span>
//                 </div>
//                 <div className="detail-item full-width">
//                   <label>Per-day Rate</label>
//                   <span className="price-tag">
//                     $
//                     {vehicle.perDayRate
//                       ? Number(vehicle.perDayRate).toFixed(2)
//                       : "N/A"}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div className="owner-details section-card">
//               <div className="section-header">
//                 <User size={20} />
//                 <h3>Owner Information</h3>
//               </div>
//               <div className="details-grid">
//                 <div className="detail-item">
//                   <label>Full Name</label>
//                   <span>{showOrNA(vehicle.ownerName)}</span>
//                 </div>
//                 <div className="detail-item">
//                   <label>Phone Number</label>
//                   <span>{showOrNA(vehicle.phoneNumber)}</span>
//                 </div>
//                 {/* Email & Member Since not in your backend data, so show N/A */}
//                 <div className="detail-item">
//                   <label>Email Address</label>
//                   <span className="email">N/A</span>
//                 </div>
//                 <div className="detail-item">
//                   <label>Member Since</label>
//                   <span>N/A</span>
//                 </div>
//                 {/* No ID verified info, so default to N/A */}
//                 <div className="detail-item">
//                   <label>ID Verified</label>
//                   <span className="status-tag fail">N/A</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="documents-section section-card">
//             <div className="section-header">
//               <FileText size={20} />
//               <h3>Vehicle Documents & Images</h3>
//             </div>
//             <div className="documents-grid">
//               <div className="document-item">
//                 <div className="document-header">
//                   <Car size={16} />
//                   <h4>Vehicle Front View</h4>
//                 </div>
//                 <div className="document-preview">
//                   <img src={vehicleFrontImg} alt="Vehicle Front" />
//                   <span className="upload-date">
//                     Uploaded on{" "}
//                     {new Date(vehicle.createdAt).toLocaleDateString()}
//                   </span>
//                 </div>
//               </div>
//               <div className="document-item">
//                 <div className="document-header">
//                   <Car size={16} />
//                   <h4>Vehicle Back View</h4>
//                 </div>
//                 <div className="document-preview">
//                   <img src={vehicleBackImg} alt="Vehicle Back" />
//                   <span className="upload-date">
//                     Uploaded on{" "}
//                     {new Date(vehicle.createdAt).toLocaleDateString()}
//                   </span>
//                 </div>
//               </div>
//               <div className="document-item">
//                 <div className="document-header">
//                   <Car size={16} />
//                   <h4>Interior View</h4>
//                 </div>
//                 <div className="document-preview">
//                   <img src={interiorImg} alt="Interior" />
//                   <span className="upload-date">
//                     Uploaded on{" "}
//                     {new Date(vehicle.createdAt).toLocaleDateString()}
//                   </span>
//                 </div>
//               </div>
//               <div className="document-item">
//                 <div className="document-header">
//                   <FileText size={16} />
//                   <h4>Blue Book Document</h4>
//                 </div>
//                 <div className="document-preview">
//                   <img src={bluebookDoc} alt="Blue Book" />
//                   <span className="upload-date">Expires on N/A</span>
//                 </div>
//               </div>
//               <div className="document-item">
//                 <div className="document-header">
//                   <Shield size={16} />
//                   <h4>Insurance Document</h4>
//                 </div>
//                 <div className="document-preview">
//                   <img src={insuranceDoc} alt="Insurance" />
//                   <span className="upload-date">Expires on N/A</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="verification-actions">
//             <button className="reject-button" onClick={handleReject}>
//               <span className="button-icon">✕</span>
//               Reject Verification
//             </button>
//             <button className="approve-button" onClick={handleApprove}>
//               <span className="button-icon">✓</span>
//               Approve Verification
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VerificationDetails;
// import React from "react";
// import "./VerificationDetails.css";
// import { ArrowLeft, Car, User, FileText, Shield } from "lucide-react";

// const VerificationDetails = ({ onClose, vehicle }) => {
//   if (!vehicle) return null;

//   const handleReject = () => {
//     // Reject logic here
//     onClose();
//   };

//   const handleApprove = () => {
//     // Approve logic here
//     onClose();
//   };

//   // Helper to show N/A for empty or missing fields
//   const showOrNA = (value) => (value && value !== "" ? value : "N/A");

//   // Capitalize first letter for type or gearType
//   const capitalize = (str) =>
//     str ? str.charAt(0).toUpperCase() + str.slice(1) : "N/A";

//   // Check if AC is yes (case insensitive)
//   const acCondition = vehicle.airCondition?.toLowerCase() === "yes";

//   // Backend base URL for images - adjust if your backend URL differs
//   const BASE_IMAGE_URL = "http://localhost:3000/uploads/";

//   // Build image paths, fallback to placeholders only if no filename exists
//   const vehicleFrontImg = vehicle.vehicleFrontImage
//     ? BASE_IMAGE_URL + vehicle.vehicleFrontImage
//     : "/vehicle-front.jpg";
//   const vehicleBackImg = vehicle.vehicleBackImage
//     ? BASE_IMAGE_URL + vehicle.vehicleBackImage
//     : "/vehicle-back.jpg";
//   const interiorImg = vehicle.interiorImage
//     ? BASE_IMAGE_URL + vehicle.interiorImage
//     : "/interior.jpg";
//   const bluebookDoc = vehicle.bluebookDocument
//     ? BASE_IMAGE_URL + vehicle.bluebookDocument
//     : "/bluebook.jpg";
//   const insuranceDoc = vehicle.insuranceDocument
//     ? BASE_IMAGE_URL + vehicle.insuranceDocument
//     : "/insurance.jpg";

//   return (
//     <div className="verification-details-overlay">
//       <div className="verification-details-container">
//         <div className="verification-header">
//           <button className="back-button" onClick={onClose}>
//             <ArrowLeft size={20} />
//             <span>Back</span>
//           </button>
//           <h2>Vehicle #{vehicle.id || vehicle._id}</h2>
//         </div>

//         <div className="verification-content">
//           <div className="details-section">
//             <div className="vehicle-details section-card">
//               <div className="section-header">
//                 <Car size={20} />
//                 <h3>Vehicle Details</h3>
//               </div>
//               <div className="details-grid">
//                 <div className="detail-item">
//                   <label>Make & Model</label>
//                   <span>{showOrNA(vehicle.vehicleName)}</span>
//                 </div>
//                 <div className="detail-item">
//                   <label>Vehicle Number</label>
//                   <span>{showOrNA(vehicle.vehicleNumber)}</span>
//                 </div>
//                 <div className="detail-item">
//                   <label>Type</label>
//                   <span>{capitalize(vehicle.type)}</span>
//                 </div>
//                 <div className="detail-item">
//                   <label>Transmission</label>
//                   <span>{capitalize(vehicle.gearType)}</span>
//                 </div>
//                 <div className="detail-item">
//                   <label>AC Condition</label>
//                   <span
//                     className={`status-tag ${acCondition ? "success" : "fail"}`}
//                   >
//                     {acCondition ? "Yes" : "No"}
//                   </span>
//                 </div>
//                 <div className="detail-item">
//                   <label>Seats</label>
//                   <span>{vehicle.seatNumbers || "N/A"}</span>
//                 </div>
//                 <div className="detail-item">
//                   <label>Booking Type</label>
//                   <span>{showOrNA(vehicle.rentalType)}</span>
//                 </div>
//                 <div className="detail-item full-width">
//                   <label>Per-day Rate</label>
//                   <span className="price-tag">
//                     $
//                     {vehicle.perDayRate
//                       ? Number(vehicle.perDayRate).toFixed(2)
//                       : "N/A"}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div className="owner-details section-card">
//               <div className="section-header">
//                 <User size={20} />
//                 <h3>Owner Information</h3>
//               </div>
//               <div className="details-grid">
//                 <div className="detail-item">
//                   <label>Full Name</label>
//                   <span>{showOrNA(vehicle.ownerName)}</span>
//                 </div>
//                 <div className="detail-item">
//                   <label>Phone Number</label>
//                   <span>{showOrNA(vehicle.phoneNumber)}</span>
//                 </div>
//                 <div className="detail-item">
//                   <label>Email Address</label>
//                   <span className="email">N/A</span>
//                 </div>
//                 <div className="detail-item">
//                   <label>Member Since</label>
//                   <span>N/A</span>
//                 </div>
//                 <div className="detail-item">
//                   <label>ID Verified</label>
//                   <span className="status-tag fail">N/A</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="documents-section section-card">
//             <div className="section-header">
//               <FileText size={20} />
//               <h3>Vehicle Documents & Images</h3>
//             </div>
//             <div className="documents-grid">
//               <div className="document-item">
//                 <div className="document-header">
//                   <Car size={16} />
//                   <h4>Vehicle Front View</h4>
//                 </div>
//                 <div className="document-preview">
//                   <img src={vehicleFrontImg} alt="Vehicle Front" />
//                   <span className="upload-date">
//                     Uploaded on{" "}
//                     {vehicle.createdAt
//                       ? new Date(vehicle.createdAt).toLocaleDateString()
//                       : "N/A"}
//                   </span>
//                 </div>
//               </div>
//               <div className="document-item">
//                 <div className="document-header">
//                   <Car size={16} />
//                   <h4>Vehicle Back View</h4>
//                 </div>
//                 <div className="document-preview">
//                   <img src={vehicleBackImg} alt="Vehicle Back" />
//                   <span className="upload-date">
//                     Uploaded on{" "}
//                     {vehicle.createdAt
//                       ? new Date(vehicle.createdAt).toLocaleDateString()
//                       : "N/A"}
//                   </span>
//                 </div>
//               </div>
//               <div className="document-item">
//                 <div className="document-header">
//                   <Car size={16} />
//                   <h4>Interior View</h4>
//                 </div>
//                 <div className="document-preview">
//                   <img src={interiorImg} alt="Interior" />
//                   <span className="upload-date">
//                     Uploaded on{" "}
//                     {vehicle.createdAt
//                       ? new Date(vehicle.createdAt).toLocaleDateString()
//                       : "N/A"}
//                   </span>
//                 </div>
//               </div>
//               <div className="document-item">
//                 <div className="document-header">
//                   <FileText size={16} />
//                   <h4>Blue Book Document</h4>
//                 </div>
//                 <div className="document-preview">
//                   <img src={bluebookDoc} alt="Blue Book" />
//                   <span className="upload-date">Expires on N/A</span>
//                 </div>
//               </div>
//               <div className="document-item">
//                 <div className="document-header">
//                   <Shield size={16} />
//                   <h4>Insurance Document</h4>
//                 </div>
//                 <div className="document-preview">
//                   <img src={insuranceDoc} alt="Insurance" />
//                   <span className="upload-date">Expires on N/A</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="verification-actions">
//             <button className="reject-button" onClick={handleReject}>
//               <span className="button-icon">✕</span>
//               Reject Verification
//             </button>
//             <button className="approve-button" onClick={handleApprove}>
//               <span className="button-icon">✓</span>
//               Approve Verification
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VerificationDetails;
import React from "react";
import "./VerificationDetails.css";
import { ArrowLeft, Car, User, FileText, Shield } from "lucide-react";

const VerificationDetails = ({ onClose, vehicle, onUpdateStatus }) => {
  if (!vehicle) return null;

  // Helper to show N/A for empty or missing fields
  const showOrNA = (value) => (value && value !== "" ? value : "N/A");

  // Capitalize first letter for type or gearType
  const capitalize = (str) =>
    str ? str.charAt(0).toUpperCase() + str.slice(1) : "N/A";

  // Check if AC is yes (case insensitive)
  const acCondition = vehicle.airCondition?.toLowerCase() === "yes";

  // Backend base URL for images - adjust if your backend URL differs
  const BASE_IMAGE_URL = "http://localhost:3000/uploads/";

  // Build image paths, fallback to placeholders if no filename exists
  const vehicleFrontImg = vehicle.vehicleFrontImage
    ? BASE_IMAGE_URL + vehicle.vehicleFrontImage
    : "/vehicle-front.jpg";
  const vehicleBackImg = vehicle.vehicleBackImage
    ? BASE_IMAGE_URL + vehicle.vehicleBackImage
    : "/vehicle-back.jpg";
  const interiorImg = vehicle.interiorImage
    ? BASE_IMAGE_URL + vehicle.interiorImage
    : "/interior.jpg";
  const bluebookDoc = vehicle.bluebookDocument
    ? BASE_IMAGE_URL + vehicle.bluebookDocument
    : "/bluebook.jpg";
  const insuranceDoc = vehicle.insuranceDocument
    ? BASE_IMAGE_URL + vehicle.insuranceDocument
    : "/insurance.jpg";

  // Handlers call onUpdateStatus then close modal
  const handleReject = () => {
    if (typeof onUpdateStatus === "function") {
      onUpdateStatus(vehicle._id, "Rejected");
    }
    onClose();
  };

  const handleApprove = () => {
    if (typeof onUpdateStatus === "function") {
      onUpdateStatus(vehicle._id, "Approved");
    }
    onClose();
  };

  return (
    <div className="verification-details-overlay">
      <div className="verification-details-container">
        <div className="verification-header">
          <button className="back-button" onClick={onClose}>
            <ArrowLeft size={20} />
            <span>Back</span>
          </button>
          <h2>Vehicle #{vehicle.id || vehicle._id}</h2>
        </div>

        <div className="verification-content">
          <div className="details-section">
            <div className="vehicle-details section-card">
              <div className="section-header">
                <Car size={20} />
                <h3>Vehicle Details</h3>
              </div>
              <div className="details-grid">
                <div className="detail-item">
                  <label>Make & Model</label>
                  <span>{showOrNA(vehicle.vehicleName)}</span>
                </div>
                <div className="detail-item">
                  <label>Vehicle Number</label>
                  <span>{showOrNA(vehicle.vehicleNumber)}</span>
                </div>
                <div className="detail-item">
                  <label>Type</label>
                  <span>{capitalize(vehicle.type)}</span>
                </div>
                <div className="detail-item">
                  <label>Transmission</label>
                  <span>{capitalize(vehicle.gearType)}</span>
                </div>
                <div className="detail-item">
                  <label>AC Condition</label>
                  <span
                    className={`status-tag ${acCondition ? "success" : "fail"}`}
                  >
                    {acCondition ? "Yes" : "No"}
                  </span>
                </div>
                <div className="detail-item">
                  <label>Seats</label>
                  <span>{vehicle.seatNumbers || "N/A"}</span>
                </div>
                <div className="detail-item">
                  <label>Booking Type</label>
                  <span>{showOrNA(vehicle.rentalType)}</span>
                </div>
                <div className="detail-item full-width">
                  <label>Per-day Rate</label>
                  <span className="price-tag">
                    $
                    {vehicle.perDayRate
                      ? Number(vehicle.perDayRate).toFixed(2)
                      : "N/A"}
                  </span>
                </div>
              </div>
            </div>

            <div className="owner-details section-card">
              <div className="section-header">
                <User size={20} />
                <h3>Owner Information</h3>
              </div>
              <div className="details-grid">
                <div className="detail-item">
                  <label>Full Name</label>
                  <span>{showOrNA(vehicle.ownerName)}</span>
                </div>
                <div className="detail-item">
                  <label>Phone Number</label>
                  <span>{showOrNA(vehicle.phoneNumber)}</span>
                </div>
                <div className="detail-item">
                  <label>Email Address</label>
                  <span className="email">N/A</span>
                </div>
                <div className="detail-item">
                  <label>Member Since</label>
                  <span>N/A</span>
                </div>
                <div className="detail-item">
                  <label>ID Verified</label>
                  <span className="status-tag fail">N/A</span>
                </div>
              </div>
            </div>
          </div>

          <div className="documents-section section-card">
            <div className="section-header">
              <FileText size={20} />
              <h3>Vehicle Documents & Images</h3>
            </div>
            <div className="documents-grid">
              <div className="document-item">
                <div className="document-header">
                  <Car size={16} />
                  <h4>Vehicle Front View</h4>
                </div>
                <div className="document-preview">
                  <img src={vehicleFrontImg} alt="Vehicle Front" />
                  <span className="upload-date">
                    Uploaded on{" "}
                    {vehicle.createdAt
                      ? new Date(vehicle.createdAt).toLocaleDateString()
                      : "N/A"}
                  </span>
                </div>
              </div>
              <div className="document-item">
                <div className="document-header">
                  <Car size={16} />
                  <h4>Vehicle Back View</h4>
                </div>
                <div className="document-preview">
                  <img src={vehicleBackImg} alt="Vehicle Back" />
                  <span className="upload-date">
                    Uploaded on{" "}
                    {vehicle.createdAt
                      ? new Date(vehicle.createdAt).toLocaleDateString()
                      : "N/A"}
                  </span>
                </div>
              </div>
              <div className="document-item">
                <div className="document-header">
                  <Car size={16} />
                  <h4>Interior View</h4>
                </div>
                <div className="document-preview">
                  <img src={interiorImg} alt="Interior" />
                  <span className="upload-date">
                    Uploaded on{" "}
                    {vehicle.createdAt
                      ? new Date(vehicle.createdAt).toLocaleDateString()
                      : "N/A"}
                  </span>
                </div>
              </div>
              <div className="document-item">
                <div className="document-header">
                  <FileText size={16} />
                  <h4>Blue Book Document</h4>
                </div>
                <div className="document-preview">
                  <img src={bluebookDoc} alt="Blue Book" />
                  <span className="upload-date">Expires on N/A</span>
                </div>
              </div>
              <div className="document-item">
                <div className="document-header">
                  <Shield size={16} />
                  <h4>Insurance Document</h4>
                </div>
                <div className="document-preview">
                  <img src={insuranceDoc} alt="Insurance" />
                  <span className="upload-date">Expires on N/A</span>
                </div>
              </div>
            </div>
          </div>

          <div className="verification-actions">
            <button className="reject-button" onClick={handleReject}>
              <span className="button-icon">✕</span>
              Reject Verification
            </button>
            <button className="approve-button" onClick={handleApprove}>
              <span className="button-icon">✓</span>
              Approve Verification
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationDetails;
