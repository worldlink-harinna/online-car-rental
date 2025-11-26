// import React, { useState } from 'react';
// import Nav from './Nav';
// import Sidebar from './Sidebar';
// import './ActiveVechilesTable.css';

// const ActiveVehiclesTable = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const vehicles = [
//     {
//       photo: "🚗",
//       name: "Toyota",
//       type: "Sedan",
//       seats: 5,
//       gearType: "Automatic",
//       ac: "Yes",
//       ratePerDay: "Rs 3,000",
//       carNumber: "BA1354",
//       phoneNumber: "9840999999",
//       bookingType: "With Driver",
//       bookedDate: "8/5/2025",
//       driverName: "Pravesh Lama"
//     },
//     {
//       photo: "🚗",
//       name: "Toyota",
//       type: "Sedan",
//       seats: 5,
//       gearType: "Automatic",
//       ac: "Yes",
//       ratePerDay: "Rs 3,000",
//       carNumber: "BA1354",
//       phoneNumber: "9840999999",
//       bookingType: "With Driver",
//       bookedDate: "8/5/2025",
//       driverName: "Momo Dai"
//     }
//   ];

//   return (
//     <div className="main-layout">
//       <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
//       <div className="main-content">
//         <Nav onMenuClick={() => setIsSidebarOpen(true)} />
//         <div className="content-area">
//           <div className="page-header">
//             <h1>Active Vehicles</h1>
//           </div>
//           <div className="active-vehicles-table-container">
//             <div className="table-scroll">
//               <table className="active-vehicles-table">
//                 <thead>
//                   <tr>
//                     <th>Photo</th>
//                     <th>Name</th>
//                     <th>Type</th>
//                     <th>Seats</th>
//                     <th>Gear-Type</th>
//                     <th>AC</th>
//                     <th>Rate/Day</th>
//                     <th>Car Number</th>
//                     <th>Phone Number</th>
//                     <th>Booking Type</th>
//                     <th>Booked Date</th>
//                     <th>Driver Name</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {vehicles.map((vehicle, index) => (
//                     <tr key={index}>
//                       <td>{vehicle.photo}</td>
//                       <td>{vehicle.name}</td>
//                       <td>{vehicle.type}</td>
//                       <td>{vehicle.seats}</td>
//                       <td>{vehicle.gearType}</td>
//                       <td>{vehicle.ac}</td>
//                       <td>{vehicle.ratePerDay}</td>
//                       <td>{vehicle.carNumber}</td>
//                       <td>{vehicle.phoneNumber}</td>
//                       <td>{vehicle.bookingType}</td>
//                       <td>{vehicle.bookedDate}</td>
//                       <td>{vehicle.driverName}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import "./ActiveVechilesTable.css";

const ActiveVehiclesTable = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeVehicles, setActiveVehicles] = useState([]); // Always an array
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchActiveVehicles = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:3000/booking/active");
        console.log("API Response Status:", response.status);
        const data = await response.json();
        console.log("API Response Data:", data);

        if (!response.ok) {
          throw new Error("Failed to fetch active vehicles");
        }

        setActiveVehicles(data.activeVehicles || []); // Corrected here
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching active vehicles:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchActiveVehicles();
  }, []);

  return (
    <div className="main-layout">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="main-content">
        <Nav onMenuClick={() => setIsSidebarOpen(true)} />
        <div className="content-area">
          <h1>Active Vehicles</h1>
          {loading ? <p>Loading active vehicles...</p> : null}
          {error ? <p className="error">{error}</p> : null}
          <div className="active-vehicles-table-container">
            <table className="active-vehicles-table">
              <thead>
                <tr>
                  <th>Vehicle</th>
                  <th>Customer</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Pickup Date</th>
                  <th>Dropoff Date</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(activeVehicles) && activeVehicles.length > 0 ? (
                  activeVehicles.map((booking, index) => (
                    <tr key={index}>
                      <td>{booking.name}</td>
                      <td>{booking.customerName}</td>
                      <td>{booking.email}</td>
                      <td>{booking.phone}</td>
                      <td>
                        {new Date(booking.pickupDateTime).toLocaleString()}
                      </td>
                      <td>
                        {new Date(booking.dropoffDateTime).toLocaleString()}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6">No active vehicles found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveVehiclesTable;
