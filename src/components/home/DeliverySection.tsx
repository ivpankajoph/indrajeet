import React from "react";
import { getWhatsAppGeneralUrl } from "@/lib/whatsapp";

export default function DeliverySection() {
  const deliveryMsg =
    "Hi Aardhya Green Nursery, I want to check delivery availability for plants at my location in Delhi NCR.";

  return (
    <section className="delivery-section py-5" id="delivery">
      <div className="container">
        <div
          className="p-4 p-md-5 rounded-4 shadow-sm border position-relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #e8f5e9 0%, #f1f8e9 100%)",
            border: "1px solid #c8e6c9",
          }}
        >
          <div className="row align-items-center g-4">
            <div className="col-lg-8 d-flex flex-column align-items-start text-start">
              <span
                className="badge rounded-pill mb-3 px-3 py-2 fw-semibold"
                style={{
                  background: "var(--primary-pale)",
                  color: "var(--primary)",
                  fontSize: "0.85rem",
                  letterSpacing: "0.5px",
                }}
              >
                🌿 Plants Delivered to Your Door
              </span>

              <h2 className="fw-bold mb-3" style={{ color: "var(--primary)", fontSize: "2rem" }}>
                Home Plant Delivery
              </h2>

              <p
                className="text-muted mb-4"
                style={{ fontSize: "1.05rem", lineHeight: "1.7", maxWidth: "620px" }}
              >
                Looking for plants near you? Choose your favourite plants from Aardhya Green Nursery and contact us for home delivery. We deliver plants and selected gardening products across our service areas in Delhi NCR.
              </p>

              <div>
                <a
                  href={getWhatsAppGeneralUrl(deliveryMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn rounded-pill px-4 py-3 fw-bold text-white shadow-sm d-inline-flex align-items-center"
                  style={{
                    background: "#25d366",
                    borderColor: "#25d366",
                    fontSize: "0.95rem",
                  }}
                >
                  <i className="fab fa-whatsapp me-2 fs-5"></i> Check Delivery Availability
                </a>
              </div>
            </div>

            <div className="col-lg-4 d-flex justify-content-center">
              <div
                className="bg-white p-4 rounded-4 shadow-sm text-center w-100"
                style={{ maxWidth: "320px", border: "1px solid #e0ede0" }}
              >
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center text-success mx-auto mb-3"
                  style={{
                    width: "64px",
                    height: "64px",
                    background: "#e8f5e9",
                    fontSize: "1.8rem",
                  }}
                >
                  <i className="fas fa-truck-fast"></i>
                </div>
                <h5 className="fw-bold mb-1" style={{ color: "var(--primary)" }}>
                  Serving Delhi NCR
                </h5>
                <p className="small text-muted mb-0">
                  Greater Noida • Noida • Ghaziabad • Selected NCR Locations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
