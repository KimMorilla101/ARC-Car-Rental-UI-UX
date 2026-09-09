import { useState } from "react";
import { CarFront, Menu, Moon, X } from "lucide-react";
import "./Header.css";

function BrandMark({ onClick }) {
  return (
    <button
      className="brand-mark"
      type="button"
      onClick={onClick}
      aria-label="ARC Ride Car Rental home"
    >
      <CarFront className="brand-car-icon" aria-hidden="true" />
      <span>ARC Ride</span>
      <i>CAR RENTAL</i>
    </button>
  );
}

export default function Header({ page, go, theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = (nextPage) => {
    setMenuOpen(false);
    go(nextPage);
  };

  return (
    <header className="site-header">
      <BrandMark onClick={() => navigate("home")} />
      <nav
        className={menuOpen ? "nav-links is-open" : "nav-links"}
        aria-label="Main navigation"
      >
        <button className={page === "home" ? "active" : ""} onClick={() => navigate("home")}>Home</button>
        <button className={page === "browse" ? "active" : ""} onClick={() => navigate("browse")}>Browse Cars</button>
        <button className={page === "perfect" ? "active" : ""} onClick={() => navigate("perfect")}>Find My Perfect Car</button>
        <button className={page === "about" ? "active" : ""} onClick={() => navigate("about")}>About Us</button>
        <button className={page === "contact" ? "active" : ""} onClick={() => navigate("contact")}>Contact Us</button>
      </nav>
      <div className="header-actions">
        <button
          className="theme-toggle"
          type="button"
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <Moon size={18} aria-hidden="true" />
        </button>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  );
}
