import AppPromo from "../../components/AppPromo/AppPromo";
import rav4Image from "../../assets/cars/rav4.png";
import civicImage from "../../assets/cars/civic.png";
import everestImage from "../../assets/cars/everest.png";
import {
  ChevronDown,
  Search,
  CalendarDays,
  Clock3,
  MapPin,
} from "lucide-react";
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
      {/* =========================================
          HERO SECTION
      ========================================= */}
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
            <button
              className="button"
              type="button"
              onClick={() => go("browse")}
            >
              Browse Cars <span>→</span>
            </button>

            <button
              className="button secondary"
              type="button"
              onClick={() => go("perfect")}
            >
              Find My Perfect Car
            </button>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="hero-visual">
          <div className="hero-caption">Built for the open road ↗</div>
        </div>

        {/* =========================================
            SEARCH PANEL
        ========================================= */}
        <form
          className="search-panel"
          noValidate
          onSubmit={(event) => {
            event.preventDefault();
            go("browse");
          }}
        >
          {/* =======================================
              WHERE
          ======================================= */}
          <div className="search-field search-location">
            <label htmlFor="pickup-location">
              <MapPin aria-hidden="true" />
              Where
            </label>

            <input
              id="pickup-location"
              type="text"
              placeholder="Airport, hotel, address, city"
              required
            />
          </div>

          {/* =======================================
              FROM
          ======================================= */}
          <div className="search-field search-period">
            <span className="search-label">
              <CalendarDays aria-hidden="true" />
              From
            </span>

            <div className="search-period-controls">
              {/* DATE */}
              <label className="search-select date-select">
                <span className="sr-only">Pick-up date</span>

                <input
                  type="date"
                  required
                  aria-label="Pick-up date"
                  min="2026-09-09"
                />

                <CalendarDays aria-hidden="true" />
              </label>

              {/* TIME */}
              <label className="search-select time-select">
                <span className="sr-only">Pick-up time</span>

                <input
                  type="time"
                  required
                  aria-label="Pick-up time"
                />

                <Clock3 aria-hidden="true" />
              </label>
            </div>
          </div>

          {/* =======================================
              UNTIL
          ======================================= */}
          <div className="search-field search-period">
            <span className="search-label">
              <CalendarDays aria-hidden="true" />
              Until
            </span>

            <div className="search-period-controls">
              {/* DATE */}
              <label className="search-select date-select">
                <span className="sr-only">Return date</span>

                <input
                  type="date"
                  required
                  aria-label="Return date"
                  min="2026-09-09"
                />

                <CalendarDays aria-hidden="true" />
              </label>

              {/* TIME */}
              <label className="search-select time-select">
                <span className="sr-only">Return time</span>

                <input
                  type="time"
                  required
                  aria-label="Return time"
                />

                <Clock3 aria-hidden="true" />
              </label>
            </div>
          </div>

          {/* =======================================
              DESKTOP SEARCH BUTTON
          ======================================= */}
          <button
            className="search-submit"
            type="submit"
            aria-label="Browse cars"
          >
            <Search aria-hidden="true" />
          </button>

          {/* =======================================
              COMPACT SEARCH
              Mobile / smaller screens
          ======================================= */}
          <label className="compact-search">
            <Search aria-hidden="true" />

            <input
              type="text"
              aria-label="Search cars"
              placeholder="Search cars"
            />
          </label>

          <button
            className="compact-search-submit"
            type="submit"
            aria-label="Browse cars"
          >
            <Search aria-hidden="true" />
          </button>
        </form>
      </section>

      {/* =========================================
          FEATURED VEHICLES
      ========================================= */}
      <section className="section-block">
        <div className="section-heading">
          <div>
            <p className="eyebrow">OUR COLLECTION</p>
            <h2>Featured vehicles</h2>
          </div>

          <button
            className="text-link"
            type="button"
            onClick={() => go("browse")}
          >
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
                    type="button"
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