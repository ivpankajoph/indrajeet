"use client";

import React, { useState } from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import {
  DISPLAY_PHONE,
  TEL_LINK,
  NURSERY_ADDRESS,
  WHATSAPP_PHONE,
  MAPS_DIRECTIONS_URL,
  getWhatsAppGeneralUrl,
} from "@/lib/whatsapp";

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
    const whatsappMsg = `Hi Aardhya Green Nursery! 🌿\n\n*Inquiry from Website:*\nName: ${formData.name}\nPhone: ${formData.phone}\nInterested in: ${formData.plantInterest || "General Inquiry"}\nMessage: ${formData.message}`;
    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(whatsappMsg)}`;
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
          <div className="section-tag contact-tag d-inline-block">Visit Aardhya Green Nursery</div>
          <h1 className="display-5 fw-bold mb-3" style={{ color: "var(--primary)" }}>
            Visit Our Nursery in Greater Noida
          </h1>
          <p className="lead text-muted mx-auto" style={{ maxWidth: "660px" }}>
            Reach out for plant inquiries, pots, fertilizers, gardening services, or to verify home delivery in your area across Delhi NCR.
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
                <div className="contact-card p-4 rounded-4 bg-white shadow-sm border">
                  <div className="contact-icon text-success mb-2 fs-4">
                    <i className="fas fa-location-dot"></i>
                  </div>
                  <div className="contact-content">
                    <span className="label text-muted small fw-bold text-uppercase d-block mb-1">
                      Nursery Address
                    </span>
                    <p className="val fw-semibold mb-2" style={{ fontSize: "0.95rem" }}>
                      {NURSERY_ADDRESS}
                    </p>
                    <a
                      href={MAPS_DIRECTIONS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-success rounded-pill px-3"
                    >
                      <i className="fas fa-map-location-dot me-1"></i> Get Directions
                    </a>
                  </div>
                </div>

                <div className="contact-card p-4 rounded-4 bg-white shadow-sm border">
                  <div className="contact-icon text-success mb-2 fs-4">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="contact-content">
                    <span className="label text-muted small fw-bold text-uppercase d-block mb-1">
                      Call Directly
                    </span>
                    <a
                      href={TEL_LINK}
                      className="val text-decoration-none fw-bold fs-5 text-success d-block mb-2"
                    >
                      {DISPLAY_PHONE}
                    </a>
                    <a
                      href={TEL_LINK}
                      className="btn btn-sm btn-success rounded-pill px-3 text-white"
                    >
                      <i className="fas fa-phone me-1"></i> Call Now
                    </a>
                  </div>
                </div>

                <div className="contact-card p-4 rounded-4 bg-white shadow-sm border">
                  <div className="contact-icon text-success mb-2 fs-4">
                    <i className="fab fa-whatsapp"></i>
                  </div>
                  <div className="contact-content">
                    <span className="label text-muted small fw-bold text-uppercase d-block mb-1">
                      WhatsApp Us
                    </span>
                    <a
                      href={getWhatsAppGeneralUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="val text-decoration-none fw-bold fs-5 text-success d-block mb-2"
                    >
                      {DISPLAY_PHONE}
                    </a>
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

              <div
                className="p-4 rounded-4 text-center"
                style={{ background: "#e8f5e9", border: "1px dashed var(--primary)" }}
              >
                <i className="fas fa-truck-fast fs-3 text-success mb-2"></i>
                <h6 className="fw-bold mb-1">Home Delivery in Delhi NCR</h6>
                <p className="small text-muted mb-0">
                  Serving Greater Noida, Noida, Ghaziabad and nearby NCR areas. Contact us on WhatsApp for pin code delivery check.
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
                  Fill in your requirements and connect instantly with Aardhya Green Nursery.
                </p>

                {submitted ? (
                  <div className="alert alert-success p-4 rounded-3 text-center" role="alert">
                    <div className="display-5 mb-2">🌿</div>
                    <h5 className="alert-heading fw-bold">Inquiry Prepared for WhatsApp!</h5>
                    <p className="mb-3">
                      Thank you for contacting Aardhya Green Nursery. If WhatsApp didn&apos;t open automatically, please click below:
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
                      <label className="form-label fw-semibold">Category or Requirement</label>
                      <select
                        className="form-select form-select-lg fs-6"
                        value={formData.plantInterest}
                        onChange={(e) =>
                          setFormData({ ...formData, plantInterest: e.target.value })
                        }
                      >
                        <option value="">Select a category (Optional)</option>
                        <option value="Indoor Plants">Indoor Plants</option>
                        <option value="Outdoor Plants">Outdoor Plants</option>
                        <option value="Flowering Plants">Flowering Plants</option>
                        <option value="Fruit Plants">Fruit Plants</option>
                        <option value="Pots & Planters">Pots &amp; Planters</option>
                        <option value="Fertilizers & Manure">Fertilizers &amp; Manure</option>
                        <option value="Soil & Potting Mix">Soil &amp; Potting Mix</option>
                        <option value="Gardening Services">Gardening Services</option>
                        <option value="Landscaping Services">Landscaping Services</option>
                        <option value="Bulk Plant Supply">Bulk Plant Supply</option>
                      </select>
                    </div>

                    <div className="mb-4">
                      <label className="form-label fw-semibold">Your Message / Plant Query</label>
                      <textarea
                        rows={4}
                        required
                        className="form-control form-control-lg fs-6"
                        placeholder="Tell us what you're looking for or your plant requirements..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="contact-btn w-100 border-0 text-white fw-bold py-3 fs-6 d-flex align-items-center justify-content-center rounded-pill"
                      style={{ background: "#25d366" }}
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
