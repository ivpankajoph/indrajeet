import React from "react";
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="breadcrumb" className="py-3">
      <div className="container">
        <ol
          className="breadcrumb mb-0 px-3 py-2 rounded-3"
          style={{ background: "rgba(232, 245, 233, 0.6)", fontSize: "0.9rem" }}
        >
          <li className="breadcrumb-item">
            <Link href="/" className="text-decoration-none text-success">
              <i className="fas fa-home me-1"></i> Home
            </Link>
          </li>
          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            return isLast ? (
              <li
                key={idx}
                className="breadcrumb-item active text-dark fw-semibold"
                aria-current="page"
              >
                {item.label}
              </li>
            ) : (
              <li key={idx} className="breadcrumb-item">
                <Link
                  href={item.href || "#"}
                  className="text-decoration-none text-success"
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
