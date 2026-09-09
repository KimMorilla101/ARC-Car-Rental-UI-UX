import { Smartphone, X } from "lucide-react";
import "./AppDownloadModal.css";

export default function AppDownloadModal({ car, onClose }) {
  return (
    <div className="app-download-backdrop" onClick={onClose}>
      <section
        className="app-download-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="app-download-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="app-download-close" type="button" onClick={onClose} aria-label="Close">
          <X aria-hidden="true" />
        </button>
        <div className="app-download-icon"><Smartphone aria-hidden="true" /></div>
        <p className="eyebrow">BOOK ON ARC RIDE</p>
        <h2 id="app-download-title">Download ARC Ride to book {car.name}</h2>
        <p>Bookings are available in the ARC Ride app. Download it to choose your dates, complete your booking, and manage your trip.</p>
        <div className="app-download-actions">
          <button type="button">Google Play</button>
          <button type="button">App Store</button>
        </div>
        <button className="app-download-dismiss" type="button" onClick={onClose}>Continue browsing</button>
      </section>
    </div>
  );
}
