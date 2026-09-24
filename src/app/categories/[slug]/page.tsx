import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { categories } from "@/data/categories";
import Breadcrumb from "@/components/common/Breadcrumb";
import PlantsSection from "@/components/home/PlantsSection";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return categories.map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) return { title: "Category Not Found | Aardhya Green Nursery" };

  return {
    title: `${category.name} | Aardhya Green Nursery Greater Noida`,
    description: `Explore our collection of ${category.name} at Aardhya Green Nursery in Greater Noida. ${category.description} Home delivery in selected Delhi NCR areas.`,
    openGraph: {
      title: `${category.name} - Aardhya Green Nursery`,
      description: category.description,
      images: [{ url: category.image }],
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  return (
    <div className="category-page pb-5">
      <Breadcrumb
        items={[
          { label: "Categories", href: "/#categories" },
          { label: category.name },
        ]}
      />

      {/* Category Hero Banner */}
      <section className="py-5" style={{ background: "linear-gradient(135deg, #e8f5e9, #f9fdf9)" }}>
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <span
                className="badge px-3 py-2 rounded-pill mb-3"
                style={{ background: "var(--mint-mid)", color: "var(--primary)", fontSize: "0.9rem" }}
              >
                {category.count}
              </span>
              <h1 className="display-5 fw-bold mb-3" style={{ color: "var(--primary)" }}>
                {category.name}
              </h1>
              <p className="lead text-muted mb-4" style={{ fontSize: "1.15rem" }}>
                {category.description} Carefully maintained at Aardhya Green Nursery in Greater Noida with home delivery across selected Delhi NCR areas.
              </p>
              <div className="d-flex flex-wrap gap-2">
                {categories.map((c) => (
                  <Link
                    key={c.id}
                    href={`/categories/${c.slug}`}
                    className={`btn btn-sm rounded-pill px-3 py-1 ${
                      c.slug === slug
                        ? "btn-success"
                        : "btn-outline-success"
                    }`}
                  >
                    {c.shortName}
                  </Link>
                ))}
              </div>
            </div>
            <div className="col-lg-5">
              <div
                className="position-relative overflow-hidden rounded-4 shadow-lg"
                style={{ height: "300px" }}
              >
                <Image
                  src={category.image}
                  alt={category.alt}
                  fill
                  priority
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filtered Plants List */}
      <div className="mt-4">
        <PlantsSection initialCategory={category.id} />
      </div>
    </div>
  );
}
