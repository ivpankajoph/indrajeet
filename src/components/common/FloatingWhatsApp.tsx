"use client";

import React from "react";
import { getWhatsAppGeneralUrl } from "@/lib/whatsapp";

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="WhatsApp Support">
      <a
        href={getWhatsAppGeneralUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-btn text-decoration-none shadow-lg d-flex align-items-center gap-2"
        aria-label="Chat with Aardhya Green Nursery on WhatsApp"
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          backgroundColor: "#25d366",
          color: "#ffffff",
          borderRadius: "50px",
          padding: "12px 20px",
          fontWeight: 600,
          fontSize: "0.95rem",
          zIndex: 9999,
          boxShadow: "0 8px 24px rgba(37, 211, 102, 0.4)",
          transition: "transform 0.25s ease, box-shadow 0.25s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        <i className="fab fa-whatsapp fs-4"></i>
        <span>WhatsApp Us</span>
      </a>
    </aside>
  );
}
