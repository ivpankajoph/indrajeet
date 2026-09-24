import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getWhatsAppGeneralUrl } from "@/lib/whatsapp";

export default function HeroSection() {
  return (
    <>
      {/* HERO */}
      <section className="hero" id="home">
        <span className="leaf-float">🍃</span>
        <span className="leaf-float">🌿</span>
        <span className="leaf-float">🌱</span>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="hero-badge">
                🌿 Your Local Plant Nursery in Greater Noida
              </div>
              <h1>
                Bring <span>Fresh Greenery</span> to
                <br />
                Your Home
              </h1>
              <p className="hero-sub">
                Discover healthy indoor, outdoor, flowering and fruit plants at{" "}
                <strong>Aardhya Green Nursery</strong>. We also offer pots,
                fertilizers, manure, soil and gardening essentials with home
                delivery across selected Delhi NCR areas.
              </p>
              <div className="hero-cta d-flex flex-wrap gap-3">
                <Link
                  href="#plants"
                  className="btn-primary-green text-decoration-none"
                >
                  <i className="fas fa-seedling me-2"></i> Browse Plants
                </Link>
                <a
                  href={getWhatsAppGeneralUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-green text-decoration-none"
                >
                  <i className="fab fa-whatsapp me-1"></i> WhatsApp Us
                </a>
              </div>

              <div className="delivery-banner mt-5">
                <div className="delivery-icon-wrap">
                  <i className="fas fa-truck-fast"></i>
                </div>

                <div>
                  <div className="delivery-title">
                    Home Delivery Available
                  </div>

                  <div className="delivery-text">
                    Serving <strong>Greater Noida, Noida &amp; selected Delhi NCR areas</strong>.
                    Contact us on WhatsApp to verify delivery at your pin code!
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 d-none d-lg-block">
              <div className="hero-image-wrap position-relative">
                <div
                  style={{
                    width: "100%",
                    maxWidth: "520px",
                    height: "480px",
                    background: "linear-gradient(135deg, #c8e6c9, #e8f5e9)",
                    borderRadius: "30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "12rem",
                    boxShadow: "0 30px 80px rgba(46, 125, 50, 0.2)",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <div className="hero-img-box w-100 h-100 position-relative">
                    <Image
                      src="/images/nursery.avif"
                      alt="Aardhya Green Nursery Grounds in Greater Noida"
                      fill
                      priority
                      sizes="(max-width: 1200px) 50vw, 520px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>

                <div className="hero-float-card card-delivery d-flex align-items-center">
                  <i className="fas fa-truck-fast icon"></i>
                  <div>
                    <div className="label">HOME DELIVERY</div>
                    <div className="val">Selected NCR Areas</div>
                  </div>
                </div>

                <div className="hero-float-card card-rating d-flex align-items-center">
                  <i className="fas fa-shield-heart icon"></i>
                  <div>
                    <div className="label">LOCAL NURSERY</div>
                    <div className="val">Greater Noida</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS / HIGHLIGHTS STRIP - Requirement 5 (No false claims) */}
      <div className="stats-strip">
        <div className="container">
          <div className="row g-4 text-center">
            <div className="col-6 col-md-3">
              <div className="stat-item">
                <div className="stat-icon-feature mb-2 text-success fs-3">
                  <i className="fas fa-leaf"></i>
                </div>
                <div className="stat-num" style={{ fontSize: "1.25rem" }}>
                  Healthy Plants
                </div>
                <div className="stat-label">
                  Fresh and carefully maintained plants
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat-item">
                <div className="stat-icon-feature mb-2 text-success fs-3">
                  <i className="fas fa-truck"></i>
                </div>
                <div className="stat-num" style={{ fontSize: "1.25rem" }}>
                  Home Delivery
                </div>
                <div className="stat-label">
                  Delivery across selected Delhi NCR areas
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat-item">
                <div className="stat-icon-feature mb-2 text-success fs-3">
                  <i className="fas fa-hand-holding-heart"></i>
                </div>
                <div className="stat-num" style={{ fontSize: "1.25rem" }}>
                  Expert Guidance
                </div>
                <div className="stat-label">
                  Help with plant selection and basic care
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat-item">
                <div className="stat-icon-feature mb-2 text-success fs-3">
                  <i className="fas fa-location-dot"></i>
                </div>
                <div className="stat-num" style={{ fontSize: "1.25rem" }}>
                  Local Nursery
                </div>
                <div className="stat-label">
                  Visit our nursery in Greater Noida
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
