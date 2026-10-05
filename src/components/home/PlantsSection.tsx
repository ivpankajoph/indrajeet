"use client";

import React, { useState, useMemo, useEffect, useCallback } from "react";
import { Plant } from "@/data/plants";
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
  const [plantsList, setPlantsList] = useState<Plant[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [internalCategory, setInternalCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);

  const fetchPlants = useCallback(async () => {
    try {
      const res = await fetch("/api/plants");
      const data = await res.json();
      if (data.success && Array.isArray(data.data)) {
        setPlantsList(data.data);
      } else {
        setPlantsList([]);
      }
    } catch (err) {
      console.error("Error fetching plants:", err);
      setPlantsList([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleRefresh = () => {
    setLoading(true);
    fetchPlants();
  };

  useEffect(() => {
    fetchPlants();
  }, [fetchPlants]);

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
    return plantsList.filter((plant) => {
      const matchesCategory =
        currentCategory === "all" || plant.category === currentCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const query = searchQuery.toLowerCase().trim();
      const matchesName = plant.name?.toLowerCase().includes(query);
      const matchesSci = plant.scientificName?.toLowerCase().includes(query);
      const matchesBenefit = plant.benefits?.some((b) =>
        b.toLowerCase().includes(query)
      );

      return matchesName || matchesSci || matchesBenefit;
    });
  }, [plantsList, currentCategory, searchQuery]);

  // Curated collections from live database products
  const indoorHighlights = useMemo(
    () => plantsList.filter((p) => p.category === "indoor").slice(0, 4),
    [plantsList]
  );
  const outdoorHighlights = useMemo(
    () => plantsList.filter((p) => p.category === "outdoor").slice(0, 4),
    [plantsList]
  );
  const floweringHighlights = useMemo(
    () => plantsList.filter((p) => p.category === "flowering").slice(0, 4),
    [plantsList]
  );
  const fruitHighlights = useMemo(
    () => plantsList.filter((p) => p.category === "fruit").slice(0, 4),
    [plantsList]
  );
  const essentialsHighlights = useMemo(
    () =>
      plantsList
        .filter((p) => ["pots", "fertilizers", "soil"].includes(p.category))
        .slice(0, 4),
    [plantsList]
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

        {/* Loading state skeleton */}
        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-success mb-3" role="status" style={{ width: "3rem", height: "3rem" }}>
              <span className="visually-hidden">Loading live products...</span>
            </div>
            <p className="text-muted fw-semibold">Loading live nursery collection from database...</p>
          </div>
        ) : plantsList.length === 0 ? (
          /* Empty State when no products are in MongoDB */
          <div className="text-center py-5 px-3 rounded-4 bg-light border border-success-subtle shadow-sm my-4">
            <div className="display-4 text-success mb-3">🌿</div>
            <h3 className="fw-bold mb-2" style={{ color: "var(--primary)" }}>
              No Products In Catalog Yet
            </h3>
            <p className="text-muted mx-auto mb-4" style={{ maxWidth: "540px", fontSize: "0.95rem" }}>
              Our nursery catalog is currently being updated. Please check back shortly or connect directly with our nursery team on WhatsApp.
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <button
                onClick={handleRefresh}
                className="btn btn-success rounded-pill px-4 py-2 fw-semibold"
              >
                <i className="fas fa-rotate me-1"></i> Refresh Catalog
              </button>
            </div>
          </div>
        ) : (currentCategory !== "all" || searchQuery.trim() !== "") ? (
          /* Filtered Results */
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
                  key={plant._id || plant.id || plant.slug}
                  plant={plant}
                  onQuickView={(p) => setSelectedPlant(p)}
                />
              ))}

              {filteredPlants.length === 0 && (
                <div className="col-12 text-center py-5">
                  <div className="display-4 text-muted mb-3">🌱</div>
                  <h4>No matching items found</h4>
                  <p className="text-muted">
                    Try searching for another plant or browse all categories.
                  </p>
                  <button
                    className="btn btn-success rounded-pill px-4 py-2 mt-2"
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
          /* Default "all" view */
          <div className="plant-sections-wrapper">
            {/* 1. Indoor Plants H2 */}
            {indoorHighlights.length > 0 && (
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
                      key={plant._id || plant.id || plant.slug}
                      plant={plant}
                      onQuickView={(p) => setSelectedPlant(p)}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* 2. Outdoor Plants H2 */}
            {outdoorHighlights.length > 0 && (
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
                      key={plant._id || plant.id || plant.slug}
                      plant={plant}
                      onQuickView={(p) => setSelectedPlant(p)}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* 3. Flowering Plants H2 */}
            {floweringHighlights.length > 0 && (
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
                      key={plant._id || plant.id || plant.slug}
                      plant={plant}
                      onQuickView={(p) => setSelectedPlant(p)}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* 4. Fruit Plants H2 */}
            {fruitHighlights.length > 0 && (
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
                      key={plant._id || plant.id || plant.slug}
                      plant={plant}
                      onQuickView={(p) => setSelectedPlant(p)}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* 5. Gardening Essentials */}
            {essentialsHighlights.length > 0 && (
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
                  {essentialsHighlights.map((item) => (
                    <PlantCard
                      key={item._id || item.id || item.slug}
                      plant={item}
                      onQuickView={(p) => setSelectedPlant(p)}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* If there are items that are not in the top 4 of each highlight, show all in a combined grid */}
            {indoorHighlights.length === 0 &&
              outdoorHighlights.length === 0 &&
              floweringHighlights.length === 0 &&
              fruitHighlights.length === 0 &&
              essentialsHighlights.length === 0 && (
                <div className="row g-4">
                  {plantsList.map((plant) => (
                    <PlantCard
                      key={plant._id || plant.id || plant.slug}
                      plant={plant}
                      onQuickView={(p) => setSelectedPlant(p)}
                    />
                  ))}
                </div>
              )}
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
