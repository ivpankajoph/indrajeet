import React from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/common/Breadcrumb";
import { DISPLAY_PHONE, EMAIL_ADDRESS, NURSERY_ADDRESS } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Privacy Policy | Patel Global Green Nursery",
  description: "Privacy policy and customer data handling at Patel Global Green Nursery.",
};

export default function PrivacyPage() {
  return (
    <div className="privacy-page pb-5">
      <Breadcrumb items={[{ label: "Privacy Policy" }]} />

      <section
        className="py-4 mb-4 text-center"
        style={{ background: "linear-gradient(135deg, #e8f5e9, #f9fdf9)" }}
      >
        <div className="container">
          <h1 className="fw-bold" style={{ color: "var(--primary)" }}>
            Privacy Policy
          </h1>
          <p className="text-muted">How we respect and protect your personal information</p>
        </div>
      </section>

      <div className="container">
        <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm border mx-auto" style={{ maxWidth: "860px" }}>
          <h4 className="fw-bold mb-3" style={{ color: "var(--primary)" }}>
            1. Information Collection
          </h4>
          <p className="text-muted mb-4">
            We only collect information necessary to fulfill your plant order and ensure safe delivery, such as your name, delivery address, phone number, and WhatsApp contact details.
          </p>

          <h4 className="fw-bold mb-3" style={{ color: "var(--primary)" }}>
            2. Use of Information
          </h4>
          <p className="text-muted mb-4">
            Your contact details are strictly used to coordinate dispatch schedules, send tracking updates, and share plant care recommendations. We never sell, rent, or trade customer information to third parties.
          </p>

          <h4 className="fw-bold mb-3" style={{ color: "var(--primary)" }}>
            3. WhatsApp Communication
          </h4>
          <p className="text-muted mb-4">
            When you contact or order via WhatsApp, conversations are encrypted under WhatsApp&apos;s end-to-end security protocols. You may opt out of promotional messages at any time by messaging &quot;STOP&quot;.
          </p>

          <h4 className="fw-bold mb-3" style={{ color: "var(--primary)" }}>
            4. Inquiries
          </h4>
          <p className="text-muted mb-0">
            For questions about data protection or your orders:<br />
            Patel Global Green Nursery<br />
            {NURSERY_ADDRESS}<br />
            Email: {EMAIL_ADDRESS} | Phone: {DISPLAY_PHONE}
          </p>
        </div>
      </div>
    </div>
  );
}
