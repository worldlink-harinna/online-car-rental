

import React, { useState, useEffect } from "react";
import "./PaymentListing.css";
import Sidebar from "./Sidebar";
import Nav from "./Nav";

const PaymentListing = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalBookingAmount, setTotalBookingAmount] = useState(0);
  const [totalCommission, setTotalCommission] = useState(0);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:3000/booking", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
          throw new Error(
            `HTTP error! Status: ${response.status} ${response.statusText}`
          );
        }

        const data = await response.json();

        if (!data.success || !Array.isArray(data.bookings)) {
          throw new Error(data.error || "Invalid or empty bookings data");
        }

      

        const formattedBookings = data.bookings
          .filter((booking) => booking.status === "confirmed") // filter here
          .map((booking, index) => {
            const totalPrice = Number(booking.totalPrice) || 0;
            return {
              id: booking._id
                ? `#VH-${booking._id.slice(-4)}`
                : `#VH-${1042 - index}`,
              owner: booking.ownerName || "Unknown Owner",
              number: booking.phoneNumber || booking.phone || "Not Available",
              submissionDate: new Date(booking.date).toLocaleDateString(
                "en-US",
                {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                }
              ),
              amount: `₹${totalPrice.toLocaleString("en-IN")}`,
              dealCommission:
                booking.ownerName === "Drifty"
                  ? `रू${totalPrice.toLocaleString("en-IN")} (Drifty)`
                  : `रू${(totalPrice * 0.25).toLocaleString("en-IN", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}`,
            };
          });

        setBookings(formattedBookings);

        // Calculate totals
        const totalAmount = formattedBookings.reduce((sum, booking) => {
          const price =
            Number(booking.amount.replace("₹", "").replace(/,/g, "")) || 0;
          return sum + price;
        }, 0);
        const totalComm = totalAmount * 0.25; // 25% commission
        setTotalBookingAmount(totalAmount);
        setTotalCommission(totalComm);

        setLoading(false);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(`Failed to fetch bookings: ${err.message}`);
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="main-layout">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="main-content">
        <Nav onMenuClick={() => setIsSidebarOpen(true)} />
        <div className="content-area">
          <div className="payment-listing">
            <h1>Payment Listing</h1>

            <div className="payment-stats">
              <div className="stat-card">
                <h2>Total Booking Amount</h2>
                <span className="amount">
                  {loading
                    ? "Loading..."
                    : error
                    ? "N/A"
                    : `रू ${Number(totalBookingAmount).toLocaleString(
                        "en-IN"
                      )}`}
                </span>
              </div>
              <div className="stat-card">
                <h2>Total Commission Gained</h2>
                <span className="amount">
                  {loading
                    ? "Loading..."
                    : error
                    ? "N/A"
                    : `रू ${Number(totalCommission).toLocaleString("en-IN", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}`}
                </span>
              </div>
            </div>

            <div className="payment-table-container">
              <div className="table-scroll">
                {loading ? (
                  <p>Loading bookings...</p>
                ) : error ? (
                  <p className="error">Error: {error}</p>
                ) : (
                  <table className="payment-table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Owner</th>
                        <th>Number</th>
                        <th>Submission Date</th>
                        <th>Amount</th>
                        <th>Deal Commission for Drifty</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookings.length === 0 ? (
                        <tr>
                          <td colSpan="6">No bookings found</td>
                        </tr>
                      ) : (
                        bookings.map((payment) => (
                          <tr key={payment.id}>
                            <td>{payment.id}</td>
                            <td>{payment.owner}</td>
                            <td>{payment.number}</td>
                            <td>{payment.submissionDate}</td>
                            <td>{payment.amount}</td>
                            <td>{payment.dealCommission || "-"}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentListing;
