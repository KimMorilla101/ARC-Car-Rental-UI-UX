import "./Details.css";

import { Button } from "../../components/UI/UI";
import "./Details.css";

export default function Details({
  car,
  requestBooking,
  favoriteIds,
  toggleFavorite,
  go,
}) {
  return (
    <div className="details-page">
      <button className="back-link" onClick={() => go("browse")}>
        ← Back to Browse Cars
      </button>
      <div className="details-layout">
        <div>
          <img className="details-image" src={car.image} alt={car.name} />
          <div className="gallery">
            <img src={car.image} alt="" />
            <img src={car.galleryImage || car.image} alt={`${car.name} rear view`} />
          </div>
        </div>
        <div className="details-copy">
          <div className="detail-title">
            <div>
              <p className="eyebrow">{car.type.toUpperCase()}</p>
              <h1>{car.name}</h1>
            </div>
            <button
              className="save-large"
              onClick={() => toggleFavorite(car.id)}
            >
              {favoriteIds.includes(car.id) ? "♥ Saved" : "♡ Save"}
            </button>
          </div>
          <div className="rating">
            ★★★★★ <span>4.9 · 28 reviews</span>
          </div>
          <p className="details-description">
            {car.description} Designed for confident city days and comfortable
            weekends away.
          </p>
          <div className="detail-spec-grid">
            <span>♙ {car.seats} passengers</span>
            <span>▣ {car.doors} doors</span>
            <span>⚙ {car.transmission}</span>
            <span>◉ {car.fuel}</span>
          </div>
          <div className="requirements">
            <h3>Rental requirements</h3>
            <p>
              Valid driver's license, government-issued ID, and minimum age of
              21 required.
            </p>
          </div>
          <div className="booking-summary">
            <div>
              <strong>₱{car.price.toLocaleString()}</strong>
              <small> / day</small>
              <p>Available for your dates</p>
            </div>
            <Button onClick={() => requestBooking(car)}>Book this car →</Button>
          </div>
        </div>
      </div>
      <section className="reviews">
        <p className="eyebrow">DRIVER REVIEWS</p>
         <h2>Loved by ARC drivers</h2>
        <p className="muted">
          “The process was incredibly easy and the car was spotless.” — Andrea
          R., completed rental
        </p>
      </section>
    </div>
  );
}
