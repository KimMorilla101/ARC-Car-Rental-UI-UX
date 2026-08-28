import "./History.css";

import { Button } from "../../components/UI/UI";
import "./History.css";

export default function History({ cars, requestBooking }) {
  return (
    <div className="history-page">
      <div className="page-intro">
        <p className="eyebrow">YOUR MILEAGE</p>
        <h1>Rental history</h1>
        <p className="muted">Past journeys, ready to inspire the next one.</p>
      </div>
      <div className="history-list">
        {cars.slice(1, 3).map((car) => (
          <article className="history-card" key={car.id}>
            <img src={car.image} alt={car.name} />
            <div>
              <span className="status completed">Completed</span>
              <h2>{car.name}</h2>
              <p>Jun 12 – Jun 15, 2026 · Manila</p>
               <small>ARC-2026-00084 · 3 days</small>
            </div>
            <Button onClick={() => requestBooking(car)}>Book again →</Button>
          </article>
        ))}
      </div>
    </div>
  );
}
