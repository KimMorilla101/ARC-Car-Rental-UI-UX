import AppPromo from "../../components/AppPromo/AppPromo";
import rav4Image from "../../assets/cars/rav4.png";
import civicImage from "../../assets/cars/civic.png";
import everestImage from "../../assets/cars/everest.png";
import "./Home.css";

const featuredCars = [
  {
    name: "Toyota RAV4",
    type: "SUV",
    price: "₱2,450",
    tag: "Most Rented",
    image: rav4Image,
  },
  {
    name: "Honda Civic",
    type: "Sedan",
    price: "₱2,100",
    tag: "Popular",
    image: civicImage,
  },
  {
    name: "Ford Everest",
    type: "Premium SUV",
    price: "₱3,800",
    tag: "High Demand",
    image: everestImage,
  },
];

export default function Home({ go, requestBooking }) {
  return (
    <>
      <section className="hero-section home-page">
        <div className="hero-copy">
          <p className="eyebrow">THE ROAD IS YOURS</p>
          <h1>
            Your journey starts
            <br />
            <em>with the right car.</em>
          </h1>
          <p className="hero-text">
            Premium cars, simple booking, and the freedom to make every trip
            yours.
          </p>
          <div className="hero-actions">
            <button className="button" onClick={() => go("browse")}>
              Browse Cars <span>→</span>
            </button>
            <button className="button secondary" onClick={() => go("perfect")}>
              Find My Perfect Car
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-caption">Built for the open road ↗</div>
        </div>
        <form
          className="search-panel"
          onSubmit={(event) => {
            event.preventDefault();
            go("browse");
          }}
        >
          <div className="field location-field">
            <span className="field-icon">⌖</span>
            <div>
              <label>Pick-up location</label>
              <input required defaultValue="Manila, Philippines" />
            </div>
          </div>
          <div className="field">
            <span className="field-icon">▣</span>
            <div>
              <label>Pick-up</label>
              <input
                type="datetime-local"
                defaultValue="2026-09-04T09:00"
                required
              />
            </div>
          </div>
          <div className="field">
            <span className="field-icon">◷</span>
            <div>
              <label>Return</label>
              <input
                type="datetime-local"
                defaultValue="2026-09-07T09:00"
                required
              />
            </div>
          </div>
          <div className="field passengers">
            <span className="field-icon">♙</span>
            <div>
              <label>Passengers</label>
              <select defaultValue="2">
                <option value="2">2 passengers</option>
                <option value="4">4 passengers</option>
                <option value="7">7 passengers</option>
              </select>
            </div>
          </div>
          <button className="primary-button" type="submit">
            Browse Cars <span>→</span>
          </button>
        </form>
      </section>
      <section className="section-block">
        <div className="section-heading">
          <div>
            <p className="eyebrow">OUR COLLECTION</p>
            <h2>Featured vehicles</h2>
          </div>
          <button className="text-link" onClick={() => go("browse")}>
            View all cars ↗
          </button>
        </div>
        <div className="fleet-grid">
          {featuredCars.map((car) => (
            <article className="vehicle-card" key={car.name}>
              <div className="vehicle-image">
                <img src={car.image} alt={car.name} />
                <span className="availability">
                  <i /> Available
                </span>
                <span className="vehicle-tag">{car.tag}</span>
              </div>
              <div className="vehicle-info">
                <div className="vehicle-title">
                  <div>
                    <p>{car.type}</p>
                    <h3>{car.name}</h3>
                  </div>
                  <button
                    aria-label={`Book ${car.name}`}
                    onClick={() => requestBooking(car)}
                  >
                    ♡
                  </button>
                </div>
                <div className="specs">
                  <span>♙ 5 seats</span>
                  <span>⚙ Automatic</span>
                </div>
                <div className="price">
                  <div>
                    <strong>{car.price}</strong>
                    <small> / day</small>
                  </div>
                  <button
                    className="text-link"
                    onClick={() => requestBooking(car)}
                  >
                    Book now →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <AppPromo />
    </>
  );
}
