// import React, { useState } from "react";
// import { Search } from "lucide-react";
// import "./DriverVerification.css";
// import Sidebar from "./Sidebar";
// import Nav from "./Nav";
// import VerificationDetails from "./VerificationDetails";

// const DriverVerification = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [filterStatus, setFilterStatus] = useState("All");
//   const [selectedVehicle, setSelectedVehicle] = useState(null);

//   const stats = {
//     totalVehicles: 124,
//     verified: 87,
//     pending: 32,
//     rejected: 5,
//   };

//   const driverData = [
//     {
//       id: "#VH-1042",
//       owner: "Pravesh",
//       vehicle: "Toyota Camry (2022)",
//       status: "Pending",
//     },
//     {
//       id: "#VH-1041",
//       owner: "Rajiv",
//       vehicle: "Honda Civic (2023)",
//       status: "Pending",
//     },
//     {
//       id: "#VH-1040",
//       owner: "Vijay Setupati",
//       vehicle: "Tesla Model 3 (2024)",
//       status: "Approved",
//     },
//     {
//       id: "#VH-1039",
//       owner: "Aayushma",
//       vehicle: "BMW X5 (2021)",
//       status: "Rejected",
//     },
//     {
//       id: "#VH-1038",
//       owner: "Ritesh",
//       vehicle: "Ford Mustang (2022)",
//       status: "Approved",
//     },
//     {
//       id: "#VH-1038",
//       owner: "Deekshya",
//       vehicle: "Ford Mustang (2022)",
//       status: "Approved",
//     },
//     {
//       id: "#VH-1038",
//       owner: "Abhishek",
//       vehicle: "Ford Mustang (2022)",
//       status: "Approved",
//     },
//   ];

//   const filteredDrivers =
//     filterStatus === "All"
//       ? driverData
//       : driverData.filter((driver) => driver.status === filterStatus);

//   return (
//     <div className="main-layout">
//       <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
//       <div className="main-content">
//         <Nav onMenuClick={() => setIsSidebarOpen(true)} />
//         <div className="content-area">
//           <div className="driver-verification">
//             <h1>Driver Verification</h1>

//             <div className="stats-container">
//               <div className="stat-card total">
//                 <span className="stat-icon">🚗</span>
//                 <div className="stat-info">
//                   <span className="stat-value">{stats.totalVehicles}</span>
//                   <span className="stat-label">Total Vehicles</span>
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
//                       filterStatus === "All" ? "active" : ""
//                     }`}
//                     onClick={() => setFilterStatus("All")}
//                   >
//                     All
//                   </button>
//                   <button
//                     className={`filter-btn ${
//                       filterStatus === "Pending" ? "active" : ""
//                     }`}
//                     onClick={() => setFilterStatus("Pending")}
//                   >
//                     Pending
//                   </button>
//                   <button
//                     className={`filter-btn ${
//                       filterStatus === "Approved" ? "active" : ""
//                     }`}
//                     onClick={() => setFilterStatus("Approved")}
//                   >
//                     Approved
//                   </button>
//                   <button
//                     className={`filter-btn ${
//                       filterStatus === "Rejected" ? "active" : ""
//                     }`}
//                     onClick={() => setFilterStatus("Rejected")}
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
//                       <th>Vehicle</th>
//                       <th>Status</th>
//                       <th>Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {filteredDrivers.map((driver) => (
//                       <tr key={`${driver.id}-${driver.owner}`}>
//                         <td>{driver.id}</td>
//                         <td>{driver.owner}</td>
//                         <td>{driver.vehicle}</td>
//                         <td>
//                           <span
//                             className={`status-badge ${driver.status.toLowerCase()}`}
//                           >
//                             {driver.status}
//                           </span>
//                         </td>
//                         <td>
//                           <button
//                             className="view-btn"
//                             onClick={() => setSelectedVehicle(driver)}
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

//             {selectedVehicle && (
//               <VerificationDetails
//                 onClose={() => setSelectedVehicle(null)}
//                 vehicle={selectedVehicle}
//               />
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DriverVerification;

// import React, { useState, useEffect } from "react";
// import Sidebar from "./Sidebar";
// import Nav from "./Nav";
// import VerificationDetails from "./VerificationDetails";
// import "./DriverVerification.css";

// const DriverVerification = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [filterStatus, setFilterStatus] = useState("All");
//   const [selectedVehicle, setSelectedVehicle] = useState(null);
//   const [driverData, setDriverData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Fetch driver data from API on component mount
//   useEffect(() => {
//     const fetchDriverData = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch("http://localhost:3000/api/vehicles"); // Change to your actual API endpoint
//         if (!response.ok) {
//           throw new Error("Failed to fetch driver data");
//         }
//         const data = await response.json();
//         setDriverData(data); // data = [{ id, owner, vehicle, status, ... }, ...]
//         setError(null);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDriverData();
//   }, []);

//   // Stats calculated from driverData
//   const stats = {
//     totalVehicles: driverData.length,
//     verified: driverData.filter((d) => d.status === "Approved").length,
//     pending: driverData.filter((d) => d.status === "Pending").length,
//     rejected: driverData.filter((d) => d.status === "Rejected").length,
//   };

//   // Filter vehicles by status
//   const filteredDrivers =
//     filterStatus === "All"
//       ? driverData
//       : driverData.filter((driver) => driver.status === filterStatus);

//   // Update status locally (you can add API call here)
//   const updateDriverStatus = (id, newStatus) => {
//     setDriverData((prevData) =>
//       prevData.map((driver) =>
//         driver.id === id ? { ...driver, status: newStatus } : driver
//       )
//     );
//     setSelectedVehicle(null);
//   };

//   return (
//     <div className="main-layout">
//       <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
//       <div className="main-content">
//         <Nav onMenuClick={() => setIsSidebarOpen(true)} />
//         <div className="content-area">
//           <div className="driver-verification">
//             <h1>Driver Verification</h1>

//             <div className="stats-container">
//               <div className="stat-card total">
//                 <span className="stat-icon">🚗</span>
//                 <div className="stat-info">
//                   <span className="stat-value">{stats.totalVehicles}</span>
//                   <span className="stat-label">Total Vehicles</span>
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
//                   {["All", "Pending", "Approved", "Rejected"].map((status) => (
//                     <button
//                       key={status}
//                       className={`filter-btn ${
//                         filterStatus === status ? "active" : ""
//                       }`}
//                       onClick={() => setFilterStatus(status)}
//                     >
//                       {status}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {loading && <p>Loading drivers...</p>}
//               {error && <p style={{ color: "red" }}>{error}</p>}

//               {!loading && !error && (
//                 <div className="queue-table">
//                   <table>
//                     <thead>
//                       <tr>
//                         <th>ID</th>
//                         <th>Owner</th>
//                         <th>Vehicle</th>
//                         <th>Status</th>
//                         <th>Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {filteredDrivers.map((driver) => (
//                         <tr key={`${driver.id}-${driver.owner}`}>
//                           <td>{driver.id}</td>
//                           <td>{driver.owner}</td>
//                           <td>{driver.vehicle}</td>
//                           <td>
//                             <span
//                               className={`status-badge ${driver.status.toLowerCase()}`}
//                             >
//                               {driver.status}
//                             </span>
//                           </td>
//                           <td>
//                             <button
//                               className="view-btn"
//                               onClick={() => setSelectedVehicle(driver)}
//                             >
//                               View
//                             </button>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               )}
//             </div>

//             {selectedVehicle && (
//               <VerificationDetails
//                 vehicle={selectedVehicle}
//                 onClose={() => setSelectedVehicle(null)}
//                 onUpdateStatus={updateDriverStatus}
//               />
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DriverVerification;
// import React, { useState, useEffect } from "react";
// import Sidebar from "./Sidebar";
// import Nav from "./Nav";
// import VerificationDetails from "./VerificationDetails";
// import "./DriverVerification.css";

// const DriverVerification = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [filterStatus, setFilterStatus] = useState("All");
//   const [selectedVehicle, setSelectedVehicle] = useState(null);
//   const [driverData, setDriverData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Fetch driver data from API on component mount
//   useEffect(() => {
//     const fetchDriverData = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch("http://localhost:3000/api/vehicles");
//         if (!response.ok) {
//           throw new Error("Failed to fetch driver data");
//         }
//         const data = await response.json();

//         // Map data to extract only necessary fields
//         const formattedData = data.map((vehicle, index) => ({
//           id: index + 1 || "N/A",
//           owner: vehicle.ownerName || "N/A",
//           vehicle: vehicle.vehicleName || "N/A",
//           status: vehicle.status || "N/A",
//         }));

//         setDriverData(formattedData);
//         setError(null);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDriverData();
//   }, []);

//   // Stats calculated from driverData
//   const stats = {
//     totalVehicles: driverData.length,
//     verified: driverData.filter((d) => d.status === "Approved").length,
//     pending: driverData.filter((d) => d.status === "Pending").length,
//     rejected: driverData.filter((d) => d.status === "Rejected").length,
//   };

//   // Filter vehicles by status
//   const filteredDrivers =
//     filterStatus === "All"
//       ? driverData
//       : driverData.filter((driver) => driver.status === filterStatus);

//   // Update status locally (you can add API call here)
//   const updateDriverStatus = (id, newStatus) => {
//     setDriverData((prevData) =>
//       prevData.map((driver) =>
//         driver.id === id ? { ...driver, status: newStatus } : driver
//       )
//     );
//     setSelectedVehicle(null);
//   };

//   return (
//     <div className="main-layout">
//       <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
//       <div className="main-content">
//         <Nav onMenuClick={() => setIsSidebarOpen(true)} />
//         <div className="content-area">
//           <div className="driver-verification">
//             <h1>Driver Verification</h1>

//             <div className="stats-container">
//               <div className="stat-card total">
//                 <span className="stat-icon">🚗</span>
//                 <div className="stat-info">
//                   <span className="stat-value">{stats.totalVehicles}</span>
//                   <span className="stat-label">Total Vehicles</span>
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
//                   {["All", "Pending", "Approved", "Rejected"].map((status) => (
//                     <button
//                       key={status}
//                       className={`filter-btn ${
//                         filterStatus === status ? "active" : ""
//                       }`}
//                       onClick={() => setFilterStatus(status)}
//                     >
//                       {status}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {loading && <p>Loading drivers...</p>}
//               {error && <p style={{ color: "red" }}>{error}</p>}

//               {!loading && !error && (
//                 <div className="queue-table">
//                   <table>
//                     <thead>
//                       <tr>
//                         <th>ID</th>
//                         <th>Owner</th>
//                         <th>Vehicle</th>
//                         <th>Status</th>
//                         <th>Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {filteredDrivers.map((driver) => (
//                         <tr key={`${driver.id}-${driver.owner}`}>
//                           <td>{driver.id}</td>
//                           <td>{driver.owner}</td>
//                           <td>{driver.vehicle}</td>
//                           <td>
//                             <span
//                               className={`status-badge ${driver.status.toLowerCase()}`}
//                             >
//                               {driver.status}
//                             </span>
//                           </td>
//                           <td>
//                             <button
//                               className="view-btn"
//                               onClick={() => setSelectedVehicle(driver)}
//                             >
//                               View
//                             </button>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               )}
//             </div>

//             {selectedVehicle && (
//               <VerificationDetails
//                 vehicle={selectedVehicle}
//                 onClose={() => setSelectedVehicle(null)}
//                 onUpdateStatus={updateDriverStatus}
//               />
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DriverVerification;

import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Nav from "./Nav";
import VerificationDetails from "./VerificationDetails";
import "./DriverVerification.css";

const DriverVerification = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState("All");
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [driverData, setDriverData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch driver data from API on component mount
  useEffect(() => {
    const fetchDriverData = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:3000/api/vehicles");
        if (!response.ok) {
          throw new Error("Failed to fetch driver data");
        }
        const data = await response.json();

        // Keep full data, no mapping to summary
        setDriverData(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDriverData();
  }, []);

  // Stats calculated from driverData
  const stats = {
    totalVehicles: driverData.length,
    verified: driverData.filter((d) => d.status === "Approved").length,
    pending: driverData.filter((d) => d.status === "Pending").length,
    rejected: driverData.filter((d) => d.status === "Rejected").length,
  };

  // Filter vehicles by status
  const filteredDrivers =
    filterStatus === "All"
      ? driverData
      : driverData.filter((driver) => driver.status === filterStatus);

  // Update status locally (you can add API call here)
  const updateDriverStatus = async (id, newStatus) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/vehicles/${id}/status`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: newStatus }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update status");
      }

      // Update local state only after successful update
      setDriverData((prevData) =>
        prevData.map((driver) =>
          driver._id === id ? { ...driver, status: newStatus } : driver
        )
      );

      setSelectedVehicle(null);
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Failed to update status. Please try again.");
    }
  };

  return (
    <div className="main-layout">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="main-content">
        <Nav onMenuClick={() => setIsSidebarOpen(true)} />
        <div className="content-area">
          <div className="driver-verification">
            <h1>Driver Verification</h1>

            <div className="stats-container">
              <div className="stat-card total">
                <span className="stat-icon">🚗</span>
                <div className="stat-info">
                  <span className="stat-value">{stats.totalVehicles}</span>
                  <span className="stat-label">Total Vehicles</span>
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
                  {["All", "Pending", "Approved", "Rejected"].map((status) => (
                    <button
                      key={status}
                      className={`filter-btn ${
                        filterStatus === status ? "active" : ""
                      }`}
                      onClick={() => setFilterStatus(status)}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>

              {loading && <p>Loading drivers...</p>}
              {error && <p style={{ color: "red" }}>{error}</p>}

              {!loading && !error && (
                <div className="queue-table">
                  <table>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Owner</th>
                        <th>Vehicle</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    {/* <tbody>
                      {filteredDrivers.map((driver, index) => (
                        <tr key={driver._id || index}>
                          <td>{index + 1}</td>
                          <td>{driver.ownerName || "N/A"}</td>
                          <td>{driver.vehicleName || "N/A"}</td>
                          <td>
                            <span
                              className={`status-badge ${driver.status?.toLowerCase()}`}
                            >
                              {driver.status || "N/A"}
                            </span>
                          </td>
                          <td>
                            <button
                              className="view-btn"
                              onClick={() => setSelectedVehicle(driver)}
                            >
                              View
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody> */}
                    <tbody>
                      {filteredDrivers.map((driver, index) => (
                        <tr key={driver._id || index}>
                          <td>{driver._id}</td> {/* Displaying the actual ID */}
                          <td>{driver.ownerName || "N/A"}</td>
                          <td>{driver.vehicleName || "N/A"}</td>
                          <td>
                            <span
                              className={`status-badge ${driver.status?.toLowerCase()}`}
                            >
                              {driver.status || "N/A"}
                            </span>
                          </td>
                          <td>
                            <button
                              className="view-btn"
                              onClick={() => setSelectedVehicle(driver)}
                            >
                              View
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {selectedVehicle && (
              <VerificationDetails
                vehicle={selectedVehicle}
                onClose={() => setSelectedVehicle(null)}
                onUpdateStatus={updateDriverStatus}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverVerification;
