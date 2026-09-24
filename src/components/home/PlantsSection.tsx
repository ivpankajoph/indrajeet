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
  { id: "all", label: "All Items", icon: "fas fa-border-all" },
  { id: "indoor", label: "Indoor Plants", icon: "fas fa-leaf" },
  { id: "outdoor", label: "Outdoor Plants", icon: "fas fa-tree" },
  { id: "flowering", label: "Flowering Plants", icon: "fas fa-spa" },
  { id: "fruit", label: "Fruit Plants", icon: "fas fa-apple-whole" },
  { id: "pots", label: "Pots & Planters", icon: "fas fa-seedling" },
  { id: "fertilizers", label: "Fertilizers & Manure", icon: "fas fa-flask" },
  { id: "soil", label: "Soil & Potting Mix", icon: "fas fa-mound" },
];

export default function PlantsSection({
  initialCategory = "all",
  activeCategory,
  onCategoryChange,
}: PlantsSectionProps) {
  const [internalCategory, setInternalCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);

  const currentCategory =
    activeCategory !== undefined ? activeCategory : internalCategory;

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

  // Curated collections for the 4 required H2 sections on homepage
  const indoorHighlights = useMemo(
    () => plants.filter((p) => p.category === "indoor").slice(0, 4),
    []
  );
  const outdoorHighlights = useMemo(
    () => plants.filter((p) => p.category === "outdoor").slice(0, 4),
    []
  );
  const floweringHighlights = useMemo(
    () => plants.filter((p) => p.category === "flowering").slice(0, 4),
    []
  );
  const fruitHighlights = useMemo(
    () => plants.filter((p) => p.category === "fruit").slice(0, 4),
    []
  );

  return (
    <section className="plants-section py-5" id="plants">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center mb-4">
          <div className="section-tag">Healthy Nursery Collection</div>
          <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
            Carefully maintained plants, pots, fertilizers, and potting soil with home delivery across selected Delhi NCR areas.
          </p>
        </div>

        {/* Search Box */}
        <div className="search-box mb-4 mx-auto" style={{ maxWidth: "560px" }}>
          <div className="input-group shadow-sm">
            <span className="input-group-text bg-white border-end-0">
              <i className="fas fa-search text-success"></i>
            </span>
            <input
              type="text"
              id="plantSearch"
              className="form-control border-start-0 py-2"
              placeholder="Search plants, pots, soil or fertilizers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                className="btn btn-outline-secondary border-start-0"
                type="button"
                onClick={() => setSearchQuery("")}
              >
                <i className="fas fa-times"></i>
              </button>
            )}
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs d-flex flex-wrap justify-content-center gap-2 mb-4" id="filterTabs">
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

        {/* If user is filtering or searching, show filtered grid */}
        {(currentCategory !== "all" || searchQuery.trim() !== "") ? (
          <div className="filtered-results-wrap">
            <div className="d-flex justify-content-between align-items-center mb-4 text-muted small">
              <span>
                Showing <strong>{filteredPlants.length}</strong> items
                {currentCategory !== "all" && (
                  <> in <strong>{filterOptions.find((f) => f.id === currentCategory)?.label}</strong></>
                )}
                {searchQuery && <> matching &quot;{searchQuery}&quot;</>}
              </span>
              <button
                className="btn btn-sm btn-link text-success p-0 text-decoration-none"
                onClick={() => {
                  setSearchQuery("");
                  handleCategoryClick("all");
                }}
              >
                Reset Filter
              </button>
            </div>

            {/* If the active filter is one of the 4 core plant categories, show its exact H2 */}
            {currentCategory === "indoor" && (
              <h2 className="fw-bold mb-4" style={{ color: "var(--primary)" }}>
                Indoor Plants
              </h2>
            )}
            {currentCategory === "outdoor" && (
              <h2 className="fw-bold mb-4" style={{ color: "var(--primary)" }}>
                Outdoor Plants
              </h2>
            )}
            {currentCategory === "flowering" && (
              <h2 className="fw-bold mb-4" style={{ color: "var(--primary)" }}>
                Flowering Plants
              </h2>
            )}
            {currentCategory === "fruit" && (
              <h2 className="fw-bold mb-4" style={{ color: "var(--primary)" }}>
                Fruit Plants
              </h2>
            )}

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
                  <h4>No items found</h4>
                  <p className="text-muted">
                    Try another search term or browse our categories.
                  </p>
                  <button
                    className="btn-primary-green mt-2"
                    onClick={() => {
                      setSearchQuery("");
                      handleCategoryClick("all");
                    }}
                  >
                    View All Items
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          /* Default "all" view: Renders the 4 exact H2 plant categories for SEO & aesthetics */
          <div className="plant-sections-wrapper">
            {/* 1. Indoor Plants H2 */}
            <div className="category-block mb-5" id="indoor-plants">
              <div className="d-flex justify-content-between align-items-end mb-3">
                <div>
                  <span className="badge bg-success-subtle text-success px-3 py-1 rounded-pill mb-1">
                    Air Purifying &amp; Decor
                  </span>
                  <h2 className="fw-bold mb-0" style={{ color: "var(--primary)" }}>
                    Indoor Plants
                  </h2>
                </div>
                <button
                  onClick={() => handleCategoryClick("indoor")}
                  className="btn btn-sm btn-outline-success rounded-pill px-3"
                >
                  View All Indoor <i className="fas fa-arrow-right ms-1"></i>
                </button>
              </div>
              <p className="text-muted mb-4 small">
                Beautiful plants for homes, offices and indoor spaces.
              </p>
              <div className="row g-4">
                {indoorHighlights.map((plant) => (
                  <PlantCard
                    key={plant.id}
                    plant={plant}
                    onQuickView={(p) => setSelectedPlant(p)}
                  />
                ))}
              </div>
            </div>

            {/* 2. Outdoor Plants H2 */}
            <div className="category-block mb-5" id="outdoor-plants">
              <div className="d-flex justify-content-between align-items-end mb-3">
                <div>
                  <span className="badge bg-success-subtle text-success px-3 py-1 rounded-pill mb-1">
                    Gardens &amp; Balconies
                  </span>
                  <h2 className="fw-bold mb-0" style={{ color: "var(--primary)" }}>
                    Outdoor Plants
                  </h2>
                </div>
                <button
                  onClick={() => handleCategoryClick("outdoor")}
                  className="btn btn-sm btn-outline-success rounded-pill px-3"
                >
                  View All Outdoor <i className="fas fa-arrow-right ms-1"></i>
                </button>
              </div>
              <p className="text-muted mb-4 small">
                Plants for gardens, balconies, terraces and outdoor areas.
              </p>
              <div className="row g-4">
                {outdoorHighlights.map((plant) => (
                  <PlantCard
                    key={plant.id}
                    plant={plant}
                    onQuickView={(p) => setSelectedPlant(p)}
                  />
                ))}
              </div>
            </div>

            {/* 3. Flowering Plants H2 */}
            <div className="category-block mb-5" id="flowering-plants">
              <div className="d-flex justify-content-between align-items-end mb-3">
                <div>
                  <span className="badge bg-success-subtle text-success px-3 py-1 rounded-pill mb-1">
                    Vibrant &amp; Fragrant
                  </span>
                  <h2 className="fw-bold mb-0" style={{ color: "var(--primary)" }}>
                    Flowering Plants
                  </h2>
                </div>
                <button
                  onClick={() => handleCategoryClick("flowering")}
                  className="btn btn-sm btn-outline-success rounded-pill px-3"
                >
                  View All Flowering <i className="fas fa-arrow-right ms-1"></i>
                </button>
              </div>
              <p className="text-muted mb-4 small">
                Colourful plants to brighten your home and garden.
              </p>
              <div className="row g-4">
                {floweringHighlights.map((plant) => (
                  <PlantCard
                    key={plant.id}
                    plant={plant}
                    onQuickView={(p) => setSelectedPlant(p)}
                  />
                ))}
              </div>
            </div>

            {/* 4. Fruit Plants H2 */}
            <div className="category-block mb-5" id="fruit-plants">
              <div className="d-flex justify-content-between align-items-end mb-3">
                <div>
                  <span className="badge bg-success-subtle text-success px-3 py-1 rounded-pill mb-1">
                    Home Garden Harvest
                  </span>
                  <h2 className="fw-bold mb-0" style={{ color: "var(--primary)" }}>
                    Fruit Plants
                  </h2>
                </div>
                <button
                  onClick={() => handleCategoryClick("fruit")}
                  className="btn btn-sm btn-outline-success rounded-pill px-3"
                >
                  View All Fruits <i className="fas fa-arrow-right ms-1"></i>
                </button>
              </div>
              <p className="text-muted mb-4 small">
                Healthy fruit plants for home gardens and outdoor spaces.
              </p>
              <div className="row g-4">
                {fruitHighlights.map((plant) => (
                  <PlantCard
                    key={plant.id}
                    plant={plant}
                    onQuickView={(p) => setSelectedPlant(p)}
                  />
                ))}
              </div>
            </div>

            {/* Gardening Essentials: Pots, Soil, Fertilizers */}
            <div className="category-block mb-3" id="gardening-essentials">
              <div className="d-flex justify-content-between align-items-end mb-3">
                <div>
                  <span className="badge bg-success-subtle text-success px-3 py-1 rounded-pill mb-1">
                    Gardening Essentials
                  </span>
                  <h3 className="fw-bold mb-0" style={{ color: "var(--primary)" }}>
                    Pots, Fertilizers &amp; Soil Mixes
                  </h3>
                </div>
                <div className="d-flex gap-2">
                  <button
                    onClick={() => handleCategoryClick("pots")}
                    className="btn btn-sm btn-outline-success rounded-pill px-3"
                  >
                    Pots
                  </button>
                  <button
                    onClick={() => handleCategoryClick("fertilizers")}
                    className="btn btn-sm btn-outline-success rounded-pill px-3"
                  >
                    Fertilizers
                  </button>
                  <button
                    onClick={() => handleCategoryClick("soil")}
                    className="btn btn-sm btn-outline-success rounded-pill px-3"
                  >
                    Soil
                  </button>
                </div>
              </div>
              <div className="row g-4">
                {plants
                  .filter((p) => ["pots", "fertilizers", "soil"].includes(p.category))
                  .slice(0, 4)
                  .map((item) => (
                    <PlantCard
                      key={item.id}
                      plant={item}
                      onQuickView={(p) => setSelectedPlant(p)}
                    />
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quick View Modal */}
      <PlantModal
        plant={selectedPlant}
        onClose={() => setSelectedPlant(null)}
      />
    </section>
  );
}
