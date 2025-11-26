// // // import React, { useState } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import "./VehicleSearchPage.css";

// // // import no3 from "../Images/no3.png";
// // // import no4 from "../Images/no4.png";
// // // import no5 from "../Images/no5.png";
// // // import no6 from "../Images/no6.png";
// // // import no7 from "../Images/no7.png";
// // // import no8 from "../Images/no8.png";
// // // import no9 from "../Images/no9.png";
// // // import no10 from "../Images/no10.png";
// // // import p12 from "../Images/p12.png";

// // // // Vehicle data
// // // const vehicleData = {
// // //   1: {
// // //     id: 1,
// // //     name: "Stander",
// // //     brand: "Mercedes–Benz",
// // //     capacity: 6,
// // //     transmission: "Automat",
// // //     ac: "Air Conditioner",
// // //     price: 250,
// // //     image: no3,
// // //   },
// // //   2: {
// // //     id: 2,
// // //     name: "Stander",
// // //     brand: "Mercedes–Benz",
// // //     capacity: 6,
// // //     transmission: "Automat",
// // //     ac: "Air Conditioner",
// // //     price: 250,
// // //     image: no4,
// // //   },
// // //   3: {
// // //     id: 3,
// // //     name: "Stander",
// // //     brand: "Mercedes–Benz",
// // //     capacity: 6,
// // //     transmission: "Automat",
// // //     ac: "Air Conditioner",
// // //     price: 250,
// // //     image: no5,
// // //   },
// // //   4: {
// // //     id: 4,
// // //     name: "Stander",
// // //     brand: "Mercedes–Benz",
// // //     capacity: 6,
// // //     transmission: "Automat",
// // //     ac: "Air Conditioner",
// // //     price: 250,
// // //     image: no6,
// // //   },
// // //   5: {
// // //     id: 5,
// // //     name: "Stander",
// // //     brand: "Mercedes–Benz",
// // //     capacity: 6,
// // //     transmission: "Automat",
// // //     ac: "Air Conditioner",
// // //     price: 250,
// // //     image: no7,
// // //   },
// // //   6: {
// // //     id: 6,
// // //     name: "Stander",
// // //     brand: "Mercedes–Benz",
// // //     capacity: 6,
// // //     transmission: "Automat",
// // //     ac: "Air Conditioner",
// // //     price: 250,
// // //     image: no8,
// // //   },
// // //   7: {
// // //     id: 7,
// // //     name: "Stander",
// // //     brand: "Mercedes–Benz",
// // //     capacity: 6,
// // //     transmission: "Automat",
// // //     ac: "Air Conditioner",
// // //     price: 250,
// // //     image: no9,
// // //   },
// // //   8: {
// // //     id: 8,
// // //     name: "Stander",
// // //     brand: "Mercedes–Benz",
// // //     capacity: 6,
// // //     transmission: "Automat",
// // //     ac: "Air Conditioner",
// // //     price: 250,
// // //     image: no10,
// // //   },
// // //   9: {
// // //     id: 9,
// // //     name: "Stander",
// // //     brand: "Mercedes–Benz",
// // //     capacity: 6,
// // //     transmission: "Automat",
// // //     ac: "Air Conditioner",
// // //     price: 250,
// // //     image: p12,
// // //   },
// // // };

// // // const VehicleSearchPage = () => {
// // //   const [priceRange, setPriceRange] = useState([100, 500]);
// // //   const [pickupDate, setPickupDate] = useState("");
// // //   const [dropoffDate, setDropoffDate] = useState("");
// // //   const [pickupTime, setPickupTime] = useState("");
// // //   const [dropoffTime, setDropoffTime] = useState("");

// // //   const navigate = useNavigate();

// // //   const handlePriceChange = (e) => {
// // //     const newMax = parseInt(e.target.value);
// // //     setPriceRange([100, newMax]);
// // //   };

// // //   const handleSearch = () => {
// // //     if (!pickupDate || !dropoffDate || !pickupTime || !dropoffTime) {
// // //       alert("Please fill in all date and time fields.");
// // //       return;
// // //     }
// // //     alert("Search submitted! (This is a placeholder.)");
// // //   };

// // //   const handleReserve = (vehicleName) => {
// // //     alert(`You have selected to reserve: ${vehicleName}`);
// // //   };

// // //   const handleViewDetails = (vehicleId) => {
// // //     navigate(`/cardetails/${vehicleId}`);
// // //   };

// // //   const goToHomepage = () => {
// // //     // We simply navigate to the root path ("/").
// // //     // The LandingPage component will handle whether to show the logged-in
// // //     // version based on the isLoggedIn prop it receives.
// // //     navigate("/");
// // //   };

// // //   const featuredVehicles = Object.values(vehicleData).filter(
// // //     (vehicle) =>
// // //       vehicle.price >= priceRange[0] && vehicle.price <= priceRange[1]
// // //   );

// // //   return (
// // //     <div className="vehicle-search-page">
// // //       {/* Top Filter Bar */}
// // //       <div className="top-filter-bar">
// // //         <div className="date-time-group">
// // //           <div className="date-group">
// // //             <label>📅 Pick-up Date</label>
// // //             <input
// // //               type="date"
// // //               value={pickupDate}
// // //               onChange={(e) => setPickupDate(e.target.value)}
// // //             />
// // //           </div>
// // //           <div className="date-group">
// // //             <label>📅 Drop-off Date</label>
// // //             <input
// // //               type="date"
// // //               value={dropoffDate}
// // //               onChange={(e) => setDropoffDate(e.target.value)}
// // //             />
// // //           </div>
// // //           <div className="time-group">
// // //             <label>⏰ Pick-up Time</label>
// // //             <input
// // //               type="time"
// // //               value={pickupTime}
// // //               onChange={(e) => setPickupTime(e.target.value)}
// // //             />
// // //           </div>
// // //           <div className="time-group">
// // //             <label>⏰ Drop-off Time</label>
// // //             <input
// // //               type="time"
// // //               value={dropoffTime}
// // //               onChange={(e) => setDropoffTime(e.target.value)}
// // //             />
// // //           </div>
// // //         </div>
// // //         <button className="search-btn" onClick={handleSearch}>
// // //           Search
// // //         </button>
// // //       </div>

// // //       {/* Layout */}
// // //       <div className="main-content">
// // //         <div className="vehicle-filters">
// // //           <h2>Filter by</h2>
// // //           <h3>Car type</h3>
// // //           <div className="filter-group">
// // //             <label>
// // //               <input type="checkbox" /> Mini
// // //             </label>
// // //             <label>
// // //               <input type="checkbox" /> Stander
// // //             </label>
// // //             <label>
// // //               <input type="checkbox" /> Luxury
// // //             </label>
// // //             <label>
// // //               <input type="checkbox" /> Comfort
// // //             </label>
// // //             <label>
// // //               <input type="checkbox" /> Van
// // //             </label>
// // //           </div>

// // //           <h3>Capacity</h3>
// // //           <div className="filter-group">
// // //             <label>
// // //               <input type="checkbox" /> 2 or 5 passenger
// // //             </label>
// // //             <label>
// // //               <input type="checkbox" /> More than 6
// // //             </label>
// // //           </div>

// // //           <h3>Price</h3>
// // //           <input
// // //             type="range"
// // //             min="100"
// // //             max="500"
// // //             value={priceRange[1]}
// // //             onChange={handlePriceChange}
// // //             className="price-slider"
// // //           />
// // //           <button className="filter-btn">FILTER</button>
// // //           <div className="price-range">
// // //             Range: Rs{priceRange[0]} - Rs{priceRange[1]}
// // //           </div>
// // //         </div>

// // //         <div className="vehicle-results">
// // //           {featuredVehicles.map((vehicle) => (
// // //             <div className="vehicle-card" key={vehicle.id}>
// // //               <img
// // //                 src={vehicle.image}
// // //                 alt={vehicle.name}
// // //                 className="vehicle-img"
// // //               />
// // //               <div className="vehicle-info">
// // //                 <h3>{vehicle.name}</h3>
// // //                 <p>{vehicle.brand}</p>
// // //                 <div className="specs">
// // //                   <p>👤 {vehicle.capacity}</p>
// // //                   <p>⚙️ {vehicle.transmission}</p>
// // //                   <p>❄️ {vehicle.ac}</p>
// // //                 </div>
// // //                 <div className="bottom">
// // //                   <strong>Rs{vehicle.price}/day</strong>
// // //                   <div className="card-buttons">
// // //                     <button
// // //                       className="reserve-btn"
// // //                       onClick={() => handleReserve(vehicle.name)}
// // //                     >
// // //                       Reserve
// // //                     </button>
// // //                     <button
// // //                       className="details-btn"
// // //                       onClick={() => handleViewDetails(vehicle.id)}
// // //                     >
// // //                       View Details
// // //                     </button>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>

// // //       {/* Go to Homepage Button */}
// // //       <button className="homepage-btn" onClick={goToHomepage}>
// // //         Go to Homepage
// // //       </button>
// // //     </div>
// // //   );
// // // };

// // // export default VehicleSearchPage;

// // import React, { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import "./VehicleSearchPage.css";

// // const VehicleSearchPage = () => {
// //   const [cars, setCars] = useState([]);
// //   const [filteredCars, setFilteredCars] = useState([]);
// //   const [priceRange, setPriceRange] = useState([100, 500]);
// //   const [pickupTime, setPickupTime] = useState("");
// //   const [dropoffTime, setDropoffTime] = useState("");

// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const fetchCars = async () => {
// //       try {
// //         const res = await fetch("http://localhost:3000/api/cars");
// //         const data = await res.json();
// //         setCars(data);
// //         setFilteredCars(data);
// //       } catch (error) {
// //         console.error("Failed to fetch cars:", error);
// //       }
// //     };
// //     fetchCars();
// //   }, []);

// //   useEffect(() => {
// //     const filtered = cars.filter(
// //       (car) =>
// //         car.ratePerDay >= priceRange[0] && car.ratePerDay <= priceRange[1]
// //     );
// //     setFilteredCars(filtered);
// //   }, [priceRange, cars]);

// //   const handlePriceChange = (e) => {
// //     const newMax = parseInt(e.target.value);
// //     setPriceRange([100, newMax]);
// //   };

// //   const handleSearch = () => {
// //     if (!pickupTime || !dropoffTime) {
// //       alert("Please fill in both pickup and drop-off time.");
// //       return;
// //     }
// //     alert("Search submitted!");
// //   };

// //   const handleReserve = (carName) => {
// //     alert(`You selected to reserve: ${carName}`);
// //   };

// //   const handleViewDetails = (carId) => {
// //     navigate(`/cardetails/${carId}`);
// //   };

// //   const goToHomepage = () => {
// //     navigate("/");
// //   };

// //   return (
// //     <div className="vehicle-search-page">
// //       <div className="top-filter-bar">
// //         <div className="date-time-group">
// //           <div className="time-group">
// //             <label>⏰ Pick-up Time</label>
// //             <input
// //               type="time"
// //               value={pickupTime}
// //               onChange={(e) => setPickupTime(e.target.value)}
// //             />
// //           </div>
// //           <div className="time-group">
// //             <label>⏰ Drop-off Time</label>
// //             <input
// //               type="time"
// //               value={dropoffTime}
// //               onChange={(e) => setDropoffTime(e.target.value)}
// //             />
// //           </div>
// //         </div>
// //         <button className="search-btn" onClick={handleSearch}>
// //           Search
// //         </button>
// //       </div>

// //       <div className="main-content">
// //         <div className="vehicle-filters">
// //           <h2>Filter by</h2>
// //           <h3>Car type</h3>
// //           <div className="filter-group">
// //             <label>
// //               <input type="checkbox" /> Mini
// //             </label>
// //             <label>
// //               <input type="checkbox" /> Standard
// //             </label>
// //             <label>
// //               <input type="checkbox" /> Luxury
// //             </label>
// //             <label>
// //               <input type="checkbox" /> Comfort
// //             </label>
// //             <label>
// //               <input type="checkbox" /> Van
// //             </label>
// //           </div>

// //           <h3>Capacity</h3>
// //           <div className="filter-group">
// //             <label>
// //               <input type="checkbox" /> 2 or 5 passengers
// //             </label>
// //             <label>
// //               <input type="checkbox" /> More than 6
// //             </label>
// //           </div>

// //           <h3>Price</h3>
// //           <input
// //             type="range"
// //             min="100"
// //             max="500"
// //             value={priceRange[1]}
// //             onChange={handlePriceChange}
// //             className="price-slider"
// //           />
// //           <button className="filter-btn">FILTER</button>
// //           <div className="price-range">
// //             Range: Rs{priceRange[0]} - Rs{priceRange[1]}
// //           </div>
// //         </div>

// //         <div className="vehicle-results">
// //           {filteredCars.map((car) => (
// //             <div className="vehicle-card" key={car._id}>
// //               <img
// //                 src={`http://localhost:3000/uploads/${car.photos[0]}`}
// //                 alt={car.carName}
// //                 className="vehicle-img"
// //               />
// //               <div className="vehicle-info">
// //                 <h3>{car.carName}</h3>
// //                 <p>{car.carType}</p>
// //                 <div className="specs">
// //
// //                 </div>
// //                 <div className="bottom">
// //                   <strong>Rs{car.ratePerDay}/day</strong>
// //                   <div className="card-buttons">
// //                     <button
// //                       className="reserve-btn"
// //                       onClick={() => handleReserve(car.carName)}
// //                     >
// //                       Reserve
// //                     </button>
// //                     <button
// //                       className="details-btn"
// //                       onClick={() => handleViewDetails(car._id)}
// //                     >
// //                       View Details
// //                     </button>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       <button className="homepage-btn" onClick={goToHomepage}>
// //         Go to Homepage
// //       </button>
// //     </div>
// //   );
// // };

// // export default VehicleSearchPage;
// // VehicleSearchPage.jsx
// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import "./VehicleSearchPage.css";

// // const VehicleSearchPage = () => {
// //   const [vehicles, setVehicles] = useState([]);
// //   const [filteredVehicles, setFilteredVehicles] = useState([]);

// //   const [vehicleTypeFilters, setVehicleTypeFilters] = useState([]);
// //   const [priceRange, setPriceRange] = useState(3000);

// //   const [pickupDate, setPickupDate] = useState("");
// //   const [pickupTime, setPickupTime] = useState("");
// //   const [returnDate, setReturnDate] = useState("");
// //   const [returnTime, setReturnTime] = useState("");

// //   // Fetch cars on load
// //   useEffect(() => {
// //     const fetchCars = async () => {
// //       try {
// //         const response = await axios.get("http://localhost:3000/api/cars");
// //         setVehicles(response.data);
// //         setFilteredVehicles(response.data); // initially show all
// //       } catch (error) {
// //         console.error("Error fetching vehicles:", error);
// //       }
// //     };

// //     fetchCars();
// //   }, []);

// //   // Handle vehicle type checkbox toggle
// //   const handleVehicleTypeChange = (type) => {
// //     setVehicleTypeFilters((prev) =>
// //       prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
// //     );
// //   };

// //   // Apply filters
// //   const applyFilters = () => {
// //     let result = vehicles;

// //     if (vehicleTypeFilters.length > 0) {
// //       result = result.filter((car) => vehicleTypeFilters.includes(car.carType));
// //     }

// //     result = result.filter((car) => car.ratePerDay <= priceRange);

// //     setFilteredVehicles(result);
// //   };

// //   return (
// //     <div className="vehicle-search-page">
// //       <div className="top-filter-bar">
// //         <div className="date-time-group">
// //           <div className="date-group">
// //             <label>Pickup Date</label>
// //             <input
// //               type="date"
// //               value={pickupDate}
// //               onChange={(e) => setPickupDate(e.target.value)}
// //             />
// //           </div>
// //           <div className="time-group">
// //             <label>Pickup Time</label>
// //             <input
// //               type="time"
// //               value={pickupTime}
// //               onChange={(e) => setPickupTime(e.target.value)}
// //             />
// //           </div>
// //           <div className="date-group">
// //             <label>Return Date</label>
// //             <input
// //               type="date"
// //               value={returnDate}
// //               onChange={(e) => setReturnDate(e.target.value)}
// //             />
// //           </div>
// //           <div className="time-group">
// //             <label>Return Time</label>
// //             <input
// //               type="time"
// //               value={returnTime}
// //               onChange={(e) => setReturnTime(e.target.value)}
// //             />
// //           </div>
// //         </div>
// //         <button className="search-btn">Search</button>
// //       </div>

// //       <div className="main-content">
// //         <aside className="vehicle-filters">
// //           <h2>Filter Vehicles</h2>

// //           <h3>Vehicle Type</h3>
// //           <div className="filter-group">
// //             {[
// //               "SUV",
// //               "Sedan",
// //               "Hatchback",
// //               "Coupe",
// //               "Convertible",
// //               "Pickup Truck",
// //               "Minivan",
// //               "Crossover",
// //               "Station Wagon",
// //               "Sports Car",
// //               "Luxury Car",
// //               "Van",
// //               "Bus",
// //               "Truck",
// //               "RV",
// //               "Motorcycle",
// //               "Electric Vehicle (EV)",
// //               "Hybrid",
// //               "ATV",
// //               "UTV",
// //               "Jeep",
// //               "Limousine",
// //               "Amphibious Vehicle",
// //             ].map((type) => (
// //               <label key={type}>
// //                 <input
// //                   type="checkbox"
// //                   checked={vehicleTypeFilters.includes(type)}
// //                   onChange={() => handleVehicleTypeChange(type)}
// //                 />
// //                 {type}
// //               </label>
// //             ))}
// //           </div>

// //           <h3>Price Range</h3>
// //           <input
// //             type="range"
// //             min="1000"
// //             max="100000"
// //             step="500"
// //             value={priceRange}
// //             onChange={(e) => setPriceRange(parseInt(e.target.value))}
// //             className="price-slider"
// //           />
// //           <div className="price-range">₹1000 - ₹{priceRange}/day</div>

// //           <button className="filter-btn" onClick={applyFilters}>
// //             Apply Filters
// //           </button>
// //         </aside>

// //         <section className="vehicle-results">
// //           {filteredVehicles.length === 0 ? (
// //             <p>No vehicles match your criteria.</p>
// //           ) : (
// //             filteredVehicles.map((car) => (
// //               <div className="vehicle-card" key={car._id}>
// //                 <img
// //                   src={`http://localhost:3000/uploads/${car.photos?.[0]}`}
// //                   alt={car.carName}
// //                   className="vehicle-img"
// //                 />
// //                 <div className="vehicle-info">
// //                   <strong>
// //                     <h2>{car.carName}</h2>
// //                     <p>Type: {car.carType}</p>
// //                     <p>Driver: {car.driverName}</p>
// //                     <p>Booking: {car.bookingType}</p>
// //                   </strong>

// //                   <div className="specs">
// //                     <span>
// //                       <strong>⚙️{car.gearType}</strong>
// //                     </span>
// //                     <span>
// //                       <strong>❄️{car.airCondition ? "AC" : "Non-AC"}</strong>
// //                     </span>
// //                     <span>
// //                       <strong>👤{car.seats} Seats</strong>
// //                     </span>
// //                   </div>
// //                   <div className="bottom">
// //                     <p>
// //                       <strong>रू{car.ratePerDay}/Day </strong>
// //                     </p>
// //                     <div className="card-buttons">
// //                       <button className="details-btn">Details</button>
// //                       <button className="reserve-btn">Reserve</button>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))
// //           )}
// //         </section>
// //       </div>
// //     </div>
// //   );
// // };

// // export default VehicleSearchPage;

// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import "./VehicleSearchPage.css";

// // const VehicleSearchPage = () => {
// //   const [vehicles, setVehicles] = useState([]);
// //   const [filteredVehicles, setFilteredVehicles] = useState([]);

// //   const [vehicleTypeFilters, setVehicleTypeFilters] = useState([]);
// //   const [seatFilters, setSeatFilters] = useState([]);
// //   const [priceRange, setPriceRange] = useState(3000);

// //   const [pickupDate, setPickupDate] = useState("");
// //   const [pickupTime, setPickupTime] = useState("");
// //   const [returnDate, setReturnDate] = useState("");
// //   const [returnTime, setReturnTime] = useState("");

// //   // Fetch cars on load
// //   useEffect(() => {
// //     const fetchCars = async () => {
// //       try {
// //         const response = await axios.get("http://localhost:3000/api/cars");
// //         setVehicles(response.data);
// //         setFilteredVehicles(response.data); // initially show all
// //       } catch (error) {
// //         console.error("Error fetching vehicles:", error);
// //       }
// //     };

// //     fetchCars();
// //   }, []);

// //   // Handle vehicle type checkbox toggle
// //   const handleVehicleTypeChange = (type) => {
// //     setVehicleTypeFilters((prev) =>
// //       prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
// //     );
// //   };

// //   // Handle seat filter change
// //   const handleSeatFilterChange = (filter) => {
// //     setSeatFilters((prev) =>
// //       prev.includes(filter)
// //         ? prev.filter((f) => f !== filter)
// //         : [...prev, filter]
// //     );
// //   };

// //   // Apply filters
// //   const applyFilters = () => {
// //     let result = vehicles;

// //     if (vehicleTypeFilters.length > 0) {
// //       result = result.filter((car) => vehicleTypeFilters.includes(car.carType));
// //     }

// //     result = result.filter((car) => car.ratePerDay <= priceRange);

// //     if (seatFilters.length > 0) {
// //       result = result.filter((car) => {
// //         if (seatFilters.includes("2-5") && car.seats >= 2 && car.seats <= 5) {
// //           return true;
// //         }
// //         if (seatFilters.includes("6+")) {
// //           return car.seats > 5;
// //         }
// //         return false;
// //       });
// //     }

// //     setFilteredVehicles(result);
// //   };

// //   return (
// //     <div className="vehicle-search-page">
// //       <div className="top-filter-bar">
// //         <div className="date-time-group">
// //           <div className="date-group">
// //             <label>Pickup Date</label>
// //             <input
// //               type="date"
// //               value={pickupDate}
// //               onChange={(e) => setPickupDate(e.target.value)}
// //             />
// //           </div>
// //           <div className="time-group">
// //             <label>Pickup Time</label>
// //             <input
// //               type="time"
// //               value={pickupTime}
// //               onChange={(e) => setPickupTime(e.target.value)}
// //             />
// //           </div>
// //           <div className="date-group">
// //             <label>Return Date</label>
// //             <input
// //               type="date"
// //               value={returnDate}
// //               onChange={(e) => setReturnDate(e.target.value)}
// //             />
// //           </div>
// //           <div className="time-group">
// //             <label>Return Time</label>
// //             <input
// //               type="time"
// //               value={returnTime}
// //               onChange={(e) => setReturnTime(e.target.value)}
// //             />
// //           </div>
// //         </div>
// //         <button className="search-btn">Search</button>
// //       </div>

// //       <div className="main-content">
// //         <aside className="vehicle-filters">
// //           <h2>Filter Vehicles</h2>

// //           <h3>Vehicle Type</h3>
// //           <div className="filter-group">
// //             {[
// //               "SUV",
// //               "Sedan",
// //               "Hatchback",
// //               "Coupe",
// //               "Convertible",
// //               "Pickup Truck",
// //               "Minivan",
// //               "Crossover",
// //               "Station Wagon",
// //               "Sports Car",
// //               "Luxury Car",
// //               "Van",
// //               "Bus",
// //               "Truck",
// //               "RV",
// //               "Motorcycle",
// //               "Electric Vehicle (EV)",
// //               "Hybrid",
// //               "ATV",
// //               "UTV",
// //               "Jeep",
// //               "Limousine",
// //               "Amphibious Vehicle",
// //             ].map((type) => (
// //               <label key={type}>
// //                 <input
// //                   type="checkbox"
// //                   checked={vehicleTypeFilters.includes(type)}
// //                   onChange={() => handleVehicleTypeChange(type)}
// //                 />
// //                 {type}
// //               </label>
// //             ))}
// //           </div>

// //           <h3>Price Range</h3>
// //           <input
// //             type="range"
// //             min="1000"
// //             max="100000"
// //             step="500"
// //             value={priceRange}
// //             onChange={(e) => setPriceRange(parseInt(e.target.value))}
// //             className="price-slider"
// //           />
// //           <div className="price-range">₹1000 - ₹{priceRange}/day</div>

// //           <h3>Capacity</h3>
// //           <div className="filter-group">
// //             <label>
// //               <input
// //                 type="checkbox"
// //                 checked={seatFilters.includes("2-5")}
// //                 onChange={() => handleSeatFilterChange("2-5")}
// //               />
// //               2–5 passengers
// //             </label>
// //             <label>
// //               <input
// //                 type="checkbox"
// //                 checked={seatFilters.includes("6+")}
// //                 onChange={() => handleSeatFilterChange("6+")}
// //               />
// //               More than 6 passengers
// //             </label>
// //           </div>

// //           <button className="filter-btn" onClick={applyFilters}>
// //             Apply Filters
// //           </button>
// //         </aside>

// //         <section className="vehicle-results">
// //           {filteredVehicles.length === 0 ? (
// //             <p>No vehicles match your criteria.</p>
// //           ) : (
// //             filteredVehicles.map((car) => (
// //               <div className="vehicle-card" key={car._id}>
// //                 <img
// //                   src={`http://localhost:3000/uploads/${car.photos?.[0]}`}
// //                   alt={car.carName}
// //                   className="vehicle-img"
// //                 />
// //                 <div className="vehicle-info">
// //                   <strong>
// //                     <h2>{car.carName}</h2>
// //                     <p>Type: {car.carType}</p>
// //                     <p>Driver: {car.driverName}</p>
// //                     <p>Booking: {car.bookingType}</p>
// //                   </strong>

// //                   <div className="specs">
// //                     <span>
// //                       <strong>⚙️{car.gearType}</strong>
// //                     </span>
// //                     <span>
// //                       <strong>❄️{car.airCondition ? "AC" : "Non-AC"}</strong>
// //                     </span>
// //                     <span>
// //                       <strong>👤{car.seats} Seats</strong>
// //                     </span>
// //                   </div>
// //                   <div className="bottom">
// //                     <p>
// //                       <strong>रू{car.ratePerDay}/Day </strong>
// //                     </p>
// //                     <div className="card-buttons">
// //                       <button className="details-btn">Details</button>
// //                       <button className="reserve-btn">Reserve</button>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))
// //           )}
// //         </section>
// //       </div>
// //     </div>
// //   );
// // };

// // export default VehicleSearchPage;

// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import "./VehicleSearchPage.css"

// // const VehicleSearchPage = () => {
// //   const [vehicles, setVehicles] = useState([]);
// //   const [filteredVehicles, setFilteredVehicles] = useState([]);
// //   const [vehicleTypeFilters, setVehicleTypeFilters] = useState([]);
// //   const [seatFilters, setSeatFilters] = useState([]);
// //   const [priceRange, setPriceRange] = useState(3000);
// //   const [pickupDate, setPickupDate] = useState("");
// //   const [pickupTime, setPickupTime] = useState("");
// //   const [returnDate, setReturnDate] = useState("");
// //   const [returnTime, setReturnTime] = useState("");

// //   // Debug component mounting
// //   useEffect(() => {
// //     console.log("VehicleSearchPage mounted");
// //     console.log("Ritedh");

// //     return () => console.log("VehicleSearchPage unmounted");
// //   }, []);

// //   // Fetch cars on load
// //   useEffect(() => {
// //     const fetchCars = async () => {
// //       try {
// //         const response = await axios.get("http://localhost:3000/api/cars");
// //         setVehicles(response.data);
// //         setFilteredVehicles(response.data); // Initially show all
// //       } catch (error) {
// //         console.error("Error fetching vehicles:", error);
// //         setVehicles([]);
// //         setFilteredVehicles([]);
// //       }
// //     };

// //     fetchCars();
// //   }, []);

// //   // Handle vehicle type checkbox toggle
// //   const handleVehicleTypeChange = (type) => {
// //     setVehicleTypeFilters((prev) =>
// //       prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
// //     );
// //   };

// //   // Handle seat filter change
// //   const handleSeatFilterChange = (filter) => {
// //     setSeatFilters((prev) =>
// //       prev.includes(filter)
// //         ? prev.filter((f) => f !== filter)
// //         : [...prev, filter]
// //     );
// //   };

// //   // Apply filters
// //   const applyFilters = () => {
// //     let result = vehicles;

// //     if (vehicleTypeFilters.length > 0) {
// //       result = result.filter((car) => vehicleTypeFilters.includes(car.carType));
// //     }

// //     result = result.filter((car) => car.ratePerDay <= priceRange);

// //     if (seatFilters.length > 0) {
// //       result = result.filter((car) => {
// //         if (seatFilters.includes("2-5") && car.seats >= 2 && car.seats <= 5) {
// //           return true;
// //         }
// //         if (seatFilters.includes("6+")) {
// //           return car.seats > 5;
// //         }
// //         return false;
// //       });
// //     }

// //     setFilteredVehicles(result);
// //   };

// //   return (
// //     <div className="vehicle-search-wrapper">
// //       <div className="vehicle-search-page">
// //         <div className="top-filter-bar">
// //           <div className="date-time-group">
// //             <div className="date-group">
// //               <label>Pickup Date</label>
// //               <input
// //                 type="date"
// //                 value={pickupDate}
// //                 onChange={(e) => setPickupDate(e.target.value)}
// //               />
// //             </div>
// //             <div className="time-group">
// //               <label>Pickup Time</label>
// //               <input
// //                 type="time"
// //                 value={pickupTime}
// //                 onChange={(e) => setPickupTime(e.target.value)}
// //               />
// //             </div>
// //             <div className="date-group">
// //               <label>Return Date</label>
// //               <input
// //                 type="date"
// //                 value={returnDate}
// //                 onChange={(e) => setReturnDate(e.target.value)}
// //               />
// //             </div>
// //             <div className="time-group">
// //               <label>Return Time</label>
// //               <input
// //                 type="time"
// //                 value={returnTime}
// //                 onChange={(e) => setReturnTime(e.target.value)}
// //               />
// //             </div>
// //           </div>
// //           <button className="search-btn">Search</button>
// //         </div>

// //           <div className="main-content">
// //             <aside className="vehicle-filters">
// //               <h2>Filter Vehicles</h2>

// //               <h3>Vehicle Type</h3>
// //               <div className="filter-group">
// //                 {[
// //                   "SUV",
// //                   "Sedan",
// //                   "Hatchback",
// //                   "Coupe",
// //                   "Convertible",
// //                   "Pickup Truck",
// //                   "Minivan",
// //                   "Crossover",
// //                   "Station Wagon",
// //                   "Sports Car",
// //                   "Luxury Car",
// //                   "Van",
// //                   "Bus",
// //                   "Truck",
// //                   "RV",
// //                   "Motorcycle",
// //                   "Electric Vehicle (EV)",
// //                   "Hybrid",
// //                   "ATV",
// //                   "UTV",
// //                   "Jeep",
// //                   "Limousine",
// //                   "Amphibious Vehicle",
// //                 ].map((type) => (
// //                   <label key={type}>
// //                     <input
// //                       type="checkbox"
// //                       checked={vehicleTypeFilters.includes(type)}
// //                       onChange={() => handleVehicleTypeChange(type)}
// //                     />
// //                     {type}
// //                   </label>
// //                 ))}
// //               </div>

// //               <h3>Price Range</h3>
// //               <input
// //                 type="range"
// //                 min="1000"
// //                 max="100000"
// //                 step="500"
// //                 value={priceRange}
// //                 onChange={(e) => setPriceRange(parseInt(e.target.value))}
// //                 className="price-slider"
// //               />
// //               <div className="price-range">₹1000 - ₹{priceRange}/day</div>

// //               <h3>Capacity</h3>
// //               <div className="filter-group">
// //                 <label>
// //                   <input
// //                     type="checkbox"
// //                     checked={seatFilters.includes("2-5")}
// //                     onChange={() => handleSeatFilterChange("2-5")}
// //                   />
// //                   2–5 passengers
// //                 </label>
// //                 <label>
// //                   <input
// //                     type="checkbox"
// //                     checked={seatFilters.includes("6+")}
// //                     onChange={() => handleSeatFilterChange("6+")}
// //                   />
// //                   More than 6 passengers
// //                 </label>
// //               </div>

// //               <button className="filter-btn" onClick={applyFilters}>
// //                 Apply Filters
// //               </button>
// //             </aside>

// //             <section className="vehicle-results">
// //               {filteredVehicles.length === 0 ? (
// //                 <p>No vehicles match your criteria.</p>
// //               ) : (
// //                 filteredVehicles.map((car) => (
// //                   <div className="vehicle-card" key={car._id}>
// //                     <img
// //                       src={`http://localhost:3000/uploads/${car.photos?.[0]}`}
// //                       alt={car.carName}
// //                       className="vehicle-img"
// //                       onError={(e) => {
// //                         e.target.src = "/images/fallback-car.png"; // Replace with your fallback image path
// //                       }}
// //                     />
// //                     <div className="vehicle-info">
// //                       <strong>
// //                         <h2>{car.carName}</h2>
// //                         <p>Type: {car.carType}</p>
// //                         <p>Driver: {car.driverName}</p>
// //                         <p>Booking: {car.bookingType}</p>
// //                       </strong>

// //                       <div className="specs">
// //                         <span>
// //                           <strong>⚙️{car.gearType}</strong>
// //                         </span>
// //                         <span>
// //                           <strong>❄️{car.airCondition ? "AC" : "Non-AC"}</strong>
// //                         </span>
// //                         <span>
// //                           <strong>👤{car.seats} Seats</strong>
// //                         </span>
// //                       </div>
// //                       <div className="bottom">
// //                         <p>
// //                           <strong>रू{car.ratePerDay}/Day </strong>
// //                         </p>
// //                         <div className="card-buttons">
// //                           <button className="details-btn">Details</button>
// //                           <button className="reserve-btn">Reserve</button>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 ))
// //               )}
// //             </section>
// //           </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default VehicleSearchPage;

// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import styles from "./VehicleSearchPage.module.css";
// // import Car1 from "../Images/no1.png"; // Import a fallback image

// // const VehicleSearchPage = () => {
// //   const [vehicles, setVehicles] = useState([]);
// //   const [filteredVehicles, setFilteredVehicles] = useState([]);
// //   const [vehicleTypeFilters, setVehicleTypeFilters] = useState([]);
// //   const [seatFilters, setSeatFilters] = useState([]);
// //   const [priceRange, setPriceRange] = useState(3000);
// //   const [pickupDate, setPickupDate] = useState("");
// //   const [pickupTime, setPickupTime] = useState("");
// //   const [returnDate, setReturnDate] = useState("");
// //   const [returnTime, setReturnTime] = useState("");

// //   useEffect(() => {
// //     window.scrollTo(0, 0); // Scroll to top on mount
// //     console.log("VehicleSearchPage mounted");

// //     return () => console.log("VehicleSearchPage unmounted");
// //   }, []);

// //   useEffect(() => {
// //     const fetchCars = async () => {
// //       try {
// //         const response = await axios.get("http://localhost:3000/api/cars");
// //         const vehiclesData = response.data || [];
// //         setVehicles(vehiclesData);
// //         setFilteredVehicles(vehiclesData);
// //       } catch (error) {
// //         console.error("Error fetching vehicles:", error);
// //         setVehicles([]);
// //         setFilteredVehicles([]);
// //       }
// //     };

// //     fetchCars();
// //   }, []);

// //   const handleVehicleTypeChange = (type) => {
// //     setVehicleTypeFilters((prev) =>
// //       prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
// //     );
// //   };

// //   const handleSeatFilterChange = (filter) => {
// //     setSeatFilters((prev) =>
// //       prev.includes(filter)
// //         ? prev.filter((f) => f !== filter)
// //         : [...prev, filter]
// //     );
// //   };

// //   const applyFilters = () => {
// //     let result = vehicles;

// //     if (vehicleTypeFilters.length > 0) {
// //       result = result.filter((car) => vehicleTypeFilters.includes(car.carType));
// //     }

// //     result = result.filter((car) => car.ratePerDay <= priceRange);

// //     if (seatFilters.length > 0) {
// //       result = result.filter((car) => {
// //         if (seatFilters.includes("2-5") && car.seats >= 2 && car.seats <= 5) {
// //           return true;
// //         }
// //         if (seatFilters.includes("6+")) {
// //           return car.seats > 5;
// //         }
// //         return false;
// //       });
// //     }

// //     setFilteredVehicles(result);
// //   };

// //   return (
// //     <div className="vehicle-search-wrapper">
// //       <div className="vehicle-search-page">
// //         <div className="top-filter-bar">
// //           <div className="date-time-group">
// //             <div className="date-group">
// //               <label>Pickup Date</label>
// //               <input
// //                 type="date"
// //                 value={pickupDate}
// //                 onChange={(e) => setPickupDate(e.target.value)}
// //               />
// //             </div>
// //             <div className="time-group">
// //               <label>Pickup Time</label>
// //               <input
// //                 type="time"
// //                 value={pickupTime}
// //                 onChange={(e) => setPickupTime(e.target.value)}
// //               />
// //             </div>
// //             <div className="date-group">
// //               <label>Return Date</label>
// //               <input
// //                 type="date"
// //                 value={returnDate}
// //                 onChange={(e) => setReturnDate(e.target.value)}
// //               />
// //             </div>
// //             <div className="time-group">
// //               <label>Return Time</label>
// //               <input
// //                 type="time"
// //                 value={returnTime}
// //                 onChange={(e) => setReturnTime(e.target.value)}
// //               />
// //             </div>
// //           </div>
// //           <button className="search-btn">Search</button>
// //         </div>

// //         <div className="main-content">
// //           <aside className="vehicle-filters">
// //             <h2>Filter Vehicles</h2>
// //             <h3>Vehicle Type</h3>
// //             <div className="filter-group">
// //               {[
// //                 "SUV",
// //                 "Sedan",
// //                 "Hatchback",
// //                 "Coupe",
// //                 "Convertible",
// //                 "Pickup Truck",
// //                 "Minivan",
// //                 "Crossover",
// //                 "Station Wagon",
// //                 "Sports Car",
// //                 "Luxury Car",
// //                 "Van",
// //                 "Bus",
// //                 "Truck",
// //                 "RV",
// //                 "Motorcycle",
// //                 "Electric Vehicle (EV)",
// //                 "Hybrid",
// //                 "ATV",
// //                 "UTV",
// //                 "Jeep",
// //                 "Limousine",
// //                 "Amphibious Vehicle",
// //               ].map((type) => (
// //                 <label key={type}>
// //                   <input
// //                     type="checkbox"
// //                     checked={vehicleTypeFilters.includes(type)}
// //                     onChange={() => handleVehicleTypeChange(type)}
// //                   />
// //                   {type}
// //                 </label>
// //               ))}
// //             </div>
// //             <h3>Price Range</h3>
// //             <input
// //               type="range"
// //               min="1000"
// //               max="100000"
// //               step="500"
// //               value={priceRange}
// //               onChange={(e) => setPriceRange(parseInt(e.target.value))}
// //               className="price-slider"
// //             />
// //             <div className="price-range">₹1000 - ₹{priceRange}/day</div>
// //             <h3>Capacity</h3>
// //             <div className="filter-group">
// //               <label>
// //                 <input
// //                   type="checkbox"
// //                   checked={seatFilters.includes("2-5")}
// //                   onChange={() => handleSeatFilterChange("2-5")}
// //                 />
// //                 2–5 passengers
// //               </label>
// //               <label>
// //                 <input
// //                   type="checkbox"
// //                   checked={seatFilters.includes("6+")}
// //                   onChange={() => handleSeatFilterChange("6+")}
// //                 />
// //                 More than 6 passengers
// //               </label>
// //             </div>
// //             <button className="filter-btn" onClick={applyFilters}>
// //               Apply Filters
// //             </button>
// //           </aside>

// //           <section className="vehicle-results">
// //             {vehicles.length === 0 ? (
// //               <p>Loading vehicles...</p>
// //             ) : filteredVehicles.length === 0 ? (
// //               <p>No vehicles match your criteria.</p>
// //             ) : (
// //               filteredVehicles.map((car) => (
// //                 <div className="vehicle-card" key={car._id}>
// //                   <img
// //                     src={`http://localhost:3000/uploads/${car.photos?.[0]}`}
// //                     alt={car.carName}
// //                     className="vehicle-img"
// //                     onError={(e) => {
// //                       e.target.src = Car1;
// //                     }}
// //                   />
// //                   <div className="vehicle-info">
// //                     <strong>
// //                       <h2>{car.carName}</h2>
// //                       <p>Type: {car.carType}</p>
// //                       <p>Driver: {car.driverName}</p>
// //                       <p>Booking: {car.bookingType}</p>
// //                     </strong>
// //                     <div className="specs">
// //                       <span>
// //                         <strong>⚙️{car.gearType}</strong>
// //                       </span>
// //                       <span>
// //                         <strong>❄️{car.airCondition ? "AC" : "Non-AC"}</strong>
// //                       </span>
// //                       <span>
// //                         <strong>👤{car.seats} Seats</strong>
// //                       </span>
// //                     </div>
// //                     <div className="bottom">
// //                       <p>
// //                         <strong>रू{car.ratePerDay}/Day</strong>
// //                       </p>
// //                       <div className="card-buttons">
// //                         <button className="details-btn">Details</button>
// //                         <button className="reserve-btn">Reserve</button>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               ))
// //             )}
// //           </section>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default VehicleSearchPage;

// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import styles from "./VehicleSearchPage.module.css";
// // import Car1 from "../Images/no1.png"; // Fallback image

// // const VehicleSearchPage = () => {
// //   const [vehicles, setVehicles] = useState([]);
// //   const [filteredVehicles, setFilteredVehicles] = useState([]);
// //   const [vehicleTypeFilters, setVehicleTypeFilters] = useState([]);
// //   const [seatFilters, setSeatFilters] = useState([]);
// //   const [priceRange, setPriceRange] = useState(3000);
// //   const [pickupDate, setPickupDate] = useState("");
// //   const [pickupTime, setPickupTime] = useState("");
// //   const [returnDate, setReturnDate] = useState("");
// //   const [returnTime, setReturnTime] = useState("");

// //   // Debug mounting and scroll to top
// //   useEffect(() => {
// //     window.scrollTo(0, 0); // Scroll to top on mount
// //     console.log("VehicleSearchPage mounted");

// //     return () => console.log("VehicleSearchPage unmounted");
// //   }, []);

// //   // Fetch cars on load
// //   useEffect(() => {
// //     const fetchCars = async () => {
// //       try {
// //         const response = await axios.get("http://localhost:3000/api/cars");
// //         const vehiclesData = response.data || [];
// //         setVehicles(vehiclesData);
// //         setFilteredVehicles(vehiclesData);
// //       } catch (error) {
// //         console.error("Error fetching vehicles:", error);
// //         setVehicles([]);
// //         setFilteredVehicles([]);
// //       }
// //     };

// //     fetchCars();
// //   }, []);

// //   // Handle vehicle type checkbox toggle
// //   const handleVehicleTypeChange = (type) => {
// //     setVehicleTypeFilters((prev) =>
// //       prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
// //     );
// //   };

// //   // Handle seat filter change
// //   const handleSeatFilterChange = (filter) => {
// //     setSeatFilters((prev) =>
// //       prev.includes(filter)
// //         ? prev.filter((f) => f !== filter)
// //         : [...prev, filter]
// //     );
// //   };

// //   // Apply filters
// //   const applyFilters = () => {
// //     let result = vehicles;

// //     if (vehicleTypeFilters.length > 0) {
// //       result = result.filter((car) => vehicleTypeFilters.includes(car.carType));
// //     }

// //     result = result.filter((car) => car.ratePerDay <= priceRange);

// //     if (seatFilters.length > 0) {
// //       result = result.filter((car) => {
// //         if (seatFilters.includes("2-5") && car.seats >= 2 && car.seats <= 5) {
// //           return true;
// //         }
// //         if (seatFilters.includes("6+")) {
// //           return car.seats > 5;
// //         }
// //         return false;
// //       });
// //     }

// //     setFilteredVehicles(result);
// //   };

// //   return (
// //     <div className={styles.vehicleSearchWrapper}>
// //       <div className={styles.vehicleSearchPage}>
// //         <div className={styles.topFilterBar}>
// //           <div className={styles.dateTimeGroup}>
// //             <div className={styles.dateGroup}>
// //               <label>Pickup Date</label>
// //               <input
// //                 type="date"
// //                 value={pickupDate}
// //                 onChange={(e) => setPickupDate(e.target.value)}
// //               />
// //             </div>
// //             <div className={styles.timeGroup}>
// //               <label>Pickup Time</label>
// //               <input
// //                 type="time"
// //                 value={pickupTime}
// //                 onChange={(e) => setPickupTime(e.target.value)}
// //               />
// //             </div>
// //             <div className={styles.dateGroup}>
// //               <label>Return Date</label>
// //               <input
// //                 type="date"
// //                 value={returnDate}
// //                 onChange={(e) => setReturnDate(e.target.value)}
// //               />
// //             </div>
// //             <div className={styles.timeGroup}>
// //               <label>Return Time</label>
// //               <input
// //                 type="time"
// //                 value={returnTime}
// //                 onChange={(e) => setReturnTime(e.target.value)}
// //               />
// //             </div>
// //           </div>
// //           <button className={styles.searchBtn}>Search</button>
// //         </div>

// //         <div className={styles.mainContent}>
// //           <aside className={styles.vehicleFilters}>
// //             <h2>Filter Vehicles</h2>
// //             <h3>Vehicle Type</h3>
// //             <div className={styles.filterGroup}>
// //               {[
// //                 "SUV",
// //                 "Sedan",
// //                 "Hatchback",
// //                 "Coupe",
// //                 "Convertible",
// //                 "Pickup Truck",
// //                 "Minivan",
// //                 "Crossover",
// //                 "Station Wagon",
// //                 "Sports Car",
// //                 "Luxury Car",
// //                 "Van",
// //                 "Bus",
// //                 "Truck",
// //                 "RV",
// //                 "Motorcycle",
// //                 "Electric Vehicle (EV)",
// //                 "Hybrid",
// //                 "ATV",
// //                 "UTV",
// //                 "Jeep",
// //                 "Limousine",
// //                 "Amphibious Vehicle",
// //               ].map((type) => (
// //                 <label key={type}>
// //                   <input
// //                     type="checkbox"
// //                     checked={vehicleTypeFilters.includes(type)}
// //                     onChange={() => handleVehicleTypeChange(type)}
// //                   />
// //                   {type}
// //                 </label>
// //               ))}
// //             </div>
// //             <h3>Price Range</h3>
// //             <input
// //               type="range"
// //               min="1000"
// //               max="100000"
// //               step="500"
// //               value={priceRange}
// //               onChange={(e) => setPriceRange(parseInt(e.target.value))}
// //               className={styles.priceSlider}
// //             />
// //             <div className={styles.priceRange}>रू1000 - रू{priceRange}/day</div>
// //             <h3>Capacity</h3>
// //             <div className={styles.filterGroup}>
// //               <label>
// //                 <input
// //                   type="checkbox"
// //                   checked={seatFilters.includes("2-5")}
// //                   onChange={() => handleSeatFilterChange("2-5")}
// //                 />
// //                 2–5 passengers
// //               </label>
// //               <label>
// //                 <input
// //                   type="checkbox"
// //                   checked={seatFilters.includes("6+")}
// //                   onChange={() => handleSeatFilterChange("6+")}
// //                 />
// //                 More than 6 passengers
// //               </label>
// //             </div>
// //             <button className={styles.filterBtn} onClick={applyFilters}>
// //               Apply Filters
// //             </button>
// //           </aside>

// //           <section className={styles.vehicleResults}>
// //             {vehicles.length === 0 ? (
// //               <p>Loading vehicles...</p>
// //             ) : filteredVehicles.length === 0 ? (
// //               <p>No vehicles match your criteria.</p>
// //             ) : (
// //               filteredVehicles.map((car) => (
// //                 <div className={styles.vehicleCard} key={car._id}>
// //                   <img
// //                     src={`http://localhost:3000/uploads/${car.photos?.[0]}`}
// //                     alt={car.carName}
// //                     className={styles.vehicleImg}
// //                     onError={(e) => {
// //                       e.target.src = Car1; // Static fallback image
// //                     }}
// //                   />
// //                   <div className={styles.vehicleInfo}>
// //                     <strong>
// //                       <h2>
// //                         <strong>{car.carName}</strong>
// //                       </h2>
// //                       <br></br>
// //                       <p>Type: {car.carType}</p>
// //                       <p>Driver: {car.driverName}</p>
// //                       <p>Booking: {car.bookingType}</p>
// //                     </strong>
// //                     <div className={styles.specs}>
// //                       <span>
// //                         <strong>⚙️{car.gearType}</strong>
// //                       </span>
// //                       <span>
// //                         <strong>❄️{car.airCondition ? "AC" : "Non-AC"}</strong>
// //                       </span>
// //                       <span>
// //                         <strong>👤{car.seats} Seats</strong>
// //                       </span>
// //                     </div>
// //                     <div className={styles.bottom}>
// //                       <p>
// //                         <strong>रू{car.ratePerDay}/Day</strong>
// //                       </p>
// //                       <div className={styles.cardButtons}>
// //                         <button className={styles.detailsBtn}>Details</button>
// //                         <button className={styles.reserveBtn}>Reserve</button>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               ))
// //             )}
// //           </section>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default VehicleSearchPage;

// // import React, { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios";
// // import styles from "./VehicleSearchPage.module.css";
// // import Car1 from "../Images/no1.png"; // Fallback image

// // const VehicleSearchPage = () => {
// //   const [vehicles, setVehicles] = useState([]);
// //   const [filteredVehicles, setFilteredVehicles] = useState([]);
// //   const [vehicleTypeFilters, setVehicleTypeFilters] = useState([]);
// //   const [seatFilters, setSeatFilters] = useState([]);
// //   const [priceRange, setPriceRange] = useState(3000);
// //   const [pickupDate, setPickupDate] = useState("");
// //   const [pickupTime, setPickupTime] = useState("");
// //   const [returnDate, setReturnDate] = useState("");
// //   const [returnTime, setReturnTime] = useState("");

// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     window.scrollTo(0, 0);
// //   }, []);

// //   useEffect(() => {
// //     const fetchCars = async () => {
// //       try {
// //         const response = await axios.get("http://localhost:3000/api/cars");
// //         const vehiclesData = response.data || [];
// //         setVehicles(vehiclesData);
// //         setFilteredVehicles(vehiclesData);
// //       } catch (error) {
// //         console.error("Error fetching vehicles:", error);
// //         setVehicles([]);
// //         setFilteredVehicles([]);
// //       }
// //     };

// //     fetchCars();
// //   }, []);

// //   const handleVehicleTypeChange = (type) => {
// //     setVehicleTypeFilters((prev) =>
// //       prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
// //     );
// //   };

// //   const handleSeatFilterChange = (filter) => {
// //     setSeatFilters((prev) =>
// //       prev.includes(filter)
// //         ? prev.filter((f) => f !== filter)
// //         : [...prev, filter]
// //     );
// //   };

// //   const applyFilters = () => {
// //     let result = vehicles;

// //     if (vehicleTypeFilters.length > 0) {
// //       result = result.filter((car) => vehicleTypeFilters.includes(car.carType));
// //     }

// //     result = result.filter((car) => car.ratePerDay <= priceRange);

// //     if (seatFilters.length > 0) {
// //       result = result.filter((car) => {
// //         if (seatFilters.includes("2-5") && car.seats >= 2 && car.seats <= 5) {
// //           return true;
// //         }
// //         if (seatFilters.includes("6+")) {
// //           return car.seats > 5;
// //         }
// //         return false;
// //       });
// //     }

// //     setFilteredVehicles(result);
// //   };

// //   return (
// //     <div className={styles.vehicleSearchWrapper}>
// //       <div className={styles.vehicleSearchPage}>
// //         <div className={styles.topFilterBar}>
// //           <div className={styles.dateTimeGroup}>
// //             <div className={styles.dateGroup}>
// //               <label>Pickup Date</label>
// //               <input
// //                 type="date"
// //                 value={pickupDate}
// //                 onChange={(e) => setPickupDate(e.target.value)}
// //               />
// //             </div>
// //             <div className={styles.timeGroup}>
// //               <label>Pickup Time</label>
// //               <input
// //                 type="time"
// //                 value={pickupTime}
// //                 onChange={(e) => setPickupTime(e.target.value)}
// //               />
// //             </div>
// //             <div className={styles.dateGroup}>
// //               <label>Return Date</label>
// //               <input
// //                 type="date"
// //                 value={returnDate}
// //                 onChange={(e) => setReturnDate(e.target.value)}
// //               />
// //             </div>
// //             <div className={styles.timeGroup}>
// //               <label>Return Time</label>
// //               <input
// //                 type="time"
// //                 value={returnTime}
// //                 onChange={(e) => setReturnTime(e.target.value)}
// //               />
// //             </div>
// //           </div>
// //           <button className={styles.searchBtn}>Search</button>
// //         </div>

// //         <div className={styles.mainContent}>
// //           <aside className={styles.vehicleFilters}>
// //             <h2>Filter Vehicles</h2>
// //             <h3>Vehicle Type</h3>
// //             <div className={styles.filterGroup}>
// //               {[
// //                 "SUV",
// //                 "Sedan",
// //                 "Hatchback",
// //                 "Coupe",
// //                 "Convertible",
// //                 "Pickup Truck",
// //                 "Minivan",
// //                 "Crossover",
// //                 "Station Wagon",
// //                 "Sports Car",
// //                 "Luxury Car",
// //                 "Van",
// //                 "Bus",
// //                 "Truck",
// //                 "RV",
// //                 "Motorcycle",
// //                 "Electric Vehicle (EV)",
// //                 "Hybrid",
// //                 "ATV",
// //                 "UTV",
// //                 "Jeep",
// //                 "Limousine",
// //                 "Amphibious Vehicle",
// //               ].map((type) => (
// //                 <label key={type}>
// //                   <input
// //                     type="checkbox"
// //                     checked={vehicleTypeFilters.includes(type)}
// //                     onChange={() => handleVehicleTypeChange(type)}
// //                   />
// //                   {type}
// //                 </label>
// //               ))}
// //             </div>
// //             <h3>Price Range</h3>
// //             <input
// //               type="range"
// //               min="1000"
// //               max="100000"
// //               step="500"
// //               value={priceRange}
// //               onChange={(e) => setPriceRange(parseInt(e.target.value))}
// //               className={styles.priceSlider}
// //             />
// //             <div className={styles.priceRange}>रू1000 - रू{priceRange}/day</div>
// //             <h3>Capacity</h3>
// //             <div className={styles.filterGroup}>
// //               <label>
// //                 <input
// //                   type="checkbox"
// //                   checked={seatFilters.includes("2-5")}
// //                   onChange={() => handleSeatFilterChange("2-5")}
// //                 />
// //                 2–5 passengers
// //               </label>
// //               <label>
// //                 <input
// //                   type="checkbox"
// //                   checked={seatFilters.includes("6+")}
// //                   onChange={() => handleSeatFilterChange("6+")}
// //                 />
// //                 More than 6 passengers
// //               </label>
// //             </div>
// //             <button className={styles.filterBtn} onClick={applyFilters}>
// //               Apply Filters
// //             </button>
// //           </aside>

// //           <section className={styles.vehicleResults}>
// //             {vehicles.length === 0 ? (
// //               <p>Loading vehicles...</p>
// //             ) : filteredVehicles.length === 0 ? (
// //               <p>No vehicles match your criteria.</p>
// //             ) : (
// //               filteredVehicles.map((car) => (
// //                 <div className={styles.vehicleCard} key={car._id}>
// //                   <img
// //                     src={`http://localhost:3000/uploads/${car.photos?.[0]}`}
// //                     alt={car.carName}
// //                     className={styles.vehicleImg}
// //                     onError={(e) => {
// //                       e.target.src = Car1;
// //                     }}
// //                   />
// //                   <div className={styles.vehicleInfo}>
// //                     <h2>
// //                       <strong>{car.carName}</strong>
// //                     </h2>
// //                     <br></br>
// //                     <p>Type: {car.carType}</p>
// //                     <p>Driver: {car.driverName}</p>
// //                     <p>Booking: {car.bookingType}</p>
// //                     <br></br>
// //                     <strong>
// //                       <div className={styles.specs}>
// //                         <span>⚙️{car.gearType}</span>
// //                         <span>❄️{car.airCondition ? "AC" : "Non-AC"}</span>

// //                         <span>👤{car.seats} Seats</span>
// //                       </div>
// //                     </strong>
// //                     <div className={styles.bottom}>
// //                       <p>
// //                         <strong>रू{car.ratePerDay}/Day</strong>
// //                       </p>
// //                       <div className={styles.cardButtons}>
// //                         <button
// //                           className={styles.detailsBtn}
// //                           onClick={() => navigate(`/cardetails/${car._id}`)}
// //                         >
// //                           Details
// //                         </button>
// //                         <button className={styles.reserveBtn}>Reserve</button>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               ))
// //             )}
// //           </section>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default VehicleSearchPage;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import styles from "./VehicleSearchPage.module.css";
// import Car1 from "../Images/no1.png"; // Fallback image

// const VehicleSearchPage = () => {
//   const [vehicles, setVehicles] = useState([]);
//   const [filteredVehicles, setFilteredVehicles] = useState([]);
//   const [vehicleTypeFilters, setVehicleTypeFilters] = useState([]);
//   const [seatFilters, setSeatFilters] = useState([]);
//   const [priceRange, setPriceRange] = useState(3000);
//   const [pickupDate, setPickupDate] = useState("");
//   const [pickupTime, setPickupTime] = useState("");
//   const [returnDate, setReturnDate] = useState("");
//   const [returnTime, setReturnTime] = useState("");
//   const [searchText, setSearchText] = useState("");

//   const navigate = useNavigate();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   useEffect(() => {
//     const fetchCars = async () => {
//       try {
//         const response = await axios.get("http://localhost:3000/api/cars");
//         const vehiclesData = response.data || [];
//         console.log("Fetched vehicle data:", vehiclesData); // 🔍 Detailed data
//         setVehicles(vehiclesData);
//         setFilteredVehicles(vehiclesData);
//       } catch (error) {
//         console.error("Error fetching vehicles:", error);
//         setVehicles([]);
//         setFilteredVehicles([]);
//       }
//     };

//     fetchCars();
//   }, []);

//   const handleVehicleTypeChange = (type) => {
//     setVehicleTypeFilters((prev) =>
//       prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
//     );
//   };

//   const handleSeatFilterChange = (filter) => {
//     setSeatFilters((prev) =>
//       prev.includes(filter)
//         ? prev.filter((f) => f !== filter)
//         : [...prev, filter]
//     );
//   };

//   const applyFilters = () => {
//     let result = [...vehicles]; // Create a copy to avoid mutating state directly

//     if (vehicleTypeFilters.length > 0) {
//       result = result.filter((car) => vehicleTypeFilters.includes(car.carType));
//     }

//     result = result.filter((car) => car.ratePerDay <= priceRange);

//     if (seatFilters.length > 0) {
//       result = result.filter((car) => {
//         if (seatFilters.includes("2-5") && car.seats >= 2 && car.seats <= 5) {
//           return true;
//         }
//         if (seatFilters.includes("6+")) {
//           return car.seats > 5;
//         }
//         return false;
//       });
//     }

//     if (searchText.trim() !== "") {
//       const searchLower = searchText.trim().toLowerCase();
//       result = result.filter((car) => {
//         const carName = car.carName ? car.carName.toLowerCase().trim() : "";
//         console.log("Searching for:", searchLower, "in:", carName); // Debug
//         return carName.includes(searchLower);
//       });
//     } else {
//       console.log("No search text, showing all vehicles.");
//     }

//     console.log("Filtered results count:", result.length);
//     setFilteredVehicles(result);
//   };

//   return (
//     <div className={styles.vehicleSearchWrapper}>
//       <div className={styles.vehicleSearchPage}>
//         <div className={styles.topFilterBar}>
//           <div className={styles.dateTimeGroup}>
//             <div className={styles.dateGroup}>
//               <label>Pickup Date</label>
//               <input
//                 type="date"
//                 value={pickupDate}
//                 onChange={(e) => setPickupDate(e.target.value)}
//               />
//             </div>
//             <div className={styles.timeGroup}>
//               <label>Pickup Time</label>
//               <input
//                 type="time"
//                 value={pickupTime}
//                 onChange={(e) => setPickupTime(e.target.value)}
//               />
//             </div>
//             <div className={styles.dateGroup}>
//               <label>Return Date</label>
//               <input
//                 type="date"
//                 value={returnDate}
//                 onChange={(e) => setReturnDate(e.target.value)}
//               />
//             </div>
//             <div className={styles.timeGroup}>
//               <label>Return Time</label>
//               <input
//                 type="time"
//                 value={returnTime}
//                 onChange={(e) => setReturnTime(e.target.value)}
//               />
//             </div>
//           </div>

//           <div className={styles.searchControls}>
//             <input
//               type="text"
//               placeholder="Search by vehicle name..."
//               value={searchText}
//               onChange={(e) => {
//                 setSearchText(e.target.value);
//                 applyFilters(); // Apply filters on every change
//               }}
//               onKeyDown={(e) => {
//                 if (e.key === "Enter") applyFilters();
//               }}
//               className={styles.searchInput}
//             />
//             <button className={styles.searchBtn} onClick={applyFilters}>
//               Search
//             </button>
//           </div>
//         </div>

//         <div className={styles.mainContent}>
//           <aside className={styles.vehicleFilters}>
//             <h2>Filter Vehicles</h2>
//             <h3>Vehicle Type</h3>
//             <div className={styles.filterGroup}>
//               {[
//                 "SUV",
//                 "Sedan",
//                 "Hatchback",
//                 "Coupe",
//                 "Convertible",
//                 "Pickup Truck",
//                 "Minivan",
//                 "Crossover",
//                 "Station Wagon",
//                 "Sports Car",
//                 "Luxury Car",
//                 "Van",
//                 "Bus",
//                 "Truck",
//                 "RV",
//                 "Motorcycle",
//                 "Electric Vehicle (EV)",
//                 "Hybrid",
//                 "ATV",
//                 "UTV",
//                 "Jeep",
//                 "Limousine",
//                 "Amphibious Vehicle",
//               ].map((type) => (
//                 <label key={type}>
//                   <input
//                     type="checkbox"
//                     checked={vehicleTypeFilters.includes(type)}
//                     onChange={() => handleVehicleTypeChange(type)}
//                   />
//                   {type}
//                 </label>
//               ))}
//             </div>

//             <h3>Price Range</h3>
//             <input
//               type="range"
//               min="1000"
//               max="100000"
//               step="500"
//               value={priceRange}
//               onChange={(e) => setPriceRange(parseInt(e.target.value))}
//               className={styles.priceSlider}
//             />
//             <div className={styles.priceRange}>रू1000 - रू{priceRange}/day</div>

//             <h3>Capacity</h3>
//             <div className={styles.filterGroup}>
//               <label>
//                 <input
//                   type="checkbox"
//                   checked={seatFilters.includes("2-5")}
//                   onChange={() => handleSeatFilterChange("2-5")}
//                 />
//                 2–5 passengers
//               </label>
//               <label>
//                 <input
//                   type="checkbox"
//                   checked={seatFilters.includes("6+")}
//                   onChange={() => handleSeatFilterChange("6+")}
//                 />
//                 More than 6 passengers
//               </label>
//             </div>

//             <button className={styles.filterBtn} onClick={applyFilters}>
//               Apply Filters
//             </button>
//           </aside>

//           <section className={styles.vehicleResults}>
//             {vehicles.length === 0 ? (
//               <p>Loading vehicles...</p>
//             ) : filteredVehicles.length === 0 ? (
//               <p>No vehicles match your criteria.</p>
//             ) : (
//               filteredVehicles.map((car) => (
//                 <div className={styles.vehicleCard} key={car._id}>
//                   <img
//                     src={`http://localhost:3000/uploads/${car.photos?.[0]}`}
//                     alt={car.carName}
//                     className={styles.vehicleImg}
//                     onError={(e) => {
//                       e.target.src = Car1;
//                     }}
//                   />
//                   <div className={styles.vehicleInfo}>
//                     <h2>
//                       <strong>{car.carName}</strong>
//                     </h2>
//                     <br />
//                     <p>Type: {car.carType}</p>
//                     <p>Driver: {car.driverName}</p>
//                     <p>Booking: {car.bookingType}</p>
//                     <br />
//                     <strong>
//                       <div className={styles.specs}>
//                         <span>⚙️{car.gearType}</span>
//                         <span>❄️{car.airCondition ? "AC" : "Non-AC"}</span>
//                         <span>👤{car.seats} Seats</span>
//                       </div>
//                     </strong>
//                     <div className={styles.bottom}>
//                       <p>
//                         <strong>रू{car.ratePerDay}/Day</strong>
//                       </p>
//                       <div className={styles.cardButtons}>
//                         <button
//                           className={styles.detailsBtn}
//                           onClick={() => navigate(`/cardetails/${car._id}`)}
//                         >
//                           Details
//                         </button>
//                         <button className={styles.reserveBtn}>Reserve</button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             )}
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VehicleSearchPage;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import styles from "./VehicleSearchPage.module.css";
// import Car1 from "../Images/no1.png"; // Fallback image

// const VehicleSearchPage = () => {
//   const [vehicles, setVehicles] = useState([]);
//   const [filteredVehicles, setFilteredVehicles] = useState([]);
//   const [vehicleTypeFilters, setVehicleTypeFilters] = useState([]);
//   const [seatFilters, setSeatFilters] = useState([]);
//   const [priceRange, setPriceRange] = useState(3000);
//   const [pickupDate, setPickupDate] = useState("");
//   const [pickupTime, setPickupTime] = useState("");
//   const [returnDate, setReturnDate] = useState("");
//   const [returnTime, setReturnTime] = useState("");
//   const [searchText, setSearchText] = useState("");

//   const navigate = useNavigate();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   useEffect(() => {
//     const fetchCars = async () => {
//       try {
//         const response = await axios.get("http://localhost:3000/api/cars");
//         const vehiclesData = response.data || [];
//         console.log("Fetched vehicle data:", vehiclesData); // 🔍 Detailed data
//         setVehicles(vehiclesData);
//         setFilteredVehicles(vehiclesData);
//       } catch (error) {
//         console.error("Error fetching vehicles:", error);
//         setVehicles([]);
//         setFilteredVehicles([]);
//       }
//     };

//     fetchCars();
//   }, []);

//   const handleVehicleTypeChange = (type) => {
//     setVehicleTypeFilters((prev) =>
//       prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
//     );
//   };

//   const handleSeatFilterChange = (filter) => {
//     setSeatFilters((prev) =>
//       prev.includes(filter)
//         ? prev.filter((f) => f !== filter)
//         : [...prev, filter]
//     );
//   };

//   const searchCarsByName = async () => {
//     if (!searchText.trim()) {
//       // If search text is empty, fetch all cars
//       const response = await axios.get("http://localhost:3000/api/cars");
//       setVehicles(response.data || []);
//       setFilteredVehicles(response.data || []);
//       return;
//     }

//     try {
//       const response = await axios.get(
//         "http://localhost:3000/api/cars/search",
//         {
//           params: { name: searchText.trim() },
//         }
//       );
//       const cars = response.data || [];
//       console.log("Search results:", cars);
//       setVehicles(cars);
//       setFilteredVehicles(cars);
//     } catch (error) {
//       console.error("Error searching cars:", error);
//       setVehicles([]);
//       setFilteredVehicles([]);
//     }
//   };

//   const applyFilters = () => {
//     let result = [...vehicles];

//     if (vehicleTypeFilters.length > 0) {
//       result = result.filter((car) => vehicleTypeFilters.includes(car.carType));
//     }

//     result = result.filter((car) => car.ratePerDay <= priceRange);

//     if (seatFilters.length > 0) {
//       result = result.filter((car) => {
//         if (seatFilters.includes("2-5") && car.seats >= 2 && car.seats <= 5) {
//           return true;
//         }
//         if (seatFilters.includes("6+")) {
//           return car.seats > 5;
//         }
//         return false;
//       });
//     }

//     setFilteredVehicles(result);
//   };

//   // Trigger search on input change and apply filters on button click or Enter
//   useEffect(() => {
//     searchCarsByName();
//   }, [searchText]);

//   return (
//     <div className={styles.vehicleSearchWrapper}>
//       <div className={styles.vehicleSearchPage}>
//         <div className={styles.topFilterBar}>
//           <div className={styles.searchControls}>
//             <input
//               type="text"
//               placeholder="Search by vehicle name..."
//               value={searchText}
//               onChange={(e) => setSearchText(e.target.value)}
//               onKeyDown={(e) => {
//                 if (e.key === "Enter") applyFilters();
//               }}
//               className={styles.searchInput}
//             />
//             <button className={styles.searchBtn} onClick={applyFilters}>
//               Search
//             </button>
//           </div>
//         </div>

//         <div className={styles.mainContent}>
//           <aside className={styles.vehicleFilters}>
//             <h2>Filter Vehicles</h2>
//             <h3>Vehicle Type</h3>
//             <div className={styles.filterGroup}>
//               {[
//                 "SUV",
//                 "Sedan",
//                 "Hatchback",
//                 "Coupe",
//                 "Convertible",
//                 "Pickup Truck",
//                 "Minivan",
//                 "Crossover",
//                 "Station Wagon",
//                 "Sports Car",
//                 "Luxury Car",
//                 "Van",
//                 "Bus",
//                 "Truck",
//                 "RV",
//                 "Motorcycle",
//                 "Electric Vehicle (EV)",
//                 "Hybrid",
//                 "ATV",
//                 "UTV",
//                 "Jeep",
//                 "Limousine",
//                 "Amphibious Vehicle",
//               ].map((type) => (
//                 <label key={type}>
//                   <input
//                     type="checkbox"
//                     checked={vehicleTypeFilters.includes(type)}
//                     onChange={() => handleVehicleTypeChange(type)}
//                   />
//                   {type}
//                 </label>
//               ))}
//             </div>

//             <h3>Price Range</h3>
//             <input
//               type="range"
//               min="1000"
//               max="100000"
//               step="500"
//               value={priceRange}
//               onChange={(e) => setPriceRange(parseInt(e.target.value))}
//               className={styles.priceSlider}
//             />
//             <div className={styles.priceRange}>रू1000 - रू{priceRange}/day</div>

//             <h3>Capacity</h3>
//             <div className={styles.filterGroup}>
//               <label>
//                 <input
//                   type="checkbox"
//                   checked={seatFilters.includes("2-5")}
//                   onChange={() => handleSeatFilterChange("2-5")}
//                 />
//                 2–5 passengers
//               </label>
//               <label>
//                 <input
//                   type="checkbox"
//                   checked={seatFilters.includes("6+")}
//                   onChange={() => handleSeatFilterChange("6+")}
//                 />
//                 More than 6 passengers
//               </label>
//             </div>

//             <button className={styles.filterBtn} onClick={applyFilters}>
//               Apply Filters
//             </button>
//           </aside>

//           <section className={styles.vehicleResults}>
//             {vehicles.length === 0 ? (
//               <p>Loading vehicles...</p>
//             ) : filteredVehicles.length === 0 ? (
//               <p>No vehicles match your criteria.</p>
//             ) : (
//               filteredVehicles.map((car) => (
//                 <div className={styles.vehicleCard} key={car._id}>
//                   <img
//                     src={`http://localhost:3000/uploads/${car.photos?.[0]}`}
//                     alt={car.carName}
//                     className={styles.vehicleImg}
//                     onError={(e) => {
//                       e.target.src = Car1;
//                     }}
//                   />
//                   <div className={styles.vehicleInfo}>
//                     <h2>
//                       <strong>{car.carName}</strong>
//                     </h2>
//                     <br />
//                     <p>Type: {car.carType}</p>
//                     <p>Driver: {car.driverName}</p>
//                     <p>Booking: {car.bookingType}</p>
//                     <br />
//                     <strong>
//                       <div className={styles.specs}>
//                         <span>⚙️{car.gearType}</span>
//                         <span>❄️{car.airCondition ? "AC" : "Non-AC"}</span>
//                         <span>👤{car.seats} Seats</span>
//                       </div>
//                     </strong>
//                     <p className={styles.ratePerDay}>
//                       <strong>रू{car.ratePerDay}/Day</strong>
//                     </p>
//                     <div className={styles.bottom}>
//                       <div className={styles.cardButtons}>
//                         <button
//                           className={styles.detailsBtn}
//                           onClick={() => navigate(`/cardetails/${car._id}`)}
//                         >
//                           Details
//                         </button>
//                         <button className={styles.reserveBtn}>Reserve</button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             )}
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default VehicleSearchPage;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./VehicleSearchPage.module.css";
import Car1 from "../Images/no1.png"; // Fallback image

const VehicleSearchPage = () => {
  const [vehicles, setVehicles] = useState([]);
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const [vehicleTypeFilters, setVehicleTypeFilters] = useState([]);
  const [seatFilters, setSeatFilters] = useState([]);
  const [priceRange, setPriceRange] = useState(3000);
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [returnTime, setReturnTime] = useState("");
  const [searchText, setSearchText] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchAllVehicles = async () => {
      try {
        // Fetch from /api/cars
        const carsResponse = await axios.get("http://localhost:3000/api/cars");
        const cars = carsResponse.data || [];

        // Fetch from /api/vehicles and filter for Approved status
        const vehiclesResponse = await axios.get(
          "http://localhost:3000/api/vehicles"
        );
        const vehicles = vehiclesResponse.data
          .filter((vehicle) => vehicle.status === "Approved")
          .map((vehicle) => ({
            ...vehicle,
            image: vehicle.vehicleFrontImage || Car1,
            photos: vehicle.photos || [vehicle.vehicleFrontImage],
            carName: vehicle.vehicleName || "Unnamed Vehicle",
            carType: vehicle.carType || "Unknown",
            seats: vehicle.seatNumbers || 4,
            airCondition: vehicle.airCondition || "Yes",
            gearType: vehicle.gearType || "Automatic",
            ratePerDay: vehicle.perDayRate || 0,
            driverName: vehicle.ownerName || "Not specified",
            bookingType: vehicle.rentalType || "Both",
            _id:
              vehicle._id ||
              vehicle.id ||
              Math.random().toString(36).substr(2, 9),
          }));

        // Combine both arrays
        const combinedVehicles = [...cars, ...vehicles];

        console.log("Combined vehicle data:", combinedVehicles); // 🔍 Detailed data
        setVehicles(combinedVehicles);
        setFilteredVehicles(combinedVehicles);
      } catch (error) {
        console.error("Error fetching vehicles:", error);
        setVehicles([]);
        setFilteredVehicles([]);
      }
    };

    fetchAllVehicles();
  }, []);

  const handleVehicleTypeChange = (type) => {
    setVehicleTypeFilters((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleSeatFilterChange = (filter) => {
    setSeatFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  const searchCarsByName = async () => {
    try {
      let combinedVehicles = [];

      if (!searchText.trim()) {
        // If search text is empty, fetch all vehicles
        const carsResponse = await axios.get("http://localhost:3000/api/cars");
        const cars = carsResponse.data || [];

        const vehiclesResponse = await axios.get(
          "http://localhost:3000/api/vehicles"
        );
        const vehicles = vehiclesResponse.data
          .filter((vehicle) => vehicle.status === "Approved")
          .map((vehicle) => ({
            ...vehicle,
            image: vehicle.vehicleFrontImage || Car1,
            photos: vehicle.photos || [vehicle.vehicleFrontImage],
            carName: vehicle.vehicleName || "Unnamed Vehicle",
            carType: vehicle.carType || "Unknown",
            seats: vehicle.seatNumbers || 4,
            airCondition: vehicle.airCondition || "Yes",
            gearType: vehicle.gearType || "Automatic",
            ratePerDay: vehicle.perDayRate || 0,
            driverName: vehicle.ownerName || "Not specified",
            bookingType: vehicle.rentalType || "Both",
            _id:
              vehicle._id ||
              vehicle.id ||
              Math.random().toString(36).substr(2, 9),
          }));

        combinedVehicles = [...cars, ...vehicles];
      } else {
        // Search cars
        const carsSearchResponse = await axios.get(
          "http://localhost:3000/api/cars/search",
          {
            params: { name: searchText.trim() },
          }
        );
        const cars = carsSearchResponse.data || [];

        // Try searching vehicles, fallback to client-side filtering if endpoint fails
        let vehicles = [];
        try {
          const vehiclesSearchResponse = await axios.get(
            "http://localhost:3000/api/vehicles/search",
            {
              params: { name: searchText.trim() },
            }
          );
          vehicles = vehiclesSearchResponse.data
            .filter((vehicle) => vehicle.status === "Approved")
            .map((vehicle) => ({
              ...vehicle,
              image: vehicle.vehicleFrontImage || Car1,
              photos: vehicle.photos || [vehicle.vehicleFrontImage],
              carName: vehicle.vehicleName || "Unnamed Vehicle",
              carType: vehicle.carType || "Unknown",
              seats: vehicle.seatNumbers || 4,
              airCondition: vehicle.airCondition || "Yes",
              gearType: vehicle.gearType || "Automatic",
              ratePerDay: vehicle.perDayRate || 0,
              driverName: vehicle.ownerName || "Not specified",
              bookingType: vehicle.rentalType || "Both",
              _id:
                vehicle._id ||
                vehicle.id ||
                Math.random().toString(36).substr(2, 9),
            }));
        } catch (error) {
          console.warn(
            "Vehicle search endpoint failed, falling back to client-side filtering",
            error
          );
          // Fallback: Fetch all vehicles and filter client-side
          const vehiclesResponse = await axios.get(
            "http://localhost:3000/api/vehicles"
          );
          vehicles = vehiclesResponse.data
            .filter(
              (vehicle) =>
                vehicle.status === "Approved" &&
                vehicle.vehicleName
                  ?.toLowerCase()
                  .includes(searchText.trim().toLowerCase())
            )
            .map((vehicle) => ({
              ...vehicle,
              image: vehicle.vehicleFrontImage || Car1,
              photos: vehicle.photos || [vehicle.vehicleFrontImage],
              carName: vehicle.vehicleName || "Unnamed Vehicle",
              carType: vehicle.carType || "Unknown",
              seats: vehicle.seatNumbers || 4,
              airCondition: vehicle.airCondition || "Yes",
              gearType: vehicle.gearType || "Automatic",
              ratePerDay: vehicle.perDayRate || 0,
              driverName: vehicle.ownerName || "Not specified",
              bookingType: vehicle.rentalType || "Both",
              _id:
                vehicle._id ||
                vehicle.id ||
                Math.random().toString(36).substr(2, 9),
            }));
        }

        combinedVehicles = [...cars, ...vehicles];
      }

      console.log("Search results:", combinedVehicles);
      setVehicles(combinedVehicles);
      setFilteredVehicles(combinedVehicles);
    } catch (error) {
      console.error("Error searching vehicles:", error);
      setVehicles([]);
      setFilteredVehicles([]);
    }
  };

  const applyFilters = () => {
    let result = [...vehicles];

    if (vehicleTypeFilters.length > 0) {
      result = result.filter((car) => vehicleTypeFilters.includes(car.carType));
    }

    result = result.filter((car) => car.ratePerDay <= priceRange);

    if (seatFilters.length > 0) {
      result = result.filter((car) => {
        if (seatFilters.includes("2-5") && car.seats >= 2 && car.seats <= 5) {
          return true;
        }
        if (seatFilters.includes("6+")) {
          return car.seats > 5;
        }
        return false;
      });
    }

    setFilteredVehicles(result);
  };

  // Trigger search on input change and apply filters on button click or Enter
  useEffect(() => {
    searchCarsByName();
  }, [searchText]);

  return (
    <div className={styles.vehicleSearchWrapper}>
      <div className={styles.vehicleSearchPage}>
        <div className={styles.topFilterBar}>
          <div className={styles.searchControls}>
            <input
              type="text"
              placeholder="Search by vehicle name..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") applyFilters();
              }}
              className={styles.searchInput}
            />
            <button className={styles.searchBtn} onClick={applyFilters}>
              Search
            </button>
          </div>
        </div>

        <div className={styles.mainContent}>
          <aside className={styles.vehicleFilters}>
            <h2>Filter Vehicles</h2>
            <h3>Vehicle Type</h3>
            <div className={styles.filterGroup}>
              {[
                "SUV",
                "Sedan",
                "Hatchback",
                "Coupe",
                "Convertible",
                "Pickup Truck",
                "Minivan",
                "Crossover",
                "Station Wagon",
                "Sports Car",
                "Luxury Car",
                "Van",
                "Bus",
                "Truck",
                "RV",
                "Motorcycle",
                "Electric Vehicle (EV)",
                "Hybrid",
                "ATV",
                "UTV",
                "Jeep",
                "Limousine",
                "Amphibious Vehicle",
              ].map((type) => (
                <label key={type}>
                  <input
                    type="checkbox"
                    checked={vehicleTypeFilters.includes(type)}
                    onChange={() => handleVehicleTypeChange(type)}
                  />
                  {type}
                </label>
              ))}
            </div>

            <h3>Price Range</h3>
            <input
              type="range"
              min="1000"
              max="100000"
              step="500"
              value={priceRange}
              onChange={(e) => setPriceRange(parseInt(e.target.value))}
              className={styles.priceSlider}
            />
            <div className={styles.priceRange}>रू1000 - रू{priceRange}/day</div>

            <h3>Capacity</h3>
            <div className={styles.filterGroup}>
              <label>
                <input
                  type="checkbox"
                  checked={seatFilters.includes("2-5")}
                  onChange={() => handleSeatFilterChange("2-5")}
                />
                2–5 passengers
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={seatFilters.includes("6+")}
                  onChange={() => handleSeatFilterChange("6+")}
                />
                More than 6 passengers
              </label>
            </div>

            <button className={styles.filterBtn} onClick={applyFilters}>
              Apply Filters
            </button>
          </aside>

          <section className={styles.vehicleResults}>
            {vehicles.length === 0 ? (
              <p>Loading vehicles...</p>
            ) : filteredVehicles.length === 0 ? (
              <p>No vehicles match your criteria.</p>
            ) : (
              filteredVehicles.map((car) => (
                <div className={styles.vehicleCard} key={car._id}>
                  <img
                    src={`http://localhost:3000/uploads/${car.photos?.[0]}`}
                    alt={car.carName}
                    className={styles.vehicleImg}
                    onError={(e) => {
                      e.target.src = Car1;
                    }}
                  />
                  <div className={styles.vehicleInfo}>
                    <h2>
                      <strong>{car.carName}</strong>
                    </h2>
                    <br />
                    <p>Type: {car.carType}</p>
                    <p>Driver: {car.driverName}</p>
                    <p>Booking: {car.bookingType}</p>
                    <br />
                    <strong>
                      <div className={styles.specs}>
                        <span>⚙️{car.gearType}</span>
                        <span>❄️{car.airCondition ? "AC" : "Non-AC"}</span>
                        <span>👤{car.seats} Seats</span>
                      </div>
                    </strong>
                    <p className={styles.ratePerDay}>
                      <strong>रू{car.ratePerDay}/Day</strong>
                    </p>
                    <div className={styles.bottom}>
                      <div className={styles.cardButtons}>
                        <button
                          className={styles.detailsBtn}
                          onClick={() => navigate(`/cardetails/${car._id}`)}
                        >
                          Details
                        </button>
                        <button className={styles.reserveBtn}>Reserve</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default VehicleSearchPage;
