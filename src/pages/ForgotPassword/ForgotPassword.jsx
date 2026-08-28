import "./ForgotPassword.css";

import { useState } from "react";
import { Button, Field } from "../../components/UI/UI";
import "./ForgotPassword.css";

export default function ForgotPassword({ go }) {
  const [sent, setSent] = useState(false);
  return (
    <section className="center-page">
      <form
        className="auth-card compact"
        onSubmit={(event) => {
          event.preventDefault();
          setSent(true);
        }}
      >
        <p className="eyebrow">ACCOUNT SECURITY</p>
        <h2>Reset your password</h2>
        <p className="muted">
          Enter your email and we’ll send a secure reset link.
        </p>
        <Field
          label="Email address"
          type="email"
          placeholder="you@example.com"
        />
        {sent && (
          <p className="success-message">
            ✓ Reset link sent. Check your inbox to continue.
          </p>
        )}
        <Button type="submit">Send reset link →</Button>
        <button className="back-link" type="button" onClick={() => go("login")}>
          Back to login
        </button>
      </form>
    </section>
  );
}
