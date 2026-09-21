import React from "react";
import Image from "next/image";
import { getWhatsAppGeneralUrl } from "@/lib/whatsapp";

export default function PaymentSection() {
  return (
    <section className="payment-section" id="payment">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Easy Payments</div>
          <h2>Pay Your Way</h2>
          <p>Multiple payment options for your convenience. Safe, fast &amp; easy.</p>
        </div>
        <div className="row g-3 justify-content-center">
          {/* Paytm */}
          <div className="col-md-4 d-flex">
            <div className="payment-card w-100">
              <div className="pay-logo position-relative d-inline-block">
                <Image
                  src="/images/paytm.jpg"
                  alt="Paytm"
                  width={70}
                  height={50}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <h5>Paytm</h5>
              <p className="text-muted mb-3">Scan or send to</p>
              <div className="upi-id">7292009034</div>
              <p className="text-muted">UPI ID: 7292009034@paytm</p>
            </div>
          </div>

          {/* PhonePe */}
          <div className="col-md-4 d-flex">
            <div className="payment-card w-100">
              <div className="pay-logo position-relative d-inline-block">
                <Image
                  src="/images/phonepay.jpg"
                  alt="PhonePe"
                  width={70}
                  height={50}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <h5>PhonePay</h5>
              <p className="text-muted mb-3">Scan or send to</p>
              <div className="upi-id">7292009034</div>
              <p className="text-muted">UPI ID: 7292009034@ybl</p>
            </div>
          </div>

          {/* WhatsApp / COD */}
          <div className="col-md-4 d-flex">
            <div className="payment-card w-100">
              <div className="pay-logo position-relative d-inline-block">
                <Image
                  src="/images/whatsapp.jpg"
                  alt="WhatsApp"
                  width={70}
                  height={50}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <h5>WhatsApp/Cash</h5>
              <p className="text-muted mb-3">Order on WhatsApp &amp; pay on delivery</p>
              <a
                href={getWhatsAppGeneralUrl("Hi Patel Global Green! I'd like to place a Cash on Delivery order.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-green text-decoration-none"
                style={{ fontSize: "0.9rem", padding: "10px 24px" }}
              >
                <i className="fab fa-whatsapp me-1"></i> Chat to Order
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
