import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumb from "@/components/common/Breadcrumb";
import FeaturesSection from "@/components/home/FeaturesSection";
import {
  DISPLAY_PHONE,
  TEL_LINK,
  NURSERY_ADDRESS,
  MAPS_DIRECTIONS_URL,
  getWhatsAppGeneralUrl,
} from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "About Us | Aardhya Green Nursery Greater Noida",
  description:
    "Aardhya Green Nursery is a local plant nursery in Greater Noida offering indoor, outdoor, flowering, fruit plants, pots, fertilizers, and soil with home delivery across selected Delhi NCR areas.",
};

export default function AboutPage() {
  return (
    <div className="about-page pb-5">
      <Breadcrumb items={[{ label: "About Us" }]} />

      {/* Hero Banner */}
      <section
        className="py-5 text-center"
        style={{ background: "linear-gradient(135deg, #e8f5e9, #f9fdf9)" }}
      >
        <div className="container">
          <div className="section-tag d-inline-block">About Us</div>
          <h1 className="display-5 fw-bold mb-3" style={{ color: "var(--primary)" }}>
            About Aardhya Green Nursery
          </h1>
          <p className="lead text-muted mx-auto" style={{ maxWidth: "760px" }}>
            Aardhya Green Nursery is a local plant nursery in Greater Noida offering a wide range of indoor, outdoor, flowering and fruit plants for homes, offices, gardens and landscaping requirements.
          </p>
        </div>
      </section>

      {/* Story & Description */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div
                className="position-relative overflow-hidden rounded-4 shadow-sm"
                style={{ height: "420px" }}
              >
                <Image
                  src="/images/nursery.avif"
                  alt="Aardhya Green Nursery Grounds in Greater Noida"
                  fill
                  priority
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <span className="badge bg-success-subtle text-success px-3 py-2 rounded-pill mb-3">
                Your Local Green Destination
              </span>
              <h2 className="fw-bold mb-3" style={{ color: "var(--primary)" }}>
                Healthy Plants for Homes, Offices &amp; Gardens
              </h2>
              <p className="text-muted mb-3" style={{ lineHeight: "1.8" }}>
                Aardhya Green Nursery is a local plant nursery in Greater Noida offering a wide range of indoor, outdoor, flowering and fruit plants for homes, offices, gardens and landscaping requirements. We also provide pots, fertilizers, manure, soil and other gardening essentials.
              </p>
              <p className="text-muted mb-4" style={{ lineHeight: "1.8" }}>
                Our team helps customers choose suitable plants based on their space and requirements. We serve customers in Greater Noida and provide home delivery across selected areas of Delhi NCR, including Noida and Ghaziabad.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <Link href="/plants" className="btn-primary-green text-decoration-none">
                  <i className="fas fa-leaf me-2"></i> Browse Our Plants
                </Link>
                <a
                  href={getWhatsAppGeneralUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-green text-decoration-none"
                >
                  <i className="fab fa-whatsapp me-2"></i> WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <div className="mt-2">
        <FeaturesSection />
      </div>

      {/* Nursery Visit Callout */}
      <section className="py-5 my-4">
        <div className="container">
          <div
            className="p-5 rounded-4 text-white text-center shadow-sm position-relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #1b5e20, #2e7d32)",
            }}
          >
            <h2 className="fw-bold mb-3">Visit Our Nursery in Greater Noida</h2>
            <p className="lead mx-auto mb-4" style={{ maxWidth: "680px", opacity: 0.95 }}>
              Visit our physical nursery in Greater Noida to select fresh plants in person or receive hands-on guidance from our staff for your balcony, lawn, or indoor decor.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-4 text-start mb-4">
              <div className="d-flex align-items-center gap-2">
                <i className="fas fa-location-dot fs-4 text-warning"></i>
                <span className="small">{NURSERY_ADDRESS}</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <i className="fas fa-phone fs-4 text-warning"></i>
                <a href={TEL_LINK} className="text-white text-decoration-none fw-bold">
                  {DISPLAY_PHONE}
                </a>
              </div>
            </div>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <a
                href={MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-warning text-dark px-4 py-3 rounded-pill fw-bold shadow-sm"
              >
                <i className="fas fa-map-location-dot me-2"></i> Get Directions
              </a>
              <a
                href={getWhatsAppGeneralUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light px-4 py-3 rounded-pill fw-bold"
              >
                <i className="fab fa-whatsapp me-2"></i> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
