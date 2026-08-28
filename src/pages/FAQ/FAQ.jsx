import "./FAQ.css";

import "./FAQ.css";

export default function FAQ() {
  return (
    <div className="faq-page">
      <div className="page-intro">
        <p className="eyebrow">NEED TO KNOW</p>
        <h1>
          Frequently asked
          <br />
          <em>questions.</em>
        </h1>
      </div>
      <div className="faq-list">
        {[
          "What documents do I need to rent a car?",
          "Can I pay in person?",
          "What happens if my dates conflict?",
          "Can I request a rental extension?",
          "What is the cancellation policy?",
          "What happens if I return late?",
        ].map((question) => (
          <details key={question}>
            <summary>
              {question}
              <span>+</span>
            </summary>
            <p>
              We’ll guide you through the process with clear requirements and
              friendly support. Check your booking details for the policy that
              applies to your journey.
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}
