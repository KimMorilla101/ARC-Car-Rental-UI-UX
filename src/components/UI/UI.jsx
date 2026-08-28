import "./UI.css";
import { Fuel, Gauge, Heart } from "lucide-react";

export function Button({
  children,
  onClick,
  secondary = false,
  type = "button",
}) {
  return (
    <button
      type={type}
      className={secondary ? "button secondary" : "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function Field({ label, type = "text", placeholder, required = true }) {
  return (
    <label className="form-field">
      <span className="form-label">{label}</span>
      <input type={type} placeholder={placeholder} required={required} />
    </label>
  );
}

export function Icon({ children, label }) {
  return <span className="ui-icon" aria-label={label} aria-hidden={!label}>{children}</span>;
}

export function VehicleCard({ car, onBook, onDetails, saved = false, onSave }) {
  return (
    <article className="vehicle-card">
      <div className="vehicle-image">
        <img src={car.image} alt={car.name} />
        <span className="availability">
          <i /> Available
        </span>
        {onSave && (
          <button
            className="save-button"
            onClick={() => onSave(car.id)}
            aria-label={`Save ${car.name}`}
          >
            <Heart fill={saved ? "currentColor" : "none"} />
          </button>
        )}
      </div>
      <div className="vehicle-info">
        <p className="muted">
          {car.type} · {car.seats} seats · {car.doors} doors
        </p>
        <h2>{car.name}</h2>
        <div className="specs">
          <span><Icon><Gauge /></Icon>{car.transmission}</span>
          <span><Icon><Fuel /></Icon>{car.fuel}</span>
        </div>
        <div className="price">
          <div>
            <strong>₱{car.price.toLocaleString()}</strong>
            <small> / day</small>
          </div>
          <div>
            {onDetails && (
              <button className="text-link" onClick={() => onDetails(car)}>
                View details
              </button>
            )}
            {onBook && <Button onClick={() => onBook(car)}>Book now</Button>}
          </div>
        </div>
      </div>
    </article>
  );
}
