"use client";

import React, { useState } from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import { DISPLAY_PHONE, EMAIL_ADDRESS, NURSERY_ADDRESS, getWhatsAppGeneralUrl } from "@/lib/whatsapp";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    plantInterest: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMsg = `Hi Patel Global Green! 🌿\n\n*Inquiry from Website:*\nName: ${formData.name}\nPhone: ${formData.phone}\nInterested in: ${formData.plantInterest || "General Inquiry"}\nMessage: ${formData.message}`;
    const url = `https://wa.me/917292009034?text=${encodeURIComponent(whatsappMsg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <div className="contact-page pb-5">
      <Breadcrumb items={[{ label: "Contact Us" }]} />

      <section
        className="py-5 text-center"
        style={{ background: "linear-gradient(135deg, #e8f5e9, #f9fdf9)" }}
      >
        <div className="container">
          <div className="section-tag contact-tag d-inline-block">Reach Out</div>
          <h1 className="display-5 fw-bold mb-3" style={{ color: "var(--primary)" }}>
            We&apos;re Here to Help You Grow 🌿
          </h1>
          <p className="lead text-muted mx-auto" style={{ maxWidth: "600px" }}>
            Have a question about plant care, bulk orders, or custom garden setups?
            Reach out through our direct channels below.
          </p>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row g-5">
            {/* Contact Details & Cards */}
            <div className="col-lg-5">
              <h3 className="fw-bold mb-4" style={{ color: "var(--primary)" }}>
                Contact Information
              </h3>

              <div className="d-flex flex-column gap-3 mb-4">
                <div className="contact-card">
                  <div className="contact-icon">
                    <i className="fas fa-location-dot"></i>
                  </div>
                  <div className="contact-content">
                    <span className="label">Nursery Address</span>
                    <p className="val">{NURSERY_ADDRESS}</p>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="contact-content">
                    <span className="label">Call Directly</span>
                    <a
                      href={`tel:${DISPLAY_PHONE.replace(/\s+/g, "")}`}
                      className="val text-decoration-none"
                    >
                      {DISPLAY_PHONE}
                    </a>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-content">
                    <span className="label">Email Address</span>
                    <a
                      href={`mailto:${EMAIL_ADDRESS}`}
                      className="val contact-email text-decoration-none"
                    >
                      {EMAIL_ADDRESS}
                    </a>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-icon">
                    <i className="fab fa-whatsapp"></i>
                  </div>
                  <div className="contact-content">
                    <span className="label">WhatsApp Support</span>
                    <a
                      href={getWhatsAppGeneralUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="val text-decoration-none"
                    >
                      {DISPLAY_PHONE} (Instant reply)
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="p-4 rounded-4 text-center"
                style={{ background: "#e8f5e9", border: "1px dashed var(--primary)" }}
              >
                <i className="fas fa-clock fs-3 text-success mb-2"></i>
                <h6 className="fw-bold mb-1">Open 7 Days a Week</h6>
                <p className="small text-muted mb-0">
                  Monday – Sunday: 8:00 AM to 8:00 PM<br />
                  Next-day deliveries dispatch daily at 7:00 AM
                </p>
              </div>
            </div>

            {/* Interactive Form */}
            <div className="col-lg-7">
              <div className="p-4 p-md-5 rounded-4 bg-white shadow-sm border">
                <h3 className="fw-bold mb-2" style={{ color: "var(--text-dark)" }}>
                  Send an Inquiry
                </h3>
                <p className="text-muted mb-4">
                  Fill in your requirements and connect instantly with our plant specialists.
                </p>

                {submitted ? (
                  <div className="alert alert-success p-4 rounded-3 text-center" role="alert">
                    <div className="display-5 mb-2">🌿</div>
                    <h5 className="alert-heading fw-bold">Inquiry Sent via WhatsApp!</h5>
                    <p className="mb-3">
                      Thank you for contacting Patel Global Green. If WhatsApp didn&apos;t open automatically, please click below:
                    </p>
                    <a
                      href={getWhatsAppGeneralUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-success rounded-pill px-4"
                    >
                      Open WhatsApp Chat
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label className="form-label fw-semibold">Your Name *</label>
                      <input
                        type="text"
                        required
                        className="form-control form-control-lg fs-6"
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-semibold">Phone Number / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        className="form-control form-control-lg fs-6"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-semibold">Plant Category or Need</label>
                      <select
                        className="form-select form-select-lg fs-6"
                        value={formData.plantInterest}
                        onChange={(e) =>
                          setFormData({ ...formData, plantInterest: e.target.value })
                        }
                      >
                        <option value="">Select an interest (Optional)</option>
                        <option value="Indoor Plants">Indoor Plants</option>
                        <option value="Outdoor Plants">Outdoor Plants</option>
                        <option value="Flowering Plants">Flowering Plants</option>
                        <option value="Bonsai Collection">Bonsai Collection</option>
                        <option value="Fruit Plants">Fruit Plants</option>
                        <option value="Balcony Gardening Setup">Balcony Gardening Setup</option>
                        <option value="Bulk Corporate Gifting">Bulk Corporate Gifting</option>
                      </select>
                    </div>

                    <div className="mb-4">
                      <label className="form-label fw-semibold">Your Message / Specific Plant Query</label>
                      <textarea
                        rows={4}
                        required
                        className="form-control form-control-lg fs-6"
                        placeholder="Tell us what you're looking for or your garden requirements..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="contact-btn w-100 border-0 text-white fw-bold py-3 fs-6 d-flex align-items-center justify-content-center"
                    >
                      <i className="fab fa-whatsapp me-2 fs-5"></i>
                      Send Inquiry on WhatsApp
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
