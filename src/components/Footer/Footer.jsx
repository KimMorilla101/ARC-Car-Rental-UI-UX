import { CarFront } from "lucide-react";
import "./Footer.css";

export default function Footer({ go }) {
  return (
    <footer>
      <button className="brand-mark" type="button" onClick={() => go("home")}>
        <CarFront className="brand-car-icon" aria-hidden="true" />
        <span>ARC</span>
        <i>CAR RENTAL</i>
      </button>
      <p>Made for the miles ahead.</p>
      <nav>
        <button onClick={() => go("about")}>About</button>
        <button onClick={() => go("contact")}>Contact</button>
        <button onClick={() => go("faq")}>FAQ</button>
        <button>Privacy</button>
      </nav>
      <span>© 2026 ARC Car Rental</span>
    </footer>
  );
}
