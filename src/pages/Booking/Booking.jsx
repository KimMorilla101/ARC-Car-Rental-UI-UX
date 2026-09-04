import "./Booking.css";

import { Button } from "../../components/UI/UI";
import { money } from "../../data/cars";
import { useState } from "react";
import "./Booking.css";

export default function Booking({ car, step, setStep, go, setNotice, pickupAt }) {
  const [pickupSelection, setPickupSelection] = useState(pickupAt || "2026-09-04T10:00");
  const [returnDate, setReturnDate] = useState("2026-09-07");
  const [pickupMethod, setPickupMethod] = useState("shop");
  const [pickupAddress, setPickupAddress] = useState("");
  const [destination, setDestination] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [uploads, setUploads] = useState({ license: false, billing: false, primaryId: false, payment: false });
  const [agreementOpen, setAgreementOpen] = useState(false);
  const [agreementReviewed, setAgreementReviewed] = useState(false);
  const pickupTime = pickupSelection.split("T")[1] || "10:00";
  const fixedReturn = `${returnDate}T${pickupTime}`;
  const rentalDays = Math.max(1, Math.ceil((new Date(fixedReturn) - new Date(pickupSelection)) / 86400000));
  const pickupFee = 0;
  const washFee = 500;
  const rentalFee = car.price * rentalDays;
  const downPayment = 1000;
  const total = rentalFee + pickupFee + washFee;
  const missingRequirements = !uploads.license || !uploads.billing || !uploads.primaryId || (paymentMethod !== "cash" && !uploads.payment);
  const steps = [
    "Dates",
    "Location",
    "Destination",
    "Vehicle",
    "Requirements",
    "Review",
    "Confirm",
  ];
  const submit = (event) => {
    event.preventDefault();
    if (step === 2 && pickupMethod === "delivery" && !pickupAddress.trim()) {
      setNotice("Enter the preferred vehicle delivery or pickup location before continuing.");
      return;
    }
    if (step === 3 && !destination.trim()) {
      setNotice("Enter your travel destination before continuing.");
      return;
    }
    if (step === 5 && missingRequirements) {
      setNotice("Upload your driver's license, proof of billing, primary ID, and payment proof before continuing.");
      return;
    }
    if (step === 6 && !agreementReviewed) {
      setNotice("Please open and review the rental agreement before agreeing to the terms.");
      return;
    }
    if (step < 7) setStep(step + 1);
    else {
      setNotice("Booking submitted successfully.");
      go("confirmation");
    }
  };
  return (
    <div className="booking-page">
      <div className="page-intro">
        <p className="eyebrow">YOUR RESERVATION</p>
        <h1>Book your next drive.</h1>
      </div>
      <div className="stepper">
        {steps.map((label, index) => (
          <span className={index + 1 <= step ? "active" : ""} key={label}>
            <b>{index + 1}</b>
            {label}
          </span>
        ))}
      </div>
      <div className="booking-layout">
        <form className="booking-form" onSubmit={submit}>
          {step === 1 && (
            <>
              <h2>{steps[step - 1]}</h2>
              <label className="form-field"><span className="form-label">Pick-up date and time</span><input type="datetime-local" value={pickupSelection} onChange={(event) => setPickupSelection(event.target.value)} required /></label>
              <label className="form-field fixed-return-field">
                <span className="form-label">Return date and fixed time</span>
                <input type="date" value={returnDate} min={pickupSelection.slice(0, 10)} onChange={(event) => setReturnDate(event.target.value)} required />
                <strong>{new Date(fixedReturn).toLocaleString()}</strong>
                <small>Return time is fixed to your pick-up time.</small>
              </label>
            </>
          )}
          {step === 2 && (
            <>
              <h2>Pick-up location</h2>
              <p className="muted">Choose the ARC shop or request delivery to your preferred pick-up point.</p>
              <div className="choice-row">{[["shop", "Pick up at ARC shop"], ["delivery", "Request vehicle delivery"]].map(([value, label]) => <button type="button" className={pickupMethod === value ? "selected" : ""} key={value} onClick={() => setPickupMethod(value)}>{label}</button>)}</div>
              {pickupMethod === "delivery" && <><label className="form-field location-label"><span className="form-label">Preferred delivery / pickup location</span><input value={pickupAddress} onChange={(event) => setPickupAddress(event.target.value)} placeholder="Type an address or landmark" required /></label><p className="fee-note">Delivery fee: You will be notified soon. This fee is payable in person at pickup.</p></>}
              {pickupMethod === "shop" && <p className="fee-note">Pickup / delivery fee: {money(0)}.</p>}
            </>
          )}
          {step === 3 && (
            <>
              <h2>Travel destination</h2>
              <p className="muted">Tell us where you plan to travel. This is separate from your vehicle pickup location.</p>
              <label className="form-field location-label"><span className="form-label">Travel destination</span><input value={destination} onChange={(event) => setDestination(event.target.value)} placeholder="Type a destination, city, or landmark" required /></label>
            </>
          )}
          {step === 4 && (
            <>
              <h2>Confirm your vehicle</h2>
              <div className="selected-vehicle">
                <img src={car.image} alt={car.name} />
                <div>
                  <h3>{car.name}</h3>
                  <p>
                    {car.type} · ₱{car.price.toLocaleString()} / day
                  </p>
                </div>
              </div>
            </>
          )}
          {step === 5 && (
            <>
              <h2>Rental requirements</h2>
              {[["license", "Driver's License"], ["billing", "Proof of Billing"], ["primaryId", "One valid Primary ID"], ["payment", "₱1,000.00 Down Payment Proof"]].map(([key, label]) => <label className="upload-row" key={key}><span><b>{label}</b><small>{paymentMethod === "cash" && key === "payment" ? "Pending at ARC shop" : uploads[key] ? "Uploaded" : "Required · JPG, PNG or PDF"}</small></span><input type="file" accept="image/*,.pdf" required={key !== "payment" ? !uploads[key] : paymentMethod !== "cash" && !uploads[key]} onChange={() => setUploads((current) => ({ ...current, [key]: true }))} /></label>)}
              <div className="payment-methods"><h3>Payment method</h3><div className="choice-row">{[["online", "Online Payment"], ["bank", "Bank Transfer"], ["cash", "Cash In Person"]].map(([value, label]) => <button type="button" className={paymentMethod === value ? "selected" : ""} key={value} onClick={() => setPaymentMethod(value)}>{label}</button>)}</div><p className="fee-note">{paymentMethod === "online" ? "Pay through ARC's approved online channel, then upload your payment proof." : paymentMethod === "bank" ? "Transfer to ARC Car Rental's designated bank account, then upload the receipt." : "Pay at the ARC Car Rental shop before pickup. Your booking remains pending payment until verified."}</p></div>
            </>
          )}
          {step === 6 && (
            <>
              <h2>Review your booking</h2>
              <div className="review-summary">
                <p>
                  <b>{car.name}</b>
                  <span>
                    {rentalDays} rental days · ₱{(car.price * rentalDays).toLocaleString()}
                  </span>
                </p>
                <p>
                  <b>{new Date(pickupSelection).toLocaleString()}</b>
                  <span>Pick-up · Return at {new Date(fixedReturn).toLocaleString()}</span>
                </p>
                <p><b>Destination</b><span>{destination || "Not provided"}</span></p>
                <p><b>Pickup location</b><span>{pickupMethod === "delivery" ? pickupAddress || "Not provided" : "ARC Car Rental shop"}</span></p>
                <p><b>Rental Fee</b><span>{money(rentalFee)}</span></p>
                <p><b>Hourly / Daily / Monthly Extension Fee</b><span>₱350 / {money(car.price)} / {money(car.price * 25)}</span></p>
                <p><b>Fixed Car Wash Fee</b><span>{money(washFee)}</span></p>
                <p><b>Pickup / Delivery Fee</b><span>{pickupMethod === "delivery" ? "To be notified soon" : money(pickupFee)}</span></p>
                <p><b>Down Payment</b><span>{money(downPayment)}</span></p>
                <p><b>Remaining Balance</b><span>{money(Math.max(0, total - downPayment))}</span></p>
                <p>
                  <b>Estimated total</b>
                    <strong>{money(total)}</strong>
                </p>
              </div>
              <button type="button" className="agreement-button" onClick={() => setAgreementOpen(true)}>Read ARC Car Rental rental agreement</button>
              <label className="check-row"><input type="checkbox" checked={agreementReviewed} disabled={!agreementReviewed && !agreementOpen} onChange={(event) => setAgreementReviewed(event.target.checked)} required /> I Agree to the Terms & Conditions</label>
              {agreementOpen && <div className="agreement-box" onScroll={(event) => { if (event.currentTarget.scrollTop + event.currentTarget.clientHeight >= event.currentTarget.scrollHeight - 4) setAgreementReviewed(true); }}><h3>ARC Car Rental Rental Agreement</h3><p><b>Rental period:</b> The vehicle must be collected and returned on the dates shown above. Return time is fixed to the original pickup time.</p><p><b>Customer responsibilities:</b> The renter must hold a valid license, provide accurate documents, care for the vehicle, follow traffic and usage rules, and report incidents promptly.</p><p><b>Payment:</b> A ₱1,000.00 down payment reserves the unit. Payment proof is subject to ARC verification and does not confirm a rental. The booking remains Pending Verification until approved.</p><p><b>Extensions:</b> Hourly, daily, or monthly extensions require availability and ARC approval. Requests are unavailable after the scheduled return deadline.</p><p><b>Returns and late fees:</b> Return the vehicle by the exact scheduled date and time. Late returns are charged at ₱500 per delayed hour, calculated from the scheduled return time.</p><p><b>Car wash and cancellation:</b> A fixed ₱500 car wash fee applies. Cancellation, damage, fuel, traffic, and other shop charges may apply according to ARC policy.</p><p><b>Agreement:</b> By proceeding, the customer confirms they reviewed these policies and accepts ARC Car Rental's applicable shop rules.</p><small>Scroll to the end to enable I Agree.</small></div>}
            </>
          )}
          {step === 7 && (
            <>
              <h2>Ready to confirm?</h2>
              <div className="success-message">
                ✓ All details are ready for review.
              </div>
              <p className="muted">
                Payment method: {paymentMethod === "cash" ? "Cash In Person" : paymentMethod === "bank" ? "Bank Transfer" : "Online Payment"}. Your booking status is Pending Verification until payment and requirements are verified.
              </p>
            </>
          )}
          <Button type="submit">
            {step === 7 ? "Submit booking" : "Continue"} →
          </Button>
        </form>
        <aside className="booking-aside">
          <img src={car.image} alt={car.name} />
          <h3>{car.name}</h3>
          <p>
            {car.type} · {car.seats} seats · Automatic
          </p>
          <div className="aside-total">
            <span>Estimated total</span>
            <strong>₱{(car.price * rentalDays).toLocaleString()}</strong>
          </div>
        </aside>
      </div>
    </div>
  );
}

