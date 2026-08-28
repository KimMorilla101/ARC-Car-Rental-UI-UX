import { useState } from "react";
import { MapPin, PhilippinePeso, Sparkles, Users } from "lucide-react";
import { Button, Icon, VehicleCard } from "../../components/UI/UI";
import "./Perfect.css";

export default function Perfect({ cars, openCar, requestBooking }) {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="perfect-page">
      <div className="page-intro">
        <p className="eyebrow">SMART RECOMMENDATIONS</p>
        <h1>Find My Perfect Car</h1>
        <p className="muted">
          Tell us what your journey needs. We’ll do the matching.
        </p>
      </div>
      <div className="perfect-layout">
        <form
          className="preference-card"
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
          }}
        >
          <h2><Icon><Sparkles /></Icon> What are you planning?</h2>
          <label className="preference-field"><span><Icon><Users /></Icon> How many passengers?</span><select defaultValue="2"><option value="2">2 passengers</option><option value="4">4 passengers</option><option value="7">7 passengers</option></select></label>
          <label className="preference-field"><span><Icon><Sparkles /></Icon> Trip type</span><select defaultValue="Weekend getaway"><option>Weekend getaway</option><option>Family trip</option><option>Business travel</option></select></label>
          <label className="preference-field"><span><Icon><PhilippinePeso /></Icon> Your budget per day</span><input type="number" min="0" placeholder="2,500" required /></label>
          <label className="preference-field"><span><Icon><MapPin /></Icon> Destination</span><input placeholder="Where are you headed?" required /></label>
          <Button type="submit">Find my match →</Button>
        </form>
        <div className="recommendations">
          <p className="eyebrow">
            {submitted ? "YOUR TOP MATCHES" : "A LITTLE INSPIRATION"}
          </p>
          <h2>
            {submitted ? "Made for your journey" : "A great fit for every plan"}
          </h2>
          {cars.slice(0, 2).map((car) => (
            <VehicleCard
              key={car.id}
              car={car}
              onBook={requestBooking}
              onDetails={openCar}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
