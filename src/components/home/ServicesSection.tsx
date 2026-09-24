import React from "react";
import { getWhatsAppGeneralUrl } from "@/lib/whatsapp";

const coreServices = [
  {
    icon: "fas fa-seedling",
    title: "Plant Sales",
    desc: "Healthy indoor, outdoor, flowering and fruit plants for different spaces.",
  },
  {
    icon: "fas fa-truck",
    title: "Home Delivery",
    desc: "Get plants and gardening essentials delivered to your home across selected Delhi NCR areas.",
  },
  {
    icon: "fas fa-screwdriver-wrench",
    title: "Plant Installation",
    desc: "Planting and installation support for gardens, homes, offices and other outdoor areas.",
  },
  {
    icon: "fas fa-scissors",
    title: "Garden Maintenance",
    desc: "Regular care and maintenance support for gardens and plants.",
  },
  {
    icon: "fas fa-boxes-packing",
    title: "Bulk Plant Supply",
    desc: "Plant supply for landscaping projects, offices, residential projects and other bulk requirements.",
  },
];

export default function ServicesSection() {
  return (
    <section className="services-section py-5" id="services" style={{ background: "#fbfdfb" }}>
      <div className="container">
        {/* All Services Overview */}
        <div className="section-header text-center mb-5">
          <div className="section-tag">Professional Solutions</div>
          <h2 className="fw-bold mb-3" style={{ color: "var(--primary)" }}>
            Our Nursery &amp; Plant Services
          </h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "680px" }}>
            From individual home plants to large green project executions in Greater Noida, Noida &amp; Delhi NCR.
          </p>
        </div>

        {/* 5 Core Services Grid */}
        <div className="row g-4 justify-content-center mb-5">
          {coreServices.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div
                className="p-4 rounded-4 bg-white h-100 shadow-sm border"
                style={{
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  borderLeft: "4px solid var(--primary)",
                }}
              >
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: "52px",
                    height: "52px",
                    background: "var(--mint-mid)",
                    color: "var(--primary)",
                    fontSize: "1.3rem",
                  }}
                >
                  <i className={service.icon}></i>
                </div>
                <h5 className="fw-bold mb-2">{service.title}</h5>
                <p className="text-muted mb-0 small" style={{ lineHeight: "1.6" }}>
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dedicated Highlight for Gardening Services (H2 per Requirement 17) */}
        <div className="row g-4 my-2" id="gardening">
          <div className="col-lg-6">
            <div
              className="p-4 p-md-5 rounded-4 h-100 text-white shadow-sm position-relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #1b5e20, #2e7d32)",
              }}
            >
              <span className="badge bg-white text-success px-3 py-1 rounded-pill mb-3 fw-semibold">
                Garden Care &amp; Upkeep
              </span>
              <h2 className="fw-bold mb-3 text-white">
                Gardening Services
              </h2>
              <p className="lead mb-4 text-white" style={{ fontSize: "1.05rem", opacity: 0.92, lineHeight: "1.7" }}>
                Support for plant care, garden upkeep and maintaining healthy green spaces. Our experienced gardeners assist with seasonal pruning, organic fertilization, repotting, pest prevention, and garden rejuvenation across Greater Noida and Noida.
              </p>
              <a
                href={getWhatsAppGeneralUrl("Hi Aardhya Green Nursery, I want to inquire about your Gardening Services.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-light rounded-pill px-4 py-2 fw-semibold text-success shadow-sm"
              >
                <i className="fab fa-whatsapp me-2"></i> Inquire Gardening Services
              </a>
            </div>
          </div>

          {/* Dedicated Highlight for Landscaping Services (H2 per Requirement 17) */}
          <div className="col-lg-6" id="landscaping">
            <div
              className="p-4 p-md-5 rounded-4 h-100 text-white shadow-sm position-relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #0d3810, #1b5e20)",
              }}
            >
              <span className="badge bg-white text-success px-3 py-1 rounded-pill mb-3 fw-semibold">
                Design &amp; Execution
              </span>
              <h2 className="fw-bold mb-3 text-white">
                Landscaping Services
              </h2>
              <p className="lead mb-4 text-white" style={{ fontSize: "1.05rem", opacity: 0.92, lineHeight: "1.7" }}>
                Plant selection and landscaping support for homes, offices and outdoor spaces. We help you design aesthetic, climate-resilient green landscapes, terrace gardens, and balcony green walls with high-vitality plants and premium planters.
              </p>
              <a
                href={getWhatsAppGeneralUrl("Hi Aardhya Green Nursery, I want to inquire about your Landscaping Services.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-warning rounded-pill px-4 py-2 fw-semibold text-dark shadow-sm"
              >
                <i className="fab fa-whatsapp me-2"></i> Inquire Landscaping Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
