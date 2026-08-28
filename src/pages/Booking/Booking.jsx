import "./Booking.css";

import { Button, Field } from "../../components/UI/UI";
import "./Booking.css";

export default function Booking({ car, step, setStep, go, setNotice }) {
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
          {step <= 3 && (
            <>
              <h2>{steps[step - 1]}</h2>
              <Field label="Pick-up date and time" type="datetime-local" />
              <Field label="Return date and time" type="datetime-local" />
              <Field
                label="Pick-up location"
                placeholder="Manila, Philippines"
              />
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
              {[
                "I have a valid driver’s license",
                "I have a government-issued ID",
                "I agree to vehicle usage rules and deposit policies",
              ].map((label) => (
                <label className="check-row" key={label}>
                  <input type="checkbox" required /> {label}
                </label>
              ))}
              <label className="upload-box">
                ＋ Upload required documents{" "}
                <small>JPG, PNG or PDF · max 10 MB</small>
              </label>
            </>
          )}
          {step === 6 && (
            <>
              <h2>Review your booking</h2>
              <div className="review-summary">
                <p>
                  <b>{car.name}</b>
                  <span>
                    3 rental days · ₱{(car.price * 3).toLocaleString()}
                  </span>
                </p>
                <p>
                  <b>Sep 04, 2026, 9:00 AM</b>
                  <span>Pick-up · Manila</span>
                </p>
                <p>
                  <b>Estimated total</b>
                  <strong>₱{(car.price * 3).toLocaleString()}</strong>
                </p>
              </div>
              <label className="check-row">
                <input type="checkbox" required /> I accept the Terms &
                Conditions
              </label>
            </>
          )}
          {step === 7 && (
            <>
              <h2>Ready to confirm?</h2>
              <div className="success-message">
                ✓ All details are ready for review.
              </div>
              <p className="muted">
                Payment method: Pay in Person. Your booking will be Pending
                until payment is verified.
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
            <strong>₱{(car.price * 3).toLocaleString()}</strong>
          </div>
        </aside>
      </div>
    </div>
  );
}
