import React from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/common/Breadcrumb";
import { DISPLAY_PHONE, TEL_LINK, NURSERY_ADDRESS, getWhatsAppGeneralUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Shipping & Delivery | Aardhya Green Nursery Greater Noida",
  description:
    "Learn about plant delivery across selected Delhi NCR areas from Aardhya Green Nursery in Greater Noida.",
};

export default function ShippingPage() {
  return (
    <div className="shipping-page pb-5">
      <Breadcrumb items={[{ label: "Shipping & Delivery" }]} />

      <section
        className="py-5 text-center mb-4"
        style={{ background: "linear-gradient(135deg, #e8f5e9, #f9fdf9)" }}
      >
        <div className="container">
          <div className="section-tag d-inline-block">Service Areas</div>
          <h1 className="fw-bold mb-2" style={{ color: "var(--primary)" }}>
            Shipping &amp; Home Delivery Policy
          </h1>
          <p className="text-muted mx-auto" style={{ maxWidth: "640px" }}>
            Safe and reliable plant delivery from our Greater Noida nursery directly to your home.
          </p>
        </div>
      </section>

      <div className="container">
        <div
          className="bg-white p-4 p-md-5 rounded-4 shadow-sm border mx-auto"
          style={{ maxWidth: "860px" }}
        >
          <h4 className="fw-bold mb-3" style={{ color: "var(--primary)" }}>
            1. Service Locations
          </h4>
          <p className="text-muted mb-4">
            Aardhya Green Nursery provides home plant delivery across selected areas in Delhi NCR, including Greater Noida, Noida, Ghaziabad, and nearby neighborhoods. Delivery coverage depends on your exact pin code and order size.
          </p>

          <h4 className="fw-bold mb-3" style={{ color: "var(--primary)" }}>
            2. Careful Plant Packaging
          </h4>
          <p className="text-muted mb-4">
            Every plant is watered and inspected before dispatch. Our team hand-packs each pot or bag with protective wrapping so that leaves, branches, and root systems arrive intact and ready to thrive.
          </p>

          <h4 className="fw-bold mb-3" style={{ color: "var(--primary)" }}>
            3. Delivery Timelines &amp; Charges
          </h4>
          <p className="text-muted mb-4">
            Delivery slots are coordinated directly over WhatsApp or phone call. Delivery fees vary depending on the distance from our Greater Noida nursery grounds and the total volume of plants or potting materials ordered.
          </p>

          <h4 className="fw-bold mb-3" style={{ color: "var(--primary)" }}>
            4. Check Delivery at Your Pin Code
          </h4>
          <p className="text-muted mb-4">
            To confirm whether your location is currently covered for home delivery, please send us your location details on WhatsApp.
          </p>
          <a
            href={getWhatsAppGeneralUrl(
              "Hi Aardhya Green Nursery, I want to check delivery availability at my pin code."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success rounded-pill px-4 py-2 text-white shadow-sm mb-4"
            style={{ background: "#25d366" }}
          >
            <i className="fab fa-whatsapp me-2"></i> Check Delivery on WhatsApp
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
