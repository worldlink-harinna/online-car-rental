// // // // src/components/RidesDashboard/RidesDashboard.js
// // // import React, { useState } from 'react';
// // // import { useNavigate } from 'react-router-dom';
// // // import './RidesDashboard.css';
// // // import CancelModal from './CancelModal';
// // // import notificationIcon from '../../assets/notification-icon.png';
// // // import profileImage from '../../assets/default_profile.png';

// // // function RidesDashboard() {
// // //   const navigate = useNavigate();
// // //   const [activeTab, setActiveTab] = useState('active'); // 'active' or 'history'

// // //   // Active rides data
// // //   const [activeRides, setActiveRides] = useState([
// // //     {
// // //       id: 1,
// // //       vehicle: 'Honda CR-V',
// // //       type: 'SUV',
// // //       driver: 'Self Drive',
// // //       startDate: 'Apr 15, 2025',
// // //       endDate: 'Apr 22, 2025',
// // //       totalCost: '$455.00',
// // //       status: 'Active'
// // //     },
// // //     {
// // //       id: 2,
// // //       vehicle: 'Tesla Model 3',
// // //       type: 'Electric',
// // //       driver: 'Sarah Johnson',
// // //       startDate: 'Apr 17, 2025',
// // //       endDate: 'Apr 20, 2025',
// // //       totalCost: '$270.00',
// // //       status: 'Active'
// // //     }
// // //   ]);

// // //   // Ride history data
// // //   const [rideHistory, setRideHistory] = useState([
// // //     {
// // //       id: 3,
// // //       vehicle: 'Hyundai i20',
// // //       type: 'Hatchback',
// // //       driver: 'Self Drive',
// // //       startDate: 'Apr 05, 2025',
// // //       endDate: 'Apr 08, 2025',
// // //       totalCost: '$190.00',
// // //       status: 'Cancelled'
// // //     },
// // //     {
// // //       id: 4,
// // //       vehicle: 'Ford EcoSport',
// // //       type: 'SUV',
// // //       driver: 'Ram Bdr. Thapa',
// // //       startDate: 'Mar 29, 2025',
// // //       endDate: 'Apr 01, 2025',
// // //       totalCost: '$210.00',
// // //       status: 'Completed'
// // //     }
// // //   ]);

// // //   const [showCancelModal, setShowCancelModal] = useState(false);
// // //   const [rideToCancel, setRideToCancel] = useState(null);

// // //   const currentDate = new Date().toLocaleDateString('en-US', {
// // //     weekday: 'short',
// // //     day: '2-digit',
// // //     month: 'short',
// // //     year: 'numeric'
// // //   });

// // //   const handleCancelClick = (id) => {
// // //     setRideToCancel(id);
// // //     setShowCancelModal(true);
// // //   };

// // //   const handleConfirmCancel = (id) => {
// // //     // Find the ride to cancel
// // //     const rideToMove = activeRides.find(ride => ride.id === id);

// // //     if (rideToMove) {
// // //       // Create a copy with updated status
// // //       const cancelledRide = {...rideToMove, status: 'Cancelled'};

// // //       // Remove from active rides
// // //       setActiveRides(activeRides.filter(ride => ride.id !== id));

// // //       // Add to ride history
// // //       setRideHistory([cancelledRide, ...rideHistory]);
// // //     }

// // //     setShowCancelModal(false);
// // //     setRideToCancel(null);
// // //   };

// // //   const handleCloseModal = () => {
// // //     setShowCancelModal(false);
// // //     setRideToCancel(null);
// // //   };

// // //   return (
// // //     <div className="rides-dashboard-container full-screen">
// // //       <div className="left-icons">
// // //         <div className="left-icon" onClick={() => navigate('/profile')}>☰</div>
// // //         <div className="left-icon active">⚙</div>
// // //       </div>

// // //       <div className="header">
// // //         <div className="welcome-date">
// // //           <h2>Welcome, User </h2>
// // //           <p className="date">{currentDate}</p>
// // //         </div>
// // //         <div className="header-right">
// // //         <button className="notification-button">
// // //   {notificationIcon && <img src={notificationIcon} alt="Notifications" />}
// // // </button>
// // // <div className="user-avatar">
// // //   <img src={profileImage} alt="User Avatar" />
// // // </div>
// // //         </div>
// // //       </div>

// // //       <div className="banner dark-banner">
// // //         {/* Darker banner for consistency */}
// // //       </div>

// // //       <div className="rides-controls">
// // //         <button
// // //           className={`tab-button ${activeTab === 'active' ? 'active' : ''}`}
// // //           onClick={() => setActiveTab('active')}
// // //         >
// // //           Active Rides
// // //         </button>
// // //         <button
// // //           className={`tab-button ${activeTab === 'history' ? 'active' : ''}`}
// // //           onClick={() => setActiveTab('history')}
// // //         >
// // //           Ride History
// // //         </button>
// // //       </div>

// // //       {activeTab === 'active' ? (
// // //         <div className="rides-table-container">
// // //           <h2>Active Rides</h2>
// // //           {activeRides.length > 0 ? (
// // //             <table className="rides-table">
// // //               <thead>
// // //                 <tr>
// // //                   <th>Vehicle</th>
// // //                   <th>Type</th>
// // //                   <th>Driver</th>
// // //                   <th>Start Date</th>
// // //                   <th>End Date</th>
// // //                   <th>Total Cost</th>
// // //                   <th>Status</th>
// // //                   <th>Action</th>
// // //                 </tr>
// // //               </thead>
// // //               <tbody>
// // //                 {activeRides.map(ride => (
// // //                   <tr key={ride.id}>
// // //                     <td>{ride.vehicle}</td>
// // //                     <td>{ride.type}</td>
// // //                     <td>{ride.driver}</td>
// // //                     <td>{ride.startDate}</td>
// // //                     <td>{ride.endDate}</td>
// // //                     <td>{ride.totalCost}</td>
// // //                     <td>
// // //                       <span className="status-badge active">{ride.status}</span>
// // //                     </td>
// // //                     <td>
// // //                       <button
// // //                         className="cancel-button"
// // //                         onClick={() => handleCancelClick(ride.id)}
// // //                       >
// // //                         Cancel
// // //                       </button>
// // //                     </td>
// // //                   </tr>
// // //                 ))}
// // //               </tbody>
// // //             </table>
// // //           ) : (
// // //             <p className="no-rides-message">No active rides found.</p>
// // //           )}
// // //         </div>
// // //       ) : (
// // //         <div className="rides-table-container">
// // //           <h2>Ride History</h2>
// // //           {rideHistory.length > 0 ? (
// // //             <table className="rides-table">
// // //               <thead>
// // //                 <tr>
// // //                   <th>Vehicle</th>
// // //                   <th>Type</th>
// // //                   <th>Driver</th>
// // //                   <th>Start Date</th>
// // //                   <th>End Date</th>
// // //                   <th>Total Cost</th>
// // //                   <th>Status</th>
// // //                 </tr>
// // //               </thead>
// // //               <tbody>
// // //                 {rideHistory.map(ride => (
// // //                   <tr key={ride.id}>
// // //                     <td>{ride.vehicle}</td>
// // //                     <td>{ride.type}</td>
// // //                     <td>{ride.driver}</td>
// // //                     <td>{ride.startDate}</td>
// // //                     <td>{ride.endDate}</td>
// // //                     <td>{ride.totalCost}</td>
// // //                     <td>
// // //                       <span className={`status-badge ${ride.status.toLowerCase()}`}>
// // //                         {ride.status}
// // //                       </span>
// // //                     </td>
// // //                   </tr>
// // //                 ))}
// // //               </tbody>
// // //             </table>
// // //           ) : (
// // //             <p className="no-rides-message">No ride history found.</p>
// // //           )}
// // //         </div>
// // //       )}

// // //       {/* Cancel modal */}
// // //       <CancelModal
// // //         isOpen={showCancelModal}
// // //         onClose={handleCloseModal}
// // //         onConfirm={handleConfirmCancel}
// // //         rideId={rideToCancel}
// // //       />
// // //     </div>
// // //   );
// // // }

// // // export default RidesDashboard;

// // import React, { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import "./RidesDashboard.css";
// // import CancelModal from "./CancelModal";
// // import notificationIcon from "../../assets/notification-icon.png";
// // import profileImage from "../../assets/default_profile.png";

// // function RidesDashboard({ user }) {
// //   const navigate = useNavigate();
// //   const [activeTab, setActiveTab] = useState("active");
// //   const [activeRides, setActiveRides] = useState([]);
// //   const [rideHistory, setRideHistory] = useState([]);
// //   const [showCancelModal, setShowCancelModal] = useState(false);
// //   const [rideToCancel, setRideToCancel] = useState(null);
// //   const [error, setError] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   const currentDate = new Date().toLocaleDateString("en-US", {
// //     weekday: "short",
// //     day: "2-digit",
// //     month: "short",
// //     year: "numeric",
// //   });

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       if (!user?.email) {
// //         setError("User not logged in or email not available.");
// //         setLoading(false);
// //         return;
// //       }

// //       try {
// //         setLoading(true);
// //         const response = await fetch(
// //           `http://localhost:3000/booking?email=${encodeURIComponent(
// //             user.email
// //           )}`,
// //           {
// //             headers: {
// //               "Content-Type": "application/json",
// //               Authorization: `Bearer ${localStorage.getItem("token")}`,
// //             },
// //           }
// //         );

// //         if (!response.ok) {
// //           throw new Error(`Failed to fetch bookings: ${response.statusText}`);
// //         }

// //         const data = await response.json();
// //         if (!data.success || !Array.isArray(data.bookings)) {
// //           throw new Error(data.error || "Invalid bookings data");
// //         }

// //         // Filter bookings into active (pending/confirmed) and history (cancelled)
// //         const active = data.bookings.filter(
// //           (booking) =>
// //             booking.status === "pending" || booking.status === "confirmed"
// //         );
// //         const history = data.bookings.filter(
// //           (booking) => booking.status === "cancelled"
// //         );

// //         setActiveRides(active);
// //         setRideHistory(history);
// //         setError(null);
// //         setLoading(false);
// //       } catch (err) {
// //         console.error("Fetch error:", err);
// //         setError(err.message);
// //         setLoading(false);
// //       }
// //     };

// //     fetchData();
// //   }, [user]);

// //   const handleCancelClick = (id) => {
// //     setRideToCancel(id);
// //     setShowCancelModal(true);
// //   };

// //   const handleConfirmCancel = async (id) => {
// //     try {
// //       const response = await fetch(
// //         `http://localhost:3000/booking/${id}/cancel`,
// //         {
// //           method: "PUT",
// //           headers: {
// //             "Content-Type": "application/json",
// //             Authorization: `Bearer ${localStorage.getItem("token")}`,
// //           },
// //         }
// //       );

// //       if (!response.ok) {
// //         throw new Error("Failed to cancel booking");
// //       }

// //       const cancelledRide = activeRides.find((ride) => ride._id === id);
// //       if (cancelledRide) {
// //         const updatedRide = { ...cancelledRide, status: "cancelled" };
// //         setActiveRides(activeRides.filter((ride) => ride._id !== id));
// //         setRideHistory([updatedRide, ...rideHistory]);
// //       }

// //       setShowCancelModal(false);
// //       setRideToCancel(null);
// //     } catch (err) {
// //       console.error("Cancel error:", err);
// //       setError(err.message);
// //     }
// //   };

// //   const handleCloseModal = () => {
// //     setShowCancelModal(false);
// //     setRideToCancel(null);
// //   };

// //   return (
// //     <div className="rides-dashboard-container full-screen">
// //       <div className="left-icons">
// //         <div className="left-icon" onClick={() => navigate("/profile")}>
// //           ☰
// //         </div>
// //         <div className="left-icon active">⚙</div>
// //       </div>

// //       <div className="header">
// //         <div className="welcome-date">
// //           <h2>Welcome, {user?.name || "User"}</h2>
// //           <p className="date">{currentDate}</p>
// //         </div>
// //         <div className="header-right">
// //           <button className="notification-button">
// //             <img src={notificationIcon} alt="Notifications" />
// //           </button>
// //           <div className="user-avatar">
// //             <img src={profileImage} alt="User Avatar" />
// //           </div>
// //         </div>
// //       </div>

// //       <div className="banner dark-banner"></div>

// //       <div className="rides-controls">
// //         <button
// //           className={`tab-button ${activeTab === "active" ? "active" : ""}`}
// //           onClick={() => setActiveTab("active")}
// //         >
// //           Active Rides
// //         </button>
// //         <button
// //           className={`tab-button ${activeTab === "history" ? "active" : ""}`}
// //           onClick={() => setActiveTab("history")}
// //         >
// //           Ride History
// //         </button>
// //       </div>

// //       {error && <p className="error-message">{error}</p>}

// //       {loading ? (
// //         <p>Loading bookings...</p>
// //       ) : activeTab === "active" ? (
// //         <div className="rides-table-container">
// //           <h2>Active Rides</h2>
// //           {activeRides.length > 0 ? (
// //             <table className="rides-table">
// //               <thead>
// //                 <tr>
// //                   <th>Vehicle</th>
// //                   <th>Type</th>
// //                   <th>Total Price</th>
// //                   <th>Ride Date</th>
// //                   <th>Start Date</th>
// //                   <th>End Date</th>
// //                   <th>Status</th>
// //                   <th>Action</th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {activeRides.map((ride) => (
// //                   <tr key={ride._id}>
// //                     <td>{ride.name}</td>
// //                     <td>{ride.bookingType}</td>
// //                     <td>₹{ride.totalPrice.toLocaleString("en-IN")}</td>
// //                     <td>{new Date(ride.date).toLocaleString()}</td>
// //                     <td>{new Date(ride.pickupDateTime).toLocaleString()}</td>
// //                     <td>{new Date(ride.dropoffDateTime).toLocaleString()}</td>
// //                     <td>
// //                       <span
// //                         className={`status-badge ${ride.status.toLowerCase()}`}
// //                       >
// //                         {ride.status}
// //                       </span>
// //                     </td>
// //                     <td>
// //                       <button
// //                         className="cancel-button"
// //                         onClick={() => handleCancelClick(ride._id)}
// //                       >
// //                         Cancel
// //                       </button>
// //                     </td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           ) : (
// //             <p className="no-rides-message">No active rides found.</p>
// //           )}
// //         </div>
// //       ) : (
// //         <div className="rides-table-container">
// //           <h2>Ride History</h2>
// //           {rideHistory.length > 0 ? (
// //             <table className="rides-table">
// //               <thead>
// //                 <tr>
// //                   <th>Vehicle</th>
// //                   <th>Type</th>
// //                   <th>Total Price</th>
// //                   <th>Ride Date</th>
// //                   <th>Start Date</th>
// //                   <th>End Date</th>
// //                   <th>Status</th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {rideHistory.map((ride) => (
// //                   <tr key={ride._id}>
// //                     <td>{ride.name}</td>
// //                     <td>{ride.bookingType}</td>
// //                     <td>₹{ride.totalPrice.toLocaleString("en-IN")}</td>
// //                     <td>{new Date(ride.date).toLocaleString()}</td>
// //                     <td>{new Date(ride.pickupDateTime).toLocaleString()}</td>
// //                     <td>{new Date(ride.dropoffDateTime).toLocaleString()}</td>
// //                     <td>
// //                       <span
// //                         className={`status-badge ${ride.status.toLowerCase()}`}
// //                       >
// //                         {ride.status}
// //                       </span>
// //                     </td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           ) : (
// //             <p className="no-rides-message">No ride history found.</p>
// //           )}
// //         </div>
// //       )}

// //       <CancelModal
// //         isOpen={showCancelModal}
// //         onClose={handleCloseModal}
// //         onConfirm={() => handleConfirmCancel(rideToCancel)}
// //         rideId={rideToCancel}
// //       />
// //     </div>
// //   );
// // }

// // export default RidesDashboard;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./RidesDashboard.css";
// import CancelModal from "./CancelModal";
// import notificationIcon from "../../assets/notification-icon.png";
// import profileImage from "../../assets/default_profile.png";

// function RidesDashboard({ user }) {
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState("active");
//   const [activeRides, setActiveRides] = useState([]);
//   const [rideHistory, setRideHistory] = useState([]);
//   const [showCancelModal, setShowCancelModal] = useState(false);
//   const [rideToCancel, setRideToCancel] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const currentDate = new Date().toLocaleDateString("en-US", {
//     weekday: "short",
//     day: "2-digit",
//     month: "short",
//     year: "numeric",
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       if (!user?.email) {
//         setError("User not logged in or email not available.");
//         setLoading(false);
//         return;
//       }

//       try {
//         setLoading(true);
//         const response = await fetch(
//           `http://localhost:3000/booking?email=${encodeURIComponent(
//             user.email
//           )}`,
//           {
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${localStorage.getItem("token")}`,
//             },
//           }
//         );

//         if (!response.ok) {
//           throw new Error(`Failed to fetch bookings: ${response.statusText}`);
//         }

//         const data = await response.json();
//         if (!data.success || !Array.isArray(data.bookings)) {
//           throw new Error(data.error || "Invalid bookings data");
//         }

//         const active = data.bookings.filter(
//           (booking) =>
//             booking.status === "pending" || booking.status === "confirmed"
//         );
//         const history = data.bookings.filter(
//           (booking) => booking.status === "cancelled"
//         );

//         setActiveRides(active);
//         setRideHistory(history);
//         setError(null);
//         setLoading(false);
//       } catch (err) {
//         console.error("Fetch error:", err);
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [user]);

//   const handleCancelClick = (id) => {
//     setRideToCancel(id);
//     setShowCancelModal(true);
//   };

//   const handleConfirmCancel = async (id) => {
//     try {
//       const response = await fetch(
//         `http://localhost:3000/booking/${id}/cancel`,
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );

//       const data = await response.json();
//       if (!response.ok) {
//         throw new Error(data.error || "Failed to cancel booking");
//       }

//       const cancelledRide = activeRides.find((ride) => ride._id === id);
//       if (cancelledRide) {
//         const updatedRide = { ...cancelledRide, status: "cancelled" };
//         setActiveRides(activeRides.filter((ride) => ride._id !== id));
//         setRideHistory([updatedRide, ...rideHistory]);
//         alert("Booking cancelled successfully!");
//       }

//       setShowCancelModal(false);
//       setRideToCancel(null);
//     } catch (err) {
//       console.error("Cancel error:", err);
//       setError(`Failed to cancel booking: ${err.message}`);
//       alert(`Failed to cancel booking: ${err.message}`);
//     }
//   };

//   const handleCloseModal = () => {
//     setShowCancelModal(false);
//     setRideToCancel(null);
//   };

//   return (
//     <div className="rides-dashboard-container full-screen">
//       <div className="left-icons">
//         <div className="left-icon" onClick={() => navigate("/profile")}>
//           ☰
//         </div>
//         <div className="left-icon active">⚙</div>
//       </div>

//       <div className="header">
//         <div className="welcome-date">
//           <h2>Welcome, {user?.name || "User"}</h2>
//           <p className="date">{currentDate}</p>
//         </div>
//         <div className="header-right">
//           <button className="notification-button">
//             <img src={notificationIcon} alt="Notifications" />
//           </button>
//           <div className="user-avatar">
//             <img src={profileImage} alt="User Avatar" />
//           </div>
//         </div>
//       </div>

//       <div className="banner dark-banner"></div>

//       <div className="rides-controls">
//         <button
//           className={
//             activeTab === "active" ? "tab-button active" : "tab-button"
//           }
//           onClick={() => setActiveTab("active")}
//         >
//           Active Rides
//         </button>
//         <button
//           className={
//             activeTab === "history" ? "tab-button active" : "tab-button"
//           }
//           onClick={() => setActiveTab("history")}
//         >
//           Ride History
//         </button>
//       </div>

//       {error && <p className="error-message">{error}</p>}

//       {loading ? (
//         <p>Loading bookings...</p>
//       ) : activeTab === "active" ? (
//         <div className="rides-table-container">
//           <h2>Active Rides</h2>
//           {activeRides.length > 0 ? (
//             <table className="rides-table">
//               <thead>
//                 <tr>
//                   <th>Vehicle</th>
//                   <th>Type</th>
//                   <th>Total Price</th>
//                   <th>Ride Date</th>
//                   <th>Start Date</th>
//                   <th>End Date</th>
//                   <th>Status</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {activeRides.map((ride) => (
//                   <tr key={ride._id}>
//                     <td>{ride.name}</td>
//                     <td>{ride.bookingType}</td>
//                     <td>₹{ride.totalPrice.toLocaleString("en-IN")}</td>
//                     <td>{new Date(ride.date).toLocaleString()}</td>
//                     <td>{new Date(ride.pickupDateTime).toLocaleString()}</td>
//                     <td>{new Date(ride.dropoffDateTime).toLocaleString()}</td>
//                     <td>
//                       <span
//                         className={`status-badge ${ride.status.toLowerCase()}`}
//                       >
//                         {ride.status}
//                       </span>
//                     </td>
//                     <td>
//                       <button
//                         className="cancel-button"
//                         onClick={() => handleCancelClick(ride._id)}
//                       >
//                         Cancel
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           ) : (
//             <p className="no-rides-message">No active rides found.</p>
//           )}
//         </div>
//       ) : (
//         <div className="rides-table-container">
//           <h2>Ride History</h2>
//           {rideHistory.length > 0 ? (
//             <table className="rides-table">
//               <thead>
//                 <tr>
//                   <th>Vehicle</th>
//                   <th>Type</th>
//                   <th>Total Price</th>
//                   <th>Ride Date</th>
//                   <th>Start Date</th>
//                   <th>End Date</th>
//                   <th>Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {rideHistory.map((ride) => (
//                   <tr key={ride._id}>
//                     <td>{ride.name}</td>
//                     <td>{ride.bookingType}</td>
//                     <td>₹{ride.totalPrice.toLocaleString("en-IN")}</td>
//                     <td>{new Date(ride.date).toLocaleString()}</td>
//                     <td>{new Date(ride.pickupDateTime).toLocaleString()}</td>
//                     <td>{new Date(ride.dropoffDateTime).toLocaleString()}</td>
//                     <td>
//                       <span
//                         className={`status-badge ${ride.status.toLowerCase()}`}
//                       >
//                         {ride.status}
//                       </span>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           ) : (
//             <p className="no-rides-message">No ride history found.</p>
//           )}
//         </div>
//       )}

//       <CancelModal
//         isOpen={showCancelModal}
//         onClose={handleCloseModal}
//         onConfirm={() => handleConfirmCancel(rideToCancel)}
//         rideId={rideToCancel}
//       />
//     </div>
//   );
// }

// // export default RidesDashboard;
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./RidesDashboard.css";
// import CancelModal from "./CancelModal";
// import notificationIcon from "../../assets/notification-icon.png";
// import profileImage from "../../assets/default_profile.png";

// function RidesDashboard({ user }) {
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState("active");
//   const [activeRides, setActiveRides] = useState([]);
//   const [rideHistory, setRideHistory] = useState([]);
//   const [showCancelModal, setShowCancelModal] = useState(false);
//   const [rideToCancel, setRideToCancel] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const currentDate = new Date().toLocaleDateString("en-US", {
//     weekday: "short",
//     day: "2-digit",
//     month: "short",
//     year: "numeric",
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       if (!user?.email) {
//         setError("User not logged in or email not available.");
//         setLoading(false);
//         return;
//       }

//       try {
//         setLoading(true);
//         const response = await fetch("http://localhost:3000/booking", {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         });

//         if (!response.ok) {
//           throw new Error(`Failed to fetch bookings: ${response.statusText}`);
//         }

//         const data = await response.json();
//         if (!data.success || !Array.isArray(data.bookings)) {
//           throw new Error(data.error || "Invalid bookings data");
//         }

//         const userBookings = data.bookings.filter(
//           (booking) => booking.email === user.email
//         );

//         const active = userBookings.filter(
//           (booking) =>
//             booking.status === "pending" || booking.status === "confirmed"
//         );
//         const history = userBookings.filter(
//           (booking) => booking.status === "cancelled"
//         );

//         setActiveRides(active);
//         setRideHistory(history);
//         setError(null);
//         setLoading(false);
//       } catch (err) {
//         console.error("Fetch error:", err);
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [user]);

//   const calculateRefundPercentage = (bookingDateStr, pickupDateStr) => {
//     const now = new Date();
//     const bookingDate = new Date(bookingDateStr);
//     const pickupDate = new Date(pickupDateStr);

//     const minutesSinceBooking = (now - bookingDate) / (1000 * 60);
//     const hoursUntilPickup = (pickupDate - now) / (1000 * 60 * 60);

//     if (minutesSinceBooking <= 15) return 100;
//     if (hoursUntilPickup >= 12 && hoursUntilPickup <= 24) return 50;
//     if (hoursUntilPickup < 12) return 0;
//     return 100;
//   };

//   const handleCancelClick = (id) => {
//     setRideToCancel(id);
//     setShowCancelModal(true);
//   };

//   const handleConfirmCancel = async (id) => {
//     try {
//       const ride = activeRides.find((r) => r._id === id);
//       if (!ride) throw new Error("Ride not found.");

//       const refund = calculateRefundPercentage(ride.date, ride.pickupDateTime);

//       const response = await fetch(
//         `http://localhost:3000/booking/${id}/cancel`,
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );

//       const data = await response.json();
//       if (!response.ok) {
//         throw new Error(data.error || "Failed to cancel booking");
//       }

//       const updatedRide = { ...ride, status: "cancelled" };
//       setActiveRides(activeRides.filter((r) => r._id !== id));
//       setRideHistory([updatedRide, ...rideHistory]);
//       setShowCancelModal(false);
//       setRideToCancel(null);

//       alert(
//         `Booking cancelled successfully! Refund: ${
//           refund === 100
//             ? "Full"
//             : refund === 50
//             ? "50%"
//             : "No"
//         } refund applied.`
//       );
//     } catch (err) {
//       console.error("Cancel error:", err);
//       setError(`Failed to cancel booking: ${err.message}`);
//       alert(`Failed to cancel booking: ${err.message}`);
//     }
//   };

//   const handleCloseModal = () => {
//     setShowCancelModal(false);
//     setRideToCancel(null);
//   };

//   const formatDateTime = (dateTime) => {
//     return dateTime ? new Date(dateTime).toLocaleString() : "N/A";
//   };

//   const formatPrice = (price) => {
//     return typeof price === "number"
//       ? `₹${price.toLocaleString("en-IN")}`
//       : "N/A";
//   };

//   return (
//     <div className="rides-dashboard-container full-screen">
//       <div className="left-icons">
//         <div className="left-icon" onClick={() => navigate("/profile")}>
//           ☰
//         </div>
//         <div className="left-icon active">⚙</div>
//       </div>

//       <div className="header">
//         <div className="welcome-date">
//           <h2>Welcome, {user?.name || "User"}</h2>
//           <p className="date">{currentDate}</p>
//         </div>
//         <div className="header-right">
//           <button className="notification-button">
//             <img src={notificationIcon} alt="Notifications" />
//           </button>
//           <div className="user-avatar">
//             <img src={profileImage} alt="User Avatar" />
//           </div>
//         </div>
//       </div>

//       <div className="banner dark-banner"></div>

//       <div className="rides-controls">
//         <button
//           className={activeTab === "active" ? "tab-button active" : "tab-button"}
//           onClick={() => setActiveTab("active")}
//         >
//           Active Rides
//         </button>
//         <button
//           className={activeTab === "history" ? "tab-button active" : "tab-button"}
//           onClick={() => setActiveTab("history")}
//         >
//           Ride History
//         </button>
//       </div>

//       {error && <p className="error-message">{error}</p>}

//       {loading ? (
//         <p>Loading bookings...</p>
//       ) : activeTab === "active" ? (
//         <div className="rides-table-container">
//           <h2>Active Rides</h2>
//           {activeRides.length > 0 ? (
//             <table className="rides-table">
//               <thead>
//                 <tr>
//                   <th>Vehicle</th>
//                   <th>Type</th>
//                   <th>Total Price</th>
//                   <th>Ride Date</th>
//                   <th>Start Date</th>
//                   <th>End Date</th>
//                   <th>Status</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {activeRides.map((ride) => (
//                   <tr key={ride._id}>
//                     <td>{ride.name || "N/A"}</td>
//                     <td>{ride.bookingType || "N/A"}</td>
//                     <td>{formatPrice(ride.totalPrice)}</td>
//                     <td>{formatDateTime(ride.date)}</td>
//                     <td>{formatDateTime(ride.pickupDateTime)}</td>
//                     <td>{formatDateTime(ride.dropoffDateTime)}</td>
//                     <td>
//                       <span
//                         className={`status-badge ${ride.status?.toLowerCase()}`}
//                       >
//                         {ride.status || "N/A"}
//                       </span>
//                     </td>
//                     <td>
//                       <button
//                         className="cancel-button"
//                         onClick={() => handleCancelClick(ride._id)}
//                       >
//                         Cancel
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           ) : (
//             <p className="no-rides-message">No active rides found.</p>
//           )}
//         </div>
//       ) : (
//         <div className="rides-table-container">
//           <h2>Ride History</h2>
//           {rideHistory.length > 0 ? (
//             <table className="rides-table">
//               <thead>
//                 <tr>
//                   <th>Vehicle</th>
//                   <th>Type</th>
//                   <th>Total Price</th>
//                   <th>Ride Date</th>
//                   <th>Start Date</th>
//                   <th>End Date</th>
//                   <th>Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {rideHistory.map((ride) => (
//                   <tr key={ride._id}>
//                     <td>{ride.name || "N/A"}</td>
//                     <td>{ride.bookingType || "N/A"}</td>
//                     <td>{formatPrice(ride.totalPrice)}</td>
//                     <td>{formatDateTime(ride.date)}</td>
//                     <td>{formatDateTime(ride.pickupDateTime)}</td>
//                     <td>{formatDateTime(ride.dropoffDateTime)}</td>
//                     <td>
//                       <span
//                         className={`status-badge ${ride.status?.toLowerCase()}`}
//                       >
//                         {ride.status || "N/A"}
//                       </span>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           ) : (
//             <p className="no-rides-message">No ride history found.</p>
//           )}
//         </div>
//       )}

//       <CancelModal
//         isOpen={showCancelModal}
//         onClose={handleCloseModal}
//         onConfirm={() => handleConfirmCancel(rideToCancel)}
//         rideId={rideToCancel}
//       />
//     </div>
//   );
// }

// export default RidesDashboard;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./RidesDashboard.css";
import CancelModal from "./CancelModal";
import notificationIcon from "../../assets/notification-icon.png";
import profileImage from "../../assets/default_profile.png";

function RidesDashboard({ user }) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("active");
  const [activeRides, setActiveRides] = useState([]);
  const [rideHistory, setRideHistory] = useState([]);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [rideToCancel, setRideToCancel] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  useEffect(() => {
    const fetchData = async () => {
      if (!user?.email) {
        setError("User not logged in or email not available.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const response = await fetch("http://localhost:3000/booking", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch bookings: ${response.statusText}`);
        }

        const data = await response.json();
        if (!data.success || !Array.isArray(data.bookings)) {
          throw new Error(data.error || "Invalid bookings data");
        }

        const userBookings = data.bookings.filter(
          (booking) => booking.email === user.email
        );

        const active = userBookings.filter(
          (booking) =>
            booking.status === "pending" || booking.status === "confirmed"
        );
        const history = userBookings.filter(
          (booking) => booking.status === "cancelled"
        );

        setActiveRides(active);
        setRideHistory(history);
        setError(null);
        setLoading(false);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [user]);

  const calculateRefundPercentage = (bookingDateStr, pickupDateStr) => {
    const now = new Date();
    const bookingDate = new Date(bookingDateStr);
    const pickupDate = new Date(pickupDateStr);

    const minutesSinceBooking = (now - bookingDate) / (1000 * 60);
    const hoursUntilPickup = (pickupDate - now) / (1000 * 60 * 60);

    if (minutesSinceBooking <= 15) return 100;
    if (hoursUntilPickup >= 12 && hoursUntilPickup <= 24) return 50;
    if (hoursUntilPickup < 12) return 0;
    return 100;
  };

  const handleCancelClick = (id) => {
    setRideToCancel(id);
    setShowCancelModal(true);
  };

  // const handleConfirmCancel = async (id) => {
  //   try {
  //     const ride = activeRides.find((r) => r._id === id);
  //     if (!ride) throw new Error("Ride not found.");

  //     const refund = calculateRefundPercentage(ride.date, ride.pickupDateTime);

  //     const response = await fetch(
  //       `http://localhost:3000/booking/cancel/${selectedRideId}`,
  //       {
  //         method: "PUT",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${localStorage.getItem("token")}`,
  //         },
  //       }
  //     );

  //     const data = await response.json();
  //     if (!response.ok) {
  //       throw new Error(data.error || "Failed to cancel booking");
  //     }

  //     const updatedRide = { ...ride, status: "cancelled" };
  //     setActiveRides(activeRides.filter((r) => r._id !== id));
  //     setRideHistory([updatedRide, ...rideHistory]);
  //     setShowCancelModal(false);
  //     setRideToCancel(null);

  //     alert(
  //       `Booking cancelled successfully! Refund: ${
  //         refund === 100 ? "Full" : refund === 50 ? "50%" : "No"
  //       } refund applied.`
  //     );
  //   } catch (err) {
  //     console.error("Cancel error:", err);
  //     setError(`Failed to cancel booking: ${err.message}`);
  //     alert(`Failed to cancel booking: ${err.message}`);
  //   }
  // };

  const handleConfirmCancel = async (id) => {
    try {
      const ride = activeRides.find((r) => r._id === id);
      if (!ride) throw new Error("Ride not found.");

      const refund = calculateRefundPercentage(ride.date, ride.pickupDateTime);

      const response = await fetch(
        `http://localhost:3000/booking/cancel/${id}`, // ✅ Correct endpoint
        {
          method: "POST", // ✅ Correct method for your backend
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to cancel booking");
      }

      const updatedRide = { ...ride, status: "cancelled" };
      setActiveRides(activeRides.filter((r) => r._id !== id));
      setRideHistory([updatedRide, ...rideHistory]);
      setShowCancelModal(false);
      setRideToCancel(null);

      alert(
        `Booking cancelled successfully! Refund: ${
          refund === 100 ? "Full" : refund === 50 ? "50%" : "No"
        } refund applied.`
      );
    } catch (err) {
      console.error("Cancel error:", err);
      setError(`Failed to cancel booking: ${err.message}`);
      alert(`Failed to cancel booking: ${err.message}`);
    }
  };

  const handleCloseModal = () => {
    setShowCancelModal(false);
    setRideToCancel(null);
  };

  const formatDateTime = (dateTime) => {
    return dateTime ? new Date(dateTime).toLocaleString() : "N/A";
  };

  const formatPrice = (price) => {
    return typeof price === "number"
      ? `रू${price.toLocaleString("en-IN")}`
      : "N/A";
  };

  return (
    <div className="rides-dashboard-container full-screen">
      <div className="left-icons">
        <div className="left-icon" onClick={() => navigate("/profile")}>
          ☰
        </div>
        <div className="left-icon active">⚙</div>
      </div>

      <div className="header">
        <div className="welcome-date">
          <h2>Welcome, {user?.name || "User"}</h2>
          <p className="date">{currentDate}</p>
        </div>
        <div className="header-right">
          <button className="notification-button">
            <img src={notificationIcon} alt="Notifications" />
          </button>
          <div className="user-avatar">
            <img src={profileImage} alt="User Avatar" />
          </div>
        </div>
      </div>

      <div className="banner dark-banner"></div>

      <div className="rides-controls">
        <button
          className={
            activeTab === "active" ? "tab-button active" : "tab-button"
          }
          onClick={() => setActiveTab("active")}
        >
          Active Rides
        </button>
        <button
          className={
            activeTab === "history" ? "tab-button active" : "tab-button"
          }
          onClick={() => setActiveTab("history")}
        >
          Ride History
        </button>
      </div>

      {error && <p className="error-message">{error}</p>}

      {loading ? (
        <p>Loading bookings...</p>
      ) : activeTab === "active" ? (
        <div className="rides-table-container">
          <h2>Active Rides</h2>
          {activeRides.length > 0 ? (
            <table className="rides-table">
              <thead>
                <tr>
                  <th>Vehicle</th>
                  <th>Type</th>
                  <th>Total Price</th>
                  <th>Ride Date</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {activeRides.map((ride) => (
                  <tr key={ride._id}>
                    <td>{ride.name || "N/A"}</td>
                    <td>{ride.bookingType || "N/A"}</td>
                    <td>{formatPrice(ride.totalPrice)}</td>
                    <td>{formatDateTime(ride.date)}</td>
                    <td>{formatDateTime(ride.pickupDateTime)}</td>
                    <td>{formatDateTime(ride.dropoffDateTime)}</td>
                    <td>
                      <span
                        className={`status-badge ${ride.status?.toLowerCase()}`}
                      >
                        {ride.status || "N/A"}
                      </span>
                    </td>
                    <td>
                      <button
                        className="cancel-button"
                        onClick={() => handleCancelClick(ride._id)}
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="no-rides-message">No active rides found.</p>
          )}
        </div>
      ) : (
        <div className="rides-table-container">
          <h2>Ride History</h2>
          {rideHistory.length > 0 ? (
            <table className="rides-table">
              <thead>
                <tr>
                  <th>Vehicle</th>
                  <th>Type</th>
                  <th>Total Price</th>
                  <th>Ride Date</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {rideHistory.map((ride) => (
                  <tr key={ride._id}>
                    <td>{ride.name || "N/A"}</td>
                    <td>{ride.bookingType || "N/A"}</td>
                    <td>{formatPrice(ride.totalPrice)}</td>
                    <td>{formatDateTime(ride.date)}</td>
                    <td>{formatDateTime(ride.pickupDateTime)}</td>
                    <td>{formatDateTime(ride.dropoffDateTime)}</td>
                    <td>
                      <span
                        className={`status-badge ${ride.status?.toLowerCase()}`}
                      >
                        {ride.status || "N/A"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="no-rides-message">No ride history found.</p>
          )}
        </div>
      )}

      <CancelModal
        isOpen={showCancelModal}
        onClose={handleCloseModal}
        onConfirm={() => handleConfirmCancel(rideToCancel)}
        rideId={rideToCancel}
      />
    </div>
  );
}

export default RidesDashboard;
