import { useMemo } from "react";
import AppPromo from "../../components/AppPromo/AppPromo";
import rav4Image from "../../assets/cars/rav4.png";
import civicImage from "../../assets/cars/civic.png";
import everestImage from "../../assets/cars/everest.png";

import {
  Search,
  CalendarDays,
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
  const today = useMemo(() => {
    const date = new Date();

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }, []);

  return (
    <>
      {/* =========================================
          HERO SECTION
      ========================================= */}
      <section className="hero-section home-page">

        {/* =======================================
            HERO COPY
        ======================================= */}
        <div className="hero-copy">

          <p className="eyebrow">
            WELCOME TO ARC RIDE
          </p>

          <h1>
            Find Your
            <br />
            <em>Perfect Car.</em>
          </h1>

          <p className="hero-text">
            Browse 50+ premium vehicles. Smart recommendations
            matched to your trip type, budget, and passenger count.
          </p>

          <div className="hero-actions">

            <button
              className="button"
              type="button"
              onClick={() => go("browse")}
            >
              Browse Cars
              <span>→</span>
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


        {/* =========================================
            HERO IMAGE
        ========================================= */}
        <div
          className="hero-visual"
          aria-label="Premium rental car"
        >
          <div className="hero-caption">
            Built for the open road ↗
          </div>
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

              <label className="search-select date-select">
                <span className="sr-only">
                  Pick-up date
                </span>

                <input
                  type="date"
                  required
                  aria-label="Pick-up date"
                  min={today}
                />
              </label>

              <label className="search-select time-select">
                <span className="sr-only">
                  Pick-up time
                </span>

                <input
                  type="time"
                  required
                  aria-label="Pick-up time"
                />
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

              <label className="search-select date-select">
                <span className="sr-only">
                  Return date
                </span>

                <input
                  type="date"
                  required
                  aria-label="Return date"
                  min={today}
                />
              </label>

              <label className="search-select time-select">
                <span className="sr-only">
                  Return time
                </span>

                <input
                  type="time"
                  required
                  aria-label="Return time"
                />
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
              MOBILE SEARCH
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
            <p className="eyebrow">
              OUR COLLECTION
            </p>

            <h2>
              Featured vehicles
            </h2>
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

            <article
              className="vehicle-card"
              key={car.name}
            >

              <div className="vehicle-image">

                <img
                  src={car.image}
                  alt={car.name}
                />

                <span className="availability">
                  <i />
                  Available
                </span>

                <span className="vehicle-tag">
                  {car.tag}
                </span>

              </div>


              <div className="vehicle-info">

                <div className="vehicle-title">

                  <div>

                    <p>
                      {car.type}
                    </p>

                    <h3>
                      {car.name}
                    </h3>

                  </div>

                </div>


                <div className="specs">

                  <span>
                    ♙ 5 seats
                  </span>

                  <span>
                    ⚙ Automatic
                  </span>

                </div>


                <div className="price">

                  <div>

                    <strong>
                      {car.price}
                    </strong>

                    <small>
                      {" "} / day
                    </small>

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


      {/* =========================================
          APP PROMO
      ========================================= */}
      <AppPromo />

    </>
  );
}