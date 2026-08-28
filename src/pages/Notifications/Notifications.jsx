import "./Notifications.css";

import "./Notifications.css";

export default function Notifications() {
  return (
    <div className="notifications-page">
      <div className="page-intro">
        <p className="eyebrow">STAY IN THE KNOW</p>
        <h1>
          Notifications <span className="notification-count">3</span>
        </h1>
      </div>
      <div className="notification-list">
        {[
          [
            "Booking submitted",
             "Your booking ARC-2026-00125 is now Pending.",
            "Just now",
          ],
          [
            "Upcoming pickup",
            "Your Toyota RAV4 pickup is in 5 days.",
            "Yesterday",
          ],
          [
            "Welcome to ARC",
             "You’re all set for easier journeys ahead.",
            "Jun 01",
          ],
        ].map(([title, body, time], index) => (
          <article
            className={index < 2 ? "notification unread" : "notification"}
            key={title}
          >
            <span className="notification-dot">✓</span>
            <div>
              <h3>{title}</h3>
              <p>{body}</p>
              <small>{time}</small>
            </div>
            <button>···</button>
          </article>
        ))}
      </div>
    </div>
  );
}
