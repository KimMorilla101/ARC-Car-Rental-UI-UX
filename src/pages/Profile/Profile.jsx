import { Button, Field } from "../../components/UI/UI";
import "./Profile.css";

export default function Profile({ theme, setTheme, go, logout, trustScore }) {
  return (
    <div className="profile-page">
      <div className="page-intro">
        <p className="eyebrow">ACCOUNT SETTINGS</p>
        <h1>Your profile</h1>
      </div>
      <div className="settings-layout">
        <aside className="settings-nav">
          <button className="active">Profile information</button>
          <button>Notifications</button>
          <button>Privacy & security</button>
          <button onClick={() => go("faq")}>Terms & Conditions</button>
          <button onClick={logout}>Log out</button>
        </aside>
        <form
          className="settings-card"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="settings-avatar">
            MS <button type="button">Change</button>
          </div>
          <Field label="Full name" placeholder="Maya Santos" />
          <Field
            label="Email address"
            type="email"
            placeholder="maya@example.com"
          />
          <Field label="Phone number" placeholder="+63 917 000 0000" />
          <div className="appearance">
            <h3>Appearance</h3>
            <p className="muted">Choose how ARC looks across your devices.</p>
            <div className="appearance-options">
              {["system", "light", "dark"].map((value) => (
                <button
                  type="button"
                  className={theme === value ? "selected" : ""}
                  onClick={() => setTheme(value)}
                  key={value}
                >
                  {value[0].toUpperCase() + value.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div className="trust-score-profile">
            <div><h3>Trust Score</h3><p className="muted">Managed by ARC Car Rental. View-only.</p></div>
            <strong>{trustScore}%</strong>
          </div>
          <Button type="submit">Save changes</Button>
        </form>
      </div>
    </div>
  );
}
