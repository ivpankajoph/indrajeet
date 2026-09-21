"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getWhatsAppGeneralUrl } from "@/lib/whatsapp";

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
    { name: "Plants", href: "/#plants" },
    { name: "Categories", href: "/#categories" },
    { name: "Why Us", href: "/#features" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        boxShadow: isScrolled
          ? "0 4px 30px rgba(46,125,50,0.12)"
          : "0 2px 20px rgba(46,125,50,0.08)",
        transition: "box-shadow 0.3s ease, background 0.3s ease",
      }}
    >
      <div className="container">
        <Link href="/" className="navbar-brand text-decoration-none">
          <div className="brand-logo position-relative">
            <Image
              src="/images/logo.jpeg"
              alt="patel global green nursery logo"
              width={55}
              height={55}
              priority
              style={{ objectFit: "cover", borderRadius: "50%" }}
            />
          </div>
          Patel Global Green
        </Link>

        {/* Mobile menu toggler button */}
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
            <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
              <a
                className="btn-whatsapp text-decoration-none d-inline-flex align-items-center"
                href={getWhatsAppGeneralUrl()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp me-2 fs-5"></i> Order Now
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
