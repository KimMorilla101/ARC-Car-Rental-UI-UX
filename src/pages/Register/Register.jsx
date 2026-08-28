import "./Register.css";

import { Button, Field } from "../../components/UI/UI";
import "./Register.css";

export default function Register({ onSubmit, go }) {
  return (
    <section className="auth-page">
      <div className="auth-art">
        <p className="eyebrow">JOIN ARC</p>
        <h1>
          More miles.
          <br />
          <em>More memories.</em>
        </h1>
      </div>
      <form className="auth-card" onSubmit={onSubmit}>
        <p className="eyebrow">CREATE ACCOUNT</p>
        <h2>Your account starts here</h2>
        <p className="muted">Save cars, manage bookings, and get moving.</p>
        <Field label="Full name" placeholder="Maya Santos" />
        <Field label="Phone number" placeholder="+63 917 000 0000" />
        <Field
          label="Email address"
          type="email"
          placeholder="you@example.com"
        />
        <Field label="Password" type="password" placeholder="••••••••" />
        <label className="check-row">
          <input type="checkbox" required /> I agree to the Terms & Conditions
        </label>
        <Button type="submit">
          Create account <span>→</span>
        </Button>
        <p className="auth-switch">
          Already have an account?{" "}
          <button type="button" onClick={() => go("login")}>
            Sign in
          </button>
        </p>
      </form>
    </section>
  );
}
