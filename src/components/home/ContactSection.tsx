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
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="section-header text-center mb-5">
          <div className="section-tag contact-tag">Visit Aardhya Green Nursery</div>
          <h2 className="fw-bold mb-3">Visit Our Nursery</h2>
          <p
            className="contact-heading mx-auto text-white"
            style={{
              maxWidth: "640px",
              color: "#ffffff",
              opacity: 0.95,
              fontSize: "1.08rem",
              lineHeight: "1.7",
            }}
          >
            Come explore our collection in person in Greater Noida, call us directly, or reach out on WhatsApp.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {/* Location */}
          <div className="col-md-6 col-lg-4">
            <div className="contact-card h-100">
              <div className="contact-icon">
                <i className="fas fa-location-dot"></i>
              </div>
              <div className="contact-content">
                <span className="label">Location</span>
                <p className="val mb-0">{NURSERY_ADDRESS}</p>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="col-md-6 col-lg-4">
            <div className="contact-card h-100">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="contact-content">
                <span className="label">Phone</span>
                <a
                  href={TEL_LINK}
                  className="val text-decoration-none d-inline-block"
                  style={{ whiteSpace: "nowrap" }}
                >
                  {DISPLAY_PHONE}
                </a>
              </div>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="col-md-6 col-lg-4">
            <div className="contact-card h-100">
              <div className="contact-icon">
                <i className="fab fa-whatsapp"></i>
              </div>
              <div className="contact-content">
                <span className="label">WhatsApp</span>
                <a
                  href={getWhatsAppGeneralUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="val text-decoration-none d-inline-block"
                  style={{ whiteSpace: "nowrap" }}
                >
                  {DISPLAY_PHONE}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Prominent CTAs: Get Directions, Call Now, WhatsApp Us */}
        <div className="d-flex flex-wrap justify-content-center gap-3 mt-5">
          <a
            href={MAPS_DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-light rounded-pill px-4 py-3 fw-bold text-success shadow-lg d-inline-flex align-items-center"
            style={{ fontSize: "1rem" }}
          >
            <i className="fas fa-map-location-dot me-2 fs-5"></i> Get Directions
          </a>
          <a
            href={TEL_LINK}
            className="btn btn-outline-light rounded-pill px-4 py-3 fw-bold shadow-lg d-inline-flex align-items-center"
            style={{ fontSize: "1rem" }}
          >
            <i className="fas fa-phone-volume me-2 fs-5"></i> Call Now
          </a>
          <a
            href={getWhatsAppGeneralUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn rounded-pill px-4 py-3 fw-bold text-white shadow-lg d-inline-flex align-items-center"
            style={{
              background: "#25d366",
              borderColor: "#25d366",
              fontSize: "1rem",
            }}
          >
            <i className="fab fa-whatsapp me-2 fs-5"></i> WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
