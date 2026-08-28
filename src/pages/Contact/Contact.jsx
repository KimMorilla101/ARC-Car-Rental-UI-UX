import "./Contact.css";

import { Button, Field } from "../../components/UI/UI";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="info-page">
      <div className="info-hero">
        <p className="eyebrow">WE’RE HERE TO HELP</p>
        <h1>
          Let’s talk
          <br />
          <em>journeys.</em>
        </h1>
        <img
          src="https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=85"
          alt="ARC vehicle"
        />
      </div>
      <div className="contact-layout">
        <div>
          <h2>Contact us</h2>
          <p className="muted">
            Manila, Philippines
            <br />
            +63 2 8888 2026
            <br />
            hello@arccarrental.com
          </p>
          <p className="muted">Mon – Sun · 8:00 AM – 8:00 PM</p>
        </div>
        <form
          className="auth-card compact"
          onSubmit={(event) => event.preventDefault()}
        >
          <Field label="Your name" placeholder="Maya Santos" />
          <Field
            label="Email address"
            type="email"
            placeholder="you@example.com"
          />
          <label className="form-field">
            <span>Message</span>
            <textarea placeholder="How can we help?" rows="4" />
          </label>
          <Button type="submit">Send message →</Button>
        </form>
      </div>
    </div>
  );
}
