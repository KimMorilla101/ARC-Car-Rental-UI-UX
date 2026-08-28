import "./Confirmation.css";

import { Button } from "../../components/UI/UI";
import "./Confirmation.css";

export default function Confirmation({ go }) {
  return (
    <div className="confirmation-page">
      <div className="confirmation-icon">✓</div>
      <p className="eyebrow">BOOKING RECEIVED</p>
      <h1>
        Booking submitted
        <br />
        <em>successfully.</em>
      </h1>
      <p className="muted">Your booking reference is</p>
      <button className="reference">ARC-2026-00125 ⧉</button>
      <div className="confirmation-card">
        <img
          src="https://images.unsplash.com/photo-1568844293986-8c3c3f5b5f31?auto=format&fit=crop&w=900&q=85"
          alt="Toyota RAV4"
        />
        <div>
          <h2>Toyota RAV4</h2>
          <p>Sep 04 – Sep 07, 2026 · Manila</p>
          <strong>₱7,350 estimated total</strong>
        </div>
      </div>
      <p className="payment-note">
        <b>Pay in Person</b>
        <br />
        Payment status: Awaiting Payment · Booking status: Pending
        <br />
        <small>
          Your booking becomes Confirmed after payment verification.
        </small>
      </p>
      <div className="hero-actions">
        <Button onClick={() => go("bookings")}>View booking</Button>
        <Button secondary onClick={() => go("home")}>
          Back to home
        </Button>
      </div>
    </div>
  );
}
