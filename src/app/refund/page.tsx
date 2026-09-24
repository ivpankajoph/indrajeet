import React from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/common/Breadcrumb";
import { DISPLAY_PHONE, TEL_LINK, NURSERY_ADDRESS, getWhatsAppGeneralUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Return & Refund Policy | Aardhya Green Nursery Greater Noida",
  description:
    "Review the return and replacement guidelines for plants and gardening products from Aardhya Green Nursery.",
};

export default function RefundPage() {
  return (
    <div className="refund-page pb-5">
      <Breadcrumb items={[{ label: "Return/Refund Policy" }]} />

      <section
        className="py-5 text-center mb-4"
        style={{ background: "linear-gradient(135deg, #e8f5e9, #f9fdf9)" }}
      >
        <div className="container">
          <div className="section-tag d-inline-block">Customer Care</div>
          <h1 className="fw-bold mb-2" style={{ color: "var(--primary)" }}>
            Return &amp; Replacement Policy
          </h1>
          <p className="text-muted mx-auto" style={{ maxWidth: "640px" }}>
            Our commitment to delivering fresh, healthy plants and dependable gardening supplies.
          </p>
        </div>
      </section>

      <div className="container">
        <div
          className="bg-white p-4 p-md-5 rounded-4 shadow-sm border mx-auto"
          style={{ maxWidth: "860px" }}
        >
          <h4 className="fw-bold mb-3" style={{ color: "var(--primary)" }}>
            1. Live Plant Inspection on Delivery
          </h4>
          <p className="text-muted mb-4">
            Live plants are perishable nature products. We recommend inspecting your plants immediately upon delivery. If you notice any damage during transit (broken main stems, cracked pots, or severely damaged foliage), please notify our team promptly.
          </p>

          <h4 className="fw-bold mb-3" style={{ color: "var(--primary)" }}>
            2. Replacement Assistance
          </h4>
          <p className="text-muted mb-4">
            If a plant is verified to have arrived in compromised health or sustained transit damage, our nursery team will arrange a suitable replacement or store credit. Simply share a clear photograph and order detail with us on WhatsApp within 24 hours of receiving your delivery.
          </p>

          <h4 className="fw-bold mb-3" style={{ color: "var(--primary)" }}>
            3. Pots, Fertilizers &amp; Soil
          </h4>
          <p className="text-muted mb-4">
            Non-living gardening essentials like ceramic pots, planters, fertilizers, cocopeat, and soil mixes are eligible for replacement if received in damaged or opened condition.
          </p>

          <h4 className="fw-bold mb-3" style={{ color: "var(--primary)" }}>
            4. Plant Care Guidance
          </h4>
          <p className="text-muted mb-4">
            Plants sometimes experience minor stress after moving to a new environment. If you notice mild leaf drooping after arrival, reach out to our team on WhatsApp for simple watering and lighting tips to help your plant acclimate.
          </p>

          <a
            href={getWhatsAppGeneralUrl(
              "Hi Aardhya Green Nursery, I have a query regarding plant replacement/care."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success rounded-pill px-4 py-2 text-white shadow-sm mb-4"
            style={{ background: "#25d366" }}
          >
            <i className="fab fa-whatsapp me-2"></i> Contact Nursery on WhatsApp
          </a>

          <hr className="my-4" />

          <h5 className="fw-bold mb-2">Aardhya Green Nursery</h5>
          <p className="text-muted mb-0 small">
            {NURSERY_ADDRESS}<br />
            Phone: <a href={TEL_LINK} className="text-success">{DISPLAY_PHONE}</a>
          </p>
        </div>
      </div>
    </div>
  );
}
