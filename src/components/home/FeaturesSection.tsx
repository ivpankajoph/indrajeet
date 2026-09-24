import React from "react";

const reasons = [
  {
    icon: "fas fa-leaf",
    title: "Fresh & Healthy Plants",
    desc: "We offer carefully maintained plants for homes, offices and outdoor spaces.",
  },
  {
    icon: "fas fa-layer-group",
    title: "Wide Plant Collection",
    desc: "Choose from indoor, outdoor, flowering and fruit plants.",
  },
  {
    icon: "fas fa-truck-fast",
    title: "Home Delivery",
    desc: "Convenient delivery available across selected Delhi NCR areas.",
  },
  {
    icon: "fas fa-hands-holding-circle",
    title: "Gardening Support",
    desc: "Get basic guidance for choosing and caring for your plants.",
  },
  {
    icon: "fas fa-shop",
    title: "Local Nursery",
    desc: "Visit our physical nursery in Greater Noida and select plants in person.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="features-section py-5" id="features">
      <div className="container">
        <div className="section-header text-center mb-5">
          <div className="section-tag">Trust &amp; Quality</div>
          <h2 className="fw-bold mb-3" style={{ color: "var(--primary)" }}>
            Why Choose Aardhya Green Nursery
          </h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "640px" }}>
            We are dedicated to providing healthy greenery, dependable advice, and
            attentive nursery service right here in Greater Noida.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {reasons.map((item, index) => (
            <div key={index} className="col-sm-6 col-lg-4 d-flex">
              <div className="feature-card w-100 p-4 rounded-4 bg-white shadow-sm border">
                <div className="feature-icon mb-3">
                  <i className={item.icon}></i>
                </div>
                <h5 className="fw-bold mb-2">{item.title}</h5>
                <p className="text-muted mb-0 small" style={{ lineHeight: "1.6" }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
