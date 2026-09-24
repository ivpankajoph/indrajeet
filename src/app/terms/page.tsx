import React from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/common/Breadcrumb";
import { DISPLAY_PHONE, TEL_LINK, EMAIL_ADDRESS, NURSERY_ADDRESS } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Terms & Conditions | Aardhya Green Nursery",
  description: "Terms and conditions, delivery policy, and replacement policy for Aardhya Green Nursery in Greater Noida.",
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
            1. Home Delivery Policy
          </h4>
          <p className="text-muted mb-4">
            Aardhya Green Nursery provides home plant delivery across selected areas in Delhi NCR, including Greater Noida, Noida, and Ghaziabad. Plants are hand-packed carefully in protective wrappers to preserve root balls and foliage.
          </p>

          <h4 className="fw-bold mb-3" style={{ color: "var(--primary)" }}>
            2. Plant Quality &amp; Replacement
          </h4>
          <p className="text-muted mb-4">
            If a plant arrives damaged in transit or shows severe signs of shock that cannot be revived, we provide replacement assistance. Please share a photo of the affected plant on WhatsApp within 24 hours of receipt.
          </p>

          <h4 className="fw-bold mb-3" style={{ color: "var(--primary)" }}>
            3. Pricing &amp; Payments
          </h4>
          <p className="text-muted mb-4">
            All prices are transparent nursery-direct rates. Payment can be made via UPI (Paytm, PhonePe, GPay) or Cash on Delivery upon inspection of your order.
          </p>

          <h4 className="fw-bold mb-3" style={{ color: "var(--primary)" }}>
            4. Nursery Location &amp; Contact
          </h4>
          <p className="text-muted mb-0">
            <strong>Aardhya Green Nursery</strong><br />
            {NURSERY_ADDRESS}<br />
            Phone: <a href={TEL_LINK} className="text-success">{DISPLAY_PHONE}</a><br />
            Email: {EMAIL_ADDRESS}
          </p>
        </div>
      </div>
    </div>
  );
}
