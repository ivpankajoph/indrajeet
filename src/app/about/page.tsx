import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumb from "@/components/common/Breadcrumb";
import FeaturesSection from "@/components/home/FeaturesSection";
import { DISPLAY_PHONE, EMAIL_ADDRESS, NURSERY_ADDRESS, getWhatsAppGeneralUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "About Us | Patel Global Green Nursery Noida",
  description:
    "Discover the story of Patel Global Green Nursery, Delhi NCR's trusted green destination providing nursery-direct healthy plants, organic soil, and next-day free delivery.",
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
          <div className="section-tag d-inline-block">Our Story</div>
          <h1 className="display-5 fw-bold mb-3" style={{ color: "var(--primary)" }}>
            Growing Happiness, One Plant at a Time
          </h1>
          <p className="lead text-muted mx-auto" style={{ maxWidth: "720px" }}>
            Welcome to <strong>Patel Global Green Nursery</strong>, where our passion for
            nature transforms homes, offices, balconies, and gardens across Delhi NCR into
            vibrant green sanctuaries.
          </p>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div
                className="position-relative overflow-hidden rounded-4 shadow-lg"
                style={{ height: "420px" }}
              >
                <Image
                  src="/images/nursery.avif"
                  alt="Patel Global Green Nursery Grounds"
                  fill
                  priority
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <span className="badge bg-success-subtle text-success px-3 py-2 rounded-pill mb-3">
                Rooted in Excellence
              </span>
              <h2 className="fw-bold mb-3" style={{ color: "var(--primary)" }}>
                From Our Garden Straight to Your Doorstep
              </h2>
              <p className="text-muted mb-3" style={{ lineHeight: "1.7" }}>
                Based conveniently at Atul Marg, Amrapali Leisure Valley in Noida,
                Patel Global Green is dedicated to making plant parenthood effortless,
                accessible, and joyful. We nurture over 500+ plant varieties ranging from
                air-purifying indoor pothos and peace lilies to exotic bonsai, fragrant
                jasmines, fruit plants, and organic potting mixes.
              </p>
              <p className="text-muted mb-4" style={{ lineHeight: "1.7" }}>
                By delivering straight from our extensive nursery grounds, we eliminate
                middlemen to provide the freshest, healthiest greenery at the most honest
                nursery-direct rates. Every order placed by midnight qualifies for next-day
                free delivery across Noida, Greater Noida, Ghaziabad, Delhi, and Gurgaon.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <Link href="/plants" className="btn-primary-green text-decoration-none">
                  <i className="fas fa-leaf me-2"></i> Explore Our Plants
                </Link>
                <a
                  href={getWhatsAppGeneralUrl("Hi Patel Global Green! I'd like to know more about your nursery.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-green text-decoration-none"
                >
                  <i className="fab fa-whatsapp me-2"></i> Chat with Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <div className="mt-4">
        <FeaturesSection />
      </div>

      {/* Nursery Visit Callout */}
      <section className="py-5 my-4">
        <div className="container">
          <div
            className="p-5 rounded-4 text-white text-center shadow-lg position-relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #1b5e20, #2e7d32)",
            }}
          >
            <h2 className="fw-bold mb-3">Visit Our Nursery in Noida</h2>
            <p className="lead mx-auto mb-4" style={{ maxWidth: "680px", opacity: 0.9 }}>
              Experience the tranquility of thousands of blooming plants in person. Walk
              through our greenhouses and pick your favorites with guidance from our
              botanical experts.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-4 text-start mb-4">
              <div className="d-flex align-items-center gap-2">
                <i className="fas fa-location-dot fs-4 text-warning"></i>
                <span>{NURSERY_ADDRESS}</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <i className="fas fa-phone fs-4 text-warning"></i>
                <span>{DISPLAY_PHONE}</span>
              </div>
            </div>
            <a
              href={`https://wa.me/917292009034?text=${encodeURIComponent("Hi! I'd like directions to visit Patel Global Green Nursery.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-warning text-dark px-4 py-3 rounded-pill fw-bold"
            >
              <i className="fab fa-whatsapp me-2"></i> Get Directions on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
