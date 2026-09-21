import React from "react";
import { DISPLAY_PHONE, EMAIL_ADDRESS, NURSERY_ADDRESS, getWhatsAppGeneralUrl } from "@/lib/whatsapp";

export default function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="section-header">
          <div className="section-tag contact-tag">Get in Touch</div>
          <h2>We&apos;re Here to Help You Grow 🌿</h2>
          <p className="contact-heading">
            Visit us, call us, or send us a WhatsApp message.
            Our team is always ready to assist you.
          </p>
        </div>

        <div className="row g-4">
          {/* Address */}
          <div className="col-md-6 col-lg-3">
            <div className="contact-card h-100">
              <div className="contact-icon">
                <i className="fas fa-location-dot"></i>
              </div>
              <div className="contact-content">
                <span className="label">Address</span>
                <p className="val">{NURSERY_ADDRESS}</p>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="col-md-6 col-lg-3">
            <div className="contact-card h-100">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="contact-content">
                <span className="label">Phone</span>
                <a href={`tel:${DISPLAY_PHONE.replace(/\s+/g, "")}`} className="val text-decoration-none">
                  {DISPLAY_PHONE}
                </a>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="col-md-6 col-lg-3">
            <div className="contact-card h-100">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-content">
                <span className="label">Email</span>
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="val contact-email text-decoration-none"
                >
                  {EMAIL_ADDRESS}
                </a>
              </div>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="col-md-6 col-lg-3">
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
                  className="val text-decoration-none"
                >
                  {DISPLAY_PHONE}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <a
            href={getWhatsAppGeneralUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn text-decoration-none"
          >
            <i className="fab fa-whatsapp me-2"></i>
            Order on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
