"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Plant } from "@/data/plants";
import { getWhatsAppOrderUrl } from "@/lib/whatsapp";

interface PlantCardProps {
  plant: Plant;
  onQuickView?: (plant: Plant) => void;
}

export default function PlantCard({ plant, onQuickView }: PlantCardProps) {
  const handleOrder = (e: React.MouseEvent) => {
    e.stopPropagation();
    const url = getWhatsAppOrderUrl(plant.name);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCardClick = () => {
    if (onQuickView) {
      onQuickView(plant);
    }
  };

  return (
    <div className="col-sm-6 col-md-4 col-xl-3 plant-grid-item show">
      <div
        className="plant-card h-100 d-flex flex-column"
        onClick={handleCardClick}
        style={{ cursor: "pointer" }}
      >
        <div
          className="plant-img-wrap position-relative"
          style={
            plant.bgStyle
              ? { background: plant.bgStyle.replace("background:", "").trim() }
              : undefined
          }
        >
          <div
            className="position-relative w-100 h-100"
            style={{ minHeight: "220px" }}
          >
            <Image
              src={plant.image}
              alt={plant.alt || plant.name}
              fill
              sizes="(max-width: 576px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              style={{ objectFit: "cover" }}
              loading="lazy"
            />
          </div>

          {plant.tag && <div className="plant-tag">{plant.tag}</div>}
          {plant.badge && <div className="best-seller">{plant.badge}</div>}
        </div>

        <div className="plant-body flex-grow-1">
          <h6>
            <Link
              href={`/plants/${plant.slug}`}
              className="text-inherit text-decoration-none"
              onClick={(e) => e.stopPropagation()}
            >
              {plant.name}
            </Link>
          </h6>
          {plant.scientificName && (
            <div className="plant-sci">{plant.scientificName}</div>
          )}

          {plant.benefits && plant.benefits.length > 0 && (
            <div className="plant-benefits">
              {plant.benefits.map((benefit, idx) => (
                <span key={idx} className="benefit-chip">
                  {benefit}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="plant-footer mt-auto d-flex align-items-center justify-content-between gap-2">
          <span className="price">₹ {plant.price}</span>
          <button
            className="btn-add border-0 d-inline-flex align-items-center"
            onClick={handleOrder}
            title="Order directly via WhatsApp"
            style={{ whiteSpace: "nowrap", fontSize: "0.85rem" }}
          >
            <i className="fab fa-whatsapp me-1"></i> Order on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
