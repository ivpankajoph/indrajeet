import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  DISPLAY_PHONE,
  TEL_LINK,
  EMAIL_ADDRESS,
  NURSERY_ADDRESS,
  getWhatsAppGeneralUrl,
} from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row gy-5">
          {/* Brand Info */}
          <div className="col-lg-4">
            <Link
              href="/"
              className="navbar-brand text-decoration-none d-inline-flex align-items-center mb-3"
            >
              <div className="brand-logo me-2 rounded-circle overflow-hidden bg-white p-1 shadow-sm d-flex align-items-center justify-content-center">
                <Image
                  src="/images/logo.png"
                  alt="Aardhya Green Nursery logo"
                  width={50}
                  height={50}
                  style={{ objectFit: "contain", borderRadius: "50%" }}
                />
              </div>
              <span className="fw-bold fs-5 text-white">Aardhya Green Nursery</span>
            </Link>

            <div>
              <p className="footer-about">
                Healthy plants, gardening essentials and plant care services in
                Greater Noida, with home delivery across selected Delhi NCR areas.
              </p>
            </div>

            <div className="social-links mt-3">
              <a
                href={getWhatsAppGeneralUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              <a
                href={TEL_LINK}
                aria-label="Call"
              >
                <i className="fas fa-phone"></i>
              </a>
            </div>
          </div>

          {/* Core Links */}
          <div className="col-6 col-lg-2">
            <h5>Nursery Links</h5>
            <ul className="footer-links list-unstyled">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/#plants">Plants</Link></li>
              <li><Link href="/#services">Services</Link></li>
              <li><Link href="/#gardening">Gardening</Link></li>
              <li><Link href="/#landscaping">Landscaping</Link></li>
            </ul>
          </div>

          {/* Policy & Help Links (All 11 links per Requirement 14) */}
          <div className="col-6 col-lg-2">
            <h5>Policies &amp; Info</h5>
            <ul className="footer-links list-unstyled">
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms &amp; Conditions</Link></li>
              <li><Link href="/shipping">Shipping &amp; Delivery</Link></li>
              <li><Link href="/refund">Return/Refund Policy</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="col-lg-4">
            <h5>Visit &amp; Contact</h5>
            <ul className="footer-contact list-unstyled">
              <li>
                <i className="fas fa-location-dot"></i>
                <span>{NURSERY_ADDRESS}</span>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <a href={TEL_LINK}>
                  {DISPLAY_PHONE}
                </a>
              </li>
              <li>
                <i className="fab fa-whatsapp"></i>
                <a
                  href={getWhatsAppGeneralUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: {DISPLAY_PHONE}
                </a>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <a href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a>
              </li>
              <li>
                <i className="fas fa-truck-fast"></i>
                <span>Home Delivery Across Selected Delhi NCR Areas</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Aardhya Green Nursery. All Rights Reserved.</p>
          <p>Greater Noida • Delhi NCR</p>
        </div>
      </div>
    </footer>
  );
}
