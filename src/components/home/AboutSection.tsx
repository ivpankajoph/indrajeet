import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getWhatsAppGeneralUrl } from "@/lib/whatsapp";

export default function AboutSection() {
  return (
    <section className="about-section py-5" id="about">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div
              className="position-relative overflow-hidden rounded-4 shadow-sm"
              style={{ minHeight: "380px", height: "100%" }}
            >
              <Image
                src="/images/nursery.avif"
                alt="Aardhya Green Nursery Greater Noida"
                fill
                sizes="(max-width: 992px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="section-tag mb-2">Local Plant Nursery</div>
            <h2 className="fw-bold mb-3" style={{ color: "var(--primary)" }}>
              About Aardhya Green Nursery
            </h2>
            <p className="lead text-muted mb-4" style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
              Aardhya Green Nursery is a local plant nursery in Greater Noida offering a wide range of indoor, outdoor, flowering and fruit plants for homes, offices, gardens and landscaping requirements. We also provide pots, fertilizers, manure, soil and other gardening essentials. Our team helps customers choose suitable plants based on their space and requirements. Home delivery is available across selected Delhi NCR areas.
            </p>

            <p className="text-muted mb-4" style={{ fontSize: "0.95rem" }}>
              We serve customers across Greater Noida, Noida, Ghaziabad, and nearby Delhi NCR neighborhoods with carefully maintained, robust plants and personalized guidance for healthy, vibrant green spaces.
            </p>

            <div className="d-flex flex-wrap gap-3">
              <Link href="#plants" className="btn-primary-green text-decoration-none">
                <i className="fas fa-seedling me-2"></i> Browse Our Collection
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
  );
}
