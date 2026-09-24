import React from "react";
import { getWhatsAppGeneralUrl } from "@/lib/whatsapp";

export default function DeliverySection() {
  const deliveryMsg =
    "Hi Aardhya Green Nursery, I want to check delivery availability for plants at my location in Delhi NCR.";

  return (
    <section className="delivery-section py-5" id="delivery">
      <div className="container">
        <div
          className="p-5 rounded-4 shadow-sm border position-relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #e8f5e9 0%, #f1f8e9 100%)",
            border: "1px solid #c8e6c9",
          }}
        >
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <span className="badge bg-success text-white px-3 py-2 rounded-pill mb-3">
                Plants Delivered to Your Door
              </span>
              <h2 className="fw-bold mb-3" style={{ color: "var(--primary)" }}>
                Home Plant Delivery
              </h2>
              <p className="lead text-muted mb-4" style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
                Looking for plants near you? Choose your favourite plants from Aardhya Green Nursery and contact us for home delivery. We deliver plants and selected gardening products across our service areas in Delhi NCR.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a
                  href={getWhatsAppGeneralUrl(deliveryMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success rounded-pill px-4 py-3 fw-bold text-white shadow-sm d-inline-flex align-items-center"
                  style={{ background: "#25d366", borderColor: "#25d366" }}
                >
                  <i className="fab fa-whatsapp me-2 fs-5"></i> Check Delivery Availability
                </a>
              </div>
            </div>

            <div className="col-lg-4 text-center">
              <div
                className="d-inline-flex flex-column align-items-center justify-content-center bg-white p-4 rounded-4 shadow-sm"
                style={{ width: "100%", maxWidth: "300px" }}
              >
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center text-success mb-3"
                  style={{ width: "70px", height: "70px", background: "#e8f5e9", fontSize: "2rem" }}
                >
                  <i className="fas fa-truck-ramp-box"></i>
                </div>
                <h6 className="fw-bold mb-1">Serving Delhi NCR</h6>
                <p className="small text-muted mb-0 text-center">
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
