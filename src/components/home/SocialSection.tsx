import React from "react";
import { getWhatsAppGeneralUrl, DISPLAY_PHONE } from "@/lib/whatsapp";

export default function SocialSection() {
  return (
    <section className="social-section py-5" style={{ background: "#fbfdfb" }}>
      <div className="container">
        <div className="section-header text-center mb-5">
          <div className="section-tag">Community &amp; Support</div>
          <h3 className="fw-bold mb-2" style={{ color: "var(--primary)" }}>
            Connect with Aardhya Green Nursery
          </h3>
          <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
            Reach out for plant care guidance, seasonal recommendations, and custom garden setups in Greater Noida.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {/* WhatsApp Direct Chat */}
          <div className="col-md-6 col-lg-5">
            <a
              className="social-card text-decoration-none p-4 rounded-4 bg-white shadow-sm border d-flex align-items-center gap-3"
              href={getWhatsAppGeneralUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="social-icon-wrap rounded-circle d-flex align-items-center justify-content-center text-white"
                style={{ width: "54px", height: "54px", background: "#25d366", fontSize: "1.6rem" }}
              >
                <i className="fab fa-whatsapp"></i>
              </div>

              <div className="social-content">
                <h5 className="social-title fw-bold mb-1" style={{ color: "var(--text-dark)" }}>
                  WhatsApp Direct Help
                </h5>
                <p className="social-desc small text-muted mb-2">
                  Ask plant queries, check delivery &amp; order directly
                </p>
                <span className="social-link text-success fw-semibold small">
                  Message {DISPLAY_PHONE}
                  <i className="fas fa-arrow-right ms-2"></i>
                </span>
              </div>
            </a>
          </div>

          {/* Plant Care Inquiries */}
          <div className="col-md-6 col-lg-5">
            <a
              className="social-card text-decoration-none p-4 rounded-4 bg-white shadow-sm border d-flex align-items-center gap-3"
              href={`tel:+918076754604`}
            >
              <div
                className="social-icon-wrap rounded-circle d-flex align-items-center justify-content-center text-white"
                style={{ width: "54px", height: "54px", background: "var(--primary)", fontSize: "1.4rem" }}
              >
                <i className="fas fa-phone"></i>
              </div>

              <div className="social-content">
                <h5 className="social-title fw-bold mb-1" style={{ color: "var(--text-dark)" }}>
                  Direct Phone Support
                </h5>
                <p className="social-desc small text-muted mb-2">
                  Speak directly with our Greater Noida nursery team
                </p>
                <span className="social-link text-success fw-semibold small">
                  Call {DISPLAY_PHONE}
                  <i className="fas fa-arrow-right ms-2"></i>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
