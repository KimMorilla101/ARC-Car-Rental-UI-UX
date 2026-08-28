import { Button, VehicleCard } from "../../components/UI/UI";
import "./Dashboard.css";

export default function Dashboard({ user, go, cars, openCar, requestBooking }) {
  return (
    <div className="dashboard-page">
      <div className="page-intro">
        <div>
          <p className="eyebrow">CUSTOMER DASHBOARD</p>
          <h1>Good morning, {user?.name?.split(" ")[0] || "driver"}.</h1>
          <p className="muted">Here’s everything for your next adventure.</p>
        </div>
        <div className="avatar">MS</div>
      </div>
      <div className="dashboard-grid">
        <section className="current-rental">
          <div className="card-label">
            UPCOMING BOOKING <span className="status pending">Pending</span>
          </div>
          <div className="dashboard-booking">
            <img src={cars[0].image} alt={cars[0].name} />
            <div>
              <p className="muted">ARC-2026-00125</p>
              <h2>{cars[0].name}</h2>
              <p>Sep 04 – Sep 07, 2026 · Manila</p>
              <Button onClick={() => go("bookings")}>View booking →</Button>
            </div>
          </div>
        </section>
        <section className="quick-actions">
          <div className="card-label">QUICK ACTIONS</div>
          {[
            ["Browse Cars", "browse"],
            ["Find My Perfect Car", "perfect"],
            ["My Bookings", "bookings"],
            ["Favorites", "profile"],
            ["Rental History", "history"],
            ["Notifications", "notifications"],
          ].map(([label, target]) => (
            <button key={label} onClick={() => go(target)}>
              {label}
            </button>
          ))}
        </section>
      </div>
      <section className="active-rental-banner">
        <div className="active-rental-copy">
          <span className="live-dot" /> CURRENTLY ACTIVE
          <h2>Honda Civic 2024</h2>
          <p>Return date: August 22, 2026</p>
        </div>
        <button onClick={() => go("details")}>View details <span>›</span></button>
      </section>
      <section className="upcoming-bookings">
        <div className="section-heading">
          <h2>Upcoming bookings</h2>
          <button className="text-link" onClick={() => go("bookings")}>View all ›</button>
        </div>
        <div className="upcoming-list">
          <button onClick={() => go("bookings")}><img src={cars[2].image} alt={cars[2].name} /><span><strong>{cars[2].name}</strong><small>ARC-2026-00118 · Aug 28, 2026</small></span><b className="status confirmed">Confirmed</b></button>
          <button onClick={() => go("bookings")}><img src={cars[0].image} alt={cars[0].name} /><span><strong>{cars[0].name}</strong><small>ARC-2026-00125 · Sep 05, 2026</small></span><b className="status pending">Pending</b></button>
        </div>
      </section>
      <section className="section-block dashboard-fleet">
        <div className="section-heading">
          <div>
            <p className="eyebrow">RECOMMENDED FOR YOU</p>
            <h2>Ready for your next trip</h2>
          </div>
        </div>
        <div className="fleet-grid">
          {cars.slice(1, 4).map((car) => (
            <VehicleCard
              key={car.id}
              car={car}
              openCar={openCar}
              onBook={requestBooking}
              onDetails={openCar}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
