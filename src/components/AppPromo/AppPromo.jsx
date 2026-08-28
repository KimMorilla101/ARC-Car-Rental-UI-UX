import { CarFront } from "lucide-react";
import "./AppPromo.css";

export default function AppPromo() {
  return (
    <section className="app-promo">
      <div className="app-promo-copy">
        <p className="eyebrow">ALWAYS WITH YOU</p>
        <h2>
          Rent again faster.
          <br />
          <em>Download our app.</em>
        </h2>
        <p>
          Manage bookings, get trip notifications, save cars, request
          extensions, and book again wherever you are.
        </p>
        <div className="store-buttons">
          <button>▶ Google Play</button>
          <button>● App Store</button>
        </div>
      </div>
      <div className="phone-mockup">
        <div className="phone-screen">
          <span><CarFront size={16} aria-hidden="true" /> ARC</span>
          <strong>
            Your next
            <br />
            journey awaits.
          </strong>
          <div className="mini-car">▰</div>
        </div>
      </div>
      <div className="qr-code" aria-label="QR code download area">
        ▦<small>Scan to download</small>
      </div>
    </section>
  );
}
