// // // // // src/component/cardetails/CarDetailPage.jsx
// // // // import React, { useState } from "react";
// // // // import { useParams, useNavigate } from "react-router-dom";
// // // // import "./CarDetailPage.css";

// // // // const CarDetailPage = ({ isLoggedIn }) => {
// // // //   const { id } = useParams();
// // // //   const navigate = useNavigate();
// // // //   const carName = `Vehicle ID: ${id}`;
// // // //   const [bookingType, setBookingType] = useState("self-drive"); // Default to self-drive
// // // //   const [selectedDateTime, setSelectedDateTime] = useState(new Date()); // State to hold selected date and time
// // // //   const [showDateTimeSelector, setShowDateTimeSelector] = useState(false);

// // // //   const handleBookClick = () => {
// // // //     if (isLoggedIn) {
// // // //       navigate(`/kyc-verification`); // Navigate to KYC verification
// // // //     } else {
// // // //       navigate('/login/user'); // Navigate to login if not logged in
// // // //     }
// // // //   };

// // // //   const handleBookingTypeChange = (type) => {
// // // //     setBookingType(type);
// // // //   };

// // // //   const handleDateTimeChange = (event) => {
// // // //     setSelectedDateTime(new Date(event.target.value));
// // // //   };

// // // //   const toggleDateTimeSelector = () => {
// // // //     setShowDateTimeSelector(!showDateTimeSelector);
// // // //   };

// // // //   return (
// // // //     <div className="car-detail-container">
// // // //       <div className="car-main">
// // // //         <button className="back-button" onClick={() => navigate(-1)}>
// // // //           ←
// // // //         </button>

// // // //         <div className="car-info">
// // // //           <h2 className="car-brand">Mercedes-Benz</h2>
// // // //           <p className="car-model">{carName}</p>
// // // //           <img
// // // //             src="/images/mercedes.png"
// // // //             alt="Mercedes S-Class"
// // // //             className="car-image"
// // // //           />

// // // //           <div className="color-dots">
// // // //             <span className="dot active"></span>
// // // //             <span className="dot"></span>
// // // //             <span className="dot"></span>
// // // //             <span className="dot red"></span>
// // // //           </div>

// // // //           <div className="features">
// // // //             <p>comfort</p>
// // // //             <p>smooth</p>
// // // //             <p>luxury</p>
// // // //           </div>

// // // //           <div className="rating">
// // // //             <p>Lorem ipsum dolor sit amet consectetur.</p>
// // // //             <h1>5.0</h1>
// // // //           </div>
// // // //         </div>

// // // //         <div className="car-details">
// // // //           <h2>Details</h2>
// // // //           <p className="details-desc">
// // // //             Lorem ipsum dolor sit amet consectetur. Nulla scelerisque posuere
// // // //             amet a at. Hendrerit lectus eu rhoncus elit turpis dictumst massa
// // // //             volutpat.
// // // //           </p>

// // // //           <div className="detail-item">
// // // //             <span>⚙️ Automate</span>
// // // //             <span className="value">Yes</span>
// // // //           </div>
// // // //           <div className="detail-item">
// // // //             <span>❄️ Air Conditioner</span>
// // // //             <span className="value">Yes</span>
// // // //           </div>
// // // //           <div className="detail-item">
// // // //             <span>🧍 Seater</span>
// // // //             <span className="value">5</span>
// // // //           </div>
// // // //           <div className="detail-item">
// // // //             <span>💲 Rate</span>
// // // //             <span className="value bold">$250/day</span>
// // // //           </div>

// // // //           {/* Booking Type Selection */}
// // // //           <div className="booking-type-selection">
// // // //             <p className="booking-type-label">Booking Type:</p>
// // // //             <div className="booking-options">
// // // //               <button
// // // //                 className={`booking-option-button ${bookingType === 'self-drive' ? 'active' : ''}`}
// // // //                 onClick={() => handleBookingTypeChange('self-drive')}
// // // //               >
// // // //                 Self Drive
// // // //               </button>
// // // //               <button
// // // //                 className={`booking-option-button ${bookingType === 'with-driver' ? 'active' : ''}`}
// // // //                 onClick={() => handleBookingTypeChange('with-driver')}
// // // //               >
// // // //                 With Driver
// // // //               </button>
// // // //             </div>
// // // //           </div>

// // // //           <p className="note-text">
// // // //             Lorem ipsum dolor sit amet consectetur. Blandit id vitae libero
// // // //             gravida integer in justo. Habitasse suspendisse eu vitae id.
// // // //             Tristique . In fermentum laoreet a quam. Et dui.
// // // //           </p>

// // // //           <div className="book-box">
// // // //             <p className="date-label">Date & Time</p>
// // // //             <button className="date-time-button" onClick={toggleDateTimeSelector}>
// // // //               {selectedDateTime.toLocaleString()}
// // // //             </button>
// // // //             {showDateTimeSelector && (
// // // //               <input
// // // //                 type="datetime-local"
// // // //                 value={selectedDateTime.toISOString().slice(0, 16)} // Format for datetime-local input
// // // //                 onChange={handleDateTimeChange}
// // // //                 className="date-time-input"
// // // //               />
// // // //             )}
// // // //             <button
// // // //               className="book-button"
// // // //               onClick={handleBookClick}
// // // //             >
// // // //               BOOK NOW
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default CarDetailPage;
// // // // import React, { useEffect, useState } from "react";
// // // // import { useParams, useNavigate } from "react-router-dom";
// // // // import axios from "axios";
// // // // import "./CarDetailPage.css";

// // // // const CarDetailPage = () => {
// // // //   const { id } = useParams();
// // // //   const navigate = useNavigate();
// // // //   const [car, setCar] = useState(null);

// // // //   useEffect(() => {
// // // //     const fetchCar = async () => {
// // // //       try {
// // // //         const res = await axios.get(`http://localhost:3000/api/cars/${id}`);
// // // //         setCar(res.data);
// // // //       } catch (err) {
// // // //         console.error("Error fetching car:", err);
// // // //       }
// // // //     };
// // // //     fetchCar();
// // // //   }, [id]);

// // // //   if (!car) return <p className="loading">Loading...</p>;

// // // //   return (
// // // //     <div className="car-detail-container">
// // // //       <div className="car-main">
// // // //         <button className="back-button" onClick={() => navigate(-1)}>
// // // //           ←
// // // //         </button>

// // // //         <div className="car-info">
// // // //           <h2 className="car-brand">{car.carName}</h2>
// // // //           <p className="car-model">Vehicle Number: {car.carNumber}</p>

// // // //           <div className="car-photos">
// // // //             {car.photos?.length > 0 ? (
// // // //               car.photos.map((photo, index) => (
// // // //                 <img
// // // //                   key={index}
// // // //                   src={`http://localhost:3000/uploads/${photo}`}
// // // //                   alt={`Car ${index + 1}`}
// // // //                   className="car-image"
// // // //                 />
// // // //               ))
// // // //             ) : (
// // // //               <img
// // // //                 src="/images/placeholder.png"
// // // //                 alt="Car Placeholder"
// // // //                 className="car-image"
// // // //               />
// // // //             )}
// // // //           </div>

// // // //           <div className="features">
// // // //             <p>{car.carType}</p>
// // // //             <p>{car.gearType}</p>
// // // //             <p>{car.airCondition ? "A/C" : "Non-A/C"}</p>
// // // //           </div>
// // // //         </div>

// // // //         <div className="car-details">
// // // //           <h2>Details</h2>
// // // //           <div className="detail-item">
// // // //             <span>⚙️ Gear Type</span>
// // // //             <span className="value">{car.gearType}</span>
// // // //           </div>
// // // //           <div className="detail-item">
// // // //             <span>❄️ Air Conditioning</span>
// // // //             <span className="value">{car.airCondition ? "Yes" : "No"}</span>
// // // //           </div>
// // // //           <div className="detail-item">
// // // //             <span>🧍 Seats</span>
// // // //             <span className="value">{car.seats}</span>
// // // //           </div>
// // // //           <div className="detail-item">
// // // //             <span>💲 Rate</span>
// // // //             <span className="value bold">₹{car.ratePerDay}/day</span>
// // // //           </div>
// // // //           <div className="detail-item">
// // // //             <span>👤 Driver Name</span>
// // // //             <span className="value">{car.driverName || "N/A"}</span>
// // // //           </div>
// // // //           <div className="detail-item">
// // // //             <span>📞 Phone Number</span>
// // // //             <span className="value">{car.phoneNumber || "N/A"}</span>
// // // //           </div>
// // // //           <div className="detail-item">
// // // //             <span>📋 Booking Type</span>
// // // //             <span className="value">{car.bookingType}</span>
// // // //           </div>

// // // //           <button className="book-button">BOOK NOW</button>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default CarDetailPage;

// // // // import React, { useEffect, useState } from "react";

// // // // import { useParams, useNavigate } from "react-router-dom";
// // // // import axios from "axios";
// // // // import "./CarDetailPage.css";

// // // // const CarDetailPage = ({ isLoggedIn }) => {
// // // //   const { id } = useParams();
// // // //   const navigate = useNavigate();
// // // //   const [car, setCar] = useState(null);
// // // //   const [bookingType, setBookingType] = useState("self-drive");
// // // //   const [selectedDateTime, setSelectedDateTime] = useState(new Date());
// // // //   const [showDateTimeSelector, setShowDateTimeSelector] = useState(false);

// // // //   useEffect(() => {
// // // //     const fetchCar = async () => {
// // // //       try {
// // // //         const res = await axios.get(`http://localhost:3000/api/cars/${id}`);
// // // //         setCar(res.data);
// // // //       } catch (err) {
// // // //         console.error("Error fetching car:", err);
// // // //       }
// // // //     };
// // // //     fetchCar();
// // // //   }, [id]);

// // // //   const handleBookClick = () => {
// // // //     if (isLoggedIn) {
// // // //       navigate(`/kyc-verification`);
// // // //     } else {
// // // //       navigate("/login/user");
// // // //     }
// // // //   };

// // // //   const handleBookingTypeChange = (type) => {
// // // //     setBookingType(type);
// // // //   };

// // // //   const handleDateTimeChange = (event) => {
// // // //     setSelectedDateTime(new Date(event.target.value));
// // // //   };

// // // //   const toggleDateTimeSelector = () => {
// // // //     setShowDateTimeSelector(!showDateTimeSelector);
// // // //   };

// // // //   if (!car) return <p className="loading">Loading...</p>;

// // // //   return (
// // // //     <div className="car-detail-container">
// // // //       <div className="car-main">
// // // //         <div>
// // // //           <button className="back-button" onClick={() => navigate(-1)}>
// // // //             ←
// // // //           </button>
// // // //         </div>

// // // //         <div className="car-info">
// // // //           <h2 className="car-brand">{car.carName}</h2>
// // // //           <p className="car-model">Vehicle Number: {car.carNumber}</p>
// // // //           {car.photos?.length > 0 ? (
// // // //             <img
// // // //               src={`http://localhost:3000/uploads/${car.photos[0]}`}
// // // //               alt={car.carName}
// // // //               className="car-image"
// // // //             />
// // // //           ) : (
// // // //             <img
// // // //               src="/images/placeholder.png"
// // // //               alt="Car Placeholder"
// // // //               className="car-image"
// // // //             />
// // // //           )}

// // // //           <div className="color-dots">
// // // //             <span className="dot active"></span>
// // // //             <span className="dot"></span>
// // // //             <span className="dot"></span>
// // // //             <span className="dot red"></span>
// // // //           </div>

// // // //           <div className="features">
// // // //             <p>{car.carType}</p>
// // // //             <p>{car.gearType}</p>
// // // //             <p>{car.airCondition ? "A/C" : "Non-A/C"}</p>
// // // //           </div>

// // // //           <div className="rating">
// // // //             <p>Based on user reviews</p>
// // // //             <h1>4.8</h1>
// // // //           </div>
// // // //         </div>

// // // //         <div className="car-details">
// // // //           <h2>Details</h2>
// // // //           <p className="details-desc">
// // // //             {car.carName} is a {car.carType} vehicle with {car.seats} seats,
// // // //             ideal for {car.bookingType.toLowerCase()}. Enjoy a comfortable ride
// // // //             with {car.airCondition ? "air conditioning" : "no air conditioning"}
// // // //             and {car.gearType.toLowerCase()} transmission.
// // // //           </p>

// // // //           <div className="detail-item">
// // // //             <span>⚙️ Gear Type</span>
// // // //             <span className="value">{car.gearType}</span>
// // // //           </div>
// // // //           <div className="detail-item">
// // // //             <span>❄️ Air Conditioning</span>
// // // //             <span className="value">{car.airCondition ? "Yes" : "No"}</span>
// // // //           </div>
// // // //           <div className="detail-item">
// // // //             <span>🧍 Seats</span>
// // // //             <span className="value">{car.seats}</span>
// // // //           </div>
// // // //           <div className="detail-item">
// // // //             <span>💲 Rate</span>
// // // //             <span className="value bold">₹{car.ratePerDay}/day</span>
// // // //           </div>

// // // //           <div className="booking-type-selection">
// // // //             <p className="booking-type-label">Booking Type:</p>
// // // //             <div className="booking-options">
// // // //               <button
// // // //                 className={`booking-option-button ${
// // // //                   bookingType === "self-drive" ? "active" : ""
// // // //                 }`}
// // // //                 onClick={() => handleBookingTypeChange("self-drive")}
// // // //               >
// // // //                 Self Drive
// // // //               </button>
// // // //               <button
// // // //                 className={`booking-option-button ${
// // // //                   bookingType === "with-driver" ? "active" : ""
// // // //                 }`}
// // // //                 onClick={() => handleBookingTypeChange("with-driver")}
// // // //               >
// // // //                 With Driver
// // // //               </button>
// // // //             </div>
// // // //           </div>

// // // //           <p className="note-text">
// // // //             Please ensure you have a valid driving license for self-drive
// // // //             bookings. For with-driver bookings, contact{" "}
// // // //             {car.phoneNumber || "N/A"} for availability.
// // // //           </p>

// // // //           <div className="book-box">
// // // //             <p className="date-label">Date & Time</p>
// // // //             <button
// // // //               className="date-time-button"
// // // //               onClick={toggleDateTimeSelector}
// // // //             >
// // // //               {selectedDateTime.toLocaleString()}
// // // //             </button>
// // // //             {showDateTimeSelector && (
// // // //               <input
// // // //                 type="datetime-local"
// // // //                 value={selectedDateTime.toISOString().slice(0, 16)}
// // // //                 onChange={handleDateTimeChange}
// // // //                 className="date-time-input"
// // // //               />
// // // //             )}
// // // //             <button className="book-button" onClick={handleBookClick}>
// // // //               BOOK NOW
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default CarDetailPage;

// // // // CarDetailPage.jsx
// // // // import React, { useEffect, useState } from "react";
// // // // import { useParams, useNavigate } from "react-router-dom";
// // // // import axios from "axios";
// // // // import "./CarDetailPage.css";

// // // // const CarDetailPage = ({ isLoggedIn }) => {
// // // //   const { id } = useParams();
// // // //   const navigate = useNavigate();
// // // //   const [car, setCar] = useState(null);
// // // //   const [bookingType, setBookingType] = useState("self-drive");
// // // //   const [selectedDateTime, setSelectedDateTime] = useState(new Date());
// // // //   const [showDateTimeSelector, setShowDateTimeSelector] = useState(false);

// // // //   useEffect(() => {
// // // //     const fetchCar = async () => {
// // // //       try {
// // // //         const res = await axios.get(`http://localhost:3000/api/cars/${id}`);
// // // //         setCar(res.data);
// // // //       } catch (err) {
// // // //         console.error("Error fetching car:", err);
// // // //       }
// // // //     };
// // // //     fetchCar();
// // // //   }, [id]);

// // // //   const handleBookClick = () => {
// // // //     if (isLoggedIn) {
// // // //       navigate(`/kyc-verification`);
// // // //     } else {
// // // //       navigate("/login/user");
// // // //     }
// // // //   };

// // // //   const handleBookingTypeChange = (type) => {
// // // //     setBookingType(type);
// // // //   };

// // // //   const handleDateTimeChange = (event) => {
// // // //     setSelectedDateTime(new Date(event.target.value));
// // // //   };

// // // //   const toggleDateTimeSelector = () => {
// // // //     setShowDateTimeSelector(!showDateTimeSelector);
// // // //   };

// // // //   if (!car) return <p className="loading">Loading...</p>;

// // // //   return (
// // // //     <div className="car-detail-container">
// // // //       <div className="car-main">
// // // //         <div>
// // // //           <button className="back-button" onClick={() => navigate(-1)}>
// // // //             ←
// // // //           </button>
// // // //         </div>

// // // //         <div className="car-info">
// // // //           <h2 className="car-brand">{car.carName}</h2>
// // // //           <p className="car-model">Vehicle Number: {car.carNumber}</p>
// // // //           {car.photos?.length > 0 ? (
// // // //             <img
// // // //               src={`http://localhost:3000/uploads/${car.photos[0]}`}
// // // //               alt={car.carName}
// // // //               className="car-image"
// // // //             />
// // // //           ) : (
// // // //             <img
// // // //               src="/images/placeholder.png" // Update this to a Mini Van image
// // // //               alt="Car Placeholder"
// // // //               className="car-image"
// // // //             />
// // // //           )}

// // // //           <div className="color-dots">
// // // //             <span className="dot active"></span>
// // // //             <span className="dot"></span>
// // // //             <span className="dot"></span>
// // // //             <span className="dot red"></span>
// // // //           </div>

// // // //           <div className="features">
// // // //             <p>{car.carType}</p>
// // // //             <p>{car.gearType}</p>
// // // //             <p>{car.airCondition ? "A/C" : "Non-A/C"}</p>
// // // //           </div>

// // // //           <div className="rating">
// // // //             <p>Based on user reviews</p>
// // // //             <h1>4.8</h1>
// // // //           </div>
// // // //         </div>

// // // //         <div className="car-details">
// // // //           <h2>Details</h2>
// // // //           <p className="details-desc">
// // // //             {car.carName} is a {car.carType} vehicle with {car.seats} seats,
// // // //             ideal for {car.bookingType.toLowerCase()}. Enjoy a comfortable ride
// // // //             with {car.airCondition ? "air conditioning" : "no air conditioning"}
// // // //             and {car.gearType.toLowerCase()} transmission.
// // // //           </p>

// // // //           <div className="detail-item">
// // // //             <span>⚙️ Gear Type</span>
// // // //             <span className="value">{car.gearType}</span>
// // // //           </div>
// // // //           <div className="detail-item">
// // // //             <span>❄️ Air Conditioning</span>
// // // //             <span className="value">{car.airCondition ? "Yes" : "No"}</span>
// // // //           </div>
// // // //           <div className="detail-item">
// // // //             <span>🧍 Seats</span>
// // // //             <span className="value">{car.seats}</span>
// // // //           </div>
// // // //           <div className="detail-item">
// // // //             <span>💲 Rate</span>
// // // //             <span className="value bold">₹{car.ratePerDay}/day</span>
// // // //           </div>

// // // //           <div className="booking-type-selection">
// // // //             <p className="booking-type-label">Booking Type:</p>
// // // //             <div className="booking-options">
// // // //               <button
// // // //                 className={`booking-option-button ${
// // // //                   bookingType === "self-drive" ? "active" : ""
// // // //                 }`}
// // // //                 onClick={() => handleBookingTypeChange("self-drive")}
// // // //               >
// // // //                 Self Drive
// // // //               </button>
// // // //               <button
// // // //                 className={`booking-option-button ${
// // // //                   bookingType === "with-driver" ? "active" : ""
// // // //                 }`}
// // // //                 onClick={() => handleBookingTypeChange("with-driver")}
// // // //               >
// // // //                 With Driver
// // // //               </button>
// // // //             </div>
// // // //           </div>

// // // //           <p className="note-text">
// // // //             Please ensure you have a valid driving license for self-drive
// // // //             bookings. For with-driver bookings, contact{" "}
// // // //             {car.phoneNumber || "N/A"} for availability.
// // // //           </p>

// // // //           <div className="book-box">
// // // //             <p className="date-label">Date & Time</p>
// // // //             <button
// // // //               className="date-time-button"
// // // //               onClick={toggleDateTimeSelector}
// // // //             >
// // // //               {selectedDateTime.toLocaleString()}
// // // //             </button>
// // // //             {showDateTimeSelector && (
// // // //               <input
// // // //                 type="datetime-local"
// // // //                 value={selectedDateTime.toISOString().slice(0, 16)}
// // // //                 onChange={handleDateTimeChange}
// // // //                 className="date-time-input"
// // // //               />
// // // //             )}
// // // //             <button className="book-button" onClick={handleBookClick}>
// // // //               BOOK NOW
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default CarDetailPage;

// // // // import React, { useEffect, useState } from "react";
// // // // import { useParams, useNavigate } from "react-router-dom";
// // // // import axios from "axios";
// // // // import "./CarDetailPage.css";

// // // // const CarDetailPage = ({ isLoggedIn }) => {
// // // //   const { id } = useParams();
// // // //   const navigate = useNavigate();
// // // //   const [car, setCar] = useState(null);
// // // //   const [bookingType, setBookingType] = useState("self-drive");
// // // //   const [selectedDateTime, setSelectedDateTime] = useState(new Date());
// // // //   const [showDateTimeSelector, setShowDateTimeSelector] = useState(false);

// // // //   useEffect(() => {
// // // //     const fetchCar = async () => {
// // // //       try {
// // // //         const res = await axios.get(`http://localhost:3000/api/cars/${id}`);
// // // //         setCar(res.data);
// // // //       } catch (err) {
// // // //         console.error("Error fetching car:", err);
// // // //       }
// // // //     };
// // // //     fetchCar();
// // // //   }, [id]);

// // // //   const handleBookClick = () => {
// // // //     if (isLoggedIn) {
// // // //       // Navigate to KycVerification with bookingType and selectedDateTime
// // // //       navigate("/kyc-verification", {
// // // //         state: {
// // // //           carId: id,
// // // //           bookingType,
// // // //           selectedDateTime: selectedDateTime.toISOString(),
// // // //         },
// // // //       });
// // // //     } else {
// // // //       navigate("/login/user");
// // // //     }
// // // //   };

// // // //   const handleBookingTypeChange = (type) => {
// // // //     setBookingType(type);
// // // //   };

// // // //   const handleDateTimeChange = (event) => {
// // // //     setSelectedDateTime(new Date(event.target.value));
// // // //   };

// // // //   const toggleDateTimeSelector = () => {
// // // //     setShowDateTimeSelector(!showDateTimeSelector);
// // // //   };

// // // //   if (!car) return <p className="loading">Loading...</p>;

// // // //   return (
// // // //     <div className="car-detail-container">
// // // //       <div className="car-main">
// // // //         <div>
// // // //           <button className="back-button" onClick={() => navigate(-1)}>
// // // //             ←
// // // //           </button>
// // // //         </div>

// // // //         <div className="car-info">
// // // //           <h2 className="car-brand">{car.carName}</h2>
// // // //           <p className="car-model">Vehicle Number: {car.carNumber}</p>
// // // //           {car.photos?.length > 0 ? (
// // // //             <img
// // // //               src={`http://localhost:3000/uploads/${car.photos[0]}`}
// // // //               alt={car.carName}
// // // //               className="car-image"
// // // //             />
// // // //           ) : (
// // // //             <img
// // // //               src="/images/placeholder.png"
// // // //               alt="Car Placeholder"
// // // //               className="car-image"
// // // //             />
// // // //           )}

// // // //           <div className="color-dots">
// // // //             <span className="dot active"></span>
// // // //             <span className="dot"></span>
// // // //             <span className="dot"></span>
// // // //             <span className="dot red"></span>
// // // //           </div>

// // // //           <div className="features">
// // // //             <p>{car.carType}</p>
// // // //             <p>{car.gearType}</p>
// // // //             <p>{car.airCondition ? "A/C" : "Non-A/C"}</p>
// // // //           </div>

// // // //           <div className="rating">
// // // //             <p>Based on user reviews</p>
// // // //             <h1>4.8</h1>
// // // //           </div>
// // // //         </div>

// // // //         <div className="car-details">
// // // //           <h2>Details</h2>
// // // //           <p className="details-desc">
// // // //             {car.carName} is a {car.carType} vehicle with {car.seats} seats,
// // // //             ideal for {car.bookingType.toLowerCase()}. Enjoy a comfortable ride
// // // //             with {car.airCondition ? "air conditioning" : "no air conditioning"}
// // // //             and {car.gearType.toLowerCase()} transmission.
// // // //           </p>

// // // //           <div className="detail-item">
// // // //             <span>⚙️ Gear Type</span>
// // // //             <span className="value">{car.gearType}</span>
// // // //           </div>
// // // //           <div className="detail-item">
// // // //             <span>❄️ Air Conditioning</span>
// // // //             <span className="value">{car.airCondition ? "Yes" : "No"}</span>
// // // //           </div>
// // // //           <div className="detail-item">
// // // //             <span>🧍 Seats</span>
// // // //             <span className="value">{car.seats}</span>
// // // //           </div>
// // // //           <div className="detail-item">
// // // //             <span>💲 Rate</span>
// // // //             <span className="value bold">₹{car.ratePerDay}/day</span>
// // // //           </div>

// // // //           <div className="booking-type-selection">
// // // //             <p className="booking-type-label">Booking Type:</p>
// // // //             <div className="booking-options">
// // // //               <button
// // // //                 className={`booking-option-button ${
// // // //                   bookingType === "self-drive" ? "active" : ""
// // // //                 }`}
// // // //                 onClick={() => handleBookingTypeChange("self-drive")}
// // // //               >
// // // //                 Self Drive
// // // //               </button>
// // // //               <button
// // // //                 className={`booking-option-button ${
// // // //                   bookingType === "with-driver" ? "active" : ""
// // // //                 }`}
// // // //                 onClick={() => handleBookingTypeChange("with-driver")}
// // // //               >
// // // //                 With Driver
// // // //               </button>
// // // //             </div>
// // // //           </div>

// // // //           <p className="note-text">
// // // //             Please ensure you have a valid driving license for self-drive
// // // //             bookings. For with-driver bookings, contact{" "}
// // // //             {car.phoneNumber || "N/A"} for availability.
// // // //           </p>

// // // //           <div className="book-box">
// // // //             <p className="date-label">Date & Time</p>
// // // //             <button
// // // //               className="date-time-button"
// // // //               onClick={toggleDateTimeSelector}
// // // //             >
// // // //               {selectedDateTime.toLocaleString()}
// // // //             </button>
// // // //             {showDateTimeSelector && (
// // // //               <input
// // // //                 type="datetime-local"
// // // //                 value={selectedDateTime.toISOString().slice(0, 16)}
// // // //                 onChange={handleDateTimeChange}
// // // //                 className="date-time-input"
// // // //               />
// // // //             )}
// // // //             <button className="book-button" onClick={handleBookClick}>
// // // //               BOOK NOW
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default CarDetailPage;

// // // // import React, { useEffect, useState } from "react";
// // // // import { useParams, useNavigate } from "react-router-dom";
// // // // import axios from "axios";
// // // // import "./CarDetailPage.css";

// // // // const CarDetailPage = ({ isLoggedIn }) => {
// // // //   const { id } = useParams();
// // // //   const navigate = useNavigate();
// // // //   const [car, setCar] = useState(null);
// // // //   const [bookingType, setBookingType] = useState("self-drive");
// // // //   const [startDateTime, setStartDateTime] = useState(new Date());
// // // //   const [endDateTime, setEndDateTime] = useState(new Date());
// // // //   const [showDateTimeSelector, setShowDateTimeSelector] = useState(false);

// // // //   useEffect(() => {
// // // //     const fetchCar = async () => {
// // // //       try {
// // // //         const res = await axios.get(`http://localhost:3000/api/cars/${id}`);
// // // //         setCar(res.data);
// // // //       } catch (err) {
// // // //         console.error("Error fetching car:", err);
// // // //       }
// // // //     };
// // // //     fetchCar();
// // // //   }, [id]);

// // // //   const handleBookClick = () => {
// // // //     if (!startDateTime || !endDateTime) {
// // // //       console.error("Date fields are invalid");
// // // //       alert("Please select valid start and end dates.");
// // // //       return;
// // // //     }

// // // //     // Log the state being passed for debugging
// // // //     console.log("Navigating to KYC with state:", {
// // // //       carId: id,
// // // //       bookingType,
// // // //       startDateTime: startDateTime.toISOString(),
// // // //       endDateTime: endDateTime.toISOString(),
// // // //     });

// // // //     if (isLoggedIn) {
// // // //       navigate("/kyc-verification", {
// // // //         state: {
// // // //           carId: id,
// // // //           bookingType,
// // // //           startDateTime: startDateTime.toISOString(),
// // // //           endDateTime: endDateTime.toISOString(),
// // // //         },
// // // //       });
// // // //     } else {
// // // //       navigate("/login/user");
// // // //     }
// // // //   };

// // // //   const handleBookingTypeChange = (type) => {
// // // //     setBookingType(type);
// // // //   };

// // // //   const handleStartDateTimeChange = (event) => {
// // // //     const newStartDate = new Date(event.target.value);
// // // //     if (isNaN(newStartDate.getTime())) {
// // // //       console.error("Invalid start date selected");
// // // //       return;
// // // //     }
// // // //     setStartDateTime(newStartDate);
// // // //     // Ensure end date is not before start date
// // // //     if (newStartDate > endDateTime) {
// // // //       setEndDateTime(newStartDate);
// // // //     }
// // // //     console.log("Start Date Updated:", newStartDate.toISOString());
// // // //   };

// // // //   const handleEndDateTimeChange = (event) => {
// // // //     const newEndDate = new Date(event.target.value);
// // // //     if (isNaN(newEndDate.getTime())) {
// // // //       console.error("Invalid end date selected");
// // // //       return;
// // // //     }
// // // //     // Only update if end date is not before start date
// // // //     if (newEndDate >= startDateTime) {
// // // //       setEndDateTime(newEndDate);
// // // //       console.log("End Date Updated:", newEndDate.toISOString());
// // // //     }
// // // //   };

// // // //   const toggleDateTimeSelector = () => {
// // // //     setShowDateTimeSelector(!showDateTimeSelector);
// // // //   };

// // // //   if (!car) return <p className="loading">Loading...</p>;

// // // //   return (
// // // //     <div className="car-detail-container">
// // // //       <div className="car-main">
// // // //         <div>
// // // //           <button className="back-button" onClick={() => navigate(-1)}>
// // // //             ←
// // // //           </button>
// // // //         </div>

// // // //         <div className="car-info">
// // // //           <h2 className="car-brand">{car.carName}</h2>
// // // //           <p className="car-model">Vehicle Number: {car.carNumber}</p>
// // // //           {car.photos?.length > 0 ? (
// // // //             <img
// // // //               src={`http://localhost:3000/uploads/${car.photos[0]}`}
// // // //               alt={car.carName}
// // // //               className="car-image"
// // // //             />
// // // //           ) : (
// // // //             <img
// // // //               src="/images/placeholder.png"
// // // //               alt="Car Placeholder"
// // // //               className="car-image"
// // // //             />
// // // //           )}

// // // //           <div className="color-dots">
// // // //             <span className="dot active"></span>
// // // //             <span className="dot"></span>
// // // //             <span className="dot"></span>
// // // //             <span className="dot red"></span>
// // // //           </div>

// // // //           <div className="features">
// // // //             <p>{car.carType}</p>
// // // //             <p>{car.gearType}</p>
// // // //             <p>{car.airCondition ? "A/C" : "Non-A/C"}</p>
// // // //           </div>

// // // //           <div className="rating">
// // // //             <p>Based on user reviews</p>
// // // //             <h1>4.8</h1>
// // // //           </div>
// // // //         </div>

// // // //         <div className="car-details">
// // // //           <h2>Details</h2>
// // // //           <p className="details-desc">
// // // //             {car.carName} is a {car.carType} vehicle with {car.seats} seats,
// // // //             ideal for {car.bookingType.toLowerCase()}. Enjoy a comfortable ride
// // // //             with {car.airCondition ? "air conditioning" : "no air conditioning"}
// // // //             and {car.gearType.toLowerCase()} transmission.
// // // //           </p>

// // // //           <div className="detail-item">
// // // //             <span>⚙️ Gear Type</span>
// // // //             <span className="value">{car.gearType}</span>
// // // //           </div>
// // // //           <div className="detail-item">
// // // //             <span>❄️ Air Conditioning</span>
// // // //             <span className="value">{car.airCondition ? "Yes" : "No"}</span>
// // // //           </div>
// // // //           <div className="detail-item">
// // // //             <span>🧍 Seats</span>
// // // //             <span className="value">{car.seats}</span>
// // // //           </div>
// // // //           <div className="detail-item">
// // // //             <span>💲 Rate</span>
// // // //             <span className="value bold">₹{car.ratePerDay}/day</span>
// // // //           </div>

// // // //           <div className="booking-type-selection">
// // // //             <p className="booking-type-label">Booking Type:</p>
// // // //             <div className="booking-options">
// // // //               <button
// // // //                 className={`booking-option-button ${
// // // //                   bookingType === "self-drive" ? "active" : ""
// // // //                 }`}
// // // //                 onClick={() => handleBookingTypeChange("self-drive")}
// // // //               >
// // // //                 Self Drive
// // // //               </button>
// // // //               <button
// // // //                 className={`booking-option-button ${
// // // //                   bookingType === "with-driver" ? "active" : ""
// // // //                 }`}
// // // //                 onClick={() => handleBookingTypeChange("with-driver")}
// // // //               >
// // // //                 With Driver
// // // //               </button>
// // // //             </div>
// // // //           </div>

// // // //           <p className="note-text">
// // // //             Please ensure you have a valid driving license for self-drive
// // // //             bookings. For with-driver bookings, contact{" "}
// // // //             {car.phoneNumber || "N/A"} for availability.
// // // //           </p>

// // // //           <div className="book-box">
// // // //             <p className="date-label">Booking Dates & Times</p>
// // // //             <button
// // // //               className="date-time-button"
// // // //               onClick={toggleDateTimeSelector}
// // // //             >
// // // //               Start: {startDateTime.toLocaleString()} | End:{" "}
// // // //               {endDateTime.toLocaleString()}
// // // //             </button>
// // // //             {showDateTimeSelector && (
// // // //               <div className="date-time-inputs">
// // // //                 <div>
// // // //                   <label>Start Date & Time</label>
// // // //                   <input
// // // //                     type="datetime-local"
// // // //                     value={startDateTime.toISOString().slice(0, 16)}
// // // //                     onChange={handleStartDateTimeChange}
// // // //                     className="date-time-input"
// // // //                   />
// // // //                 </div>
// // // //                 <div>
// // // //                   <label>End Date & Time</label>
// // // //                   <input
// // // //                     type="datetime-local"
// // // //                     value={endDateTime.toISOString().slice(0, 16)}
// // // //                     onChange={handleEndDateTimeChange}
// // // //                     className="date-time-input"
// // // //                     min={startDateTime.toISOString().slice(0, 16)}
// // // //                   />
// // // //                 </div>
// // // //               </div>
// // // //             )}
// // // //             <button className="book-button" onClick={handleBookClick}>
// // // //               BOOK NOW
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default CarDetailPage;

// // // // import React, { useEffect, useState } from "react";
// // // // import { useParams, useNavigate } from "react-router-dom";
// // // // import axios from "axios";
// // // // import "./CarDetailPage.css";

// // // // const CarDetailPage = ({ isLoggedIn }) => {
// // // //   const { id } = useParams();
// // // //   const navigate = useNavigate();
// // // //   const [car, setCar] = useState(null);
// // // //   const [bookingType, setBookingType] = useState("self-drive");
// // // //   const [startDateTime, setStartDateTime] = useState(new Date());
// // // //   const [endDateTime, setEndDateTime] = useState(new Date());
// // // //   const [showDateTimeSelector, setShowDateTimeSelector] = useState(false);

// // // //   useEffect(() => {
// // // //     const fetchCar = async () => {
// // // //       try {
// // // //         const res = await axios.get(`http://localhost:3000/api/cars/${id}`);
// // // //         setCar(res.data);
// // // //         // Set default booking type based on car.bookingType
// // // //         if (res.data.bookingType === "Without Driver") {
// // // //           setBookingType("self-drive");
// // // //         } else if (res.data.bookingType === "With Driver") {
// // // //           setBookingType("with-driver");
// // // //         }
// // // //       } catch (err) {
// // // //         console.error("Error fetching car:", err);
// // // //       }
// // // //     };
// // // //     fetchCar();
// // // //   }, [id]);

// // // //   const handleBookClick = () => {
// // // //     if (!startDateTime || !endDateTime) {
// // // //       console.error("Date fields are invalid");
// // // //       alert("Please select valid start and end dates.");
// // // //       return;
// // // //     }

// // // //     console.log("Navigating to KYC with state:", {
// // // //       carId: id,
// // // //       bookingType,
// // // //       startDateTime: startDateTime.toISOString(),
// // // //       endDateTime: endDateTime.toISOString(),
// // // //     });

// // // //     if (isLoggedIn) {
// // // //       navigate("/kyc-verification", {
// // // //         state: {
// // // //           carId: id,
// // // //           bookingType,
// // // //           startDateTime: startDateTime.toISOString(),
// // // //           endDateTime: endDateTime.toISOString(),
// // // //         },
// // // //       });
// // // //     } else {
// // // //       navigate("/login/user");
// // // //     }
// // // //   };

// // // //   const handleBookingTypeChange = (type) => {
// // // //     setBookingType(type);
// // // //   };

// // // //   const handleStartDateTimeChange = (event) => {
// // // //     const newStartDate = new Date(event.target.value);
// // // //     if (isNaN(newStartDate.getTime())) {
// // // //       console.error("Invalid start date selected");
// // // //       return;
// // // //     }
// // // //     setStartDateTime(newStartDate);
// // // //     if (newStartDate > endDateTime) {
// // // //       setEndDateTime(newStartDate);
// // // //     }
// // // //     console.log("Start Date Updated:", newStartDate.toISOString());
// // // //   };

// // // //   const handleEndDateTimeChange = (event) => {
// // // //     const newEndDate = new Date(event.target.value);
// // // //     if (isNaN(newEndDate.getTime())) {
// // // //       console.error("Invalid end date selected");
// // // //       return;
// // // //     }
// // // //     if (newEndDate >= startDateTime) {
// // // //       setEndDateTime(newEndDate);
// // // //       console.log("End Date Updated:", newEndDate.toISOString());
// // // //     }
// // // //   };

// // // //   const toggleDateTimeSelector = () => {
// // // //     setShowDateTimeSelector(!showDateTimeSelector);
// // // //   };

// // // //   if (!car) return <p className="loading">Loading...</p>;

// // // //   // Determine which booking options to show based on car.bookingType
// // // //   const renderBookingOptions = () => {
// // // //     switch (car.bookingType) {
// // // //       case "Both":
// // // //         return (
// // // //           <>
// // // //             <button
// // // //               className={`booking-option-button ${
// // // //                 bookingType === "self-drive" ? "active" : ""
// // // //               }`}
// // // //               onClick={() => handleBookingTypeChange("self-drive")}
// // // //             >
// // // //               Self Drive
// // // //             </button>
// // // //             <button
// // // //               className={`booking-option-button ${
// // // //                 bookingType === "with-driver" ? "active" : ""
// // // //               }`}
// // // //               onClick={() => handleBookingTypeChange("with-driver")}
// // // //             >
// // // //               With Driver
// // // //             </button>
// // // //           </>
// // // //         );
// // // //       case "With Driver":
// // // //         return (
// // // //           <button
// // // //             className={`booking-option-button ${
// // // //               bookingType === "with-driver" ? "active" : ""
// // // //             }`}
// // // //             onClick={() => handleBookingTypeChange("with-driver")}
// // // //           >
// // // //             With Driver
// // // //           </button>
// // // //         );
// // // //       case "Without Driver":
// // // //         return (
// // // //           <button
// // // //             className={`booking-option-button ${
// // // //               bookingType === "self-drive" ? "active" : ""
// // // //             }`}
// // // //             onClick={() => handleBookingTypeChange("self-drive")}
// // // //           >
// // // //             Self Drive
// // // //           </button>
// // // //         );
// // // //       default:
// // // //         return null;
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="car-detail-container">
// // // //       <div className="car-main">
// // // //         <div>
// // // //           <button className="back-button" onClick={() => navigate(-1)}>
// // // //             ←
// // // //           </button>
// // // //         </div>
// // // //         <br></br>
// // // //         <br></br>
// // // //         <div className="car-info">
// // // //           <h2 className="car-brand">{car.carName}</h2>
// // // //           <p className="car-model">Vehicle Number: {car.carNumber}</p>
// // // //           {car.photos?.length > 0 ? (
// // // //             <img
// // // //               src={`http://localhost:3000/uploads/${car.photos[0]}`}
// // // //               alt={car.carName}
// // // //               className="car-image"
// // // //             />
// // // //           ) : (
// // // //             <img
// // // //               src="/images/placeholder.png"
// // // //               alt="Car Placeholder"
// // // //               className="car-image"
// // // //             />
// // // //           )}

// // // //           {/* <div className="color-dots">
// // // //             <span className="dot active"></span>
// // // //             <span className="dot"></span>
// // // //             <span className="dot"></span>
// // // //             <span className="dot red"></span>
// // // //           </div> */}

// // // //           <div className="features">
// // // //             <p>{car.carType}</p>
// // // //             <p>{car.gearType}</p>
// // // //             <p>{car.airCondition ? "A/C" : "Non-A/C"}</p>
// // // //           </div>

// // // //           <div className="rating">
// // // //             <h2>Based on user reviews</h2>
// // // //             <br />
// // // //             <h1>4.8 ⭐</h1>
// // // //           </div>
// // // //         </div>

// // // //         <div className="car-details">
// // // //           <h2>Details</h2>
// // // //           <p className="details-desc">
// // // //             {car.carName} is a {car.carType} vehicle with {car.seats} seats,
// // // //             ideal for {car.bookingType.toLowerCase()}. Enjoy a comfortable ride
// // // //             with {car.airCondition ? "air conditioning" : "no air conditioning"}
// // // //             and {car.gearType.toLowerCase()} transmission.
// // // //           </p>

// // // //           <div className="detail-item">
// // // //             <span>⚙️ Gear Type</span>
// // // //             <span className="value">{car.gearType}</span>
// // // //           </div>
// // // //           <div className="detail-item">
// // // //             <span>❄️ Air Conditioning</span>
// // // //             <span className="value">{car.airCondition ? "Yes" : "No"}</span>
// // // //           </div>
// // // //           <div className="detail-item">
// // // //             <span>🧍 Seats</span>
// // // //             <span className="value">{car.seats}</span>
// // // //           </div>
// // // //           <div className="detail-item">
// // // //             <span>💲 Rate</span>
// // // //             <span className="value bold">₹{car.ratePerDay}/day</span>
// // // //           </div>

// // // //           <div className="booking-type-selection">
// // // //             <p className="booking-type-label">Booking Type:</p>
// // // //             <div className="booking-options">{renderBookingOptions()}</div>
// // // //           </div>

// // // //           <p className="note-text">
// // // //             Please ensure you have a valid driving license for self-drive
// // // //             bookings. For with-driver bookings, contact{" "}
// // // //             {car.phoneNumber || "N/A"} for availability.
// // // //           </p>

// // // //           <div className="book-box">
// // // //             <p className="date-label">Booking Dates & Times</p>
// // // //             <button
// // // //               className="date-time-button"
// // // //               onClick={toggleDateTimeSelector}
// // // //             >
// // // //               Start: {startDateTime.toLocaleString()} | End:{" "}
// // // //               {endDateTime.toLocaleString()}
// // // //             </button>
// // // //             {showDateTimeSelector && (
// // // //               <div className="date-time-inputs">
// // // //                 <div>
// // // //                   <label>Start Date & Time</label>
// // // //                   <input
// // // //                     type="datetime-local"
// // // //                     value={startDateTime.toISOString().slice(0, 16)}
// // // //                     onChange={handleStartDateTimeChange}
// // // //                     className="date-time-input"
// // // //                   />
// // // //                 </div>
// // // //                 <div>
// // // //                   <label>End Date & Time</label>
// // // //                   <input
// // // //                     type="datetime-local"
// // // //                     value={endDateTime.toISOString().slice(0, 16)}
// // // //                     onChange={handleEndDateTimeChange}
// // // //                     className="date-time-input"
// // // //                     min={startDateTime.toISOString().slice(0, 16)}
// // // //                   />
// // // //                 </div>
// // // //               </div>
// // // //             )}
// // // //             <button className="book-button" onClick={handleBookClick}>
// // // //               BOOK NOW
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default CarDetailPage;

// // // // import React, { useEffect, useState } from "react";
// // // // import { useParams, useNavigate } from "react-router-dom";
// // // // import axios from "axios";
// // // // import "./CarDetailPage.css";

// // // // const CarDetailPage = ({ isLoggedIn, user }) => {
// // // //   const { id } = useParams();
// // // //   const navigate = useNavigate();
// // // //   const [car, setCar] = useState(null);
// // // //   const [bookingType, setBookingType] = useState("self-drive");
// // // //   const [startDateTime, setStartDateTime] = useState(new Date());
// // // //   const [endDateTime, setEndDateTime] = useState(new Date());
// // // //   const [showDateTimeSelector, setShowDateTimeSelector] = useState(false);

// // // //   useEffect(() => {
// // // //     const fetchCar = async () => {
// // // //       try {
// // // //         const res = await axios.get(`http://localhost:3000/api/cars/${id}`);
// // // //         setCar(res.data);
// // // //         if (res.data.bookingType === "Without Driver") {
// // // //           setBookingType("self-drive");
// // // //         } else if (res.data.bookingType === "With Driver") {
// // // //           setBookingType("with-driver");
// // // //         }
// // // //       } catch (err) {
// // // //         console.error("Error fetching car:", err);
// // // //       }
// // // //     };
// // // //     fetchCar();
// // // //   }, [id]);

// // // //   // --- Updated handleBookClick with booking POST request ---
// // // //   const handleBookClick = async () => {
// // // //     if (!startDateTime || !endDateTime) {
// // // //       console.error("Date fields are invalid");
// // // //       alert("Please select valid start and end dates.");
// // // //       return;
// // // //     }

// // // //     if (!isLoggedIn) {
// // // //       navigate("/login/user");
// // // //       return;
// // // //     }
// // // //     console.log("USER OBJECT:", user);

// // // //     // Prepare booking data for backend
// // // //     const bookingData = {
// // // //       vehicleId: id,
// // // //       name: car?.carName || `Vehicle ID: ${id}`,
// // // //       rate: car?.ratePerDay || 250,
// // // //       date: new Date().toISOString(),
// // // //       bookingType: bookingType,
// // // //       customerName: user?.name || "Sample User",
// // // //       email: user?.email || "user@example.com",
// // // //       phone: user?.phone || "+9779801234567",
// // // //       pickupDateTime: startDateTime.toISOString(),
// // // //       dropoffDateTime: endDateTime.toISOString(),
// // // //     };

// // // //     try {
// // // //       // POST booking data to backend
// // // //       const response = await fetch("http://localhost:3000/booking", {
// // // //         method: "POST",
// // // //         headers: { "Content-Type": "application/json" },
// // // //         body: JSON.stringify(bookingData),
// // // //       });

// // // //       const data = await response.json();

// // // //       if (response.ok) {
// // // //         alert("Booking successful!");
// // // //         navigate("/kyc-verification", {
// // // //           state: {
// // // //             carId: id,
// // // //             bookingType,
// // // //             startDateTime: startDateTime.toISOString(),
// // // //             endDateTime: endDateTime.toISOString(),
// // // //           },
// // // //         });
// // // //       } else {
// // // //         alert("Booking failed: " + data.error);
// // // //       }
// // // //     } catch (error) {
// // // //       console.error("Booking error:", error);
// // // //       alert("Booking failed due to network/server issue.");
// // // //     }
// // // //   };

// // // //   const handleBookingTypeChange = (type) => {
// // // //     setBookingType(type);
// // // //   };

// // // //   const handleStartDateTimeChange = (event) => {
// // // //     const newStartDate = new Date(event.target.value);
// // // //     if (isNaN(newStartDate.getTime())) {
// // // //       console.error("Invalid start date selected");
// // // //       return;
// // // //     }
// // // //     setStartDateTime(newStartDate);
// // // //     if (newStartDate > endDateTime) {
// // // //       setEndDateTime(newStartDate);
// // // //     }
// // // //     console.log("Start Date Updated:", newStartDate.toISOString());
// // // //   };

// // // //   const handleEndDateTimeChange = (event) => {
// // // //     const newEndDate = new Date(event.target.value);
// // // //     if (isNaN(newEndDate.getTime())) {
// // // //       console.error("Invalid end date selected");
// // // //       return;
// // // //     }
// // // //     if (newEndDate >= startDateTime) {
// // // //       setEndDateTime(newEndDate);
// // // //       console.log("End Date Updated:", newEndDate.toISOString());
// // // //     }
// // // //   };

// // // //   const toggleDateTimeSelector = () => {
// // // //     setShowDateTimeSelector(!showDateTimeSelector);
// // // //   };

// // // //   if (!car) return <p className="loading">Loading...</p>;

// // // //   const renderBookingOptions = () => {
// // // //     switch (car.bookingType) {
// // // //       case "Both":
// // // //         return (
// // // //           <>
// // // //             <button
// // // //               className={`booking-option-button ${
// // // //                 bookingType === "self-drive" ? "active" : ""
// // // //               }`}
// // // //               onClick={() => handleBookingTypeChange("self-drive")}
// // // //             >
// // // //               Self Drive
// // // //             </button>
// // // //             <button
// // // //               className={`booking-option-button ${
// // // //                 bookingType === "with-driver" ? "active" : ""
// // // //               }`}
// // // //               onClick={() => handleBookingTypeChange("with-driver")}
// // // //             >
// // // //               With Driver
// // // //             </button>
// // // //           </>
// // // //         );
// // // //       case "With Driver":
// // // //         return (
// // // //           <button
// // // //             className={`booking-option-button ${
// // // //               bookingType === "with-driver" ? "active" : ""
// // // //             }`}
// // // //             onClick={() => handleBookingTypeChange("with-driver")}
// // // //           >
// // // //             With Driver
// // // //           </button>
// // // //         );
// // // //       case "Without Driver":
// // // //         return (
// // // //           <button
// // // //             className={`booking-option-button ${
// // // //               bookingType === "self-drive" ? "active" : ""
// // // //             }`}
// // // //             onClick={() => handleBookingTypeChange("self-drive")}
// // // //           >
// // // //             Self Drive
// // // //           </button>
// // // //         );
// // // //       default:
// // // //         return null;
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="car-detail-container">
// // // //       <div className="car-main">
// // // //         <div>
// // // //           <button className="back-button" onClick={() => navigate(-1)}>
// // // //             ←
// // // //           </button>
// // // //         </div>
// // // //         <br />
// // // //         <br />
// // // //         <div className="car-info">
// // // //           <h2 className="car-brand">{car.carName}</h2>
// // // //           <p className="car-model">Vehicle Number: {car.carNumber}</p>
// // // //           {car.photos?.length > 0 ? (
// // // //             <img
// // // //               src={`http://localhost:3000/uploads/${car.photos[0]}`}
// // // //               alt={car.carName}
// // // //               className="car-image"
// // // //             />
// // // //           ) : (
// // // //             <img
// // // //               src="/images/placeholder.png"
// // // //               alt="Car Placeholder"
// // // //               className="car-image"
// // // //             />
// // // //           )}

// // // //           <div className="features">
// // // //             <p>{car.carType}</p>
// // // //             <p>{car.gearType}</p>
// // // //             <p>{car.airCondition ? "A/C" : "Non-A/C"}</p>
// // // //           </div>

// // // //           <div className="rating">
// // // //             <h2>Based on user reviews</h2>
// // // //             <br />
// // // //             <h1>4.8 ⭐</h1>
// // // //           </div>
// // // //         </div>

// // // //         <div className="car-details">
// // // //           <h2>Details</h2>
// // // //           <p className="details-desc">
// // // //             {car.carName} is a {car.carType} vehicle with {car.seats} seats,
// // // //             ideal for {car.bookingType.toLowerCase()}. Enjoy a comfortable ride
// // // //             with {car.airCondition ? "air conditioning" : "no air conditioning"}{" "}
// // // //             and {car.gearType.toLowerCase()} transmission.
// // // //           </p>

// // // //           <div className="detail-item">
// // // //             <span>⚙️ Gear Type</span>
// // // //             <span className="value">{car.gearType}</span>
// // // //           </div>
// // // //           <div className="detail-item">
// // // //             <span>❄️ Air Conditioning</span>
// // // //             <span className="value">{car.airCondition ? "Yes" : "No"}</span>
// // // //           </div>
// // // //           <div className="detail-item">
// // // //             <span>🧍 Seats</span>
// // // //             <span className="value">{car.seats}</span>
// // // //           </div>
// // // //           <div className="detail-item">
// // // //             <span>💲 Rate</span>
// // // //             <span className="value bold">₹{car.ratePerDay}/day</span>
// // // //           </div>

// // // //           <div className="booking-type-selection">
// // // //             <p className="booking-type-label">Booking Type:</p>
// // // //             <div className="booking-options">{renderBookingOptions()}</div>
// // // //           </div>

// // // //           <p className="note-text">
// // // //             Please ensure you have a valid driving license for self-drive
// // // //             bookings. For with-driver bookings, contact{" "}
// // // //             {car.phoneNumber || "N/A"} for availability.
// // // //           </p>

// // // //           <div className="book-box">
// // // //             <p className="date-label">Booking Dates & Times</p>
// // // //             <button
// // // //               className="date-time-button"
// // // //               onClick={toggleDateTimeSelector}
// // // //             >
// // // //               Start: {startDateTime.toLocaleString()} | End:{" "}
// // // //               {endDateTime.toLocaleString()}
// // // //             </button>
// // // //             {showDateTimeSelector && (
// // // //               <div className="date-time-inputs">
// // // //                 <div>
// // // //                   <label>Start Date & Time</label>
// // // //                   <input
// // // //                     type="datetime-local"
// // // //                     value={startDateTime.toISOString().slice(0, 16)}
// // // //                     onChange={handleStartDateTimeChange}
// // // //                     className="date-time-input"
// // // //                   />
// // // //                 </div>
// // // //                 <div>
// // // //                   <label>End Date & Time</label>
// // // //                   <input
// // // //                     type="datetime-local"
// // // //                     value={endDateTime.toISOString().slice(0, 16)}
// // // //                     onChange={handleEndDateTimeChange}
// // // //                     className="date-time-input"
// // // //                     min={startDateTime.toISOString().slice(0, 16)}
// // // //                   />
// // // //                 </div>
// // // //               </div>
// // // //             )}
// // // //             <button className="book-button" onClick={handleBookClick}>
// // // //               BOOK NOW
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // // export default CarDetailPage;

// // // // import React, { useEffect, useState } from "react";
// // // // import { useParams, useNavigate } from "react-router-dom";
// // // // import axios from "axios";
// // // // import "./CarDetailPage.css";

// // // // const CarDetailPage = ({ isLoggedIn, user }) => {
// // // //   const { id } = useParams();
// // // //   const navigate = useNavigate();
// // // //   const [car, setCar] = useState(null);
// // // //   const [bookingType, setBookingType] = useState("self-drive");
// // // //   const [startDateTime, setStartDateTime] = useState(new Date());
// // // //   const [endDateTime, setEndDateTime] = useState(new Date());
// // // //   const [showDateTimeSelector, setShowDateTimeSelector] = useState(false);

// // // //   useEffect(() => {
// // // //     const fetchCar = async () => {
// // // //       try {
// // // //         const res = await axios.get(`http://localhost:3000/api/cars/${id}`);
// // // //         setCar(res.data);
// // // //         if (res.data.bookingType === "Without Driver") {
// // // //           setBookingType("self-drive");
// // // //         } else if (res.data.bookingType === "With Driver") {
// // // //           setBookingType("with-driver");
// // // //         }
// // // //       } catch (err) {
// // // //         console.error("Error fetching car:", err);
// // // //       }
// // // //     };
// // // //     fetchCar();
// // // //   }, [id]);

// // // //   // Calculate rental days (minimum 1 day)
// // // //   const calculateRentalDays = (start, end) => {
// // // //     const diffTime = Math.abs(end - start);
// // // //     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
// // // //     return diffDays > 0 ? diffDays : 1;
// // // //   };

// // // //   const rentalDays = calculateRentalDays(startDateTime, endDateTime);
// // // //   const totalPrice = rentalDays * (car?.ratePerDay || 250);
// // // //   const fees = 20; // Example fixed fees

// // // //   const handleBookClick = async () => {
// // // //     if (!startDateTime || !endDateTime) {
// // // //       alert("Please select valid start and end dates.");
// // // //       return;
// // // //     }

// // // //     if (!isLoggedIn) {
// // // //       navigate("/login/user");
// // // //       return;
// // // //     }

// // // //     const bookingData = {
// // // //       vehicleId: id,
// // // //       name: car?.carName || `Vehicle ID: ${id}`,
// // // //       rate: car?.ratePerDay || 250,
// // // //       date: new Date().toISOString(),
// // // //       bookingType: bookingType,
// // // //       customerName: user?.name || "Sample User",
// // // //       email: user?.email || "user@example.com",
// // // //       phone: user?.phone || "+9779801234567",
// // // //       pickupDateTime: startDateTime.toISOString(),
// // // //       dropoffDateTime: endDateTime.toISOString(),
// // // //     };

// // // //     try {
// // // //       const response = await fetch("http://localhost:3000/booking", {
// // // //         method: "POST",
// // // //         headers: { "Content-Type": "application/json" },
// // // //         body: JSON.stringify(bookingData),
// // // //       });

// // // //       const data = await response.json();

// // // //       if (response.ok) {
// // // //         alert("Booking successful!");
// // // //         // Navigate to payment page passing total price and details in state
// // // //         navigate(`/kyc-verification`, {
// // // //           state: {
// // // //             totalPrice: totalPrice + fees,
// // // //             rentalDays,
// // // //             carName: car.carName,
// // // //             bookingType,
// // // //             startDateTime: startDateTime.toISOString(),
// // // //             endDateTime: endDateTime.toISOString(),
// // // //           },
// // // //         });
// // // //       } else {
// // // //         alert("Booking failed: " + data.error);
// // // //       }
// // // //     } catch (error) {
// // // //       console.error("Booking error:", error);
// // // //       alert("Booking failed due to network/server issue.");
// // // //     }
// // // //   };

// // // //   const handleBookingTypeChange = (type) => {
// // // //     setBookingType(type);
// // // //   };

// // // //   const handleStartDateTimeChange = (event) => {
// // // //     const newStartDate = new Date(event.target.value);
// // // //     if (isNaN(newStartDate.getTime())) return;
// // // //     setStartDateTime(newStartDate);
// // // //     if (newStartDate > endDateTime) setEndDateTime(newStartDate);
// // // //   };

// // // //   const handleEndDateTimeChange = (event) => {
// // // //     const newEndDate = new Date(event.target.value);
// // // //     if (isNaN(newEndDate.getTime()) || newEndDate < startDateTime) return;
// // // //     setEndDateTime(newEndDate);
// // // //   };

// // // //   const toggleDateTimeSelector = () => {
// // // //     setShowDateTimeSelector(!showDateTimeSelector);
// // // //   };

// // // //   if (!car) return <p className="loading">Loading...</p>;

// // // //   const renderBookingOptions = () => {
// // // //     switch (car.bookingType) {
// // // //       case "Both":
// // // //         return (
// // // //           <>
// // // //             <button
// // // //               className={`booking-option-button ${
// // // //                 bookingType === "self-drive" ? "active" : ""
// // // //               }`}
// // // //               onClick={() => handleBookingTypeChange("self-drive")}
// // // //             >
// // // //               Self Drive
// // // //             </button>
// // // //             <button
// // // //               className={`booking-option-button ${
// // // //                 bookingType === "with-driver" ? "active" : ""
// // // //               }`}
// // // //               onClick={() => handleBookingTypeChange("with-driver")}
// // // //             >
// // // //               With Driver
// // // //             </button>
// // // //           </>
// // // //         );
// // // //       case "With Driver":
// // // //         return (
// // // //           <button
// // // //             className={`booking-option-button ${
// // // //               bookingType === "with-driver" ? "active" : ""
// // // //             }`}
// // // //             onClick={() => handleBookingTypeChange("with-driver")}
// // // //           >
// // // //             With Driver
// // // //           </button>
// // // //         );
// // // //       case "Without Driver":
// // // //         return (
// // // //           <button
// // // //             className={`booking-option-button ${
// // // //               bookingType === "self-drive" ? "active" : ""
// // // //             }`}
// // // //             onClick={() => handleBookingTypeChange("self-drive")}
// // // //           >
// // // //             Self Drive
// // // //           </button>
// // // //         );
// // // //       default:
// // // //         return null;
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="car-detail-container">
// // // //       <div className="car-main">
// // // //         <button className="back-button" onClick={() => navigate(-1)}>
// // // //           ←
// // // //         </button>
// // // //         <br />
// // // //         <br />
// // // //         <div className="car-info">
// // // //           <h2 className="car-brand">{car.carName}</h2>
// // // //           <p className="car-model">Vehicle Number: {car.carNumber}</p>
// // // //           {car.photos?.length > 0 ? (
// // // //             <img
// // // //               src={`http://localhost:3000/uploads/${car.photos[0]}`}
// // // //               alt={car.carName}
// // // //               className="car-image"
// // // //             />
// // // //           ) : (
// // // //             <img
// // // //               src="/images/placeholder.png"
// // // //               alt="Car Placeholder"
// // // //               className="car-image"
// // // //             />
// // // //           )}

// // // //           <div className="features">
// // // //             <p>{car.carType}</p>
// // // //             <p>{car.gearType}</p>
// // // //             <p>{car.airCondition ? "A/C" : "Non-A/C"}</p>
// // // //           </div>

// // // //           <div className="rating">
// // // //             <h2>Based on user reviews</h2>
// // // //             <br />
// // // //             <h1>4.8 ⭐</h1>
// // // //           </div>
// // // //         </div>

// // // //         <div className="car-details">
// // // //           <h2>Details</h2>
// // // //           <p className="details-desc">
// // // //             {car.carName} is a {car.carType} vehicle with {car.seats} seats,
// // // //             ideal for {car.bookingType.toLowerCase()}. Enjoy a comfortable ride
// // // //             with {car.airCondition ? "air conditioning" : "no air conditioning"}{" "}
// // // //             and {car.gearType.toLowerCase()} transmission.
// // // //           </p>

// // // //           <div className="detail-item">
// // // //             <span>⚙️ Gear Type</span>
// // // //             <span className="value">{car.gearType}</span>
// // // //           </div>
// // // //           <div className="detail-item">
// // // //             <span>❄️ Air Conditioning</span>
// // // //             <span className="value">{car.airCondition ? "Yes" : "No"}</span>
// // // //           </div>
// // // //           <div className="detail-item">
// // // //             <span>🧍 Seats</span>
// // // //             <span className="value">{car.seats}</span>
// // // //           </div>
// // // //           <div className="detail-item">
// // // //             <span>💲 Rate</span>
// // // //             <span className="value bold">₹{car.ratePerDay}/day</span>
// // // //           </div>

// // // //           <div className="booking-type-selection">
// // // //             <p className="booking-type-label">Booking Type:</p>
// // // //             <div className="booking-options">{renderBookingOptions()}</div>
// // // //           </div>

// // // //           <p className="note-text">
// // // //             Please ensure you have a valid driving license for self-drive
// // // //             bookings. For with-driver bookings, contact{" "}
// // // //             {car.phoneNumber || "N/A"} for availability.
// // // //           </p>

// // // //           <div className="book-box">
// // // //             <p className="date-label">Booking Dates & Times</p>
// // // //             <button
// // // //               className="date-time-button"
// // // //               onClick={toggleDateTimeSelector}
// // // //             >
// // // //               Start: {startDateTime.toLocaleString()} | End:{" "}
// // // //               {endDateTime.toLocaleString()}
// // // //             </button>
// // // //             {showDateTimeSelector && (
// // // //               <div className="date-time-inputs">
// // // //                 <div>
// // // //                   <label>Start Date & Time</label>
// // // //                   <input
// // // //                     type="datetime-local"
// // // //                     value={startDateTime.toISOString().slice(0, 16)}
// // // //                     onChange={handleStartDateTimeChange}
// // // //                     className="date-time-input"
// // // //                   />
// // // //                 </div>
// // // //                 <div>
// // // //                   <label>End Date & Time</label>
// // // //                   <input
// // // //                     type="datetime-local"
// // // //                     value={endDateTime.toISOString().slice(0, 16)}
// // // //                     onChange={handleEndDateTimeChange}
// // // //                     className="date-time-input"
// // // //                     min={startDateTime.toISOString().slice(0, 16)}
// // // //                   />
// // // //                 </div>
// // // //               </div>
// // // //             )}
// // // //             <div className="price-summary">
// // // //               <p>
// // // //                 <strong>Total Rental Days:</strong> {rentalDays}
// // // //               </p>
// // // //               <p>
// // // //                 <strong>Total Price:</strong> ₹{totalPrice + fees} (Including ₹
// // // //                 {fees} fees)
// // // //               </p>
// // // //             </div>
// // // //             <button className="book-button" onClick={handleBookClick}>
// // // //               BOOK NOW
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default CarDetailPage;

// // // import React, { useEffect, useState } from "react";
// // // import { useParams, useNavigate } from "react-router-dom";
// // // import axios from "axios";
// // // import "./CarDetailPage.css";

// // // const CarDetailPage = ({ isLoggedIn, user }) => {
// // //   const { id } = useParams();
// // //   const navigate = useNavigate();
// // //   const [car, setCar] = useState(null);
// // //   const [bookingType, setBookingType] = useState("self-drive");
// // //   const [startDateTime, setStartDateTime] = useState(new Date());
// // //   const [endDateTime, setEndDateTime] = useState(new Date());
// // //   const [showDateTimeSelector, setShowDateTimeSelector] = useState(false);
// // //   const [error, setError] = useState(null);

// // //   useEffect(() => {
// // //     const fetchCar = async () => {
// // //       try {
// // //         // Try fetching from /api/cars first
// // //         try {
// // //           const res = await axios.get(`http://localhost:3000/api/cars/${id}`);
// // //           console.log("Fetched from /api/cars:", res.data); // Debug log
// // //           const carData = {
// // //             ...res.data,
// // //             carName:
// // //               res.data.carName || res.data.vehicleName || `Vehicle ID: ${id}`,
// // //             carNumber: res.data.carNumber || res.data.vehicleNumber,
// // //             carType: res.data.carType || res.data.vehicleType,
// // //             gearType: res.data.gearType || "Automatic",
// // //             airCondition: res.data.airCondition || false,
// // //             seats: res.data.seats || res.data.seatNumbers || 4,
// // //             ratePerDay: res.data.ratePerDay || res.data.perDayRate || 250,
// // //             photos: res.data.photos || [res.data.vehicleFrontImage],
// // //             bookingType:
// // //               res.data.bookingType ||
// // //               (res.data.withDriver ? "With Driver" : "Without Driver"),
// // //             phoneNumber:
// // //               res.data.phoneNumber || res.data.contactNumber || "Not Available",
// // //             ownerName: res.data.ownerName || "Unknown Owner",
// // //           };
// // //           setCar(carData);
// // //           setBookingType(
// // //             carData.bookingType === "Without Driver"
// // //               ? "self-drive"
// // //               : carData.bookingType === "With Driver"
// // //               ? "with-driver"
// // //               : "self-drive"
// // //           );
// // //           setError(null);
// // //           return;
// // //         } catch (err) {
// // //           console.log("Car not found in /api/cars, trying /api/vehicles");
// // //         }

// // //         // If not found in /api/cars, try /api/vehicles
// // //         const res = await axios.get(`http://localhost:3000/api/vehicles/${id}`);
// // //         const vehicleData = {
// // //           ...res.data,
// // //           carName:
// // //             res.data.vehicleName || res.data.carName || `Vehicle ID: ${id}`,
// // //           carNumber: res.data.vehicleNumber || res.data.carNumber,
// // //           carType: res.data.vehicleType || res.data.carType,
// // //           gearType: res.data.gearType || "Automatic",
// // //           airCondition: res.data.airCondition || false,
// // //           seats: res.data.seatNumbers || res.data.seats || 4,
// // //           ratePerDay: res.data.perDayRate || res.data.ratePerDay || 250,
// // //           photos: res.data.photos || [res.data.vehicleFrontImage],
// // //           bookingType:
// // //             res.data.bookingType ||
// // //             (res.data.withDriver ? "With Driver" : "Without Driver"),
// // //           phoneNumber:
// // //             res.data.phoneNumber || res.data.contactNumber || "Not Available",
// // //           ownerName: res.data.ownerName || "Unknown Owner",
// // //         };
// // //         console.log("Fetched from /api/vehicles:", vehicleData); // Debug log
// // //         setCar(vehicleData);
// // //         setBookingType(
// // //           vehicleData.bookingType === "Without Driver"
// // //             ? "self-drive"
// // //             : vehicleData.bookingType === "With Driver"
// // //             ? "with-driver"
// // //             : "self-drive"
// // //         );
// // //         setError(null);
// // //       } catch (err) {
// // //         console.error("Error fetching vehicle:", err);
// // //         setError("Failed to load vehicle details.");
// // //       }
// // //     };
// // //     fetchCar();
// // //   }, [id]);
// // //   // Calculate rental days (minimum 1 day)
// // //   const calculateRentalDays = (start, end) => {
// // //     const diffTime = Math.abs(end - start);
// // //     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
// // //     return diffDays > 0 ? diffDays : 1;
// // //   };

// // //   const rentalDays = calculateRentalDays(startDateTime, endDateTime);
// // //   const totalPrice = rentalDays * (car?.ratePerDay || 250);
// // //   const fees = 20; // Example fixed fees

// // //   const handleBookClick = async () => {
// // //     if (!startDateTime || !endDateTime) {
// // //       alert("Please select valid start and end dates.");
// // //       return;
// // //     }

// // //     if (!isLoggedIn) {
// // //       navigate("/login/user");
// // //       return;
// // //     }

// // //     const bookingData = {
// // //       vehicleId: id,
// // //       name: car?.carName || `Vehicle ID: ${id}`,
// // //       rate: car?.ratePerDay || 250,
// // //       date: new Date().toISOString(),
// // //       bookingType: bookingType,
// // //       customerName: user?.name || "Sample User",
// // //       email: user?.email || "user@example.com",
// // //       phone: user?.phone || "+9779801234567",
// // //       pickupDateTime: startDateTime.toISOString(),
// // //       dropoffDateTime: endDateTime.toISOString(),
// // //       totalPrice: totalPrice + fees,
// // //       ownerName: car?.ownerName || "Unknown Owner",
// // //       ownerPhone: car?.phoneNumber || "Not Available",
// // //     };
// // //     console.log("Sending booking data:", bookingData); // Debug log

// // //     try {
// // //       const response = await fetch("http://localhost:3000/booking", {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify(bookingData),
// // //       });

// // //       const data = await response.json();

// // //       if (response.ok) {
// // //         alert("Booking successful!");
// // //         navigate(`/kyc-verification`, {
// // //           state: {
// // //             totalPrice: totalPrice + fees,
// // //             rentalDays,
// // //             carName: car.carName,
// // //             carId: id,
// // //             bookingType,
// // //             startDateTime: startDateTime.toISOString(),
// // //             endDateTime: endDateTime.toISOString(),
// // //           },
// // //         });
// // //       } else {
// // //         alert("Booking failed: " + data.error);
// // //       }
// // //     } catch (error) {
// // //       console.error("Booking error:", error);
// // //       alert("Booking failed due to network/server issue.");
// // //     }
// // //   };
// // //   const handleBookingTypeChange = (type) => {
// // //     setBookingType(type);
// // //   };

// // //   const handleStartDateTimeChange = (event) => {
// // //     const newStartDate = new Date(event.target.value);
// // //     if (isNaN(newStartDate.getTime())) return;
// // //     setStartDateTime(newStartDate);
// // //     if (newStartDate > endDateTime) setEndDateTime(newStartDate);
// // //   };

// // //   const handleEndDateTimeChange = (event) => {
// // //     const newEndDate = new Date(event.target.value);
// // //     if (isNaN(newEndDate.getTime()) || newEndDate < startDateTime) return;
// // //     setEndDateTime(newEndDate);
// // //   };

// // //   const toggleDateTimeSelector = () => {
// // //     setShowDateTimeSelector(!showDateTimeSelector);
// // //   };

// // //   if (error) return <p className="error">{error}</p>;
// // //   if (!car) return <p className="loading">Loading...</p>;

// // //   const renderBookingOptions = () => {
// // //     switch (car.bookingType) {
// // //       case "Both":
// // //         return (
// // //           <>
// // //             <button
// // //               className={`booking-option-button ${
// // //                 bookingType === "self-drive" ? "active" : ""
// // //               }`}
// // //               onClick={() => handleBookingTypeChange("self-drive")}
// // //             >
// // //               Self Drive
// // //             </button>
// // //             <button
// // //               className={`booking-option-button ${
// // //                 bookingType === "with-driver" ? "active" : ""
// // //               }`}
// // //               onClick={() => handleBookingTypeChange("with-driver")}
// // //             >
// // //               With Driver
// // //             </button>
// // //           </>
// // //         );
// // //       case "With Driver":
// // //         return (
// // //           <button
// // //             className={`booking-option-button ${
// // //               bookingType === "with-driver" ? "active" : ""
// // //             }`}
// // //             onClick={() => handleBookingTypeChange("with-driver")}
// // //           >
// // //             With Driver
// // //           </button>
// // //         );
// // //       case "Without Driver":
// // //         return (
// // //           <button
// // //             className={`booking-option-button ${
// // //               bookingType === "self-drive" ? "active" : ""
// // //             }`}
// // //             onClick={() => handleBookingTypeChange("self-drive")}
// // //           >
// // //             Self Drive
// // //           </button>
// // //         );
// // //       default:
// // //         return null;
// // //     }
// // //   };

// // //   return (
// // //     <div className="car-detail-container">
// // //       <div className="car-main">
// // //         <button className="back-button" onClick={() => navigate(-1)}>
// // //           ←
// // //         </button>
// // //         <br />
// // //         <br />
// // //         <div className="car-info">
// // //           <h2 className="car-brand">{car.carName}</h2>
// // //           <p className="car-model">Vehicle Number: {car.carNumber}</p>
// // //           {car.photos?.length > 0 ? (
// // //             <img
// // //               src={`http://localhost:3000/uploads/${car.photos[0]}`}
// // //               alt={car.carName}
// // //               className="car-image"
// // //             />
// // //           ) : (
// // //             <img
// // //               src="/images/placeholder.png"
// // //               alt="Car Placeholder"
// // //               className="car-image"
// // //             />
// // //           )}

// // //           <div className="features">
// // //             <p>{car.carType}</p>
// // //             <p>{car.gearType}</p>
// // //             <p>{car.airCondition ? "A/C" : "Non-A/C"}</p>
// // //           </div>

// // //           <div className="rating">
// // //             <h2>Based on user reviews</h2>
// // //             <br />
// // //             <h1>4.8 ⭐</h1>
// // //           </div>
// // //         </div>

// // //         <div className="car-details">
// // //           <h2>Details</h2>
// // //           <div className="detail-item">
// // //             <span>👤 Owner Name</span>
// // //             <span className="value">{car.ownerName || "Unknown"}</span>
// // //           </div>
// // //           <div className="detail-item">
// // //             <span>📞 Owner Phone</span>
// // //             <span className="value">{car.phoneNumber || "Not Available"}</span>
// // //           </div>

// // //           <p className="details-desc">
// // //             {car.carName} is a {car.carType} vehicle with {car.seats} seats,
// // //             ideal for {car.bookingType.toLowerCase()}. Enjoy a comfortable ride
// // //             with {car.airCondition ? "air conditioning" : "no air conditioning"}{" "}
// // //             and {car.gearType.toLowerCase()} transmission.
// // //           </p>

// // //           <div className="detail-item">
// // //             <span>⚙️ Gear Type</span>
// // //             <span className="value">{car.gearType}</span>
// // //           </div>
// // //           <div className="detail-item">
// // //             <span>❄️ Air Conditioning</span>
// // //             <span className="value">{car.airCondition ? "Yes" : "No"}</span>
// // //           </div>
// // //           <div className="detail-item">
// // //             <span>🧍 Seats</span>
// // //             <span className="value">{car.seats}</span>
// // //           </div>
// // //           <div className="detail-item">
// // //             <span>💲 Rate</span>
// // //             <span className="value bold">रू{car.ratePerDay}/day</span>
// // //           </div>

// // //           <div className="booking-type-selection">
// // //             <p className="booking-type-label">Booking Type:</p>
// // //             <div className="booking-options">{renderBookingOptions()}</div>
// // //           </div>

// // //           <p className="note-text">
// // //             Please ensure you have a valid driving license for self-drive
// // //             bookings. For with-driver bookings, contact{" "}
// // //             {car.phoneNumber || "N/A"} for availability.
// // //           </p>

// // //           <div className="book-box">
// // //             <p className="date-label">Booking Dates & Times</p>
// // //             <button
// // //               className="date-time-button"
// // //               onClick={toggleDateTimeSelector}
// // //             >
// // //               Start: {startDateTime.toLocaleString()} | End:{" "}
// // //               {endDateTime.toLocaleString()}
// // //             </button>
// // //             {showDateTimeSelector && (
// // //               <div className="date-time-inputs">
// // //                 <div>
// // //                   <label>Start Date & Time</label>
// // //                   <input
// // //                     type="datetime-local"
// // //                     value={startDateTime.toISOString().slice(0, 16)}
// // //                     onChange={handleStartDateTimeChange}
// // //                     className="date-time-input"
// // //                   />
// // //                 </div>
// // //                 <div>
// // //                   <label>End Date & Time</label>
// // //                   <input
// // //                     type="datetime-local"
// // //                     value={endDateTime.toISOString().slice(0, 16)}
// // //                     onChange={handleEndDateTimeChange}
// // //                     className="date-time-input"
// // //                     min={startDateTime.toISOString().slice(0, 16)}
// // //                   />
// // //                 </div>
// // //               </div>
// // //             )}
// // //             <div className="price-summary">
// // //               <p>
// // //                 <strong>Total Rental Days:</strong> {rentalDays}
// // //               </p>
// // //               <p>
// // //                 <strong>Total Price:</strong> ₹{totalPrice + fees} (Including ₹
// // //                 {fees} fees)
// // //               </p>
// // //             </div>
// // //             <button className="book-button" onClick={handleBookClick}>
// // //               BOOK NOW
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default CarDetailPage;

// // // import React, { useEffect, useState } from "react";
// // // import { useParams, useNavigate } from "react-router-dom";
// // // import axios from "axios";
// // // import "./CarDetailPage.css";

// // // const CarDetailPage = ({ isLoggedIn, user }) => {
// // //   const { id } = useParams();
// // //   const navigate = useNavigate();
// // //   const [car, setCar] = useState(null);
// // //   const [bookingType, setBookingType] = useState("self-drive");
// // //   const [startDateTime, setStartDateTime] = useState(new Date());
// // //   const [endDateTime, setEndDateTime] = useState(
// // //     new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
// // //   ); // Default to 1 day later
// // //   const [showDateTimeSelector, setShowDateTimeSelector] = useState(false);
// // //   const [error, setError] = useState(null);

// // //   useEffect(() => {
// // //     const fetchCar = async () => {
// // //       try {
// // //         // Try fetching from /api/cars first
// // //         try {
// // //           const res = await axios.get(`http://localhost:3000/api/cars/${id}`);
// // //           console.log("Fetched from /api/cars:", res.data); // Debug log
// // //           setCar(res.data);
// // //           setBookingType(
// // //             res.data.bookingType === "Without Driver"
// // //               ? "self-drive"
// // //               : res.data.bookingType === "With Driver"
// // //               ? "with-driver"
// // //               : "self-drive"
// // //           );
// // //           setError(null);
// // //           return;
// // //         } catch (err) {
// // //           console.log("Car not found in /api/cars, trying /api/vehicles");
// // //         }

// // //         // If not found in /api/cars, try /api/vehicles
// // //         const res = await axios.get(`http://localhost:3000/api/vehicles/${id}`);
// // //         console.log("Fetched from /api/vehicles:", res.data); // Debug log
// // //         const vehicleData = {
// // //           ...res.data,
// // //           carName:
// // //             res.data.vehicleName || res.data.carName || `Vehicle ID: ${id}`,
// // //           carNumber: res.data.vehicleNumber || res.data.carNumber || "Unknown",
// // //           carType: res.data.vehicleType || res.data.carType || "Unknown",
// // //           gearType: res.data.gearType || "Automatic",
// // //           airCondition: res.data.airCondition || false,
// // //           seats: res.data.seatNumbers || res.data.seats || 4,
// // //           ratePerDay: res.data.perDayRate || res.data.ratePerDay || 250,
// // //           photos: res.data.photos || [res.data.vehicleFrontImage] || [],
// // //           bookingType:
// // //             res.data.bookingType ||
// // //             (res.data.withDriver ? "With Driver" : "Without Driver") ||
// // //             "Both",
// // //           phoneNumber:
// // //             res.data.phoneNumber || res.data.contactNumber || "Not Available",
// // //         };
// // //         setCar(vehicleData);
// // //         setBookingType(
// // //           vehicleData.bookingType === "Without Driver"
// // //             ? "self-drive"
// // //             : vehicleData.bookingType === "With Driver"
// // //             ? "with-driver"
// // //             : "self-drive"
// // //         );
// // //         setError(null);
// // //       } catch (err) {
// // //         console.error(
// // //           "Error fetching vehicle:",
// // //           err.response?.data || err.message
// // //         );
// // //         setError("Failed to load vehicle details.");
// // //       }
// // //     };
// // //     fetchCar();
// // //   }, [id]);

// // //   const calculateRentalDays = (start, end) => {
// // //     const diffTime = Math.abs(end - start);
// // //     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
// // //     return diffDays > 0 ? diffDays : 1;
// // //   };

// // //   const rentalDays = calculateRentalDays(startDateTime, endDateTime);
// // //   const totalPrice = rentalDays * (car?.ratePerDay || 250);
// // //   const fees = 20;

// // //   const handleBookClick = async () => {
// // //     if (!startDateTime || !endDateTime || startDateTime >= endDateTime) {
// // //       alert(
// // //         "Please select valid start and end dates (end date must be after start date)."
// // //       );
// // //       return;
// // //     }

// // //     if (!isLoggedIn) {
// // //       navigate("/login/user");
// // //       return;
// // //     }

// // //     const bookingData = {
// // //       vehicleId: id,
// // //       name: car?.carName || `Vehicle ID: ${id}`,
// // //       rate: car?.ratePerDay || 250,
// // //       date: new Date().toISOString(),
// // //       bookingType: bookingType,
// // //       customerName: user?.name || "Sample User",
// // //       email: user?.email || "user@example.com",
// // //       phone: user?.phone || "+9779801234567",
// // //       pickupDateTime: startDateTime.toISOString(),
// // //       dropoffDateTime: endDateTime.toISOString(),
// // //       totalPrice: totalPrice + fees,
// // //       ownerName: car?.ownerName || "Unknown Owner",
// // //       ownerPhone: car?.phoneNumber || "Not Available",
// // //     };
// // //     console.log("Sending booking data:", bookingData);

// // //     try {
// // //       const response = await fetch("http://localhost:3000/booking", {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify(bookingData),
// // //       });

// // //       const data = await response.json();

// // //       if (response.ok) {
// // //         alert("Booking successful!");
// // //         navigate(`/kyc-verification`, {
// // //           state: {
// // //             totalPrice: totalPrice + fees,
// // //             rentalDays,
// // //             carName: car?.carName,
// // //             carId: id,
// // //             bookingType,
// // //             startDateTime: startDateTime.toISOString(),
// // //             endDateTime: endDateTime.toISOString(),
// // //           },
// // //         });
// // //       } else {
// // //         alert("Booking failed: " + data.error);
// // //       }
// // //     } catch (error) {
// // //       console.error("Booking error:", error);
// // //       alert("Booking failed due to network/server issue.");
// // //     }
// // //   };

// // //   const handleBookingTypeChange = (type) => {
// // //     setBookingType(type);
// // //   };

// // //   const handleStartDateTimeChange = (event) => {
// // //     const newStartDate = new Date(event.target.value);
// // //     if (isNaN(newStartDate.getTime())) return;
// // //     setStartDateTime(newStartDate);
// // //     if (newStartDate >= endDateTime) {
// // //       setEndDateTime(new Date(newStartDate.getTime() + 24 * 60 * 60 * 1000));
// // //     }
// // //   };

// // //   const handleEndDateTimeChange = (event) => {
// // //     const newEndDate = new Date(event.target.value);
// // //     if (isNaN(newEndDate.getTime()) || newEndDate <= startDateTime) return;
// // //     setEndDateTime(newEndDate);
// // //   };

// // //   const toggleDateTimeSelector = () => {
// // //     setShowDateTimeSelector(!showDateTimeSelector);
// // //   };

// // //   if (error) return <p className="error">{error}</p>;
// // //   if (!car) return <p className="loading">Loading...</p>;

// // //   const renderBookingOptions = () => {
// // //     switch (car.bookingType) {
// // //       case "Both":
// // //         return (
// // //           <>
// // //             <button
// // //               className={`booking-option-button ${
// // //                 bookingType === "self-drive" ? "active" : ""
// // //               }`}
// // //               onClick={() => handleBookingTypeChange("self-drive")}
// // //             >
// // //               Self Drive
// // //             </button>
// // //             <button
// // //               className={`booking-option-button ${
// // //                 bookingType === "with-driver" ? "active" : ""
// // //               }`}
// // //               onClick={() => handleBookingTypeChange("with-driver")}
// // //             >
// // //               With Driver
// // //             </button>
// // //           </>
// // //         );
// // //       case "With Driver":
// // //         return (
// // //           <button
// // //             className={`booking-option-button ${
// // //               bookingType === "with-driver" ? "active" : ""
// // //             }`}
// // //             onClick={() => handleBookingTypeChange("with-driver")}
// // //           >
// // //             With Driver
// // //           </button>
// // //         );
// // //       case "Without Driver":
// // //         return (
// // //           <button
// // //             className={`booking-option-button ${
// // //               bookingType === "self-drive" ? "active" : ""
// // //             }`}
// // //             onClick={() => handleBookingTypeChange("self-drive")}
// // //           >
// // //             Self Drive
// // //           </button>
// // //         );
// // //       default:
// // //         return null;
// // //     }
// // //   };

// // //   return (
// // //     <div className="car-detail-container">
// // //       <div className="car-main">
// // //         <button className="back-button" onClick={() => navigate(-1)}>
// // //           ←
// // //         </button>
// // //         <br />
// // //         <br />
// // //         <div className="car-info">
// // //           <h2 className="car-brand">{car.carName}</h2>
// // //           <p className="car-model">Vehicle Number: {car.carNumber}</p>
// // //           {car.photos?.length > 0 ? (
// // //             <img
// // //               src={`http://localhost:3000/uploads/${car.photos[0]}`}
// // //               alt={car.carName}
// // //               className="car-image"
// // //             />
// // //           ) : (
// // //             <img
// // //               src="/images/placeholder.png"
// // //               alt="Car Placeholder"
// // //               className="car-image"
// // //             />
// // //           )}

// // //           <div className="features">
// // //             <p>{car.carType}</p>
// // //             <p>{car.gearType}</p>
// // //             <p>{car.airCondition ? "A/C" : "Non-A/C"}</p>
// // //           </div>

// // //           <div className="rating">
// // //             <h2>Based on user reviews</h2>
// // //             <br />
// // //             <h1>4.8 ⭐</h1>
// // //           </div>
// // //         </div>

// // //         <div className="car-details">
// // //           <h2>Details</h2>
// // //           <p className="details-desc">
// // //             {car.carName} is a {car.carType} vehicle with {car.seats} seats,
// // //             ideal for {car.bookingType.toLowerCase()}. Enjoy a comfortable ride
// // //             with {car.airCondition ? "air conditioning" : "no air conditioning"}{" "}
// // //             and
// // //             {car.gearType.toLowerCase()} transmission.
// // //           </p>

// // //           <div className="detail-item">
// // //             <span>⚙️ Gear Type</span>
// // //             <span className="value">{car.gearType}</span>
// // //           </div>
// // //           <div className="detail-item">
// // //             <span>❄️ Air Conditioning</span>
// // //             <span className="value">{car.airCondition ? "Yes" : "No"}</span>
// // //           </div>
// // //           <div className="detail-item">
// // //             <span>🧍 Seats</span>
// // //             <span className="value">{car.seats}</span>
// // //           </div>
// // //           <div className="detail-item">
// // //             <span>💲 Rate</span>
// // //             <span className="value bold">
// // //               रू{car.ratePerDay.toLocaleString()}/day
// // //             </span>
// // //           </div>

// // //           <div className="booking-type-selection">
// // //             <p className="booking-type-label">Booking Type:</p>
// // //             <div className="booking-options">{renderBookingOptions()}</div>
// // //           </div>

// // //           <p className="note-text">
// // //             Please ensure you have a valid driving license for self-drive
// // //             bookings. For with-driver bookings, contact{" "}
// // //             {car.phoneNumber || "N/A"} for availability.
// // //           </p>

// // //           <div className="book-box">
// // //             <p className="date-label">Booking Dates & Times</p>
// // //             <button
// // //               className="date-time-button"
// // //               onClick={toggleDateTimeSelector}
// // //             >
// // //               Start: {startDateTime.toLocaleString()} | End:{" "}
// // //               {endDateTime.toLocaleString()}
// // //             </button>
// // //             {showDateTimeSelector && (
// // //               <div className="date-time-inputs">
// // //                 <div>
// // //                   <label>Start Date & Time</label>
// // //                   <input
// // //                     type="datetime-local"
// // //                     value={startDateTime.toISOString().slice(0, 16)}
// // //                     onChange={handleStartDateTimeChange}
// // //                     className="date-time-input"
// // //                   />
// // //                 </div>
// // //                 <div>
// // //                   <label>End Date & Time</label>
// // //                   <input
// // //                     type="datetime-local"
// // //                     value={endDateTime.toISOString().slice(0, 16)}
// // //                     onChange={handleEndDateTimeChange}
// // //                     className="date-time-input"
// // //                     min={startDateTime.toISOString().slice(0, 16)}
// // //                   />
// // //                 </div>
// // //               </div>
// // //             )}
// // //             <div className="price-summary">
// // //               <p>
// // //                 <strong>Total Rental Days:</strong> {rentalDays}
// // //               </p>
// // //               <p>
// // //                 <strong>Total Price:</strong> रू
// // //                 {(totalPrice + fees).toLocaleString()} (Including रू{fees} fees)
// // //               </p>
// // //             </div>
// // //             <button className="book-button" onClick={handleBookClick}>
// // //               BOOK NOW
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default CarDetailPage;

// // import React, { useEffect, useState } from "react";
// // import { useParams, useNavigate } from "react-router-dom";
// // import axios from "axios";
// // import "./CarDetailPage.css";

// // const CarDetailPage = ({ isLoggedIn, user }) => {
// //   const { id } = useParams();
// //   const navigate = useNavigate();
// //   const [car, setCar] = useState(null);
// //   const [bookingType, setBookingType] = useState("self-drive");
// //   const [startDateTime, setStartDateTime] = useState(new Date());
// //   const [endDateTime, setEndDateTime] = useState(new Date());
// //   const [showDateTimeSelector, setShowDateTimeSelector] = useState(false);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchCar = async () => {
// //       try {
// //         // Try fetching from /api/cars first
// //         try {
// //           const res = await axios.get(`http://localhost:3000/api/cars/${id}`);
// //           setCar(res.data);
// //           setBookingType(
// //             res.data.bookingType === "Without Driver"
// //               ? "self-drive"
// //               : res.data.bookingType === "With Driver"
// //               ? "with-driver"
// //               : "self-drive"
// //           );
// //           setError(null);
// //           return;
// //         } catch (err) {
// //           console.log("Car not found in /api/cars, trying /api/vehicles");
// //         }

// //         // If not found in /api/cars, try /api/vehicles
// //         const res = await axios.get(`http://localhost:3000/api/vehicles/${id}`);
// //         const vehicleData = {
// //           ...res.data,
// //           carName: res.data.vehicleName || res.data.carName,
// //           carNumber: res.data.vehicleNumber || res.data.carNumber,
// //           carType: res.data.vehicleType || res.data.carType,
// //           gearType: res.data.gearType || "Automatic",
// //           airCondition: res.data.airCondition || false,
// //           seats: res.data.seatNumbers || res.data.seats || 4,
// //           ratePerDay: res.data.perDayRate || res.data.ratePerDay || 250,
// //           photos: res.data.photos || [res.data.vehicleFrontImage],
// //           bookingType:
// //             res.data.bookingType ||
// //             (res.data.withDriver ? "With Driver" : "Without Driver"),
// //           phoneNumber: res.data.phoneNumber || res.data.contactNumber,
// //         };
// //         setCar(vehicleData);
// //         setBookingType(
// //           vehicleData.bookingType === "Without Driver"
// //             ? "self-drive"
// //             : vehicleData.bookingType === "With Driver"
// //             ? "with-driver"
// //             : "self-drive"
// //         );
// //         setError(null);
// //       } catch (err) {
// //         console.error("Error fetching vehicle:", err);
// //         setError("Failed to load vehicle details.");
// //       }
// //     };
// //     fetchCar();
// //   }, [id]);

// //   // Calculate rental days (minimum 1 day)
// //   const calculateRentalDays = (start, end) => {
// //     const diffTime = Math.abs(end - start);
// //     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
// //     return diffDays > 0 ? diffDays : 1;
// //   };

// //   const rentalDays = calculateRentalDays(startDateTime, endDateTime);
// //   const totalPrice = rentalDays * (car?.ratePerDay || 250);
// //   const fees = 20; // Example fixed fees

// //   const handleBookClick = async () => {
// //     if (!startDateTime || !endDateTime) {
// //       alert("Please select valid start and end dates.");
// //       return;
// //     }

// //     if (!isLoggedIn) {
// //       navigate("/login/user");
// //       return;
// //     }

// //     const bookingData = {
// //       vehicleId: id,
// //       name: car?.carName || `Vehicle ID: ${id}`,
// //       rate: car?.ratePerDay || 250,
// //       date: new Date().toISOString(),
// //       bookingType: bookingType,
// //       customerName: user?.name || "Sample User",
// //       email: user?.email || "user@example.com",
// //       phone: user?.phone || "+9779801234567",
// //       pickupDateTime: startDateTime.toISOString(),
// //       dropoffDateTime: endDateTime.toISOString(),
// //     };

// //     try {
// //       const response = await fetch("http://localhost:3000/booking", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify(bookingData),
// //       });

// //       const data = await response.json();

// //       if (response.ok) {
// //         alert("Booking successful!");
// //         navigate(`/kyc-verification`, {
// //           state: {
// //             totalPrice: totalPrice + fees,
// //             rentalDays,
// //             carName: car.carName,
// //             carId: id,
// //             bookingType,
// //             startDateTime: startDateTime.toISOString(),
// //             endDateTime: endDateTime.toISOString(),
// //           },
// //         });
// //       } else {
// //         alert("Booking failed: " + data.error);
// //       }
// //     } catch (error) {
// //       console.error("Booking error:", error);
// //       alert("Booking failed due to network/server issue.");
// //     }
// //   };

// //   const handleBookingTypeChange = (type) => {
// //     setBookingType(type);
// //   };

// //   const handleStartDateTimeChange = (event) => {
// //     const newStartDate = new Date(event.target.value);
// //     if (isNaN(newStartDate.getTime())) return;
// //     setStartDateTime(newStartDate);
// //     if (newStartDate > endDateTime) setEndDateTime(newStartDate);
// //   };

// //   const handleEndDateTimeChange = (event) => {
// //     const newEndDate = new Date(event.target.value);
// //     if (isNaN(newEndDate.getTime()) || newEndDate < startDateTime) return;
// //     setEndDateTime(newEndDate);
// //   };

// //   const toggleDateTimeSelector = () => {
// //     setShowDateTimeSelector(!showDateTimeSelector);
// //   };

// //   if (error) return <p className="error">{error}</p>;
// //   if (!car) return <p className="loading">Loading...</p>;

// //   const renderBookingOptions = () => {
// //     switch (car.bookingType) {
// //       case "Both":
// //         return (
// //           <>
// //             <button
// //               className={`booking-option-button ${
// //                 bookingType === "self-drive" ? "active" : ""
// //               }`}
// //               onClick={() => handleBookingTypeChange("self-drive")}
// //             >
// //               Self Drive
// //             </button>
// //             <button
// //               className={`booking-option-button ${
// //                 bookingType === "with-driver" ? "active" : ""
// //               }`}
// //               onClick={() => handleBookingTypeChange("with-driver")}
// //             >
// //               With Driver
// //             </button>
// //           </>
// //         );
// //       case "With Driver":
// //         return (
// //           <button
// //             className={`booking-option-button ${
// //               bookingType === "with-driver" ? "active" : ""
// //             }`}
// //             onClick={() => handleBookingTypeChange("with-driver")}
// //           >
// //             With Driver
// //           </button>
// //         );
// //       case "Without Driver":
// //         return (
// //           <button
// //             className={`booking-option-button ${
// //               bookingType === "self-drive" ? "active" : ""
// //             }`}
// //             onClick={() => handleBookingTypeChange("self-drive")}
// //           >
// //             Self Drive
// //           </button>
// //         );
// //       default:
// //         return null;
// //     }
// //   };

// //   return (
// //     <div className="car-detail-container">
// //       <div className="car-main">
// //         <button className="back-button" onClick={() => navigate(-1)}>
// //           ←
// //         </button>
// //         <br />
// //         <br />
// //         <div className="car-info">
// //           <h2 className="car-brand">{car.carName}</h2>
// //           <p className="car-model">Vehicle Number: {car.carNumber}</p>
// //           {car.photos?.length > 0 ? (
// //             <img
// //               src={`http://localhost:3000/uploads/${car.photos[0]}`}
// //               alt={car.carName}
// //               className="car-image"
// //             />
// //           ) : (
// //             <img
// //               src="/images/placeholder.png"
// //               alt="Car Placeholder"
// //               className="car-image"
// //             />
// //           )}

// //           <div className="features">
// //             <p>{car.carType}</p>
// //             <p>{car.gearType}</p>
// //             <p>{car.airCondition ? "A/C" : "Non-A/C"}</p>
// //           </div>

// //           <div className="rating">
// //             <h2>Based on user reviews</h2>
// //             <br />
// //             <h1>4.8 ⭐</h1>
// //           </div>
// //         </div>

// //         <div className="car-details">
// //           <h2>Details</h2>
// //           <p className="details-desc">
// //             {car.carName} is a {car.carType} vehicle with {car.seats} seats,
// //             ideal for {car.bookingType.toLowerCase()}. Enjoy a comfortable ride
// //             with {car.airCondition ? "air conditioning" : "no air conditioning"}{" "}
// //             and {car.gearType.toLowerCase()} transmission.
// //           </p>

// //           <div className="detail-item">
// //             <span>⚙️ Gear Type</span>
// //             <span className="value">{car.gearType}</span>
// //           </div>
// //           <div className="detail-item">
// //             <span>❄️ Air Conditioning</span>
// //             <span className="value">{car.airCondition ? "Yes" : "No"}</span>
// //           </div>
// //           <div className="detail-item">
// //             <span>🧍 Seats</span>
// //             <span className="value">{car.seats}</span>
// //           </div>
// //           <div className="detail-item">
// //             <span>💲 Rate</span>
// //             <span className="value bold">रू{car.ratePerDay}/day</span>
// //           </div>

// //           <div className="booking-type-selection">
// //             <p className="booking-type-label">Booking Type:</p>
// //             <div className="booking-options">{renderBookingOptions()}</div>
// //           </div>

// //           <p className="note-text">
// //             Please ensure you have a valid driving license for self-drive
// //             bookings. For with-driver bookings, contact{" "}
// //             {car.phoneNumber || "N/A"} for availability.
// //           </p>

// //           <div className="book-box">
// //             <p className="date-label">Booking Dates & Times</p>
// //             <button
// //               className="date-time-button"
// //               onClick={toggleDateTimeSelector}
// //             >
// //               Start: {startDateTime.toLocaleString()} | End:{" "}
// //               {endDateTime.toLocaleString()}
// //             </button>
// //             {showDateTimeSelector && (
// //               <div className="date-time-inputs">
// //                 <div>
// //                   <label>Start Date & Time</label>
// //                   <input
// //                     type="datetime-local"
// //                     value={startDateTime.toISOString().slice(0, 16)}
// //                     onChange={handleStartDateTimeChange}
// //                     className="date-time-input"
// //                   />
// //                 </div>
// //                 <div>
// //                   <label>End Date & Time</label>
// //                   <input
// //                     type="datetime-local"
// //                     value={endDateTime.toISOString().slice(0, 16)}
// //                     onChange={handleEndDateTimeChange}
// //                     className="date-time-input"
// //                     min={startDateTime.toISOString().slice(0, 16)}
// //                   />
// //                 </div>
// //               </div>
// //             )}
// //             <div className="price-summary">
// //               <p>
// //                 <strong>Total Rental Days:</strong> {rentalDays}
// //               </p>
// //               <p>
// //                 <strong>Total Price:</strong> ₹{totalPrice + fees} (Including ₹
// //                 {fees} fees)
// //               </p>
// //             </div>
// //             <button className="book-button" onClick={handleBookClick}>
// //               BOOK NOW
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CarDetailPage;

// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./CarDetailPage.css";

// const CarDetailPage = ({ isLoggedIn, user }) => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [car, setCar] = useState(null);
//   const [bookingType, setBookingType] = useState("self-drive");
//   const [startDateTime, setStartDateTime] = useState(new Date());
//   const [endDateTime, setEndDateTime] = useState(new Date());
//   const [showDateTimeSelector, setShowDateTimeSelector] = useState(false);
//   const [error, setError] = useState(null);
//   const [dataSource, setDataSource] = useState(null); // Track if data comes from /api/cars or /api/vehicles

//   useEffect(() => {
//     const fetchCar = async () => {
//       if (!id) {
//         setError("Invalid vehicle ID.");
//         return;
//       }

//       try {
//         // Try fetching from /api/cars first
//         try {
//           const res = await axios.get(`http://localhost:3000/api/cars/${id}`);
//           setCar({
//             ...res.data,
//             ownerName: "Drifty",
//             phoneNumber: "9844177965",
//             carId: id, // Explicitly set carId
//           });
//           setBookingType(
//             res.data.bookingType === "Without Driver"
//               ? "self-drive"
//               : res.data.bookingType === "With Driver"
//               ? "with-driver"
//               : "self-drive"
//           );
//           setDataSource("cars");
//           setError(null);
//           return;
//         } catch (err) {
//           console.log("Car not found in /api/cars, trying /api/vehicles");
//         }

//         // If not found in /api/cars, try /api/vehicles
//         const res = await axios.get(`http://localhost:3000/api/vehicles/${id}`);
//         const vehicleData = {
//           ...res.data,
//           carName: res.data.vehicleName || res.data.carName,
//           carNumber: res.data.vehicleNumber || res.data.carNumber,
//           carType: res.data.vehicleType || res.data.carType,
//           gearType: res.data.gearType || "Automatic",
//           airCondition: res.data.airCondition || false,
//           seats: res.data.seatNumbers || res.data.seats || 4,
//           ratePerDay: res.data.perDayRate || res.data.ratePerDay || 250,
//           photos: res.data.photos || [res.data.vehicleFrontImage],
//           bookingType:
//             res.data.bookingType ||
//             (res.data.withDriver ? "With Driver" : "Without Driver"),
//           ownerName: res.data.ownerName || "Unknown Owner",
//           phoneNumber: res.data.phoneNumber || res.data.contactNumber || "N/A",
//           carId: id, // Explicitly set carId
//         };
//         setCar(vehicleData);
//         setBookingType(
//           vehicleData.bookingType === "Without Driver"
//             ? "self-drive"
//             : vehicleData.bookingType === "With Driver"
//             ? "with-driver"
//             : "self-drive"
//         );
//         setDataSource("vehicles");
//         setError(null);
//       } catch (err) {
//         console.error("Error fetching vehicle:", err);
//         setError("Failed to load vehicle details.");
//       }
//     };
//     fetchCar();
//   }, [id]);

//   // Calculate rental days (minimum 1 day)
//   const calculateRentalDays = (start, end) => {
//     const diffTime = Math.abs(end - start);
//     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
//     return diffDays > 0 ? diffDays : 1;
//   };

//   const rentalDays = calculateRentalDays(startDateTime, endDateTime);
//   const totalPrice = rentalDays * (car?.ratePerDay || 250);
//   const fees = 20; // Example fixed fees

//   const handleBookClick = async () => {
//     if (!id) {
//       alert("Invalid vehicle ID.");
//       return;
//     }

//     if (!startDateTime || !endDateTime) {
//       alert("Please select valid start and end dates.");
//       return;
//     }

//     if (!isLoggedIn) {
//       navigate("/login/user");
//       return;
//     }

//     const bookingData = {
//       vehicleId: id,
//       carId: id, // Explicitly include carId
//       name: car?.carName || `Vehicle ID: ${id}`,
//       rate: car?.ratePerDay || 250,
//       date: new Date().toISOString(),
//       bookingType: bookingType,
//       customerName: user?.name || "Sample User",
//       email: user?.email || "user@example.com",
//       phone: user?.phone || "+9779801234567",
//       pickupDateTime: startDateTime.toISOString(),
//       dropoffDateTime: endDateTime.toISOString(),
//       ownerName:
//         car?.ownerName || (dataSource === "cars" ? "Drifty" : "Unknown Owner"),
//       phoneNumber:
//         car?.phoneNumber || (dataSource === "cars" ? "9844177965" : "N/A"),
//     };

//     try {
//       const response = await fetch("http://localhost:3000/booking", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(bookingData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert("Booking successful!");
//         navigate(`/kyc-verification`, {
//           state: {
//             totalPrice: totalPrice + fees,
//             rentalDays,
//             carName: car?.carName,
//             carId: id, // Ensure carId is passed
//             bookingType,
//             startDateTime: startDateTime.toISOString(),
//             endDateTime: endDateTime.toISOString(),
//             ownerName: bookingData.ownerName,
//             phoneNumber: bookingData.phoneNumber,
//           },
//         });
//       } else {
//         alert("Booking failed: " + data.error);
//       }
//     } catch (error) {
//       console.error("Booking error:", error);
//       alert("Booking failed due to network/server issue.");
//     }
//   };

//   const handleBookingTypeChange = (type) => {
//     setBookingType(type);
//   };

//   const handleStartDateTimeChange = (event) => {
//     const newStartDate = new Date(event.target.value);
//     if (isNaN(newStartDate.getTime())) return;
//     setStartDateTime(newStartDate);
//     if (newStartDate > endDateTime) setEndDateTime(newStartDate);
//   };

//   const handleEndDateTimeChange = (event) => {
//     const newEndDate = new Date(event.target.value);
//     if (isNaN(newEndDate.getTime()) || newEndDate < startDateTime) return;
//     setEndDateTime(newEndDate);
//   };

//   const toggleDateTimeSelector = () => {
//     setShowDateTimeSelector(!showDateTimeSelector);
//   };

//   if (error) return <p className="error">{error}</p>;
//   if (!car) return <p className="loading">Loading...</p>;

//   const renderBookingOptions = () => {
//     switch (car.bookingType) {
//       case "Both":
//         return (
//           <>
//             <button
//               className={`booking-option-button ${
//                 bookingType === "self-drive" ? "active" : ""
//               }`}
//               onClick={() => handleBookingTypeChange("self-drive")}
//             >
//               Self Drive
//             </button>
//             <button
//               className={`booking-option-button ${
//                 bookingType === "with-driver" ? "active" : ""
//               }`}
//               onClick={() => handleBookingTypeChange("with-driver")}
//             >
//               With Driver
//             </button>
//           </>
//         );
//       case "With Driver":
//         return (
//           <button
//             className={`booking-option-button ${
//               bookingType === "with-driver" ? "active" : ""
//             }`}
//             onClick={() => handleBookingTypeChange("with-driver")}
//           >
//             With Driver
//           </button>
//         );
//       case "Without Driver":
//         return (
//           <button
//             className={`booking-option-button ${
//               bookingType === "self-drive" ? "active" : ""
//             }`}
//             onClick={() => handleBookingTypeChange("self-drive")}
//           >
//             Self Drive
//           </button>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="car-detail-container">
//       <div className="car-main">
//         <button className="back-button" onClick={() => navigate(-1)}>
//           ←
//         </button>
//         <br />
//         <br />
//         <div className="car-info">
//           <h2 className="car-brand">{car.carName}</h2>
//           <p className="car-model">Vehicle Number: {car.carNumber}</p>
//           {car.photos?.length > 0 ? (
//             <img
//               src={`http://localhost:3000/uploads/${car.photos[0]}`}
//               alt={car.carName}
//               className="car-image"
//             />
//           ) : (
//             <img
//               src="/images/placeholder.png"
//               alt="Car Placeholder"
//               className="car-image"
//             />
//           )}

//           <div className="features">
//             <p>{car.carType}</p>
//             <p>{car.gearType}</p>
//             <p>{car.airCondition ? "A/C" : "Non-A/C"}</p>
//           </div>

//           <div className="rating">
//             <h2>Based on user reviews</h2>
//             <br />
//             <h1>4.8 ⭐</h1>
//           </div>
//         </div>

//         <div className="car-details">
//           <h2>Details</h2>
//           <p className="details-desc">
//             {car.carName} is a {car.carType} vehicle with {car.seats} seats,
//             ideal for {car.bookingType.toLowerCase()}. Enjoy a comfortable ride
//             with {car.airCondition ? "air conditioning" : "no air conditioning"}{" "}
//             and {car.gearType.toLowerCase()} transmission.
//             <br />
//             <strong>Owner:</strong> {car.ownerName} <br />
//             <strong>Contact:</strong> {car.phoneNumber}
//           </p>

//           <div className="detail-item">
//             <span>⚙️ Gear Type</span>
//             <span className="value">{car.gearType}</span>
//           </div>
//           <div className="detail-item">
//             <span>❄️ Air Conditioning</span>
//             <span className="value">{car.airCondition ? "Yes" : "No"}</span>
//           </div>
//           <div className="detail-item">
//             <span>🧍 Seats</span>
//             <span className="value">{car.seats}</span>
//           </div>
//           <div className="detail-item">
//             <span>💲 Rate</span>
//             <span className="value bold">रू{car.ratePerDay}/day</span>
//           </div>

//           <div className="booking-type-selection">
//             <p className="booking-type-label">Booking Type:</p>
//             <div className="booking-options">{renderBookingOptions()}</div>
//           </div>

//           <p className="note-text">
//             Please ensure you have a valid driving license for self-drive
//             bookings. For with-driver bookings, contact{" "}
//             {car.phoneNumber || "N/A"} for availability.
//           </p>

//           <div className="book-box">
//             <p className="date-label">Booking Dates & Times</p>
//             <button
//               className="date-time-button"
//               onClick={toggleDateTimeSelector}
//             >
//               Start: {startDateTime.toLocaleString()} | End:{" "}
//               {endDateTime.toLocaleString()}
//             </button>
//             {showDateTimeSelector && (
//               <div className="date-time-inputs">
//                 <div>
//                   <label>Start Date & Time</label>
//                   <input
//                     type="datetime-local"
//                     value={startDateTime.toISOString().slice(0, 16)}
//                     onChange={handleStartDateTimeChange}
//                     className="date-time-input"
//                   />
//                 </div>
//                 <div>
//                   <label>End Date & Time</label>
//                   <input
//                     type="datetime-local"
//                     value={endDateTime.toISOString().slice(0, 16)}
//                     onChange={handleEndDateTimeChange}
//                     className="date-time-input"
//                     min={startDateTime.toISOString().slice(0, 16)}
//                   />
//                 </div>
//               </div>
//             )}
//             <div className="price-summary">
//               <p>
//                 <strong>Total Rental Days:</strong> {rentalDays}
//               </p>
//               <p>
//                 <strong>Total Price:</strong> ₹{totalPrice + fees} (Including ₹
//                 {fees} fees)
//               </p>
//             </div>
//             <button className="book-button" onClick={handleBookClick}>
//               BOOK NOW
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CarDetailPage;

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./CarDetailPage.css";

const CarDetailPage = ({ isLoggedIn, user }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [bookingType, setBookingType] = useState("self-drive");
  const [startDateTime, setStartDateTime] = useState(new Date());
  const [endDateTime, setEndDateTime] = useState(new Date());
  const [showDateTimeSelector, setShowDateTimeSelector] = useState(false);
  const [error, setError] = useState(null);
  const [dataSource, setDataSource] = useState(null); // Track if data comes from /api/cars or /api/vehicles

  useEffect(() => {
    const fetchCar = async () => {
      if (!id) {
        setError("Invalid vehicle ID.");
        return;
      }

      try {
        // Try fetching from /api/cars first
        try {
          const res = await axios.get(`http://localhost:3000/api/cars/${id}`);
          setCar({
            ...res.data,
            ownerName: "Drifty",
            phoneNumber: "9844177965",
            carId: id, // Explicitly set carId
          });
          setBookingType(
            res.data.bookingType === "Without Driver"
              ? "self-drive"
              : res.data.bookingType === "With Driver"
              ? "with-driver"
              : "self-drive"
          );
          setDataSource("cars");
          setError(null);
          return;
        } catch (err) {
          console.log("Car not found in /api/cars, trying /api/vehicles");
        }

        // If not found in /api/cars, try /api/vehicles
        const res = await axios.get(`http://localhost:3000/api/vehicles/${id}`);
        const vehicleData = {
          ...res.data,
          carName: res.data.vehicleName || res.data.carName,
          carNumber: res.data.vehicleNumber || res.data.carNumber,
          carType: res.data.vehicleType || res.data.carType,
          gearType: res.data.gearType || "Automatic",
          airCondition: res.data.airCondition || false,
          seats: res.data.seatNumbers || res.data.seats || 4,
          ratePerDay: res.data.perDayRate || res.data.ratePerDay || 250,
          photos: res.data.photos || [res.data.vehicleFrontImage],
          bookingType:
            res.data.bookingType ||
            (res.data.withDriver ? "With Driver" : "Without Driver"),
          ownerName: res.data.ownerName || "Unknown Owner",
          phoneNumber: res.data.phoneNumber || res.data.contactNumber || "N/A",
          carId: id, // Explicitly set carId
        };
        setCar(vehicleData);
        setBookingType(
          vehicleData.bookingType === "Without Driver"
            ? "self-drive"
            : vehicleData.bookingType === "With Driver"
            ? "with-driver"
            : "self-drive"
        );
        setDataSource("vehicles");
        setError(null);
      } catch (err) {
        console.error("Error fetching vehicle:", err);
        setError("Failed to load vehicle details.");
      }
    };
    fetchCar();
  }, [id]);

  // Calculate rental days (minimum 1 day)
  const calculateRentalDays = (start, end) => {
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 1;
  };

  const rentalDays = calculateRentalDays(startDateTime, endDateTime);
  const totalPrice = rentalDays * (car?.ratePerDay || 250);
  const fees = 20; // Example fixed fees
  const totalPriceWithFees = totalPrice + fees; // Total price including fees

  const handleBookClick = async () => {
    if (!id) {
      alert("Invalid vehicle ID.");
      return;
    }

    if (!startDateTime || !endDateTime) {
      alert("Please select valid start and end dates.");
      return;
    }

    if (!isLoggedIn) {
      navigate("/login/user");
      return;
    }

    const bookingData = {
      vehicleId: id,
      carId: id, // Explicitly include carId
      name: car?.carName || `Vehicle ID: ${id}`,
      rate: car?.ratePerDay || 250,
      totalPrice: totalPriceWithFees, // Include totalPrice with fees
      date: new Date().toISOString(),
      bookingType: bookingType,
      customerName: user?.name || "Sample User",
      email: user?.email || "user@example.com",
      phone: user?.phone || "+9779801234567",
      pickupDateTime: startDateTime.toISOString(),
      dropoffDateTime: endDateTime.toISOString(),
      ownerName: car?.ownerName || (dataSource === "cars" ? "Drifty" : "Unknown Owner"),
      phoneNumber: car?.phoneNumber || (dataSource === "cars" ? "9844177965" : "N/A"),
    };

    try {
      const response = await fetch("http://localhost:3000/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Booking successful!");
        navigate(`/kyc-verification`, {
          state: {
            totalPrice: totalPriceWithFees,
            rentalDays,
            carName: car?.carName,
            carId: id, // Ensure carId is passed
            bookingType,
            startDateTime: startDateTime.toISOString(),
            endDateTime: endDateTime.toISOString(),
            ownerName: bookingData.ownerName,
            phoneNumber: bookingData.phoneNumber,
          },
        });
      } else {
        alert("Booking failed: " + data.error);
      }
    } catch (error) {
      console.error("Booking error:", error);
      alert("Booking failed due to network/server issue.");
    }
  };

  const handleBookingTypeChange = (type) => {
    setBookingType(type);
  };

  const handleStartDateTimeChange = (event) => {
    const newStartDate = new Date(event.target.value);
    if (isNaN(newStartDate.getTime())) return;
    setStartDateTime(newStartDate);
    if (newStartDate > endDateTime) setEndDateTime(newStartDate);
  };

  const handleEndDateTimeChange = (event) => {
    const newEndDate = new Date(event.target.value);
    if (isNaN(newEndDate.getTime()) || newEndDate < startDateTime) return;
    setEndDateTime(newEndDate);
  };

  const toggleDateTimeSelector = () => {
    setShowDateTimeSelector(!showDateTimeSelector);
  };

  if (error) return <p className="error">{error}</p>;
  if (!car) return <p className="loading">Loading...</p>;

  const renderBookingOptions = () => {
    switch (car.bookingType) {
      case "Both":
        return (
          <>
            <button
              className={`booking-option-button ${
                bookingType === "self-drive" ? "active" : ""
              }`}
              onClick={() => handleBookingTypeChange("self-drive")}
            >
              Self Drive
            </button>
            <button
              className={`booking-option-button ${
                bookingType === "with-driver" ? "active" : ""
              }`}
              onClick={() => handleBookingTypeChange("with-driver")}
            >
              With Driver
            </button>
          </>
        );
      case "With Driver":
        return (
          <button
            className={`booking-option-button ${
              bookingType === "with-driver" ? "active" : ""
            }`}
            onClick={() => handleBookingTypeChange("with-driver")}
          >
            With Driver
          </button>
        );
      case "Without Driver":
        return (
          <button
            className={`booking-option-button ${
              bookingType === "self-drive" ? "active" : ""
            }`}
            onClick={() => handleBookingTypeChange("self-drive")}
          >
            Self Drive
          </button>
        );
      default:
        return null;
    }
  };

  return (
    <div className="car-detail-container">
      <div className="car-main">
        <button className="back-button" onClick={() => navigate(-1)}>
          ←
        </button>
        <br />
        <br />
        <div className="car-info">
          <h2 className="car-brand">{car.carName}</h2>
          <p className="car-model">Vehicle Number: {car.carNumber}</p>
          {car.photos?.length > 0 ? (
            <img
              src={`http://localhost:3000/uploads/${car.photos[0]}`}
              alt={car.carName}
              className="car-image"
            />
          ) : (
            <img
              src="/images/placeholder.png"
              alt="Car Placeholder"
              className="car-image"
            />
          )}

          <div className="features">
            <p>{car.carType}</p>
            <p>{car.gearType}</p>
            <p>{car.airCondition ? "A/C" : "Non-A/C"}</p>
          </div>

          <div className="rating">
            <h2>Based on user reviews</h2>
            <br />
            <h1>4.8 ⭐</h1>
          </div>
        </div>

        <div className="car-details">
          <h2>Details</h2>
          <p className="details-desc">
            {car.carName} is a {car.carType} vehicle with {car.seats} seats,
            ideal for {car.bookingType.toLowerCase()}. Enjoy a comfortable ride
            with {car.airCondition ? "air conditioning" : "no air conditioning"}{" "}
            and {car.gearType.toLowerCase()} transmission.
            <br />
            <strong>Owner:</strong> {car.ownerName} <br />
            <strong>Contact:</strong> {car.phoneNumber}
          </p>

          <div className="detail-item">
            <span>⚙️ Gear Type</span>
            <span className="value">{car.gearType}</span>
          </div>
          <div className="detail-item">
            <span>❄️ Air Conditioning</span>
            <span className="value">{car.airCondition ? "Yes" : "No"}</span>
          </div>
          <div className="detail-item">
            <span>🧍 Seats</span>
            <span className="value">{car.seats}</span>
          </div>
          <div className="detail-item">
            <span>💲 Rate</span>
            <span className="value bold">रू{car.ratePerDay}/day</span>
          </div>

          <div className="booking-type-selection">
            <p className="booking-type-label">Booking Type:</p>
            <div className="booking-options">{renderBookingOptions()}</div>
          </div>

          <p className="note-text">
            Please ensure you have a valid driving license for self-drive
            bookings. For with-driver bookings, contact {car.phoneNumber || "N/A"} for availability.
          </p>

          <div className="book-box">
            <p className="date-label">Booking Dates & Times</p>
            <button
              className="date-time-button"
              onClick={toggleDateTimeSelector}
            >
              Start: {startDateTime.toLocaleString()} | End:{" "}
              {endDateTime.toLocaleString()}
            </button>
            {showDateTimeSelector && (
              <div className="date-time-inputs">
                <div>
                  <label>Start Date & Time</label>
                  <input
                    type="datetime-local"
                    value={startDateTime.toISOString().slice(0, 16)}
                    onChange={handleStartDateTimeChange}
                    className="date-time-input"
                  />
                </div>
                <div>
                  <label>End Date & Time</label>
                  <input
                    type="datetime-local"
                    value={endDateTime.toISOString().slice(0, 16)}
                    onChange={handleEndDateTimeChange}
                    className="date-time-input"
                    min={startDateTime.toISOString().slice(0, 16)}
                  />
                </div>
              </div>
            )}
            <div className="price-summary">
              <p>
                <strong>Total Rental Days:</strong> {rentalDays}
              </p>
              <p>
                <strong>Total Price:</strong> ₹{totalPriceWithFees} (Including ₹{fees} fees)
              </p>
            </div>
            <button className="book-button" onClick={handleBookClick}>
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailPage;