import React from "react";
import {
  DISPLAY_PHONE,
  TEL_LINK,
  NURSERY_ADDRESS,
  MAPS_DIRECTIONS_URL,
  getWhatsAppGeneralUrl,
} from "@/lib/whatsapp";

export default function ContactSection() {
  return (
    <section className="contact-section py-5" id="contact">
      <div className="container">
        <div className="section-header text-center mb-5">
          <div className="section-tag contact-tag">Visit Aardhya Green Nursery</div>
          <h2 className="fw-bold mb-3" style={{ color: "var(--primary)" }}>
            Visit Our Nursery
          </h2>
          <p className="contact-heading text-muted mx-auto" style={{ maxWidth: "600px" }}>
            Come explore our collection in person in Greater Noida, call us directly, or reach out on WhatsApp.
          </p>
        </div>

        <div className="row g-4 justify-content-center mb-5">
          {/* Location */}
          <div className="col-md-6 col-lg-4">
            <div className="contact-card h-100 p-4 rounded-4 bg-white shadow-sm border text-center">
              <div
                className="contact-icon mx-auto mb-3 rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  width: "60px",
                  height: "60px",
                  background: "var(--mint-mid)",
                  color: "var(--primary)",
                  fontSize: "1.4rem",
                }}
              >
                <i className="fas fa-location-dot"></i>
              </div>
              <span className="label text-muted d-block small fw-bold text-uppercase mb-1">
                Location
              </span>
              <p className="val mb-3 fw-semibold" style={{ fontSize: "0.95rem" }}>
                {NURSERY_ADDRESS}
              </p>
              <a
                href={MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-outline-success rounded-pill px-3"
              >
                <i className="fas fa-diamond-turn-right me-1"></i> Get Directions
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="col-md-6 col-lg-4">
            <div className="contact-card h-100 p-4 rounded-4 bg-white shadow-sm border text-center">
              <div
                className="contact-icon mx-auto mb-3 rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  width: "60px",
                  height: "60px",
                  background: "var(--mint-mid)",
                  color: "var(--primary)",
                  fontSize: "1.4rem",
                }}
              >
                <i className="fas fa-phone"></i>
              </div>
              <span className="label text-muted d-block small fw-bold text-uppercase mb-1">
                Phone
              </span>
              <p className="val mb-3">
                <a
                  href={TEL_LINK}
                  className="fw-bold fs-5 text-success text-decoration-none"
                >
                  {DISPLAY_PHONE}
                </a>
              </p>
              <a
                href={TEL_LINK}
                className="btn btn-sm btn-success rounded-pill px-3 text-white"
              >
                <i className="fas fa-phone me-1"></i> Call Now
              </a>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="col-md-6 col-lg-4">
            <div className="contact-card h-100 p-4 rounded-4 bg-white shadow-sm border text-center">
              <div
                className="contact-icon mx-auto mb-3 rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  width: "60px",
                  height: "60px",
                  background: "#e8f5e9",
                  color: "#25d366",
                  fontSize: "1.5rem",
                }}
              >
                <i className="fab fa-whatsapp"></i>
              </div>
              <span className="label text-muted d-block small fw-bold text-uppercase mb-1">
                WhatsApp
              </span>
              <p className="val mb-3">
                <a
                  href={getWhatsAppGeneralUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fw-bold fs-5 text-success text-decoration-none"
                >
                  {DISPLAY_PHONE}
                </a>
              </p>
              <a
                href={getWhatsAppGeneralUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm rounded-pill px-3 text-white"
                style={{ background: "#25d366" }}
              >
                <i className="fab fa-whatsapp me-1"></i> WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* 3 Prominent CTAs bar */}
        <div className="d-flex flex-wrap justify-content-center gap-3">
          <a
            href={MAPS_DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-success py-3 px-4 rounded-pill fw-semibold shadow-sm d-inline-flex align-items-center"
          >
            <i className="fas fa-map-location-dot me-2 fs-5"></i> Get Directions
          </a>
          <a
            href={TEL_LINK}
            className="btn btn-outline-success py-3 px-4 rounded-pill fw-semibold shadow-sm d-inline-flex align-items-center"
          >
            <i className="fas fa-phone-volume me-2 fs-5"></i> Call Now
          </a>
          <a
            href={getWhatsAppGeneralUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success py-3 px-4 rounded-pill fw-bold shadow-sm d-inline-flex align-items-center text-white"
            style={{ background: "#25d366", borderColor: "#25d366" }}
          >
            <i className="fab fa-whatsapp me-2 fs-5"></i> WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
