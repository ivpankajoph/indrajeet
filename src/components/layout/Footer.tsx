import React from "react";
import Link from "next/link";
import Image from "next/image";
import { DISPLAY_PHONE, EMAIL_ADDRESS, NURSERY_ADDRESS, getWhatsAppGeneralUrl } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row gy-5">
          {/* Company */}
          <div className="col-lg-4">
            <Link href="/" className="navbar-brand text-decoration-none d-inline-flex mb-3">
              <div className="brand-logo me-2">
                <Image
                  src="/images/logo.jpeg"
                  alt="patel global green nursery logo"
                  width={55}
                  height={55}
                  style={{ objectFit: "cover", borderRadius: "50%" }}
                />
              </div>
              Patel Global Green
            </Link>

            <div>
              <p className="footer-about">
                Delhi NCR&apos;s trusted online nursery providing healthy plants,
                premium pots, gardening essentials and fast home delivery.
              </p>
            </div>

            <div className="social-links mt-3">
              <a
                href="https://www.instagram.com/patel_globalgreen?utm_source=qr&igsh=czVha3FycHBkcnV3"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>

              <a
                href="https://youtube.com/@patel_globalgreen?si=dfnGYIZ4Oc5q6mry"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <i className="fab fa-youtube"></i>
              </a>

              <a
                href={getWhatsAppGeneralUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Categories */}
          <div className="col-6 col-lg-2">
            <h5>Categories</h5>
            <ul className="footer-links list-unstyled">
              <li><Link href="/categories/indoor">Indoor Plants</Link></li>
              <li><Link href="/categories/outdoor">Outdoor Plants</Link></li>
              <li><Link href="/categories/flowering">Flowering Plants</Link></li>
              <li><Link href="/categories/succulents">Succulents</Link></li>
              <li><Link href="/categories/bonsai">Bonsai</Link></li>
              <li><Link href="/categories/herbs">Herbs</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-lg-2">
            <h5>Quick Links</h5>
            <ul className="footer-links list-unstyled">
              <li><Link href="/#home">Home</Link></li>
              <li><Link href="/plants">Shop</Link></li>
              <li><Link href="/#features">Why Choose Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/#payment">Payments</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-4">
            <h5>Contact Us</h5>
            <ul className="footer-contact list-unstyled">
              <li>
                <i className="fas fa-location-dot"></i>
                {NURSERY_ADDRESS}
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <a href={`tel:${DISPLAY_PHONE.replace(/\s+/g, "")}`}>
                  {DISPLAY_PHONE}
                </a>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <a href={`mailto:${EMAIL_ADDRESS}`}>
                  {EMAIL_ADDRESS}
                </a>
              </li>
              <li>
                <i className="fas fa-truck-fast"></i>
                Free Delivery Across Delhi NCR
              </li>
            </ul>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <p>© 2025 Patel Global Green Nursery. All Rights Reserved.</p>
          <p>Made with ❤️ for Plant Lovers</p>
        </div>
      </div>
    </footer>
  );
}
