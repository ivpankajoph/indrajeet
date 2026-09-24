"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getWhatsAppGeneralUrl, DISPLAY_PHONE, TEL_LINK } from "@/lib/whatsapp";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Plants", href: "/#plants" },
    { name: "Services", href: "/#services" },
    { name: "Why Us", href: "/#features" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav
      className="navbar navbar-expand-lg sticky-top bg-white"
      style={{
        boxShadow: isScrolled
          ? "0 4px 30px rgba(46,125,50,0.12)"
          : "0 2px 20px rgba(46,125,50,0.08)",
        transition: "box-shadow 0.3s ease, background 0.3s ease",
      }}
    >
      <div className="container">
        <Link href="/" className="navbar-brand text-decoration-none d-flex align-items-center gap-2">
          <div className="brand-logo position-relative">
            <Image
              src="/images/logo.png"
              alt="Aardhya Green Nursery logo"
              width={52}
              height={52}
              priority
              style={{ objectFit: "contain", borderRadius: "50%" }}
            />
          </div>
          <span className="fw-bold" style={{ color: "var(--primary)", fontSize: "1.2rem" }}>
            Aardhya Green Nursery
          </span>
        </Link>

        {/* Call button on mobile header */}
        <div className="d-flex align-items-center gap-2 d-lg-none">
          <a
            href={TEL_LINK}
            className="btn btn-sm btn-outline-success rounded-circle d-flex align-items-center justify-content-center p-2"
            aria-label="Call Aardhya Green Nursery"
            style={{ width: "38px", height: "38px" }}
          >
            <i className="fas fa-phone"></i>
          </a>

          <button
            className="navbar-toggler border-0 p-2"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation"
            style={{
              outline: "none",
              boxShadow: "none",
              background: "transparent",
              cursor: "pointer",
            }}
          >
            <i className={`fas ${mobileMenuOpen ? "fa-xmark" : "fa-bars"} fs-4 text-success`}></i>
          </button>
        </div>

        {/* Desktop & Mobile Menu */}
        <div
          className={`navbar-collapse ${mobileMenuOpen ? "show" : ""}`}
          id="navMenu"
        >
          <ul className="navbar-nav ms-auto align-items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.name} className="nav-item">
                <Link
                  className="nav-link px-3"
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="nav-item d-none d-xl-block ms-2">
              <a
                href={TEL_LINK}
                className="nav-link text-success fw-semibold d-flex align-items-center"
              >
                <i className="fas fa-phone me-1 small"></i> {DISPLAY_PHONE}
              </a>
            </li>
            <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
              <a
                className="btn-whatsapp text-decoration-none d-inline-flex align-items-center"
                href={getWhatsAppGeneralUrl()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp me-2 fs-5"></i> WhatsApp Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
