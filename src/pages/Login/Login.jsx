import "./Login.css";

import { Button, Field } from "../../components/UI/UI";
import "./Login.css";

export default function Login({ onSubmit, go }) {
  return (
    <section className="auth-page">
      <div className="auth-art">
        <p className="eyebrow">WELCOME TO ARC</p>
        <h1>
          More miles.
          <br />
          <em>More memories.</em>
        </h1>
      </div>
      <form className="auth-card" onSubmit={onSubmit}>
        <p className="eyebrow">CUSTOMER LOGIN</p>
        <h2>Welcome back</h2>
        <p className="muted">Sign in to manage your ARC journeys.</p>
        <Field
          label="Email address"
          type="email"
          placeholder="you@example.com"
        />
        <label className="form-field">
          <span>Password</span>
          <input type="password" placeholder="••••••••" required />
        </label>
        <div className="form-options">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <button type="button" onClick={() => go("forgot")}>
            Forgot password?
          </button>
        </div>
        <Button type="submit">
          Login <span>→</span>
        </Button>
        <p className="auth-switch">
          New to ARC?{" "}
          <button type="button" onClick={() => go("register")}>
            Create an account
          </button>
        </p>
      </form>
    </section>
  );
}
