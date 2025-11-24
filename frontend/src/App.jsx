// // // // src/App.js
// // import React, { useState, useEffect } from "react";
// // import { Routes, Route } from "react-router-dom";
// // import VehicleSearchPage from "./component/VehicleSearch/VehicleSearchPage";
// // import CarDetailPage from "./component/cardetails/CarDetailPage";
// // import Booking from "./component/Booking/Booking";
// // import DetailsPage from "./component/DetailsPage/DetailsPage";
// // import TermsAndPolicies from "./component/TermsAndPoliciesPage/TermsAndPoliciesPage";
// // // Import the new component
// // import MainContent from "./dealsDetails/MainContent";
// // import DriverVerification from "./dealsDetails/DriverVerification";
// // import UserVerification from "./dealsDetails/UserVerification";
// // import ProfileSettings from "./dealsDetails/ProfileSettings";
// // import VerificationDetails from "./dealsDetails/VerificationDetails";
// // import DriftyPage from "./component/dashboard/DriftyPage";
// // import RidesDashboard from "./component/dashboard/RidesDashboard";
// // import ListVehicleForm from "./component/List Your Vehicles/ListVehicleForm";
// // import AddCarModel from "./dealsDetails/AddCarModel.jsx";
// // import UserProfileDashboard from "./component/dashboard/UserProfileDashboard";
// // import AboutUsPage from "./component/AboutUs/AboutUsPage";
// // import LandingPage from "./component/Landingpage/Landingpage";
// // import HomePage from "./component/Landingpage/HomePage";
// // import AuthPage from "./AuthPage/AuthPage";
// // import LoginPage from "./AuthPage/LoginPage";
// // import AdminLoginPage from "./AuthPage/AdminLoginPage";
// // import SignUp from "./AuthPage/SignUp";
// // import ContactUsPage from "./component/ContactUs/ContactUsPage";
// // import VerificationPage from "./VerificationPage/VerificationPage";
// // import PaymentPage from "./component/Payment/PaymentPage"; // Import PaymentPage
// // import OrderConfirmation from "./component/OrderConfirmation/OrderConfirmation"; // Import OrderConfirmation
// // // import "./App.css";
// // // import AddCarModel from "./dealsDetails/AddCarModel.jsx";

// // // Import the new components for the nested routes
// // import ActiveVechilesTable from "./dealsDetails/ActiveVechilesTable.jsx"; // Corrected import
// // import PaymnetListing from "./dealsDetails/PaymnetListing.jsx"; // Corrected import
// // import VehicleTable from "./dealsDetails/VehicleTable.jsx"; // Corrected import

// // function App() {
// //   const [isLoggedIn, setIsLoggedIn] = useState(false);
// //   const [isVerified, setIsVerified] = useState(false);
// //   //const navigate = useNavigate(); // Removed - Not used directly at the top level

// //   const handleLoginSuccess = () => {
// //     setIsLoggedIn(true);
// //     //navigate("/verification"); // Removed - Handled by useEffect
// //   };

// //   const handleSignupSuccess = () => {
// //     setIsLoggedIn(true);
// //     //navigate("/verification"); // Removed - Handled by useEffect
// //   };

// //   const handleVerificationSuccess = () => {
// //     setIsVerified(true);
// //   };

// //   useEffect(() => {
// //     if (isVerified) {
// //       //navigate("/");  // Removed -  Verification details now
// //       setIsVerified(false);
// //     }
// //   }, [isVerified]);

// //   return (
// //     <Routes>
// //       <Route path="/home" element={<HomePage />} />
// //       <Route path="/" element={<LandingPage isLoggedIn={isLoggedIn} />} />
// //       <Route path="/search" element={<VehicleSearchPage />} />
// //       {/* <Route
// //         path="/caryydetails/:id"
// //         element={<CarDetailPage isLoggedIn={isLoggedIn} />}
// //       /> */}
// //       <Route
// //         path="/cardetails/:id"
// //         element={<CarDetailPage isLoggedIn={isLoggedIn} />}
// //       />
// //       s
// //       <Route path="/booking/:id" element={<Booking />} />
// //       <Route
// //         path="/admin/dashboard"
// //         element={<div>Admin Dashboard Content</div>}
// //       />
// //       <Route path="/terms-and-policies" element={<TermsAndPolicies />} />
// //       <Route path="/payment/:id/booking" element={<Booking />} />
// //       <Route path="/profile" element={<UserProfileDashboard />} />
// //       <Route path="/payment/:id" element={<PaymentPage />} />
// //       <Route path="/auth" element={<AuthPage />} />
// //       <Route
// //         path="/login/user"
// //         element={<LoginPage onLoginSuccess={handleLoginSuccess} />}
// //       />
// //       <Route path="/login/admin" element={<AdminLoginPage />} />
// //       <Route path="/list-your-vehicles" element={<ListVehicleForm />} />
// //       <Route
// //         path="/signup"
// //         element={<SignUp onSignupSuccess={handleSignupSuccess} />}
// //       />
// //       <Route
// //         path="/verification"
// //         element={
// //           <VerificationPage onVerificationSuccess={handleVerificationSuccess} />
// //         }
// //       />
// //       <Route path="/rides" element={<RidesDashboard />} />
// //       <Route path="/drifty" element={<DriftyPage />} />
// //       <Route path="/about-us" element={<AboutUsPage />} />
// //       <Route path="/contact-us" element={<ContactUsPage />} />
// //       <Route path="/order-confirmed" element={<OrderConfirmation />} />
// //       <Route path="/details" element={<DetailsPage />} />
// //       {/* Deals Details Routes (Nested) */}
// //       <Route path="/dealsdetails/*" element={<DealsDetailsRoutes />} />
// //       <Route path="/verification-details" element={<VerificationDetails />} />
// //     </Routes>
// //   );
// // }

// // function DealsDetailsRoutes() {
// //   return (
// //     <Routes>
// //       <Route index element={<MainContent />} />
// //       <Route path="vehicle-table" element={<VehicleTable />} />
// //       <Route path="active-vehicles" element={<ActiveVechilesTable />} />
// //       <Route path="driver-verification" element={<DriverVerification />} />
// //       <Route path="user-verification" element={<UserVerification />} />
// //       <Route path="payments" element={<PaymnetListing />} />{" "}
// //       {/* Corrected component name */}
// //     </Routes>
// //   );
// // }

// // export default App;
// // // export default App;
// // // src/App.js
// // import React from "react";
// // import MainContent from "./dealsDetails/MainContent";

// // function App() {
// //   return <MainContent />;
// // }

// // export default App;

// // import React from "react";
// // import VehicleSearchPage from "./component/VehicleSearch/VehicleSearchPage";

// // function App() {
// //   return (
// //     <div className="App">
// //       <VehicleSearchPage />
// //     </div>
// //   );
// // }

// // export default App;

// // // import React from "react";
// // // import { Routes, Route } from "react-router-dom";
// // // import HomePage from "./component/Landingpage/HomePage"; // Adjust the import according to your file structure
// // // import "./App.css";

// // // function App() {
// // //   return (
// // //     <Routes>
// // //       <Route path="/" element={<HomePage />} />{" "}
// // //       {/* Only show HomePage for the "/home" route */}
// // //     </Routes>
// // //   );
// // // }

// // // export default App;

// // // import React from "react";
// // // import { Routes, Route } from "react-router-dom";
// // // import LandingPage from "./component/Landingpage/Landingpage"; // Make sure the path is correct
// // // import "./App.css";

// // // function App() {
// // //   return (
// //     <Routes>
// //       <Route path="/" element={<LandingPage />} />{" "}
// //       {/* Only render LandingPage */}
// //     </Routes>
// //   );
// // }

// // export default App;

// // src/App.js
// // import React from "react";
// // import { Routes, Route } from "react-router-dom";
// // import KycVerification from "./component/KycVerification/KycVerification"; // Adjust path if different

// // function App() {
// //   return (
// //     <Routes>
// //       <Route path="/" element={<KycVerification />} />
// //     </Routes>
// //   );
// // }

// // export default App;

// // import React from "react";
// // import { Routes, Route } from "react-router-dom";
// // import MainContent from "./dealsDetails/MainContent";

// // function App() {
// //   return (
// //     <Routes>
// //       <Route path="/" element={<MainContent />} />
// //     </Routes>
// //   );
// // }

// // // export default App;
// // import React, { useState, useEffect } from "react";
// // import { Routes, Route } from "react-router-dom";

// // import VehicleSearchPage from "./component/VehicleSearch/VehicleSearchPage";
// // import CarDetailPage from "./component/cardetails/CarDetailPage";
// // import Booking from "./component/Booking/Booking";
// // import DetailsPage from "./component/DetailsPage/DetailsPage";
// // import TermsAndPolicies from "./component/TermsAndPoliciesPage/TermsAndPoliciesPage";
// // import MainContent from "./dealsDetails/MainContent";
// // import DriverVerification from "./dealsDetails/DriverVerification";
// // import UserVerification from "./dealsDetails/UserVerification";
// // import ProfileSettings from "./dealsDetails/ProfileSettings";
// // import VerificationDetails from "./dealsDetails/VerificationDetails";
// // import DriftyPage from "./component/dashboard/DriftyPage";
// // import RidesDashboard from "./component/dashboard/RidesDashboard";
// // import ListVehicleForm from "./component/List Your Vehicles/ListVehicleForm";
// // import UserProfileDashboard from "./component/dashboard/UserProfileDashboard";
// // import AboutUsPage from "./component/AboutUs/AboutUsPage";
// // import LandingPage from "./component/Landingpage/Landingpage";
// // import HomePage from "./component/Landingpage/HomePage";
// // import AuthPage from "./AuthPage/AuthPage";
// // import LoginPage from "./AuthPage/LoginPage";
// // import AdminLoginPage from "./AuthPage/AdminLoginPage";
// // import SignUp from "./AuthPage/SignUp";
// // import ContactUsPage from "./component/ContactUs/ContactUsPage";
// // import VerificationPage from "./VerificationPage/VerificationPage";
// // import PaymentPage from "./component/Payment/PaymentPage";
// // import OrderConfirmation from "./component/OrderConfirmation/OrderConfirmation";
// // import ActiveVechilesTable from "./dealsDetails/ActiveVechilesTable.jsx";
// // import PaymnetListing from "./dealsDetails/PaymnetListing.jsx";
// // import VehicleTable from "./dealsDetails/VehicleTable.jsx";
// // import KycVerification from "./component/KycVerification/KycVerification.jsx";

// // function App() {
// //   const [isLoggedIn, setIsLoggedIn] = useState(false);
// //   const [isVerified, setIsVerified] = useState(false);
// //   const [user, setUser] = useState(null); // ✅ Added to store user info

// //   const handleLoginSuccess = () => setIsLoggedIn(true);
// //   const handleSignupSuccess = () => setIsLoggedIn(true);
// //   const handleVerificationSuccess = () => setIsVerified(true);

// //   useEffect(() => {
// //     if (isVerified) setIsVerified(false);
// //   }, [isVerified]);

// //   return (
// //     <Routes>
// //       <Route path="/" element={<LandingPage isLoggedIn={isLoggedIn} />} />
// //       <Route path="/home" element={<HomePage />} />
// //       <Route path="/search" element={<VehicleSearchPage />} />
// //       <Route
// //         path="/cardetails/:id"
// //         element={<CarDetailPage isLoggedIn={isLoggedIn} user={user} />}
// //       />
// //       <Route path="/booking/:id" element={<Booking />} />
// //       <Route
// //         path="/admin/dashboard"
// //         element={<div>Admin Dashboard Content</div>}
// //       />
// //       <Route path="/kyc-verification" element={<KycVerification />} />
// //       <Route path="/terms-and-policies" element={<TermsAndPolicies />} />
// //       <Route path="/payment/:id/booking" element={<Booking />} />
// //       <Route path="/profile" element={<UserProfileDashboard />} />
// //       <Route path="/payment/:id" element={<PaymentPage />} />
// //       <Route path="/auth" element={<AuthPage />} />
// //       <Route
// //         path="/login/user"
// //         element={
// //           <LoginPage onLoginSuccess={handleLoginSuccess} setUser={setUser} />
// //         }
// //       />
// //       <Route path="/login/admin" element={<AdminLoginPage />} />

// //       {/* ✅ Pass user to ListVehicleForm */}
// //       <Route
// //         path="/list-your-vehicles"
// //         element={<ListVehicleForm user={user} />}
// //       />

// //       <Route
// //         path="/signup"
// //         element={
// //           <SignUp onSignupSuccess={handleSignupSuccess} setUser={setUser} />
// //         }
// //       />
// //       <Route
// //         path="/verification"
// //         element={
// //           <VerificationPage onVerificationSuccess={handleVerificationSuccess} />
// //         }
// //       />
// //       <Route path="/rides" element={<RidesDashboard />} />
// //       <Route path="/drifty" element={<DriftyPage />} />
// //       <Route path="/about-us" element={<AboutUsPage />} />
// //       <Route path="/contact-us" element={<ContactUsPage />} />
// //       <Route path="/order-confirmed" element={<OrderConfirmation />} />
// //       <Route path="/details" element={<DetailsPage />} />
// //       <Route path="/dealsdetails/*" element={<DealsDetailsRoutes />} />
// //       <Route path="/verification-details" element={<VerificationDetails />} />
// //     </Routes>
// //   );
// // }

// // function DealsDetailsRoutes() {
// //   return (
// //     <Routes>
// //       <Route index element={<MainContent />} />
// //       <Route path="vehicle-table" element={<VehicleTable />} />
// //       <Route path="active-vehicles" element={<ActiveVechilesTable />} />
// //       <Route path="driver-verification" element={<DriverVerification />} />
// //       <Route path="user-verification" element={<UserVerification />} />
// //       <Route path="payments" element={<PaymnetListing />} />
// //     </Routes>
// //   );
// // }

// // export default App;

// import React, { useState, useEffect } from "react";
// import { Routes, Route } from "react-router-dom";

// import VehicleSearchPage from "./component/VehicleSearch/VehicleSearchPage";
// import CarDetailPage from "./component/cardetails/CarDetailPage";
// import Booking from "./component/Booking/Booking";
// import DetailsPage from "./component/DetailsPage/DetailsPage";
// import TermsAndPolicies from "./component/TermsAndPoliciesPage/TermsAndPoliciesPage";
// import MainContent from "./dealsDetails/MainContent";
// import DriverVerification from "./dealsDetails/DriverVerification";
// import UserVerification from "./dealsDetails/UserVerification";
// import ProfileSettings from "./dealsDetails/ProfileSettings";
// import VerificationDetails from "./dealsDetails/VerificationDetails";
// import DriftyPage from "./component/dashboard/DriftyPage";
// import RidesDashboard from "./component/dashboard/RidesDashboard";
// import ListVehicleForm from "./component/List Your Vehicles/ListVehicleForm";
// import UserProfileDashboard from "./component/dashboard/UserProfileDashboard";
// import AboutUsPage from "./component/AboutUs/AboutUsPage";
// import LandingPage from "./component/Landingpage/Landingpage";
// import HomePage from "./component/Landingpage/HomePage";
// import AuthPage from "./AuthPage/AuthPage";
// import LoginPage from "./AuthPage/LoginPage";
// import AdminLoginPage from "./AuthPage/AdminLoginPage";
// import SignUp from "./AuthPage/SignUp";
// import ContactUsPage from "./component/ContactUs/ContactUsPage";
// import VerificationPage from "./VerificationPage/VerificationPage";
// import PaymentPage from "./component/Payment/PaymentPage";
// import OrderConfirmation from "./component/OrderConfirmation/OrderConfirmation";
// import ActiveVechilesTable from "./dealsDetails/ActiveVechilesTable.jsx";
// import PaymnetListing from "./dealsDetails/PaymnetListing.jsx";
// import VehicleTable from "./dealsDetails/VehicleTable.jsx";
// import KycVerification from "./component/KycVerification/KycVerification.jsx";

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isVerified, setIsVerified] = useState(false);
//   const [user, setUser] = useState(null); // ✅ Store user info here

//   const handleLoginSuccess = () => setIsLoggedIn(true);
//   const handleSignupSuccess = () => setIsLoggedIn(true);
//   const handleVerificationSuccess = () => setIsVerified(true);

//   useEffect(() => {
//     if (isVerified) setIsVerified(false);
//   }, [isVerified]);

//   return (
//     <Routes>
//       <Route path="/" element={<LandingPage isLoggedIn={isLoggedIn} />} />
//       <Route path="/home" element={<HomePage />} />
//       <Route path="/search" element={<VehicleSearchPage />} />
//       <Route
//         path="/cardetails/:id"
//         element={<CarDetailPage isLoggedIn={isLoggedIn} user={user} />}
//       />
//       <Route path="/booking/:id" element={<Booking />} />
//       <Route
//         path="/admin/dashboard"
//         element={<div>Admin Dashboard Content</div>}
//       />
//       <Route path="/kyc-verification" element={<KycVerification />} />
//       <Route path="/terms-and-policies" element={<TermsAndPolicies />} />
//       <Route path="/payment/:id/booking" element={<Booking />} />
//       <Route path="/profile" element={<UserProfileDashboard />} />
//       <Route path="/payment/:id" element={<PaymentPage />} />
//       <Route path="/auth" element={<AuthPage />} />
//       <Route
//         path="/login/user"
//         element={
//           <LoginPage onLoginSuccess={handleLoginSuccess} setUser={setUser} />
//         }
//       />
//       <Route path="/login/admin" element={<AdminLoginPage />} />
//       <Route
//         path="/list-your-vehicles"
//         element={<ListVehicleForm user={user} />}
//       />
//       <Route
//         path="/signup"
//         element={
//           <SignUp onSignupSuccess={handleSignupSuccess} setUser={setUser} />
//         }
//       />
//       <Route
//         path="/verification"
//         element={
//           <VerificationPage onVerificationSuccess={handleVerificationSuccess} />
//         }
//       />
//       <Route path="/rides" element={<RidesDashboard />} />
//       {/* ✅ PASS user TO DriftyPage */}
//       <Route path="/drifty" element={<DriftyPage user={user} />} />
//       <Route path="/about-us" element={<AboutUsPage />} />
//       <Route path="/contact-us" element={<ContactUsPage />} />
//       <Route path="/order-confirmed" element={<OrderConfirmation />} />
//       <Route path="/details" element={<DetailsPage />} />
//       <Route path="/dealsdetails/*" element={<DealsDetailsRoutes />} />
//       <Route path="/verification-details" element={<VerificationDetails />} />
//     </Routes>
//   );
// }

// function DealsDetailsRoutes() {
//   return (
//     <Routes>
//       <Route index element={<MainContent />} />
//       <Route path="vehicle-table" element={<VehicleTable />} />
//       <Route path="active-vehicles" element={<ActiveVechilesTable />} />
//       <Route path="driver-verification" element={<DriverVerification />} />
//       <Route path="user-verification" element={<UserVerification />} />
//       <Route path="payments" element={<PaymnetListing />} />
//     </Routes>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import VehicleSearchPage from "./component/VehicleSearch/VehicleSearchPage.jsx";
import CarDetailPage from "./component/cardetails/CarDetailPage.jsx";
import Booking from "./component/Booking/Booking.jsx";
import DetailsPage from "./component/DetailsPage/DetailsPage.jsx";
import TermsAndPolicies from "./component/TermsAndPoliciesPage/TermsAndPoliciesPage.jsx";
import MainContent from "./dealsDetails/MainContent.jsx";
import DriverVerification from "./dealsDetails/DriverVerification.jsx";
import UserVerification from "./dealsDetails/UserVerification.jsx";
import ProfileSettings from "./dealsDetails/ProfileSettings.jsx";
import VerificationDetails from "./dealsDetails/VerificationDetails.jsx";
import DriftyPage from "./component/dashboard/DriftyPage.jsx";
import RidesDashboard from "./component/dashboard/RidesDashboard.jsx";
import ListVehicleForm from "./component/List Your Vehicles/ListVehicleForm.jsx";
import UserProfileDashboard from "./component/dashboard/UserProfileDashboard.jsx";
import AboutUsPage from "./component/AboutUs/AboutUsPage.jsx";
import LandingPage from "./component/Landingpage/Landingpage.jsx";
import HomePage from "./component/Landingpage/HomePage.jsx";
import AuthPage from "./AuthPage/AuthPage.jsx";
import LoginPage from "./AuthPage/LoginPage.jsx";
import AdminLoginPage from "./AuthPage/AdminLoginPage.jsx";
import SignUp from "./AuthPage/SignUp.jsx";
import ContactUsPage from "./component/ContactUs/ContactUsPage.jsx";
import VerificationPage from "./VerificationPage/VerificationPage.jsx";
import PaymentPage from "./component/Payment/PaymentPage.jsx";
import OrderConfirmation from "./component/OrderConfirmation/OrderConfirmation.jsx";
import ActiveVechilesTable from "./dealsDetails/ActiveVechilesTable.jsx";
import PaymnetListing from "./dealsDetails/PaymnetListing.jsx";
import VehicleTable from "./dealsDetails/VehicleTable.jsx";
import KycVerification from "./component/KycVerification/KycVerification.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [user, setUser] = useState(null);

  const handleLoginSuccess = () => setIsLoggedIn(true);
  const handleSignupSuccess = () => setIsLoggedIn(true);
  const handleVerificationSuccess = () => setIsVerified(true);

  useEffect(() => {
    if (isVerified) setIsVerified(false);
  }, [isVerified]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage isLoggedIn={isLoggedIn} />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/search" element={<VehicleSearchPage />} />
      <Route
        path="/cardetails/:id"
        element={<CarDetailPage isLoggedIn={isLoggedIn} user={user} />}
      />
      <Route path="/booking/:id" element={<Booking />} />
      <Route
        path="/admin/dashboard"
        element={<div>Admin Dashboard Content</div>}
      />
      <Route path="/kyc-verification" element={<KycVerification />} />
      <Route path="/terms-and-policies" element={<TermsAndPolicies />} />
      <Route path="/payment/:id/booking" element={<Booking />} />
      <Route path="/profile" element={<UserProfileDashboard />} />
      <Route path="/payment/:id" element={<PaymentPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route
        path="/login/user"
        element={
          <LoginPage onLoginSuccess={handleLoginSuccess} setUser={setUser} />
        }
      />
      <Route path="/login/admin" element={<AdminLoginPage />} />
      <Route
        path="/list-your-vehicles"
        element={<ListVehicleForm user={user} />}
      />
      <Route
        path="/signup"
        element={
          <SignUp onSignupSuccess={handleSignupSuccess} setUser={setUser} />
        }
      />
      <Route
        path="/verification"
        element={
          <VerificationPage onVerificationSuccess={handleVerificationSuccess} />
        }
      />
      <Route path="/rides" element={<RidesDashboard user={user} />} />
      <Route path="/drifty" element={<DriftyPage user={user} />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/contact-us" element={<ContactUsPage />} />
      <Route path="/order-confirmed" element={<OrderConfirmation />} />
      <Route path="/details" element={<DetailsPage />} />
      <Route path="/dealsdetails/*" element={<DealsDetailsRoutes />} />
      <Route path="/verification-details" element={<VerificationDetails />} />
    </Routes>
  );
}

function DealsDetailsRoutes() {
  return (
    <Routes>
      <Route index element={<MainContent />} />
      <Route path="vehicle-table" element={<VehicleTable />} />
      <Route path="active-vehicles" element={<ActiveVechilesTable />} />
      <Route path="driver-verification" element={<DriverVerification />} />
      <Route path="user-verification" element={<UserVerification />} />
      <Route path="payments" element={<PaymnetListing />} />
    </Routes>
  );
}

export default App;
