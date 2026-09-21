import React from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/common/Breadcrumb";
import { DISPLAY_PHONE, EMAIL_ADDRESS, NURSERY_ADDRESS } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Terms & Conditions | Patel Global Green Nursery",
  description: "Terms and conditions, delivery policy, and replacement guarantee for Patel Global Green Nursery.",
};

export default function TermsPage() {
  return (
    <div className="terms-page pb-5">
      <Breadcrumb items={[{ label: "Terms & Conditions" }]} />

      <section
        className="py-4 mb-4 text-center"
        style={{ background: "linear-gradient(135deg, #e8f5e9, #f9fdf9)" }}
      >
        <div className="container">
          <h1 className="fw-bold" style={{ color: "var(--primary)" }}>
            Terms &amp; Conditions
          </h1>
          <p className="text-muted">Our customer commitment and service policies</p>
        </div>
      </section>

      <div className="container">
        <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm border mx-auto" style={{ maxWidth: "860px" }}>
          <h4 className="fw-bold mb-3" style={{ color: "var(--primary)" }}>
            1. Next-Day Free Delivery Policy
          </h4>
          <p className="text-muted mb-4">
            Orders confirmed before 11:59 PM qualify for free next-day doorstep delivery across Noida, Greater Noida, Ghaziabad, Delhi, and Gurgaon. Plants are packaged in eco-friendly protective wrappers to keep foliage pristine and root balls moist.
          </p>

          <h4 className="fw-bold mb-3" style={{ color: "var(--primary)" }}>
            2. Easy Replacement Guarantee
          </h4>
          <p className="text-muted mb-4">
            If a plant arrives damaged in transit, with broken stems, or shows signs of transit shock that cannot be revived, we provide an immediate replacement — no questions asked. Simply send a photo of the damaged plant to our WhatsApp support within 24 hours of delivery.
          </p>

          <h4 className="fw-bold mb-3" style={{ color: "var(--primary)" }}>
            3. Pricing &amp; Payments
          </h4>
          <p className="text-muted mb-4">
            All prices shown are inclusive of applicable taxes. Payment may be completed via Paytm UPI, PhonePe UPI, or Cash on Delivery (COD) upon inspection at your doorstep.
          </p>

          <h4 className="fw-bold mb-3" style={{ color: "var(--primary)" }}>
            4. Nursery Location &amp; Contact
          </h4>
          <p className="text-muted mb-0">
            Patel Global Green Nursery<br />
            {NURSERY_ADDRESS}<br />
            Phone: {DISPLAY_PHONE}<br />
            Email: {EMAIL_ADDRESS}
          </p>
        </div>
      </div>
    </div>
  );
}
