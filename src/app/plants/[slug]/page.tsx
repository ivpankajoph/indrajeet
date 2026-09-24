import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { plants } from "@/data/plants";
import { getWhatsAppOrderUrl, TEL_LINK } from "@/lib/whatsapp";
import Breadcrumb from "@/components/common/Breadcrumb";
import PlantCard from "@/components/home/PlantCard";

interface PlantPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return plants.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: PlantPageProps): Promise<Metadata> {
  const { slug } = await params;
  const plant = plants.find((p) => p.slug === slug);
  if (!plant) return { title: "Plant Not Found | Aardhya Green Nursery" };

  return {
    title: `${plant.name} - ₹${plant.price} | Aardhya Green Nursery Greater Noida`,
    description: `Order ${plant.name} (${plant.scientificName}) from Aardhya Green Nursery in Greater Noida. Home delivery available across selected Delhi NCR areas.`,
    openGraph: {
      title: `${plant.name} | Aardhya Green Nursery`,
      description: `₹${plant.price} - ${plant.benefits.join(", ")}. Home delivery in selected Delhi NCR areas.`,
      images: [{ url: plant.image }],
    },
  };
}

export default async function PlantDetailPage({ params }: PlantPageProps) {
  const { slug } = await params;
  const plant = plants.find((p) => p.slug === slug);

  if (!plant) {
    notFound();
  }

  const relatedPlants = plants
    .filter((p) => p.category === plant.category && p.id !== plant.id)
    .slice(0, 4);

  const whatsappUrl = getWhatsAppOrderUrl(plant.name);

  return (
    <div className="plant-detail-page pb-5">
      <Breadcrumb
        items={[
          { label: "Plants", href: "/plants" },
          { label: plant.categoryName, href: `/categories/${plant.category}` },
          { label: plant.name },
        ]}
      />

      <section className="py-4">
        <div className="container">
          <div className="row g-5">
            {/* Product Image Column */}
            <div className="col-lg-6">
              <div
                className="position-relative overflow-hidden rounded-4 shadow-sm"
                style={{
                  height: "460px",
                  background: plant.bgStyle
                    ? plant.bgStyle.replace("background:", "").trim()
                    : "linear-gradient(135deg, #e8f5e9, #f9fdf9)",
                }}
              >
                <Image
                  src={plant.image}
                  alt={plant.alt}
                  fill
                  priority
                  sizes="(max-width: 992px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
                {plant.badge && (
                  <div
                    className="position-absolute top-0 start-0 m-4 px-3 py-1 rounded-pill text-white fw-bold shadow-sm"
                    style={{ background: "#ff8f00", fontSize: "0.9rem" }}
                  >
                    {plant.badge}
                  </div>
                )}
                <div
                  className="position-absolute top-0 end-0 m-4 px-3 py-1 rounded-pill fw-semibold"
                  style={{ background: "rgba(255,255,255,0.9)", color: "var(--primary)", fontSize: "0.85rem" }}
                >
                  {plant.tag || plant.categoryName}
                </div>
              </div>
            </div>

            {/* Product Info Column */}
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <div className="mb-2">
                <span
                  className="badge px-3 py-2 rounded-pill"
                  style={{ background: "var(--mint-mid)", color: "var(--primary)", fontSize: "0.85rem" }}
                >
                  {plant.categoryName}
                </span>
              </div>

              <h1 className="h2 fw-bold mb-2" style={{ color: "var(--text-dark)" }}>
                {plant.name}
              </h1>

              {plant.scientificName && (
                <p className="fst-italic text-muted mb-3 fs-6">
                  Botanical: <strong>{plant.scientificName}</strong>
                </p>
              )}

              <div className="d-flex align-items-baseline gap-3 my-3">
                <span className="display-6 fw-bold" style={{ color: "var(--primary)" }}>
                  ₹ {plant.price}
                </span>
              </div>

              {/* Benefits */}
              {plant.benefits && plant.benefits.length > 0 && (
                <div className="my-3">
                  <h6 className="fw-semibold text-muted text-uppercase mb-2" style={{ fontSize: "0.8rem" }}>
                    Key Highlights:
                  </h6>
                  <div className="d-flex flex-wrap gap-2">
                    {plant.benefits.map((b, i) => (
                      <span key={i} className="benefit-chip">
                        <i className="fas fa-check text-success me-1"></i>
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <p className="text-muted my-3" style={{ lineHeight: "1.7" }}>
                {plant.description}
              </p>

              {/* Delivery Guarantee Strip */}
              <div
                className="p-3 rounded-3 my-3 d-flex align-items-center gap-3"
                style={{ background: "#f1f8e9", border: "1px solid var(--primary-pale)" }}
              >
                <i className="fas fa-truck-fast fs-3 text-success"></i>
                <div>
                  <div className="fw-bold" style={{ color: "var(--primary)" }}>
                    Home Delivery in Selected Delhi NCR Areas
                  </div>
                  <small className="text-muted">
                    We deliver healthy nursery plants to Greater Noida, Noida &amp; nearby areas. Contact us on WhatsApp for pin-code availability.
                  </small>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="d-flex flex-wrap gap-3 mt-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn flex-grow-1 text-white py-3 px-4 rounded-pill fw-bold d-flex align-items-center justify-content-center shadow"
                  style={{ background: "#25d366", fontSize: "1.05rem" }}
                >
                  <i className="fab fa-whatsapp me-2 fs-5"></i>
                  Order on WhatsApp
                </a>

                <a
                  href={TEL_LINK}
                  className="btn btn-outline-success py-3 px-4 rounded-pill fw-semibold d-flex align-items-center"
                >
                  <i className="fas fa-phone me-2"></i>
                  Call Now
                </a>
              </div>
            </div>
          </div>

          {/* Plant Care & Nursery Guarantee Tabs / Accordion */}
          <div className="row mt-5 pt-4">
            <div className="col-12">
              <div className="p-4 rounded-4 bg-white shadow-sm border">
                <h4 className="fw-bold mb-4" style={{ color: "var(--primary)" }}>
                  Plant Care &amp; Aardhya Nursery Assurance
                </h4>
                <div className="row g-4">
                  <div className="col-md-4">
                    <div className="d-flex gap-3">
                      <div className="text-success fs-3">
                        <i className="fas fa-sun"></i>
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1">Light Requirements</h6>
                        <p className="small text-muted mb-0">
                          Thrives best in appropriate sunlight or moderate indoor illumination suited to the variety.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex gap-3">
                      <div className="text-success fs-3">
                        <i className="fas fa-droplet"></i>
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1">Watering Routine</h6>
                        <p className="small text-muted mb-0">
                          Water moderately when the top 1-2 inches of soil feels dry. Avoid waterlogging.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex gap-3">
                      <div className="text-success fs-3">
                        <i className="fas fa-shield-halved"></i>
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1">Nursery Fresh Guarantee</h6>
                        <p className="small text-muted mb-0">
                          Hand-selected directly from our nursery grounds in Greater Noida with healthy roots and foliage.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Plants */}
          {relatedPlants.length > 0 && (
            <div className="mt-5 pt-4">
              <div className="section-header mb-4 text-start">
                <div className="section-tag">More Choices</div>
                <h3 className="fw-bold" style={{ color: "var(--primary)" }}>
                  Similar Plants You May Like
                </h3>
              </div>
              <div className="row g-4">
                {relatedPlants.map((relPlant) => (
                  <PlantCard key={relPlant.id} plant={relPlant} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
