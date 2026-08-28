import "./Bookings.css";

import { useState } from "react";
import "./Bookings.css";

export default function Bookings({ setNotice }) {
  const [cancelled, setCancelled] = useState(false);
  return (
    <div className="bookings-page">
      <div className="page-intro">
        <p className="eyebrow">YOUR JOURNEYS</p>
        <h1>My bookings</h1>
      </div>
      <div className="tabs">
        <button className="active">
          All <b>1</b>
        </button>
        <button>Pending</button>
        <button>Confirmed</button>
        <button>Active</button>
        <button>Completed</button>
        <button>Cancelled</button>
      </div>
      {cancelled ? (
        <div className="empty-state">
          <strong>Booking cancelled</strong>
          <p>Your booking has been cancelled and your notifications updated.</p>
        </div>
      ) : (
        <article className="booking-card">
          <div className="booking-card-head">
            <span className="reference-small">ARC-2026-00125</span>
            <span className="status pending">Pending</span>
          </div>
          <div className="booking-card-body">
            <img
              src="https://images.unsplash.com/photo-1568844293986-8c3c3f5b5f31?auto=format&fit=crop&w=900&q=85"
              alt="Toyota RAV4"
            />
            <div>
              <h2>Toyota RAV4</h2>
              <p>Sep 04 – Sep 07, 2026 · 3 days</p>
              <p>⌖ Manila, Philippines · Tagaytay</p>
            </div>
            <div className="booking-total">
              <small>Estimated total</small>
              <strong>₱7,350</strong>
            </div>
          </div>
          <div className="booking-card-foot">
            <span>Pay in Person · Awaiting Payment</span>
            <button
              className="button danger"
              onClick={() => {
                setCancelled(true);
                setNotice("Booking cancelled successfully.");
              }}
            >
              Cancel booking
            </button>
          </div>
        </article>
      )}
    </div>
  );
}
