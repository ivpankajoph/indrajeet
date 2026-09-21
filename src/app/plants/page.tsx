import React from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/common/Breadcrumb";
import PlantsSection from "@/components/home/PlantsSection";
import FeaturesSection from "@/components/home/FeaturesSection";

export const metadata: Metadata = {
  title: "Shop All Plants | Buy Plants Online in Delhi NCR | Patel Global Green",
  description:
    "Browse over 500+ healthy nursery plants including indoor plants, outdoor shrubs, bonsai, flowering plants, fruit trees, and gardening essentials with next-day free delivery in Noida and Delhi NCR.",
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
            Explore Our Entire Collection
          </h1>
          <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
            Fresh, healthy, hand-picked nursery plants delivered directly to your
            doorstep with next-day free home delivery across Delhi NCR.
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
