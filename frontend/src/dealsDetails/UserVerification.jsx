// // import React, { useState, useEffect } from "react";
// // import { Users, ArrowLeft } from "lucide-react";
// // import "./DriverVerification.css";
// // import Sidebar from "./Sidebar";
// // import Nav from "./Nav";

// // const UserVerificationModal = ({ user, onClose }) => {
// //   const handleReject = async () => {
// //     try {
// //       const response = await fetch(
// //         `http://localhost:3000/api/kyc/update/${user._id}`,
// //         {
// //           method: "PUT",
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //           body: JSON.stringify({ status: "rejected" }),
// //         }
// //       );

// //       const data = await response.json();

// //       if (response.ok) {
// //         alert("KYC rejected successfully!");
// //         onClose();
// //       } else {
// //         alert(`Error: ${data.message}`);
// //       }
// //     } catch (error) {
// //       console.error("Error rejecting KYC:", error);
// //       alert("Something went wrong while rejecting the KYC.");
// //     }
// //   };

// //   const handleApprove = async () => {
// //     try {
// //       const response = await fetch(
// //         `http://localhost:3000/api/kyc/update/${user._id}`,
// //         {
// //           method: "PUT",
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //           body: JSON.stringify({ status: "approved" }),
// //         }
// //       );

// //       const data = await response.json();

// //       if (response.ok) {
// //         alert("KYC approved successfully!");
// //         onClose();
// //       } else {
// //         alert(`Error: ${data.message}`);
// //       }
// //     } catch (error) {
// //       console.error("Error approving KYC:", error);
// //       alert("Something went wrong while approving the KYC.");
// //     }
// //   };

// //   return (
// //     <div className="verification-details-overlay">
// //       <div className="verification-details-container">
// //         <div className="verification-header">
// //           <button className="back-button" onClick={onClose}>
// //             <ArrowLeft size={20} />
// //             <span>Back</span>
// //           </button>
// //           <h2>Personal Information</h2>
// //         </div>

// //         <div className="verification-content">
// //           <div className="user-docs-grid">
// //             <div className="user-doc-item">
// //               <h3>Licence Photo</h3>
// //               <div className="doc-preview">
// //                 {user.licenseImagePath ? (
// //                   <img
// //                     src={`http://localhost:3000${user.licenseImagePath}`}
// //                     alt="License"
// //                   />
// //                 ) : (
// //                   <p>No license image uploaded</p>
// //                 )}
// //               </div>
// //             </div>
// //             <div className="user-doc-item">
// //               <h3>Passport Size Photo</h3>
// //               <div className="doc-preview">
// //                 <img src="/passport.jpg" alt="Passport" />
// //               </div>
// //             </div>
// //           </div>

// //           <div className="user-info">
// //             <p>
// //               <strong>Full Name:</strong> {user.fullName}
// //             </p>
// //             <p>
// //               <strong>Phone Number:</strong> {user.phoneNumber}
// //             </p>
// //             <p>
// //               <strong>Submission Date:</strong>{" "}
// //               {new Date(user.createdAt).toLocaleDateString()}
// //             </p>
// //           </div>

// //           <div className="verification-actions">
// //             <button className="reject-button" onClick={handleReject}>
// //               <span className="button-icon">✕</span>
// //               Reject Verification
// //             </button>
// //             <button className="approve-button" onClick={handleApprove}>
// //               <span className="button-icon">✓</span>
// //               Approve Verification
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // const UserVerification = () => {
// //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
// //   const [filterStatus, setFilterStatus] = useState("All");
// //   const [selectedUser, setSelectedUser] = useState(null);
// //   const [kycData, setKycData] = useState([]);
// //   const [stats, setStats] = useState({
// //     totalUsers: 0,
// //     verified: 0,
// //     pending: 0,
// //     rejected: 0,
// //   });

// //   useEffect(() => {
// //     const fetchKycData = async () => {
// //       try {
// //         const response = await fetch("http://localhost:3000/api/kyc/all");
// //         const data = await response.json();

// //         if (response.ok) {
// //           setKycData(data);

// //           // Calculate stats
// //           const total = data.length;
// //           const verified = data.filter(
// //             (kyc) => kyc.status === "approved"
// //           ).length;
// //           const pending = data.filter((kyc) => kyc.status === "pending").length;
// //           const rejected = data.filter(
// //             (kyc) => kyc.status === "rejected"
// //           ).length;

// //           setStats({
// //             totalUsers: total,
// //             verified,
// //             pending,
// //             rejected,
// //           });
// //         } else {
// //           alert(`Error: ${data.message}`);
// //         }
// //       } catch (error) {
// //         console.error("Error fetching KYC data:", error);
// //         alert("Something went wrong while fetching KYC data.");
// //       }
// //     };

// //     fetchKycData();
// //   }, []);

// //   const filteredUsers =
// //     filterStatus === "All"
// //       ? kycData
// //       : kycData.filter((user) => user.status === filterStatus.toLowerCase());

// //   return (
// //     <div className="main-layout">
// //       <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
// //       <div className="main-content">
// //         <Nav onMenuClick={() => setIsSidebarOpen(true)} />
// //         <div className="content-area">
// //           <div className="driver-verification">
// //             <h1>KYC Verification</h1>

// //             <div className="stats-container">
// //               <div className="stat-card total">
// //                 <span className="stat-icon">👥</span>
// //                 <div className="stat-info">
// //                   <span className="stat-value">{stats.totalUsers}</span>
// //                   <span className="stat-label">Total Users</span>
// //                 </div>
// //               </div>
// //               <div className="stat-card verified">
// //                 <span className="stat-icon">✓</span>
// //                 <div className="stat-info">
// //                   <span className="stat-value">{stats.verified}</span>
// //                   <span className="stat-label">Verified</span>
// //                 </div>
// //               </div>
// //               <div className="stat-card pending">
// //                 <span className="stat-icon">⏳</span>
// //                 <div className="stat-info">
// //                   <span className="stat-value">{stats.pending}</span>
// //                   <span className="stat-label">Pending</span>
// //                 </div>
// //               </div>
// //               <div className="stat-card rejected">
// //                 <span className="stat-icon">✕</span>
// //                 <div className="stat-info">
// //                   <span className="stat-value">{stats.rejected}</span>
// //                   <span className="stat-label">Rejected</span>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="verification-queue">
// //               <div className="queue-header">
// //                 <h2>Verification Queue</h2>
// //                 <div className="filter-buttons">
// //                   <button
// //                     className={`filter-btn ${
// //                       filterStatus === "All" ? "active" : ""
// //                     }`}
// //                     onClick={() => setFilterStatus("All")}
// //                   >
// //                     All
// //                   </button>
// //                   <button
// //                     className={`filter-btn ${
// //                       filterStatus === "Pending" ? "active" : ""
// //                     }`}
// //                     onClick={() => setFilterStatus("Pending")}
// //                   >
// //                     Pending
// //                   </button>
// //                   <button
// //                     className={`filter-btn ${
// //                       filterStatus === "Approved" ? "active" : ""
// //                     }`}
// //                     onClick={() => setFilterStatus("Approved")}
// //                   >
// //                     Approved
// //                   </button>
// //                   <button
// //                     className={`filter-btn ${
// //                       filterStatus === "Rejected" ? "active" : ""
// //                     }`}
// //                     onClick={() => setFilterStatus("Rejected")}
// //                   >
// //                     Rejected
// //                   </button>
// //                 </div>
// //               </div>

// //               <div className="queue-table">
// //                 <table>
// //                   <thead>
// //                     <tr>
// //                       <th>ID</th>
// //                       <th>Owner</th>
// //                       <th>Number</th>
// //                       <th>Submission Date</th>
// //                       <th>Status</th>
// //                       <th>Actions</th>
// //                     </tr>
// //                   </thead>
// //                   <tbody>
// //                     {filteredUsers.map((user) => (
// //                       <tr key={user._id}>
// //                         <td>{user._id.slice(-6)}</td>
// //                         <td>{user.fullName}</td>
// //                         <td>{user.phoneNumber}</td>
// //                         <td>{new Date(user.createdAt).toLocaleDateString()}</td>
// //                         <td>
// //                           <span className={`status-badge ${user.status}`}>
// //                             {user.status.charAt(0).toUpperCase() +
// //                               user.status.slice(1)}
// //                           </span>
// //                         </td>
// //                         <td>
// //                           <button
// //                             className="view-btn"
// //                             onClick={() => setSelectedUser(user)}
// //                           >
// //                             View
// //                           </button>
// //                         </td>
// //                       </tr>
// //                     ))}
// //                   </tbody>
// //                 </table>
// //               </div>
// //             </div>

// //             {selectedUser && (
// //               <UserVerificationModal
// //                 user={selectedUser}
// //                 onClose={() => {
// //                   setSelectedUser(null);
// //                   // Refresh KYC data after approval/rejection
// //                   const fetchKycData = async () => {
// //                     try {
// //                       const response = await fetch(
// //                         "http://localhost:3000/api/kyc/all"
// //                       );
// //                       const data = await response.json();
// //                       if (response.ok) {
// //                         setKycData(data);
// //                         // Update stats
// //                         const total = data.length;
// //                         const verified = data.filter(
// //                           (kyc) => kyc.status === "approved"
// //                         ).length;
// //                         const pending = data.filter(
// //                           (kyc) => kyc.status === "pending"
// //                         ).length;
// //                         const rejected = data.filter(
// //                           (kyc) => kyc.status === "rejected"
// //                         ).length;
// //                         setStats({
// //                           totalUsers: total,
// //                           verified,
// //                           pending,
// //                           rejected,
// //                         });
// //                       }
// //                     } catch (error) {
// //                       console.error("Error refreshing KYC data:", error);
// //                     }
// //                   };
// //                   fetchKycData();
// //                 }}
// //               />
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default UserVerification;

// // import React, { useState, useEffect } from "react";
// // import { Users, ArrowLeft } from "lucide-react";
// // import "./UserVerification.css";
// // import Sidebar from "./Sidebar";
// // import Nav from "./Nav";

// // const UserVerificationModal = ({ user, onClose }) => {
// //   const handleReject = async () => {
// //     try {
// //       const response = await fetch(
// //         `http://localhost:3000/api/kyc/update/${user._id}`,
// //         {
// //           method: "PUT",
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //           body: JSON.stringify({ status: "rejected" }),
// //         }
// //       );

// //       const data = await response.json();

// //       if (response.ok) {
// //         alert("KYC rejected successfully!");
// //         onClose();
// //       } else {
// //         alert(`Error: ${data.message || "Failed to reject KYC"}`);
// //       }
// //     } catch (error) {
// //       console.error("Error rejecting KYC:", error);
// //       alert("Something went wrong while rejecting the KYC.");
// //     }
// //   };

// //   const handleApprove = async () => {
// //     try {
// //       const response = await fetch(
// //         `http://localhost:3000/api/kyc/update/${user._id}`,
// //         {
// //           method: "PUT",
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //           body: JSON.stringify({ status: "approved" }),
// //         }
// //       );

// //       const data = await response.json();

// //       if (response.ok) {
// //         alert("KYC approved successfully!");
// //         onClose();
// //       } else {
// //         alert(`Error: ${data.message || "Failed to approve KYC"}`);
// //       }
// //     } catch (error) {
// //       console.error("Error approving KYC:", error);
// //       alert("Something went wrong while approving the KYC.");
// //     }
// //   };

// //   return (
// //     <div className="verification-details-overlay">
// //       <div className="verification-details-container">
// //         <div className="verification-header">
// //           <button className="back-button" onClick={onClose}>
// //             <ArrowLeft size={20} />
// //             <span>Back</span>
// //           </button>
// //           <h2>Personal Information</h2>
// //         </div>

// //         <div className="verification-content">
// //           <div className="user-docs-grid">
// //             <div className="user-doc-item">
// //               <h3>Licence Photo</h3>
// //               <div className="doc-preview">
// //                 {user.licenseImagePath ? (
// //                   <img
// //                     src={`http://localhost:3000${user.licenseImagePath}`}
// //                     alt="License"
// //                   />
// //                 ) : (
// //                   <p>No license image uploaded</p>
// //                 )}
// //               </div>
// //             </div>
// //             <div className="user-doc-item">
// //               <h3>Passport Size Photo</h3>
// //               <div className="doc-preview">
// //                 <img
// //                   src="/passport.jpg"
// //                   alt="Passport"
// //                   onError={(e) => {
// //                     e.target.src = "https://placehold.co/50";
// //                   }}
// //                 />
// //               </div>
// //             </div>
// //           </div>

// //           <div className="user-info">
// //             <p>
// //               <strong>Full Name:</strong> {user.fullName}
// //             </p>
// //             <p>
// //               <strong>Phone Number:</strong> {user.phoneNumber}
// //             </p>
// //             <p>
// //               <strong>Car Details:</strong>{" "}
// //               {user.carId
// //                 ? `${user.carId.carName} (${user.carId.carNumber})`
// //                 : "N/A"}
// //             </p>
// //             <p>
// //               <strong>Booking Type:</strong>{" "}
// //               {user.bookingType
// //                 ? user.bookingType.charAt(0).toUpperCase() +
// //                   user.bookingType.slice(1)
// //                 : "N/A"}
// //             </p>
// //             <p>
// //               <strong>Booking Date & Time:</strong>{" "}
// //               {user.selectedDateTime
// //                 ? new Date(user.selectedDateTime).toLocaleString()
// //                 : "N/A"}
// //             </p>
// //             <p>
// //               <strong>Submission Date:</strong>{" "}
// //               {new Date(user.createdAt).toLocaleDateString()}
// //             </p>
// //           </div>

// //           <div className="verification-actions">
// //             <button className="reject-button" onClick={handleReject}>
// //               <span className="button-icon">✕</span>
// //               Reject Verification
// //             </button>
// //             <button className="approve-button" onClick={handleApprove}>
// //               <span className="button-icon">✓</span>
// //               Approve Verification
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // const UserVerification = () => {
// //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
// //   const [filterStatus, setFilterStatus] = useState("all"); // Lowercase
// //   const [selectedUser, setSelectedUser] = useState(null);
// //   const [kycData, setKycData] = useState([]);
// //   const [stats, setStats] = useState({
// //     totalUsers: 0,
// //     verified: 0,
// //     pending: 0,
// //     rejected: 0,
// //   });
// //   const [error, setError] = useState(null);
// //   const [isLoading, setIsLoading] = useState(false);

// //   const fetchKycData = async () => {
// //     setIsLoading(true);
// //     try {
// //       const response = await fetch("http://localhost:3000/api/kyc/all");
// //       const data = await response.json();

// //       if (response.ok) {
// //         setKycData(data);
// //         const total = data.length;
// //         const verified = data.filter((kyc) => kyc.status === "approved").length;
// //         const pending = data.filter((kyc) => kyc.status === "pending").length;
// //         const rejected = data.filter((kyc) => kyc.status === "rejected").length;
// //         setStats({ totalUsers: total, verified, pending, rejected });
// //         setError(null);
// //       } else {
// //         setError(data.message || "Failed to fetch KYC data");
// //       }
// //     } catch (error) {
// //       console.error("Error fetching KYC data:", error);
// //       setError(
// //         "Failed to connect to the server. Please ensure the backend is running."
// //       );
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchKycData();
// //   }, []);

// //   const filteredUsers =
// //     filterStatus === "all"
// //       ? kycData
// //       : kycData.filter((user) => user.status === filterStatus);

// //   return (
// //     <div className="main-layout">
// //       <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
// //       <div className="main-content">
// //         <Nav onMenuClick={() => setIsSidebarOpen(true)} />
// //         <div className="content-area">
// //           <div className="driver-verification">
// //             <h1>KYC Verification</h1>
// //             {error && (
// //               <div className="error-message">
// //                 {error}
// //                 <button onClick={fetchKycData} className="retry-btn">
// //                   Retry
// //                 </button>
// //               </div>
// //             )}
// //             {isLoading && <div className="loading-message">Loading...</div>}

// //             <div className="stats-container">
// //               <div className="stat-card total">
// //                 <span className="stat-icon">👥</span>
// //                 <div className="stat-info">
// //                   <span className="stat-value">{stats.totalUsers}</span>
// //                   <span className="stat-label">Total Users</span>
// //                 </div>
// //               </div>
// //               <div className="stat-card verified">
// //                 <span className="stat-icon">✓</span>
// //                 <div className="stat-info">
// //                   <span className="stat-value">{stats.verified}</span>
// //                   <span className="stat-label">Verified</span>
// //                 </div>
// //               </div>
// //               <div className="stat-card pending">
// //                 <span className="stat-icon">⏳</span>
// //                 <div className="stat-info">
// //                   <span className="stat-value">{stats.pending}</span>
// //                   <span className="stat-label">Pending</span>
// //                 </div>
// //               </div>
// //               <div className="stat-card rejected">
// //                 <span className="stat-icon">✕</span>
// //                 <div className="stat-info">
// //                   <span className="stat-value">{stats.rejected}</span>
// //                   <span className="stat-label">Rejected</span>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="verification-queue">
// //               <div className="queue-header">
// //                 <h2>Verification Queue</h2>
// //                 <div className="filter-buttons">
// //                   <button
// //                     className={`filter-btn ${
// //                       filterStatus === "all" ? "active" : ""
// //                     }`}
// //                     onClick={() => setFilterStatus("all")}
// //                     aria-label="Filter by all KYC submissions"
// //                     aria-pressed={filterStatus === "all"}
// //                   >
// //                     All
// //                   </button>
// //                   <button
// //                     className={`filter-btn ${
// //                       filterStatus === "pending" ? "active" : ""
// //                     }`}
// //                     onClick={() => setFilterStatus("pending")}
// //                     aria-label="Filter by pending KYC submissions"
// //                     aria-pressed={filterStatus === "pending"}
// //                   >
// //                     Pending
// //                   </button>
// //                   <button
// //                     className={`filter-btn ${
// //                       filterStatus === "approved" ? "active" : ""
// //                     }`}
// //                     onClick={() => setFilterStatus("approved")}
// //                     aria-label="Filter by approved KYC submissions"
// //                     aria-pressed={filterStatus === "approved"}
// //                   >
// //                     Approved
// //                   </button>
// //                   <button
// //                     className={`filter-btn ${
// //                       filterStatus === "rejected" ? "active" : ""
// //                     }`}
// //                     onClick={() => setFilterStatus("rejected")}
// //                     aria-label="Filter by rejected KYC submissions"
// //                     aria-pressed={filterStatus === "rejected"}
// //                   >
// //                     Rejected
// //                   </button>
// //                 </div>
// //               </div>

// //               <div className="queue-table">
// //                 <table>
// //                   <thead>
// //                     <tr>
// //                       <th>ID</th>
// //                       <th>Owner</th>
// //                       <th>Number</th>
// //                       <th>Car Details</th>
// //                       <th>Booking Type</th>
// //                       <th>Booking Date & Time</th>
// //                       <th>Submission Date</th>
// //                       <th>Status</th>
// //                       <th>Actions</th>
// //                     </tr>
// //                   </thead>
// //                   <tbody>
// //                     {filteredUsers.map((user) => (
// //                       <tr key={user._id}>
// //                         <td>{user._id.slice(-6)}</td>
// //                         <td>{user.fullName}</td>
// //                         <td>{user.phoneNumber}</td>
// //                         <td>
// //                           {user.carId
// //                             ? `${user.carId.carName} (${user.carId.carNumber})`
// //                             : "N/A"}
// //                         </td>
// //                         <td>
// //                           {user.bookingType
// //                             ? user.bookingType.charAt(0).toUpperCase() +
// //                               user.bookingType.slice(1)
// //                             : "N/A"}
// //                         </td>
// //                         <td>
// //                           {user.selectedDateTime
// //                             ? new Date(user.selectedDateTime).toLocaleString()
// //                             : "N/A"}
// //                         </td>
// //                         <td>{new Date(user.createdAt).toLocaleDateString()}</td>
// //                         <td>
// //                           <span className={`status-badge ${user.status}`}>
// //                             {user.status.charAt(0).toUpperCase() +
// //                               user.status.slice(1)}
// //                           </span>
// //                         </td>
// //                         <td>
// //                           <button
// //                             className="view-btn"
// //                             onClick={() => setSelectedUser(user)}
// //                           >
// //                             View
// //                           </button>
// //                         </td>
// //                       </tr>
// //                     ))}
// //                   </tbody>
// //                 </table>
// //               </div>
// //             </div>

// //             {selectedUser && (
// //               <UserVerificationModal
// //                 user={selectedUser}
// //                 onClose={() => {
// //                   setSelectedUser(null);
// //                   fetchKycData();
// //                 }}
// //               />
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default UserVerification;

// // import React, { useState, useEffect } from "react";
// // import { Users, ArrowLeft } from "lucide-react";
// // import "./UserVerification.css";
// // import Sidebar from "./Sidebar";
// // import Nav from "./Nav";

// // const UserVerificationModal = ({ user, onClose }) => {
// //   const handleReject = async () => {
// //     try {
// //       const response = await fetch(
// //         `http://localhost:3000/api/kyc/update/${user._id}`,
// //         {
// //           method: "PUT",
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //           body: JSON.stringify({ status: "rejected" }),
// //         }
// //       );

// //       const data = await response.json();

// //       if (response.ok) {
// //         alert("KYC rejected successfully!");
// //         onClose();
// //       } else {
// //         alert(`Error: ${data.message || "Failed to reject KYC"}`);
// //       }
// //     } catch (error) {
// //       console.error("Error rejecting KYC:", error);
// //       alert("Something went wrong while rejecting the KYC.");
// //     }
// //   };

// //   const handleApprove = async () => {
// //     try {
// //       const response = await fetch(
// //         `http://localhost:3000/api/kyc/update/${user._id}`,
// //         {
// //           method: "PUT",
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //           body: JSON.stringify({ status: "approved" }),
// //         }
// //       );

// //       const data = await response.json();

// //       if (response.ok) {
// //         alert("KYC approved successfully!");
// //         onClose();
// //       } else {
// //         alert(`Error: ${data.message || "Failed to approve KYC"}`);
// //       }
// //     } catch (error) {
// //       console.error("Error approving KYC:", error);
// //       alert("Something went wrong while approving the KYC.");
// //     }
// //   };

// //   return (
// //     <div className="verification-details-overlay">
// //       <div className="verification-details-container">
// //         <div className="verification-header">
// //           <button className="back-button" onClick={onClose}>
// //             <ArrowLeft size={20} />
// //             <span>Back</span>
// //           </button>
// //           <h2>Personal Information</h2>
// //         </div>

// //         <div className="verification-content">
// //           <div className="user-docs-grid">
// //             <div className="user-doc-item">
// //               <h3>Licence Photo</h3>
// //               <div className="doc-preview">
// //                 {user.licenseImagePath ? (
// //                   <img
// //                     src={`http://localhost:3000${user.licenseImagePath}`}
// //                     alt="License"
// //                   />
// //                 ) : (
// //                   <p>No license image uploaded</p>
// //                 )}
// //               </div>
// //             </div>
// //           </div>

// //           <div className="user-info">
// //             <p>
// //               <strong>Full Name:</strong> {user.fullName}
// //             </p>
// //             <p>
// //               <strong>Phone Number:</strong> {user.phoneNumber}
// //             </p>
// //             <p>
// //               <strong>Car Details:</strong>{" "}
// //               {user.carId
// //                 ? `${user.carId.carName} (${user.carId.carNumber})`
// //                 : "N/A"}
// //             </p>
// //             <p>
// //               <strong>Booking Type:</strong>{" "}
// //               {user.bookingType
// //                 ? user.bookingType.charAt(0).toUpperCase() +
// //                   user.bookingType.slice(1)
// //                 : "N/A"}
// //             </p>
// //             <p>
// //               <strong>Booking Date & Time:</strong>{" "}
// //               {user.selectedDateTime
// //                 ? new Date(user.selectedDateTime).toLocaleString()
// //                 : "N/A"}
// //             </p>
// //             <p>
// //               <strong>Submission Date:</strong>{" "}
// //               {new Date(user.createdAt).toLocaleDateString()}
// //             </p>
// //           </div>

// //           <div className="verification-actions">
// //             <button className="reject-button" onClick={handleReject}>
// //               <span className="button-icon">✕</span>
// //               Reject Verification
// //             </button>
// //             <button className="approve-button" onClick={handleApprove}>
// //               <span className="button-icon">✓</span>
// //               Approve Verification
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // const UserVerification = () => {
// //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
// //   const [filterStatus, setFilterStatus] = useState("all");
// //   const [selectedUser, setSelectedUser] = useState(null);
// //   const [kycData, setKycData] = useState([]);
// //   const [stats, setStats] = useState({
// //     totalUsers: 0,
// //     verified: 0,
// //     pending: 0,
// //     rejected: 0,
// //   });
// //   const [error, setError] = useState(null);
// //   const [isLoading, setIsLoading] = useState(false);

// //   const fetchKycData = async () => {
// //     setIsLoading(true);
// //     try {
// //       const response = await fetch("http://localhost:3000/api/kyc/all");
// //       const data = await response.json();

// //       if (response.ok) {
// //         setKycData(data);
// //         const total = data.length;
// //         const verified = data.filter((kyc) => kyc.status === "approved").length;
// //         const pending = data.filter((kyc) => kyc.status === "pending").length;
// //         const rejected = data.filter((kyc) => kyc.status === "rejected").length;
// //         setStats({ totalUsers: total, verified, pending, rejected });
// //         setError(null);
// //       } else {
// //         setError(data.message || "Failed to fetch KYC data");
// //       }
// //     } catch (error) {
// //       console.error("Error fetching KYC data:", error);
// //       setError(
// //         "Failed to connect to the server. Please ensure the backend is running."
// //       );
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchKycData();
// //   }, []);

// //   const filteredUsers =
// //     filterStatus === "all"
// //       ? kycData
// //       : kycData.filter((user) => user.status === filterStatus);

// //   return (
// //     <div className="main-layout">
// //       <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
// //       <div className="main-content">
// //         <Nav onMenuClick={() => setIsSidebarOpen(true)} />
// //         <div className="content-area">
// //           <div className="driver-verification">
// //             <h1>KYC Verification</h1>
// //             {error && (
// //               <div className="error-message">
// //                 {error}
// //                 <button onClick={fetchKycData} className="retry-btn">
// //                   Retry
// //                 </button>
// //               </div>
// //             )}
// //             {isLoading && <div className="loading-message">Loading...</div>}

// //             <div className="stats-container">
// //               <div className="stat-card total">
// //                 <span className="stat-icon">👥</span>
// //                 <div className="stat-info">
// //                   <span className="stat-value">{stats.totalUsers}</span>
// //                   <span className="stat-label">Total Users</span>
// //                 </div>
// //               </div>
// //               <div className="stat-card verified">
// //                 <span className="stat-icon">✓</span>
// //                 <div className="stat-info">
// //                   <span className="stat-value">{stats.verified}</span>
// //                   <span className="stat-label">Verified</span>
// //                 </div>
// //               </div>
// //               <div className="stat-card pending">
// //                 <span className="stat-icon">⏳</span>
// //                 <div className="stat-info">
// //                   <span className="stat-value">{stats.pending}</span>
// //                   <span className="stat-label">Pending</span>
// //                 </div>
// //               </div>
// //               <div className="stat-card rejected">
// //                 <span className="stat-icon">✕</span>
// //                 <div className="stat-info">
// //                   <span className="stat-value">{stats.rejected}</span>
// //                   <span className="stat-label">Rejected</span>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="verification-queue">
// //               <div className="queue-header">
// //                 <h2>Verification Queue</h2>
// //                 <div className="filter-buttons">
// //                   <button
// //                     className={`filter-btn ${
// //                       filterStatus === "all" ? "active" : ""
// //                     }`}
// //                     onClick={() => setFilterStatus("all")}
// //                     aria-label="Filter by all KYC submissions"
// //                     aria-pressed={filterStatus === "all"}
// //                   >
// //                     All
// //                   </button>
// //                   <button
// //                     className={`filter-btn ${
// //                       filterStatus === "pending" ? "active" : ""
// //                     }`}
// //                     onClick={() => setFilterStatus("pending")}
// //                     aria-label="Filter by pending KYC submissions"
// //                     aria-pressed={filterStatus === "pending"}
// //                   >
// //                     Pending
// //                   </button>
// //                   <button
// //                     className={`filter-btn ${
// //                       filterStatus === "approved" ? "active" : ""
// //                     }`}
// //                     onClick={() => setFilterStatus("approved")}
// //                     aria-label="Filter by approved KYC submissions"
// //                     aria-pressed={filterStatus === "approved"}
// //                   >
// //                     Approved
// //                   </button>
// //                   <button
// //                     className={`filter-btn ${
// //                       filterStatus === "rejected" ? "active" : ""
// //                     }`}
// //                     onClick={() => setFilterStatus("rejected")}
// //                     aria-label="Filter by rejected KYC submissions"
// //                     aria-pressed={filterStatus === "rejected"}
// //                   >
// //                     Rejected
// //                   </button>
// //                 </div>
// //               </div>

// //               <div className="queue-table">
// //                 <table>
// //                   <thead>
// //                     <tr>
// //                       <th>ID</th>
// //                       <th>Owner</th>
// //                       <th>Number</th>
// //                       <th>Car Details</th>
// //                       <th>Booking Type</th>
// //                       <th>Booking Date & Time</th>
// //                       <th>Submission Date</th>
// //                       <th>Status</th>
// //                       <th>Actions</th>
// //                     </tr>
// //                   </thead>
// //                   <tbody>
// //                     {filteredUsers.map((user) => (
// //                       <tr key={user._id}>
// //                         <td>{user._id.slice(-6)}</td>
// //                         <td>{user.fullName}</td>
// //                         <td>{user.phoneNumber}</td>
// //                         <td>
// //                           {user.carId
// //                             ? `${user.carId.carName} (${user.carId.carNumber})`
// //                             : "N/A"}
// //                         </td>
// //                         <td>
// //                           {user.bookingType
// //                             ? user.bookingType.charAt(0).toUpperCase() +
// //                               user.bookingType.slice(1)
// //                             : "N/A"}
// //                         </td>
// //                         <td>
// //                           {user.selectedDateTime
// //                             ? new Date(user.selectedDateTime).toLocaleString()
// //                             : "N/A"}
// //                         </td>
// //                         <td>{new Date(user.createdAt).toLocaleDateString()}</td>
// //                         <td>
// //                           <span className={`status-badge ${user.status}`}>
// //                             {user.status.charAt(0).toUpperCase() +
// //                               user.status.slice(1)}
// //                           </span>
// //                         </td>
// //                         <td>
// //                           <button
// //                             className="view-btn"
// //                             onClick={() => setSelectedUser(user)}
// //                           >
// //                             View
// //                           </button>
// //                         </td>
// //                       </tr>
// //                     ))}
// //                   </tbody>
// //                 </table>
// //               </div>
// //             </div>

// //             {selectedUser && (
// //               <UserVerificationModal
// //                 user={selectedUser}
// //                 onClose={() => {
// //                   setSelectedUser(null);
// //                   fetchKycData();
// //                 }}
// //               />
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default UserVerification;

// // import React, { useState, useEffect } from "react";
// // import { Users, ArrowLeft } from "lucide-react";
// // import "./UserVerification.css";
// // import Sidebar from "./Sidebar";
// // import Nav from "./Nav";

// // const UserVerificationModal = ({ user, onClose }) => {
// //   const handleReject = async () => {
// //     try {
// //       const response = await fetch(
// //         `http://localhost:3000/api/kyc/update/${user._id}`,
// //         {
// //           method: "PUT",
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //           body: JSON.stringify({ status: "rejected" }),
// //         }
// //       );

// //       const data = await response.json();

// //       if (response.ok) {
// //         alert("KYC rejected successfully!");
// //         onClose();
// //       } else {
// //         alert(`Error: ${data.message || "Failed to reject KYC"}`);
// //       }
// //     } catch (error) {
// //       console.error("Error rejecting KYC:", error);
// //       alert("Something went wrong while rejecting the KYC.");
// //     }
// //   };

// //   const handleApprove = async () => {
// //     try {
// //       const response = await fetch(
// //         `http://localhost:3000/api/kyc/update/${user._id}`,
// //         {
// //           method: "PUT",
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //           body: JSON.stringify({ status: "approved" }),
// //         }
// //       );

// //       const data = await response.json();

// //       if (response.ok) {
// //         alert("KYC approved successfully!");
// //         onClose();
// //       } else {
// //         alert(`Error: ${data.message || "Failed to approve KYC"}`);
// //       }
// //     } catch (error) {
// //       console.error("Error approving KYC:", error);
// //       alert("Something went wrong while approving the KYC.");
// //     }
// //   };

// //   return (
// //     <div className="verification-details-overlay">
// //       <button className="overlay-back-button" onClick={onClose}>
// //         <ArrowLeft size={24} />
// //         <span>Back</span>
// //       </button>
// //       <div className="verification-details-container">
// //         <div className="verification-header">
// //           <button className="back-button" onClick={onClose}>
// //             {/* <ArrowLeft size={20} /> */}
// //             {/* <span>Back</span> */}
// //           </button>
// //           <h2>Personal Information</h2>
// //         </div>

// //         <div className="verification-content">
// //           <div className="user-docs-grid">
// //             <div className="user-doc-item">
// //               <h3>Licence Photo</h3>
// //               <div className="doc-preview">
// //                 {user.licenseImagePath ? (
// //                   <img
// //                     src={`http://localhost:3000${user.licenseImagePath}`}
// //                     alt="License"
// //                     className="license-image"
// //                   />
// //                 ) : (
// //                   <p>No license image uploaded</p>
// //                 )}
// //               </div>
// //             </div>
// //           </div>

// //           <div className="user-info">
// //             <h2>User Details</h2>
// //             <br></br>
// //             <p>
// //               <strong>Full Name:</strong> {user.fullName}
// //             </p>
// //             <p>
// //               <strong>Phone Number:</strong> {user.phoneNumber}
// //             </p>
// //             <br></br>
// //             <h2>Car Details</h2>
// //             <div className="car-details-box">
// //               <div className="car-details-content">
// //                 <div className="car-photo-container">
// //                   {user.carId && user.carId.photos?.length > 0 ? (
// //                     <img
// //                       src={`http://localhost:3000/uploads/${user.carId.photos[0]}`}
// //                       alt={user.carId.carName}
// //                       className="car-image"
// //                     />
// //                   ) : (
// //                     <img
// //                       src="/images/placeholder.png"
// //                       alt="Car Placeholder"
// //                       className="car-image"
// //                     />
// //                   )}
// //                 </div>
// //                 <div className="car-info">
// //                   <p>
// //                     <strong>Car Name:</strong>{" "}
// //                     {user.carId ? user.carId.carName : "N/A"}
// //                   </p>
// //                   <p>
// //                     <strong>Vehicle Number:</strong>{" "}
// //                     {user.carId ? user.carId.carNumber : "N/A"}
// //                   </p>
// //                 </div>
// //               </div>
// //             </div>
// //             <br></br>
// //             <h2>Booking Details</h2>
// //             <br></br>
// //             <p>
// //               <strong>Booking Type:</strong>{" "}
// //               {user.bookingType
// //                 ? user.bookingType.charAt(0).toUpperCase() +
// //                   user.bookingType.slice(1)
// //                 : "N/A"}
// //             </p>
// //             <p>
// //               <strong>Booking Start Date:</strong>{" "}
// //               {user.selectedDateTime
// //                 ? new Date(user.selectedDateTime).toLocaleString()
// //                 : "N/A"}
// //             </p>
// //             <p>
// //               <strong>Booking End Date:</strong>{" "}
// //               {user.endDateTime
// //                 ? new Date(user.endDateTime).toLocaleString()
// //                 : "N/A"}
// //             </p>
// //             <p>
// //               <strong>Submission Date:</strong>{" "}
// //               {new Date(user.createdAt).toLocaleDateString()}
// //             </p>
// //           </div>

// //           <div className="verification-actions">
// //             <button className="reject-button" onClick={handleReject}>
// //               <span className="button-icon">✕</span>
// //               Reject Verification
// //             </button>
// //             <button className="approve-button" onClick={handleApprove}>
// //               <span className="button-icon">✓</span>
// //               Approve Verification
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // const UserVerification = () => {
// //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
// //   const [filterStatus, setFilterStatus] = useState("all");
// //   const [selectedUser, setSelectedUser] = useState(null);
// //   const [kycData, setKycData] = useState([]);
// //   const [stats, setStats] = useState({
// //     totalUsers: 0,
// //     verified: 0,
// //     pending: 0,
// //     rejected: 0,
// //   });
// //   const [error, setError] = useState(null);
// //   const [isLoading, setIsLoading] = useState(false);

// //   const fetchKycData = async () => {
// //     setIsLoading(true);
// //     try {
// //       const response = await fetch("http://localhost:3000/api/kyc/all");
// //       const data = await response.json();

// //       if (response.ok) {
// //         setKycData(data);
// //         const total = data.length;
// //         const verified = data.filter((kyc) => kyc.status === "approved").length;
// //         const pending = data.filter((kyc) => kyc.status === "pending").length;
// //         const rejected = data.filter((kyc) => kyc.status === "rejected").length;
// //         setStats({ totalUsers: total, verified, pending, rejected });
// //         setError(null);
// //       } else {
// //         setError(data.message || "Failed to fetch KYC data");
// //       }
// //     } catch (error) {
// //       console.error("Error fetching KYC data:", error);
// //       setError(
// //         "Failed to connect to the server. Please ensure the backend is running."
// //       );
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchKycData();
// //   }, []);

// //   const filteredUsers =
// //     filterStatus === "all"
// //       ? kycData
// //       : kycData.filter((user) => user.status === filterStatus);

// //   return (
// //     <div className="main-layout">
// //       <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
// //       <div className="main-content">
// //         <Nav onMenuClick={() => setIsSidebarOpen(true)} />
// //         <div className="content-area">
// //           <div className="driver-verification">
// //             <h1>KYC Verification</h1>
// //             {error && (
// //               <div className="error-message">
// //                 {error}
// //                 <button onClick={fetchKycData} className="retry-btn">
// //                   Retry
// //                 </button>
// //               </div>
// //             )}
// //             {isLoading && <div className="loading-message">Loading...</div>}

// //             <div className="stats-container">
// //               <div className="stat-card total">
// //                 <span className="stat-icon">👥</span>
// //                 <div className="stat-info">
// //                   <span className="stat-value">{stats.totalUsers}</span>
// //                   <span className="stat-label">Total Users</span>
// //                 </div>
// //               </div>
// //               <div className="stat-card verified">
// //                 <span className="stat-icon">✓</span>
// //                 <div className="stat-info">
// //                   <span className="stat-value">{stats.verified}</span>
// //                   <span className="stat-label">Verified</span>
// //                 </div>
// //               </div>
// //               <div className="stat-card pending">
// //                 <span className="stat-icon">⏳</span>
// //                 <div className="stat-info">
// //                   <span className="stat-value">{stats.pending}</span>
// //                   <span className="stat-label">Pending</span>
// //                 </div>
// //               </div>
// //               <div className="stat-card rejected">
// //                 <span className="stat-icon">✕</span>
// //                 <div className="stat-info">
// //                   <span className="stat-value">{stats.rejected}</span>
// //                   <span className="stat-label">Rejected</span>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="verification-queue">
// //               <div className="queue-header">
// //                 <h2>Verification Queue</h2>
// //                 <div className="filter-buttons">
// //                   <button
// //                     className={`filter-btn ${
// //                       filterStatus === "all" ? "active" : ""
// //                     }`}
// //                     onClick={() => setFilterStatus("all")}
// //                     aria-label="Filter by all KYC submissions"
// //                     aria-pressed={filterStatus === "all"}
// //                   >
// //                     All
// //                   </button>
// //                   <button
// //                     className={`filter-btn ${
// //                       filterStatus === "pending" ? "active" : ""
// //                     }`}
// //                     onClick={() => setFilterStatus("pending")}
// //                     aria-label="Filter by pending KYC submissions"
// //                     aria-pressed={filterStatus === "pending"}
// //                   >
// //                     Pending
// //                   </button>
// //                   <button
// //                     className={`filter-btn ${
// //                       filterStatus === "approved" ? "active" : ""
// //                     }`}
// //                     onClick={() => setFilterStatus("approved")}
// //                     aria-label="Filter by approved KYC submissions"
// //                     aria-pressed={filterStatus === "approved"}
// //                   >
// //                     Approved
// //                   </button>
// //                   <button
// //                     className={`filter-btn ${
// //                       filterStatus === "rejected" ? "active" : ""
// //                     }`}
// //                     onClick={() => setFilterStatus("rejected")}
// //                     aria-label="Filter by rejected KYC submissions"
// //                     aria-pressed={filterStatus === "rejected"}
// //                   >
// //                     Rejected
// //                   </button>
// //                 </div>
// //               </div>

// //               <div className="queue-table">
// //                 <table>
// //                   <thead>
// //                     <tr>
// //                       <th>ID</th>
// //                       <th>Owner</th>
// //                       <th>Number</th>
// //                       <th>Car Details</th>
// //                       <th>Booking Type</th>
// //                       <th>Booking Date & Time</th>
// //                       <th>Submission Date</th>
// //                       <th>Status</th>
// //                       <th>Actions</th>
// //                     </tr>
// //                   </thead>
// //                   <tbody>
// //                     {filteredUsers.map((user) => (
// //                       <tr key={user._id}>
// //                         <td>{user._id.slice(-6)}</td>
// //                         <td>{user.fullName}</td>
// //                         <td>{user.phoneNumber}</td>
// //                         <td>
// //                           {user.carId
// //                             ? `${user.carId.carName} (${user.carId.carNumber})`
// //                             : "N/A"}
// //                         </td>
// //                         <td>
// //                           {user.bookingType
// //                             ? user.bookingType.charAt(0).toUpperCase() +
// //                               user.bookingType.slice(1)
// //                             : "N/A"}
// //                         </td>
// //                         <td>
// //                           {user.selectedDateTime
// //                             ? new Date(user.selectedDateTime).toLocaleString()
// //                             : "N/A"}
// //                         </td>
// //                         <td>{new Date(user.createdAt).toLocaleDateString()}</td>
// //                         <td>
// //                           <span className={`status-badge ${user.status}`}>
// //                             {user.status.charAt(0).toUpperCase() +
// //                               user.status.slice(1)}
// //                           </span>
// //                         </td>
// //                         <td>
// //                           <button
// //                             className="view-btn"
// //                             onClick={() => setSelectedUser(user)}
// //                           >
// //                             View
// //                           </button>
// //                         </td>
// //                       </tr>
// //                     ))}
// //                   </tbody>
// //                 </table>
// //               </div>
// //             </div>

// //             {selectedUser && (
// //               <UserVerificationModal
// //                 user={selectedUser}
// //                 onClose={() => {
// //                   setSelectedUser(null);
// //                   fetchKycData();
// //                 }}
// //               />
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default UserVerification;

// import React, { useState, useEffect } from "react";
// import { Users, ArrowLeft } from "lucide-react";
// import "./UserVerification.css";
// import Sidebar from "./Sidebar";
// import Nav from "./Nav";

// const UserVerificationModal = ({ user, onClose }) => {
//   const handleReject = async () => {
//     try {
//       const response = await fetch(
//         `http://localhost:3000/api/kyc/update/${user._id}`,
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ status: "rejected" }),
//         }
//       );

//       const data = await response.json();

//       if (response.ok) {
//         alert("KYC rejected successfully!");
//         onClose();
//       } else {
//         alert(`Error: ${data.message || "Failed to reject KYC"}`);
//       }
//     } catch (error) {
//       console.error("Error rejecting KYC:", error);
//       alert("Something went wrong while rejecting the KYC.");
//     }
//   };

//   const handleApprove = async () => {
//     try {
//       const response = await fetch(
//         `http://localhost:3000/api/kyc/update/${user._id}`,
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ status: "approved" }),
//         }
//       );

//       const data = await response.json();

//       if (response.ok) {
//         alert("KYC approved successfully!");
//         onClose();
//       } else {
//         alert(`Error: ${data.message || "Failed to approve KYC"}`);
//       }
//     } catch (error) {
//       console.error("Error approving KYC:", error);
//       alert("Something went wrong while approving the KYC.");
//     }
//   };

//   return (
//     <div className="verification-details-overlay">
//       <button className="overlay-back-button" onClick={onClose}>
//         <ArrowLeft size={24} />
//         <span>Back</span>
//       </button>
//       <div className="verification-details-container">
//         <div className="verification-header">
//           <button className="back-button" onClick={onClose}>
//             {/* <ArrowLeft size={20} /> */}
//             {/* <span>Back</span> */}
//           </button>
//           <h2>Personal Information</h2>
//         </div>

//         <div className="verification-content">
//           <div className="user-docs-grid">
//             <div className="user-doc-item">
//               <h3>Licence Photo</h3>
//               <div className="doc-preview">
//                 {user.licenseImagePath ? (
//                   <img
//                     src={`http://localhost:3000${user.licenseImagePath}`}
//                     alt="License"
//                     className="license-image"
//                   />
//                 ) : (
//                   <p>No license image uploaded</p>
//                 )}
//               </div>
//             </div>
//           </div>

//           <div className="user-info">
//             <h2>User Details</h2>
//             <br></br>
//             <p>
//               <strong>Full Name:</strong> {user.fullName}
//             </p>
//             <p>
//               <strong>Phone Number:</strong> {user.phoneNumber}
//             </p>
//             <br></br>
//             <h2>Car Details</h2>
//             <div className="car-details-box">
//               <div className="car-details-content">
//                 <div className="car-photo-container">
//                   {user.carId && user.carId.photos?.length > 0 ? (
//                     <img
//                       src={`http://localhost:3000/uploads/${user.carId.photos[0]}`}
//                       alt={user.carId.carName}
//                       className="car-image"
//                     />
//                   ) : (
//                     <img
//                       src="/images/placeholder.png"
//                       alt="Car Placeholder"
//                       className="car-image"
//                     />
//                   )}
//                 </div>
//                 <div className="car-info">
//                   <p>
//                     <strong>Car Name:</strong>{" "}
//                     {user.carId ? user.carId.carName : "N/A"}
//                   </p>
//                   <p>
//                     <strong>Vehicle Number:</strong>{" "}
//                     {user.carId ? user.carId.carNumber : "N/A"}
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <br></br>
//             <h2>Booking Details</h2>
//             <br></br>
//             <p>
//               <strong>Booking Type:</strong>{" "}
//               {user.bookingType
//                 ? user.bookingType.charAt(0).toUpperCase() +
//                   user.bookingType.slice(1)
//                 : "N/A"}
//             </p>
//             <p>
//               <strong>Booking Start Date:</strong>{" "}
//               {user.startDateTime
//                 ? new Date(user.startDateTime).toLocaleString()
//                 : "N/A"}
//             </p>
//             <p>
//               <strong>Booking End Date:</strong>{" "}
//               {user.endDateTime
//                 ? new Date(user.endDateTime).toLocaleString()
//                 : "N/A"}
//             </p>
//             <p>
//               <strong>Submission Date:</strong>{" "}
//               {new Date(user.createdAt).toLocaleDateString()}
//             </p>
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

// const UserVerification = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [filterStatus, setFilterStatus] = useState("all");
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [kycData, setKycData] = useState([]);
//   const [stats, setStats] = useState({
//     totalUsers: 0,
//     verified: 0,
//     pending: 0,
//     rejected: 0,
//   });
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const fetchKycData = async () => {
//     setIsLoading(true);
//     try {
//       const response = await fetch("http://localhost:3000/api/kyc/all");
//       const data = await response.json();

//       if (response.ok) {
//         setKycData(data);
//         const total = data.length;
//         const verified = data.filter((kyc) => kyc.status === "approved").length;
//         const pending = data.filter((kyc) => kyc.status === "pending").length;
//         const rejected = data.filter((kyc) => kyc.status === "rejected").length;
//         setStats({ totalUsers: total, verified, pending, rejected });
//         setError(null);
//       } else {
//         setError(data.message || "Failed to fetch KYC data");
//       }
//     } catch (error) {
//       console.error("Error fetching KYC data:", error);
//       setError(
//         "Failed to connect to the server. Please ensure the backend is running."
//       );
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchKycData();
//   }, []);

//   const filteredUsers =
//     filterStatus === "all"
//       ? kycData
//       : kycData.filter((user) => user.status === filterStatus);

//   return (
//     <div className="main-layout">
//       <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
//       <div className="main-content">
//         <Nav onMenuClick={() => setIsSidebarOpen(true)} />
//         <div className="content-area">
//           <div className="driver-verification">
//             <h1>KYC Verification</h1>
//             {error && (
//               <div className="error-message">
//                 {error}
//                 <button onClick={fetchKycData} className="retry-btn">
//                   Retry
//                 </button>
//               </div>
//             )}
//             {isLoading && <div className="loading-message">Loading...</div>}

//             <div className="stats-container">
//               <div className="stat-card total">
//                 <span className="stat-icon">👥</span>
//                 <div className="stat-info">
//                   <span className="stat-value">{stats.totalUsers}</span>
//                   <span className="stat-label">Total Users</span>
//                 </div>
//               </div>
//               <div className="stat-card verified">
//                 <span className="stat-icon">✓</span>
//                 <div className="stat-info">
//                   <span className="stat-value">{stats.verified}</span>
//                   <span className="stat-label">Verified</span>
//                 </div>
//               </div>
//               <div className="stat-card pending">
//                 <span className="stat-icon">⏳</span>
//                 <div className="stat-info">
//                   <span className="stat-value">{stats.pending}</span>
//                   <span className="stat-label">Pending</span>
//                 </div>
//               </div>
//               <div className="stat-card rejected">
//                 <span className="stat-icon">✕</span>
//                 <div className="stat-info">
//                   <span className="stat-value">{stats.rejected}</span>
//                   <span className="stat-label">Rejected</span>
//                 </div>
//               </div>
//             </div>

//             <div className="verification-queue">
//               <div className="queue-header">
//                 <h2>Verification Queue</h2>
//                 <div className="filter-buttons">
//                   <button
//                     className={`filter-btn ${
//                       filterStatus === "all" ? "active" : ""
//                     }`}
//                     onClick={() => setFilterStatus("all")}
//                     aria-label="Filter by all KYC submissions"
//                     aria-pressed={filterStatus === "all"}
//                   >
//                     All
//                   </button>
//                   <button
//                     className={`filter-btn ${
//                       filterStatus === "pending" ? "active" : ""
//                     }`}
//                     onClick={() => setFilterStatus("pending")}
//                     aria-label="Filter by pending KYC submissions"
//                     aria-pressed={filterStatus === "pending"}
//                   >
//                     Pending
//                   </button>
//                   <button
//                     className={`filter-btn ${
//                       filterStatus === "approved" ? "active" : ""
//                     }`}
//                     onClick={() => setFilterStatus("approved")}
//                     aria-label="Filter by approved KYC submissions"
//                     aria-pressed={filterStatus === "approved"}
//                   >
//                     Approved
//                   </button>
//                   <button
//                     className={`filter-btn ${
//                       filterStatus === "rejected" ? "active" : ""
//                     }`}
//                     onClick={() => setFilterStatus("rejected")}
//                     aria-label="Filter by rejected KYC submissions"
//                     aria-pressed={filterStatus === "rejected"}
//                   >
//                     Rejected
//                   </button>
//                 </div>
//               </div>

//               <div className="queue-table">
//                 <table>
//                   <thead>
//                     <tr>
//                       <th>ID</th>
//                       <th>Owner</th>
//                       <th>Number</th>
//                       <th>Car Details</th>
//                       <th>Booking Type</th>
//                       <th>Start Date & Time</th>
//                       <th>End Date & Time</th>
//                       <th>Submission Date</th>
//                       <th>Status</th>
//                       <th>Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {filteredUsers.map((user) => (
//                       <tr key={user._id}>
//                         <td>{user._id.slice(-6)}</td>
//                         <td>{user.fullName}</td>
//                         <td>{user.phoneNumber}</td>
//                         <td>
//                           {user.carId
//                             ? `${user.carId.carName} (${user.carId.carNumber})`
//                             : "N/A"}
//                         </td>
//                         <td>
//                           {user.bookingType
//                             ? user.bookingType.charAt(0).toUpperCase() +
//                               user.bookingType.slice(1)
//                             : "N/A"}
//                         </td>
//                         <td>
//                           {user.startDateTime
//                             ? new Date(user.startDateTime).toLocaleString()
//                             : "N/A"}
//                         </td>
//                         <td>
//                           {user.endDateTime
//                             ? new Date(user.endDateTime).toLocaleString()
//                             : "N/A"}
//                         </td>
//                         <td>{new Date(user.createdAt).toLocaleDateString()}</td>
//                         <td>
//                           <span className={`status-badge ${user.status}`}>
//                             {user.status.charAt(0).toUpperCase() +
//                               user.status.slice(1)}
//                           </span>
//                         </td>
//                         <td>
//                           <button
//                             className="view-btn"
//                             onClick={() => setSelectedUser(user)}
//                           >
//                             View
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             {selectedUser && (
//               <UserVerificationModal
//                 user={selectedUser}
//                 onClose={() => {
//                   setSelectedUser(null);
//                   fetchKycData();
//                 }}
//               />
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserVerification;

import React, { useState, useEffect } from "react";
import { Users, ArrowLeft } from "lucide-react";
import "./UserVerification.css";
import Sidebar from "./Sidebar";
import Nav from "./Nav";

const UserVerificationModal = ({ user, onClose }) => {
  const handleReject = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/kyc/update/${user._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: "rejected" }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("KYC rejected successfully!");
        onClose();
      } else {
        alert(`Error: ${data.message || "Failed to reject KYC"}`);
      }
    } catch (error) {
      console.error("Error rejecting KYC:", error);
      alert("Something went wrong while rejecting the KYC.");
    }
  };

  const handleApprove = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/kyc/update/${user._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: "approved" }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("KYC approved successfully!");
        onClose();
      } else {
        alert(`Error: ${data.message || "Failed to approve KYC"}`);
      }
    } catch (error) {
      console.error("Error approving KYC:", error);
      alert("Something went wrong while approving the KYC.");
    }
  };

  return (
    <div className="verification-details-overlay">
      <button className="overlay-back-button" onClick={onClose}>
        <ArrowLeft size={24} />
        <span>Back</span>
      </button>
      <div className="verification-details-container">
        <div className="verification-header">
          <button className="back-button" onClick={onClose}>
            {/* <ArrowLeft size={20} /> */}
            {/* <span>Back</span> */}
          </button>
          <h2>Personal Information</h2>
        </div>

        <div className="verification-content">
          <div className="user-docs-grid">
            <div className="user-doc-item">
              <h3>Licence Photo</h3>
              <div className="doc-preview">
                {user.licenseImagePath ? (
                  <img
                    src={`http://localhost:3000${user.licenseImagePath}`}
                    alt="License"
                    className="license-image"
                  />
                ) : (
                  <p>No license image uploaded</p>
                )}
              </div>
            </div>
          </div>

          <div className="user-info">
            <h2>User Details</h2>
            <br></br>
            <p>
              <strong>Full Name:</strong> {user.fullName}
            </p>
            <p>
              <strong>Phone Number:</strong> {user.phoneNumber}
            </p>
            <br></br>
            <h2>Car Details</h2>
            <div className="car-details-box">
              <div className="car-details-content">
                <div className="car-photo-container">
                  {user.carId && user.carId.photos?.length > 0 ? (
                    <img
                      src={`http://localhost:3000/uploads/${user.carId.photos[0]}`}
                      alt={user.carId.carName}
                      className="car-image"
                    />
                  ) : (
                    <img
                      src="/images/placeholder.png"
                      alt="Car Placeholder"
                      className="car-image"
                    />
                  )}
                </div>
                <div className="car-info">
                  <p>
                    <strong>Car Name:</strong>{" "}
                    {user.carId ? user.carId.carName : "N/A"}
                  </p>
                  <p>
                    <strong>Vehicle Number:</strong>{" "}
                    {user.carId ? user.carId.carNumber : "N/A"}
                  </p>
                </div>
              </div>
            </div>
            <br></br>
            <h2>Booking Details</h2>
            <br></br>
            <p>
              <strong>Booking Type:</strong>{" "}
              {user.bookingType
                ? user.bookingType.charAt(0).toUpperCase() +
                  user.bookingType.slice(1)
                : "N/A"}
            </p>
            <p>
              <strong>Booking Start Date:</strong>{" "}
              {user.startDateTime
                ? new Date(user.startDateTime).toLocaleString()
                : "N/A"}
            </p>
            <p>
              <strong>Booking End Date:</strong>{" "}
              {user.endDateTime
                ? new Date(user.endDateTime).toLocaleString()
                : "N/A"}
            </p>
            <p>
              <strong>Submission Date:</strong>{" "}
              {new Date(user.createdAt).toLocaleDateString()}
            </p>
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

const UserVerification = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState("all");
  const [selectedUser, setSelectedUser] = useState(null);
  const [kycData, setKycData] = useState([]);
  const [stats, setStats] = useState({
    totalUsers: 0,
    verified: 0,
    pending: 0,
    rejected: 0,
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchKycData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:3000/api/kyc/all");
      const data = await response.json();

      if (response.ok) {
        setKycData(data);
        const total = data.length;
        const verified = data.filter((kyc) => kyc.status === "approved").length;
        const pending = data.filter((kyc) => kyc.status === "pending").length;
        const rejected = data.filter((kyc) => kyc.status === "rejected").length;
        setStats({ totalUsers: total, verified, pending, rejected });
        setError(null);
      } else {
        setError(data.message || "Failed to fetch KYC data");
      }
    } catch (error) {
      console.error("Error fetching KYC data:", error);
      setError(
        "Failed to connect to the server. Please ensure the backend is running."
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchKycData();
  }, []);

  const filteredUsers =
    filterStatus === "all"
      ? kycData
      : kycData.filter((user) => user.status === filterStatus);

  return (
    <div className="main-layout">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="main-content">
        <Nav onMenuClick={() => setIsSidebarOpen(true)} />
        <div className="content-area">
          <div className="driver-verification">
            <h1>KYC Verification</h1>
            {error && (
              <div className="error-message">
                {error}
                <button onClick={fetchKycData} className="retry-btn">
                  Retry
                </button>
              </div>
            )}
            {isLoading && <div className="loading-message">Loading...</div>}

            <div className="stats-container">
              <div className="stat-card total">
                <span className="stat-icon">👥</span>
                <div className="stat-info">
                  <span className="stat-value">{stats.totalUsers}</span>
                  <span className="stat-label">Total Users</span>
                </div>
              </div>
              <div className="stat-card verified">
                <span className="stat-icon">✓</span>
                <div className="stat-info">
                  <span className="stat-value">{stats.verified}</span>
                  <span className="stat-label">Verified</span>
                </div>
              </div>
              <div className="stat-card pending">
                <span className="stat-icon">⏳</span>
                <div className="stat-info">
                  <span className="stat-value">{stats.pending}</span>
                  <span className="stat-label">Pending</span>
                </div>
              </div>
              <div className="stat-card rejected">
                <span className="stat-icon">✕</span>
                <div className="stat-info">
                  <span className="stat-value">{stats.rejected}</span>
                  <span className="stat-label">Rejected</span>
                </div>
              </div>
            </div>

            <div className="verification-queue">
              <div className="queue-header">
                <h2>Verification Queue</h2>
                <div className="filter-buttons">
                  <button
                    className={`filter-btn ${
                      filterStatus === "all" ? "active" : ""
                    }`}
                    onClick={() => setFilterStatus("all")}
                    aria-label="Filter by all KYC submissions"
                    aria-pressed={filterStatus === "all"}
                  >
                    All
                  </button>
                  <button
                    className={`filter-btn ${
                      filterStatus === "pending" ? "active" : ""
                    }`}
                    onClick={() => setFilterStatus("pending")}
                    aria-label="Filter by pending KYC submissions"
                    aria-pressed={filterStatus === "pending"}
                  >
                    Pending
                  </button>
                  <button
                    className={`filter-btn ${
                      filterStatus === "approved" ? "active" : ""
                    }`}
                    onClick={() => setFilterStatus("approved")}
                    aria-label="Filter by approved KYC submissions"
                    aria-pressed={filterStatus === "approved"}
                  >
                    Approved
                  </button>
                  <button
                    className={`filter-btn ${
                      filterStatus === "rejected" ? "active" : ""
                    }`}
                    onClick={() => setFilterStatus("rejected")}
                    aria-label="Filter by rejected KYC submissions"
                    aria-pressed={filterStatus === "rejected"}
                  >
                    Rejected
                  </button>
                </div>
              </div>

              <div className="queue-table">
                <table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Owner</th>
                      <th>Number</th>
                      <th>Car Details</th>
                      <th>Booking Type</th>
                      <th>Start Date & Time</th>
                      <th>End Date & Time</th>
                      <th>Submission Date</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUsers.map((user) => (
                      <tr key={user._id}>
                        <td>{user._id.slice(-6)}</td>
                        <td>{user.fullName}</td>
                        <td>{user.phoneNumber}</td>
                        <td>
                          {user.carId
                            ? `${user.carId.carName} (${user.carId.carNumber})`
                            : "N/A"}
                        </td>
                        <td>
                          {user.bookingType
                            ? user.bookingType.charAt(0).toUpperCase() +
                              user.bookingType.slice(1)
                            : "N/A"}
                        </td>
                        <td>
                          {user.startDateTime
                            ? new Date(user.startDateTime).toLocaleString()
                            : "N/A"}
                        </td>
                        <td>
                          {user.endDateTime
                            ? new Date(user.endDateTime).toLocaleString()
                            : "N/A"}
                        </td>
                        <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                        <td>
                          <span className={`status-badge ${user.status}`}>
                            {user.status.charAt(0).toUpperCase() +
                              user.status.slice(1)}
                          </span>
                        </td>
                        <td>
                          <button
                            className="view-btn"
                            onClick={() => setSelectedUser(user)}
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {selectedUser && (
              <UserVerificationModal
                user={selectedUser}
                onClose={() => {
                  setSelectedUser(null);
                  fetchKycData();
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserVerification;
