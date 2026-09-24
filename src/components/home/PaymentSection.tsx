import React from "react";
import Image from "next/image";
import { getWhatsAppGeneralUrl } from "@/lib/whatsapp";

export default function PaymentSection() {
  return (
    <section className="payment-section py-5" id="payment">
      <div className="container">
        <div className="section-header text-center mb-5">
          <div className="section-tag">Convenient Payments</div>
          <h3 className="fw-bold mb-2" style={{ color: "var(--primary)" }}>
            Multiple Payment Modes
          </h3>
          <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
            Safe, fast, and simple payment methods accepted for plants and home delivery.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {/* Paytm UPI */}
          <div className="col-md-4 d-flex">
            <div className="payment-card w-100 p-4 rounded-4 bg-white shadow-sm border text-center">
              <div className="pay-logo position-relative d-inline-block mb-3">
                <Image
                  src="/images/paytm.jpg"
                  alt="Paytm UPI"
                  width={70}
                  height={50}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <h5 className="fw-bold mb-1">Paytm UPI</h5>
              <p className="text-muted small mb-2">Scan or pay to</p>
              <div className="upi-id fw-bold text-success fs-5 mb-1">
                8076754604
              </div>
              <p className="text-muted small">UPI ID: 8076754604@paytm</p>
            </div>
          </div>

          {/* PhonePe UPI */}
          <div className="col-md-4 d-flex">
            <div className="payment-card w-100 p-4 rounded-4 bg-white shadow-sm border text-center">
              <div className="pay-logo position-relative d-inline-block mb-3">
                <Image
                  src="/images/phonepay.jpg"
                  alt="PhonePe UPI"
                  width={70}
                  height={50}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <h5 className="fw-bold mb-1">PhonePe / GPay</h5>
              <p className="text-muted small mb-2">Scan or pay to</p>
              <div className="upi-id fw-bold text-success fs-5 mb-1">
                8076754604
              </div>
              <p className="text-muted small">UPI ID: 8076754604@ybl</p>
            </div>
          </div>

          {/* WhatsApp / COD */}
          <div className="col-md-4 d-flex">
            <div className="payment-card w-100 p-4 rounded-4 bg-white shadow-sm border text-center">
              <div className="pay-logo position-relative d-inline-block mb-3">
                <Image
                  src="/images/whatsapp.jpg"
                  alt="WhatsApp Order & COD"
                  width={70}
                  height={50}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <h5 className="fw-bold mb-1">WhatsApp &amp; COD</h5>
              <p className="text-muted small mb-3">
                Order via WhatsApp and pay conveniently upon plant delivery
              </p>
              <a
                href={getWhatsAppGeneralUrl(
                  `Hi Aardhya Green Nursery, I want to place an order with payment on delivery.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-green text-decoration-none d-inline-flex align-items-center"
                style={{ fontSize: "0.9rem", padding: "10px 24px" }}
              >
                <i className="fab fa-whatsapp me-2"></i> Chat to Order
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
