import React from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/common/Breadcrumb";
import PlantsSection from "@/components/home/PlantsSection";
import FeaturesSection from "@/components/home/FeaturesSection";

export const metadata: Metadata = {
  title: "All Plants, Pots & Garden Essentials | Aardhya Green Nursery Greater Noida",
  description:
    "Explore healthy indoor, outdoor, flowering, fruit plants, pots, fertilizers, and potting soil from Aardhya Green Nursery in Greater Noida with home delivery in Delhi NCR.",
};

export default function PlantsPage() {
  return (
    <div className="shop-page pb-5">
      <Breadcrumb items={[{ label: "Plants Catalog" }]} />

      <section
        className="py-4 mb-2 text-center"
        style={{ background: "linear-gradient(135deg, #e8f5e9, #f9fdf9)" }}
      >
        <div className="container">
          <div className="section-tag d-inline-block">Nursery Catalog</div>
          <h1 className="fw-bold mb-2" style={{ color: "var(--primary)" }}>
            Explore Our Plant &amp; Garden Collection
          </h1>
          <p className="text-muted mx-auto" style={{ maxWidth: "640px" }}>
            Fresh, healthy, hand-picked nursery plants, planters, and organic gardening essentials delivered to your doorstep across selected Delhi NCR areas.
          </p>
        </div>
      </section>

      <PlantsSection initialCategory="all" />

      <div className="mt-5">
        <FeaturesSection />
      </div>
    </div>
  );
}
