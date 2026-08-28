import { Button } from "../../components/UI/UI";
import "./About.css";

export default function About({ go }) {
  return (
    <div className="info-page">
      <div className="info-hero">
        <p className="eyebrow">ABOUT ARC</p>
        <h1>
          Moving people
          <br />
          <em>forward.</em>
        </h1>
        <img
          src="https://images.unsplash.com/photo-1473445361085-b9a07f55608b?auto=format&fit=crop&w=1200&q=85"
          alt="Open road"
        />
      </div>
      <div className="info-copy">
        <h2>Car rental, with more care.</h2>
        <p>
          ARC Car Rental makes it easier to get where you’re going with a
          well-kept fleet, thoughtful support, and a booking experience that
          respects your time.
        </p>
        <Button onClick={() => go("browse")}>Browse our cars →</Button>
      </div>
    </div>
  );
}
