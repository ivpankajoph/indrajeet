"use client";

import React from "react";
import Image from "next/image";
import { categories } from "@/data/categories";

interface CategoriesSectionProps {
  onCategorySelect?: (categoryId: string) => void;
}

export default function CategoriesSection({
  onCategorySelect,
}: CategoriesSectionProps) {
  const handleCategoryClick = (catId: string) => {
    if (onCategorySelect) {
      onCategorySelect(catId);
    } else {
      const el = document.getElementById("plants");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="categories-section" id="categories">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Browse by Category</div>
          <h2>Find What You Need for Your Green Space</h2>
          <p>
            Explore our curated selection of plants, pots, fertilizers, and
            growing mixes at Aardhya Green Nursery.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="col-6 col-md-4 col-lg-3 d-flex"
            >
              <div
                className="cat-card w-100"
                onClick={() => handleCategoryClick(cat.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleCategoryClick(cat.id);
                  }
                }}
              >
                <div
                  className="position-relative w-100 overflow-hidden rounded-3 mb-3"
                  style={{ height: "140px" }}
                >
                  <Image
                    src={cat.image}
                    alt={cat.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    className="cat-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h5 className="fw-bold mb-1">{cat.name}</h5>
                <p className="small text-muted mb-2">{cat.description}</p>
                <span className="cat-count">{cat.count}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
