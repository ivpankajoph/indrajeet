import React from "react";

const features = [
  {
    icon: "fas fa-truck-fast",
    title: "Next-Day Free Delivery",
    desc: "Order by midnight and get your plants delivered next day, absolutely free, anywhere in Delhi NCR.",
  },
  {
    icon: "fas fa-circle-check",
    title: "100% Healthy Plants",
    desc: "Every plant is hand-picked, quality-checked, and packed with care to arrive fresh at your doorstep.",
  },
  {
    icon: "fas fa-seedling",
    title: "500+ Varieties",
    desc: "From indoor air-purifiers to exotic bonsai — the widest selection of nursery plants in Noida.",
  },
  {
    icon: "fas fa-comments",
    title: "Expert Plant Advice",
    desc: "Not sure which plant to pick? Our gardening experts are available on WhatsApp to guide you.",
  },
  {
    icon: "fas fa-gift",
    title: "Gift-Ready Packaging",
    desc: "Beautifully wrapped plants make the perfect eco-friendly gift for any occasion.",
  },
  {
    icon: "fas fa-tags",
    title: "Lowest Prices",
    desc: "Nursery-direct pricing — no middlemen. Best quality at the most affordable rates in Delhi NCR.",
  },
  {
    icon: "fas fa-rotate",
    title: "Easy Replacement",
    desc: "If a plant arrives damaged, we replace it — no questions asked. Your satisfaction is guaranteed.",
  },
  {
    icon: "fas fa-leaf",
    title: "Seasonal Plants",
    desc: "We always stock fresh seasonal plants so your garden stays vibrant all year round.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="features-section" id="features">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Why Choose Us</div>
          <h2>Growing Trust, One Plant at a Time</h2>
          <p>
            We&apos;re passionate plant lovers dedicated to making your green journey
            simple, joyful &amp; reliable.
          </p>
        </div>

        <div className="row g-3">
          {features.map((item, index) => (
            <div key={index} className="col-sm-6 col-lg-3">
              <div className="feature-card h-100">
                <div className="feature-icon">
                  <i className={item.icon}></i>
                </div>
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
