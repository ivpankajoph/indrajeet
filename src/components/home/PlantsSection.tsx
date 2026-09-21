"use client";

import React, { useState, useMemo } from "react";
import { plants, Plant } from "@/data/plants";
import PlantCard from "./PlantCard";
import PlantModal from "@/components/common/PlantModal";

interface PlantsSectionProps {
  initialCategory?: string;
  activeCategory?: string;
  onCategoryChange?: (category: string) => void;
}

const filterOptions = [
  { id: "all", label: "All Plants" },
  { id: "indoor", label: "🪴 Indoor" },
  { id: "outdoor", label: "🌳 Outdoor" },
  { id: "flowering", label: "🌸 Flowering" },
  { id: "succulents", label: "🌵 Succulents" },
  { id: "herbs", label: "🌿 Herbs" },
  { id: "fruit", label: "🍋 Fruit" },
  { id: "bonsai", label: "🎋 Bonsai" },
  { id: "climbers", label: "🌱 Climbers" },
  { id: "pots", label: "Pots", icon: "fa-solid fa-seedling" },
  { id: "soil", label: "Soil", icon: "fa-solid fa-mound" },
];

export default function PlantsSection({
  initialCategory = "all",
  activeCategory,
  onCategoryChange,
}: PlantsSectionProps) {
  const [internalCategory, setInternalCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);

  const currentCategory = activeCategory !== undefined ? activeCategory : internalCategory;

  const handleCategoryClick = (catId: string) => {
    setSearchQuery("");
    if (onCategoryChange) {
      onCategoryChange(catId);
    } else {
      setInternalCategory(catId);
    }
  };

  const filteredPlants = useMemo(() => {
    return plants.filter((plant) => {
      const matchesCategory =
        currentCategory === "all" || plant.category === currentCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const query = searchQuery.toLowerCase().trim();
      const matchesName = plant.name.toLowerCase().includes(query);
      const matchesSci = plant.scientificName.toLowerCase().includes(query);
      const matchesBenefit = plant.benefits?.some((b) =>
        b.toLowerCase().includes(query)
      );

      return matchesName || matchesSci || matchesBenefit;
    });
  }, [currentCategory, searchQuery]);

  return (
    <section className="plants-section" id="plants">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Our Collection</div>
          <h2>Fresh Plants, Ready to Deliver</h2>
          <p>
            All plants are healthy, nursery-grown, and packed carefully for safe
            delivery to your home.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs" id="filterTabs">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              className={`filter-btn ${currentCategory === opt.id ? "active" : ""}`}
              onClick={() => handleCategoryClick(opt.id)}
            >
              {opt.icon && <i className={`${opt.icon} me-1`}></i>}
              {opt.label}
            </button>
          ))}
        </div>

        {/* Search Box */}
        <div className="search-box mb-4">
          <input
            type="text"
            id="plantSearch"
            className="form-control"
            placeholder="🔍 Search plants..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Results stats */}
        <div className="d-flex justify-content-between align-items-center mb-3 text-muted" style={{ fontSize: "0.9rem" }}>
          <span>
            Showing <strong>{filteredPlants.length}</strong> of {plants.length} plants
            {currentCategory !== "all" && ` in ${filterOptions.find(f => f.id === currentCategory)?.label}`}
          </span>
          {searchQuery && (
            <button
              className="btn btn-sm btn-link text-success p-0 text-decoration-none"
              onClick={() => setSearchQuery("")}
            >
              Clear search
            </button>
          )}
        </div>

        {/* Plants Grid */}
        <div className="row g-4" id="plantGrid">
          {filteredPlants.map((plant) => (
            <PlantCard
              key={plant.id}
              plant={plant}
              onQuickView={(p) => setSelectedPlant(p)}
            />
          ))}

          {filteredPlants.length === 0 && (
            <div className="col-12 text-center py-5">
              <div className="display-4 text-muted mb-3">🌱</div>
              <h4>No plants found</h4>
              <p className="text-muted">
                Try a different search term or category filter.
              </p>
              <button
                className="btn-primary-green mt-2"
                onClick={() => {
                  setSearchQuery("");
                  handleCategoryClick("all");
                }}
              >
                View All Plants
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Quick View Modal */}
      <PlantModal
        plant={selectedPlant}
        onClose={() => setSelectedPlant(null)}
      />
    </section>
  );
}
