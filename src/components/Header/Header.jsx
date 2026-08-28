import { useState } from "react";
import { Bell, CarFront, Menu, Moon, X } from "lucide-react";
import { Button } from "../UI/UI";
import "./Header.css";

function BrandMark({ onClick }) {
  return (
    <button
      className="brand-mark"
      type="button"
      onClick={onClick}
      aria-label="ARC Car Rental home"
    >
      <CarFront className="brand-car-icon" aria-hidden="true" />
      <span>ARC</span>
      <i>CAR RENTAL</i>
    </button>
  );
}

export default function Header({ user, page, go, theme, setTheme, logout }) {
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
        {user && <button onClick={() => navigate("bookings")}>My Bookings</button>}
        <button className={page === "about" ? "active" : ""} onClick={() => navigate("about")}>About Us</button>
        <button className={page === "contact" ? "active" : ""} onClick={() => navigate("contact")}>Contact Us</button>
      </nav>
      <div className="header-actions">
        <label className="theme-select">
          <Moon size={14} aria-hidden="true" />{" "}
          <select value={theme} onChange={(event) => setTheme(event.target.value)}>
            <option value="system">System</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>
        <button className="icon-button" aria-label="Notifications" onClick={() => navigate("notifications")}>
          <Bell size={16} />
          <b>3</b>
        </button>
        {user ? (
          <>
            <button className="profile-button" onClick={() => navigate("profile")}>MS</button>
            <button className="signin" onClick={logout}>Log out</button>
          </>
        ) : (
          <>
            <button className="signin" onClick={() => navigate("login")}>Login</button>
            <Button onClick={() => navigate("register")}>Register</Button>
          </>
        )}
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
