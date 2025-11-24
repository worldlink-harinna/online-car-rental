// // // src/component/dashboard/DriftyPage.jsx
// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import './DriftyPage.css';

// // function DriftyPage() {
// //   const navigate = useNavigate();
// //   const [vehicles, setVehicles] = useState([
// //     {
// //       id: 1,
// //       vehicleName: 'Toyota',
// //       type: 'Sedan',
// //       seatNumbers: 5,
// //       gearType: 'Automatic',
// //       airCondition: 'Yes',
// //       perDayRate: 'Rs 3,000',
// //       vehicleNumber: 'BA1354',
// //       phoneNumber: '9840999999',
// //       rentalType: 'With Driver',
// //       images: { vehicleFrontImage: '...', vehicleBackImage: '...', interiorImage: '...' },
// //       status: 'Pending',
// //     },
// //     // ... more initial vehicles if needed
// //   ]);
// //   const [activeTab, setActiveTab] = useState('bookings'); // Set 'bookings' as default active

// //   const handleAddCarClick = () => {
// //     navigate('/list-your-vehicles');
// //   };

// //   const handleBackToDashboard = () => {
// //     navigate('/profile');
// //   };

// //   const handleViewClick = (vehicle) => {
// //     console.log('View Vehicle Details:', vehicle);
// //   };

// //   const handleBookingsClick = () => {
// //     setActiveTab('bookings');
// //     console.log('View All Bookings');
// //   };

// //   const handleDocumentsClick = () => {
// //     setActiveTab('documents');
// //     console.log('View All Documents');
// //   };

// //   const handleEarningsClick = () => {
// //     setActiveTab('earnings');
// //     console.log('View All Earnings');
// //   };

// //   return (
// //     <div className="drifty-page-container">
// //       <div className="drifty-header">
// //         <div className="back-to-dashboard-icon" onClick={handleBackToDashboard}>
// //           &#8592; {/* Unicode arrow for back */}
// //         </div>
// //         <h2>My Vehicles</h2>
// //       </div>

// //       <div className="dashboard-navigation">
// //         <button className="nav-button active">My Vehicles</button>
// //         {/* Add other top-level navigation buttons if needed */}
// //       </div>

// //       <div className="dashboard-content">
// //         <div className="vehicle-actions-top">
// //           <button
// //             onClick={handleBookingsClick}
// //             className={activeTab === 'bookings' ? 'active' : ''}
// //           >
// //             Bookings
// //           </button>
// //           <button
// //             onClick={handleDocumentsClick}
// //             className={activeTab === 'documents' ? 'active' : ''}
// //           >
// //             Documents
// //           </button>
// //           <button
// //             onClick={handleEarningsClick}
// //             className={activeTab === 'earnings' ? 'active' : ''}
// //           >
// //             Earnings
// //           </button>
// //         </div>

// //         <table>
// //           <thead>
// //             <tr>
// //               <th>Photo</th>
// //               <th>Name</th>
// //               <th>Type</th>
// //               <th>Seats</th>
// //               <th>Gear-Type</th>
// //               <th>AC</th>
// //               <th>Rate/Day</th>
// //               <th>Car Number</th>
// //               <th>Phone Number</th>
// //               <th>Booking Type</th>
// //               <th>Driver Name</th>
// //               <th>Action</th>
// //               <th>Status</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {vehicles.map(vehicle => (
// //               <tr key={vehicle.id}>
// //                 <td>{vehicle.images?.vehicleFrontImage && <img src={vehicle.images.vehicleFrontImage} alt="Front" style={{ width: '50px', height: 'auto', borderRadius: '4px' }} />}</td>
// //                 <td>{vehicle.vehicleName}</td>
// //                 <td>{vehicle.type}</td>
// //                 <td>{vehicle.seatNumbers}</td>
// //                 <td>{vehicle.gearType}</td>
// //                 <td>{vehicle.airCondition}</td>
// //                 <td>{vehicle.perDayRate}</td>
// //                 <td>{vehicle.vehicleNumber}</td>
// //                 <td>{vehicle.phoneNumber}</td>
// //                 <td>{vehicle.rentalType}</td>
// //                 <td>{/* Add Driver Name if applicable */}</td>
// //                 <td><button onClick={() => handleViewClick(vehicle)}>View</button></td>
// //                 <td className={`status ${vehicle.status || 'Pending'}`}>{vehicle.status || 'Pending'}</td>
// //               </tr>
// //             ))}
// //             {vehicles.length === 0 && (
// //               <tr><td colSpan="13">No vehicles listed yet.</td></tr>
// //             )}
// //           </tbody>
// //         </table>

// //         <div className="add-car-section">
// //           <button onClick={handleAddCarClick}>Add Car</button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default DriftyPage;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./DriftyPage.css";

// function DriftyPage({ user }) {
//   const navigate = useNavigate();
//   const [vehicles, setVehicles] = useState([]);
//   const [activeTab, setActiveTab] = useState("bookings");

//   useEffect(() => {
//     if (user?.email) {
//       axios
//         .get(
//           `http://localhost:3000/api/vehicles?email=${encodeURIComponent(
//             user.email
//           )}`
//         )
//         .then((res) => setVehicles(res.data))
//         .catch((err) => console.error("Error fetching vehicles:", err));
//     }
//   }, [user]);
//   console.log(user?.email);
//   const handleAddCarClick = () => {
//     navigate("/list-your-vehicles");
//   };

//   const handleBackToDashboard = () => {
//     navigate("/profile");
//   };

//   const handleViewClick = (vehicle) => {
//     console.log("View Vehicle Details:", vehicle);
//   };

//   const handleBookingsClick = () => {
//     setActiveTab("bookings");
//   };

//   const handleDocumentsClick = () => {
//     setActiveTab("documents");
//   };

//   const handleEarningsClick = () => {
//     setActiveTab("earnings");
//   };

//   return (
//     <div className="drifty-page-container">
//       <div className="drifty-header">
//         <div className="back-to-dashboard-icon" onClick={handleBackToDashboard}>
//           &#8592;
//         </div>
//         <h2>My Vehicles</h2>
//       </div>

//       <div className="dashboard-navigation">
//         <button className="nav-button active">My Vehicles</button>
//       </div>

//       <div className="dashboard-content">
//         <div className="vehicle-actions-top">
//           <button
//             onClick={handleBookingsClick}
//             className={activeTab === "bookings" ? "active" : ""}
//           >
//             Bookings
//           </button>
//           <button
//             onClick={handleDocumentsClick}
//             className={activeTab === "documents" ? "active" : ""}
//           >
//             Documents
//           </button>
//           <button
//             onClick={handleEarningsClick}
//             className={activeTab === "earnings" ? "active" : ""}
//           >
//             Earnings
//           </button>
//         </div>

//         <table>
//           <thead>
//             <tr>
//               <th>Photo</th>
//               <th>Name</th>
//               <th>Type</th>
//               <th>Seats</th>
//               <th>Gear-Type</th>
//               <th>AC</th>
//               <th>Rate/Day</th>
//               <th>Car Number</th>
//               <th>Phone Number</th>
//               <th>Booking Type</th>
//               <th>Driver Name</th>
//               <th>Action</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {vehicles.length > 0 ? (
//               vehicles.map((vehicle) => (
//                 <tr key={vehicle._id}>
//                   <td>
//                     {vehicle.vehicleFrontImage && (
//                       <img
//                         src={`http://localhost:3000/uploads/${vehicle.vehicleFrontImage}`}
//                         alt="Front"
//                         style={{
//                           width: "50px",
//                           height: "auto",
//                           borderRadius: "4px",
//                         }}
//                       />
//                     )}
//                   </td>
//                   <td>{vehicle.vehicleName}</td>
//                   <td>{vehicle.type}</td>
//                   <td>{vehicle.seatNumbers}</td>
//                   <td>{vehicle.gearType}</td>
//                   <td>{vehicle.airCondition}</td>
//                   <td>Rs {vehicle.perDayRate}</td>
//                   <td>{vehicle.vehicleNumber}</td>
//                   <td>{vehicle.phoneNumber}</td>
//                   <td>{vehicle.rentalType}</td>
//                   <td>{vehicle.driverName || "-"}</td>
//                   <td>
//                     <button onClick={() => handleViewClick(vehicle)}>
//                       View
//                     </button>
//                   </td>
//                   <td className={`status ${vehicle.status || "Pending"}`}>
//                     {vehicle.status || "Pending"}
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="13">No vehicles listed yet.</td>
//               </tr>
//             )}
//           </tbody>
//         </table>

//         <div className="add-car-section">
//           <button onClick={handleAddCarClick}>Add Car</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DriftyPage;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./DriftyPage.css";

function DriftyPage({ user }) {
  const navigate = useNavigate();
  const [vehicles, setVehicles] = useState([]);
  const [activeTab, setActiveTab] = useState("bookings");

  useEffect(() => {
    if (user?.email) {
      axios
        .get(
          `http://localhost:3000/api/vehicles?email=${encodeURIComponent(
            user.email
          )}`
        )
        .then((res) => setVehicles(res.data))
        .catch((err) => console.error("Error fetching vehicles:", err));
    }
  }, [user]);

  const handleAddCarClick = () => {
    navigate("/list-your-vehicles");
  };

  const handleBackToDashboard = () => {
    navigate("/profile");
  };

  const handleViewClick = (vehicle) => {
    console.log("View Vehicle Details:", vehicle);
  };

  const handleBookingsClick = () => setActiveTab("bookings");
  const handleDocumentsClick = () => setActiveTab("documents");
  const handleEarningsClick = () => setActiveTab("earnings");

  return (
    <div className="drifty-page-container">
      <div className="drifty-header">
        <div className="back-to-dashboard-icon" onClick={handleBackToDashboard}>
          &#8592;
        </div>
        <h2>My Vehicles</h2>
      </div>

      <div className="dashboard-navigation">
        <button className="nav-button active">My Vehicles</button>
      </div>

      <div className="dashboard-content">
        <div className="vehicle-actions-top">
          <button
            onClick={handleBookingsClick}
            className={activeTab === "bookings" ? "active" : ""}
          >
            Bookings
          </button>
          <button
            onClick={handleDocumentsClick}
            className={activeTab === "documents" ? "active" : ""}
          >
            Documents
          </button>
          <button
            onClick={handleEarningsClick}
            className={activeTab === "earnings" ? "active" : ""}
          >
            Earnings
          </button>
        </div>

        {/* BOOKINGS TAB */}
        {activeTab === "bookings" && (
          <table>
            <thead>
              <tr>
                <th>Photo</th>
                <th>Name</th>
                <th>Type</th>
                <th>Seats</th>
                <th>Gear-Type</th>
                <th>AC</th>
                <th>Rate/Day</th>
                <th>Car Number</th>
                <th>Phone Number</th>
                <th>Booking Type</th>
                <th>Driver Name</th>
                <th>Action</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {vehicles.length > 0 ? (
                vehicles.map((vehicle) => (
                  <tr key={vehicle._id}>
                    <td>
                      {vehicle.vehicleFrontImage && (
                        <img
                          src={`http://localhost:3000/uploads/${vehicle.vehicleFrontImage}`}
                          alt="Front"
                          style={{
                            width: "50px",
                            height: "auto",
                            borderRadius: "4px",
                          }}
                        />
                      )}
                    </td>
                    <td>{vehicle.vehicleName}</td>
                    <td>{vehicle.carType}</td>
                    <td>{vehicle.seatNumbers}</td>
                    <td>{vehicle.gearType}</td>
                    <td>{vehicle.airCondition}</td>
                    <td> {vehicle.perDayRate}</td>
                    <td>{vehicle.vehicleNumber}</td>
                    <td>{vehicle.phoneNumber}</td>
                    <td>{vehicle.rentalType}</td>
                    <td>{vehicle.driverName || "-"}</td>
                    <td>
                      <button onClick={() => handleViewClick(vehicle)}>
                        View
                      </button>
                    </td>
                    <td className={`status ${vehicle.status || "Pending"}`}>
                      {vehicle.status || "Pending"}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="13">No vehicles listed yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        )}

        {/* DOCUMENTS TAB */}
        {activeTab === "documents" && (
          <div className="documents-tab">
            {vehicles.length > 0 ? (
              vehicles.map((vehicle, index) => (
                <div
                  key={vehicle._id}
                  className="vehicle-documents"
                  style={{ marginBottom: "20px" }}
                >
                  <h3>
                    Vehicle {index + 1}: {vehicle.vehicleName}
                  </h3>
                  <ul>
                    <li>
                      Bluebook Document:{" "}
                      {vehicle.bluebookDocument ? (
                        <a
                          href={`http://localhost:3000/uploads/${vehicle.bluebookDocument}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View
                        </a>
                      ) : (
                        "Not provided"
                      )}
                    </li>
                    <li>
                      Insurance Document:{" "}
                      {vehicle.insuranceDocument ? (
                        <a
                          href={`http://localhost:3000/uploads/${vehicle.insuranceDocument}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View
                        </a>
                      ) : (
                        "Not provided"
                      )}
                    </li>
                  </ul>
                </div>
              ))
            ) : (
              <p>No vehicles listed yet.</p>
            )}
          </div>
        )}

        {/* EARNINGS TAB */}
        {activeTab === "earnings" && (
          <div>
            <p>Coming soon...</p>
          </div>
        )}

        <div className="add-car-section">
          <button onClick={handleAddCarClick}>Add Car</button>
        </div>
      </div>
    </div>
  );
}

export default DriftyPage;
