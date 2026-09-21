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
              <div className="hero-badge">🌿 Delhi NCR&apos;s Premium Online Nursery</div>
              <h1>
                Bring <span>Nature</span> to
                <br />
                Your Doorstep
              </h1>
              <p className="hero-sub">
                Order fresh plants, tools &amp; garden accessories online. Get{" "}
                <strong>next-day free home delivery</strong> across all of Delhi NCR —
                from our garden to yours.
              </p>
              <div className="hero-cta d-flex flex-wrap gap-3">
                <Link href="#plants" className="btn-primary-green text-decoration-none">
                  <i className="fas fa-seedling me-2"></i> Shop Plants
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
                    Next Day Delivery <span className="free-badge">FREE</span>
                  </div>

                  <div className="delivery-text">
                    Available across <strong>entire Delhi NCR</strong> — Order before
                    midnight!
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
                      alt="Nursery"
                      fill
                      priority
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>

                <div className="hero-float-card card-delivery d-flex align-items-center">
                  <i className="fas fa-truck-fast icon"></i>
                  <div>
                    <div className="label">FAST DELIVERY</div>
                    <div className="val">Free Next Day</div>
                  </div>
                </div>

                <div className="hero-float-card card-rating d-flex align-items-center">
                  <i className="fas fa-shield-heart icon"></i>
                  <div>
                    <div className="label">QUALITY GUARANTEE</div>
                    <div className="val">Fresh Plants</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <div className="stats-strip">
        <div className="container">
          <div className="row g-4 text-center">
            <div className="col-6 col-md-3">
              <div className="stat-item">
                <div className="stat-num">500+</div>
                <div className="stat-label">Plant Varieties</div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat-item">
                <div className="stat-num">10K+</div>
                <div className="stat-label">Happy Customers</div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat-item">
                <div className="stat-num">1-Day</div>
                <div className="stat-label">Free Delivery</div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat-item">
                <div className="stat-num">100%</div>
                <div className="stat-label">Organic &amp; Healthy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
