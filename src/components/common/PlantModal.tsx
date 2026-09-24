"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Plant } from "@/data/plants";
import { getWhatsAppOrderUrl } from "@/lib/whatsapp";

interface PlantModalProps {
  plant: Plant | null;
  onClose: () => void;
}

export default function PlantModal({ plant, onClose }: PlantModalProps) {
  if (!plant) return null;

  const handleOrder = () => {
    const url = getWhatsAppOrderUrl(plant.name);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        zIndex: 1050,
        backdropFilter: "blur(6px)",
      }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-4 shadow-lg overflow-hidden position-relative m-3"
        style={{ maxWidth: "600px", width: "100%", maxHeight: "90vh", overflowY: "auto" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="position-absolute top-0 end-0 m-3 btn btn-light rounded-circle shadow-sm border-0 d-flex align-items-center justify-content-center"
          style={{ width: "36px", height: "36px", zIndex: 10 }}
          aria-label="Close"
        >
          <i className="fas fa-times"></i>
        </button>

        <div className="position-relative w-100" style={{ height: "280px" }}>
          <Image
            src={plant.image}
            alt={plant.alt}
            fill
            style={{ objectFit: "cover" }}
          />
          {plant.badge && (
            <div
              className="position-absolute top-0 start-0 m-3 px-3 py-1 rounded-pill text-white fw-bold shadow-sm"
              style={{ background: "#ff8f00", fontSize: "0.85rem" }}
            >
              {plant.badge}
            </div>
          )}
        </div>

        <div className="p-4">
          <div className="d-flex align-items-center justify-content-between mb-2">
            <span
              className="badge px-3 py-2 rounded-pill"
              style={{ background: "var(--mint-mid)", color: "var(--primary)", fontSize: "0.85rem" }}
            >
              {plant.categoryName || plant.tag}
            </span>
            <span className="fs-3 fw-bold" style={{ color: "var(--primary)" }}>
              ₹ {plant.price}
            </span>
          </div>

          <h4 className="fw-bold mb-1" style={{ color: "var(--text-dark)" }}>
            {plant.name}
          </h4>

          {plant.scientificName && (
            <p className="fst-italic text-muted mb-3" style={{ fontSize: "0.95rem" }}>
              Botanical Name: {plant.scientificName}
            </p>
          )}

          {plant.benefits && plant.benefits.length > 0 && (
            <div className="d-flex flex-wrap gap-2 mb-3">
              {plant.benefits.map((b, i) => (
                <span
                  key={i}
                  className="benefit-chip"
                >
                  <i className="fas fa-check-circle me-1 text-success"></i>
                  {b}
                </span>
              ))}
            </div>
          )}

          <p className="text-muted mb-4" style={{ lineHeight: "1.6", fontSize: "0.95rem" }}>
            {plant.description || "Nursery-grown, hand-picked fresh plant with healthy roots and lush foliage from Aardhya Green Nursery in Greater Noida. Packed carefully for doorstep delivery across selected Delhi NCR areas."}
          </p>

          <div className="d-flex gap-3">
            <button
              onClick={handleOrder}
              className="btn flex-grow-1 text-white py-2 px-4 rounded-pill fw-bold d-flex align-items-center justify-content-center shadow-sm"
              style={{ background: "#25d366" }}
            >
              <i className="fab fa-whatsapp me-2 fs-5"></i>
              Order on WhatsApp
            </button>
            <Link
              href={`/plants/${plant.slug}`}
              className="btn btn-outline-success rounded-pill px-3 d-flex align-items-center"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
