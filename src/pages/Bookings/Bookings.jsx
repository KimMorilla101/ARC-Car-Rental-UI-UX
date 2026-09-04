import "./Bookings.css";

import { useState } from "react";
import { money } from "../../data/cars";
import rav4Image from "../../assets/cars/rav4.png";
import "./Bookings.css";

export default function Bookings({ setNotice, activeRental, rentalIsActive, extensionIsAvailable, requestExtension, extensionRates, returnVehicle }) {
  const [cancelled, setCancelled] = useState(false);
  const [extensionType, setExtensionType] = useState("hourly");
  const [duration, setDuration] = useState(2);
  const lateHours = activeRental.returnedAt && Math.max(0, Math.ceil((new Date(activeRental.returnedAt) - new Date(activeRental.returnAt)) / 3600000));
  const lateFee = lateHours * 500;
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
        <>
        <article className="booking-card">
          <div className="booking-card-head">
            <span className="reference-small">ARC-2026-00125</span>
            <span className="status pending">Pending</span>
          </div>
          <div className="booking-card-body">
            <img
              src={rav4Image}
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
        <section className="extension-panel">
          <div><p className="eyebrow">ACTIVE RENTAL</p><h2>{rentalIsActive ? "Need more time?" : "Return vehicle mode"}</h2><p className="muted">Pick-up time: {new Date(activeRental.pickupAt).toLocaleString()}<br />Current return deadline: {new Date(activeRental.returnAt).toLocaleString()}</p>{lateHours > 0 && <p className="late-return">Late return: {lateHours} hour{lateHours === 1 ? "" : "s"} · {money(lateFee)} fee</p>}</div>
          {extensionIsAvailable ? <form onSubmit={(event) => { event.preventDefault(); requestExtension(extensionType, duration); }}>
            <div className="extension-options">{[["hourly", "Hourly", 2], ["daily", "Daily", 1], ["monthly", "Monthly", 1]].map(([type, label, defaultDuration]) => <button type="button" className={extensionType === type ? "selected" : ""} key={type} onClick={() => { setExtensionType(type); setDuration(defaultDuration); }}><strong>{label}</strong><span>{money(extensionRates[type])} / {type === "hourly" ? "hour" : type === "daily" ? "day" : "month"}</span></button>)}</div>
            <label className="form-field"><span className="form-label">Additional {extensionType} duration</span><input type="number" min="1" max={extensionType === "monthly" ? 1 : extensionType === "daily" ? 30 : 24} value={duration} onChange={(event) => setDuration(event.target.value)} /></label>
            <div className="extension-review"><span>New return date/time</span><strong>{new Date(new Date(activeRental.returnAt).getTime() + (extensionType === "hourly" ? Math.ceil(duration / 24) : extensionType === "daily" ? duration : duration * 30) * 86400000).toLocaleString()}</strong><span>Total additional cost</span><strong>{money(duration * extensionRates[extensionType])}</strong></div>
            <button className="button" type="submit">Request Extension</button>
          </form> : <div className="extension-locked"><strong>{activeRental.returnedAt ? "Vehicle returned" : activeRental.extensionRequest?.status || "Extension unavailable"}</strong><p>{activeRental.extensionRequest ? `${activeRental.extensionRequest.type} extension requested. New return: ${new Date(activeRental.extensionRequest.returnAt).toLocaleString()}` : "Return the vehicle first, then make a new rental booking."}</p>{!activeRental.returnedAt && <button className="button danger" onClick={returnVehicle}>Return vehicle</button>}</div>}
        </section>
        </>
      )}
    </div>
  );
}
