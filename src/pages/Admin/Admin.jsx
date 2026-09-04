import { money } from "../../data/cars";
import "./Admin.css";

export default function Admin({ trustScore, setTrustScore, activeRental, approveExtension, go }) {
  return (
    <div className="admin-page">
      <button className="back-link" onClick={() => go("profile")}>← Back to profile</button>
      <div className="page-intro"><p className="eyebrow">ARC ADMINISTRATION</p><h1>Customer management</h1><p className="muted">Review customer history and manage requests before approval.</p></div>
      <section className="admin-grid">
        <article className="admin-card"><p className="eyebrow">CUSTOMER</p><h2>Maya Santos</h2><p className="muted">maya@example.com · {activeRental.reference}</p><label className="form-field"><span className="form-label">Trust Score percentage</span><input type="number" min="0" max="100" value={trustScore} onChange={(event) => setTrustScore(Math.max(0, Math.min(100, Number(event.target.value))))} /></label><p className="admin-note">Reference only. This score does not automatically approve or reject rentals.</p></article>
        <article className="admin-card"><p className="eyebrow">EXTENSION REQUEST</p><h2>{activeRental.car.name}</h2>{activeRental.extensionRequest ? <><p>New return: {new Date(activeRental.extensionRequest.returnAt).toLocaleString()}</p><p>Additional cost: {money(activeRental.extensionRequest.cost)}</p><span className="status pending">{activeRental.extensionRequest.status}</span>{activeRental.extensionRequest.status !== "Approved" && <button className="button" onClick={approveExtension}>Approve extension</button>}</> : <p className="muted">No extension requests waiting for review.</p>}</article>
      </section>
    </div>
  );
}