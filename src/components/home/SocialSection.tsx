import React from "react";

export default function SocialSection() {
  return (
    <section className="social-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Follow Our Garden</div>
          <h2>Join Our Green Community</h2>
          <p>
            Follow us for daily plant tips, new arrivals, and garden inspiration.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {/* Instagram */}
          <div className="col-md-6 col-lg-5">
            <a
              className="social-card text-decoration-none"
              href="https://www.instagram.com/patel_globalgreen?utm_source=qr&igsh=czVha3FycHBkcnV3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="social-icon-wrap insta-wrap">
                <i className="fab fa-instagram"></i>
              </div>

              <div className="social-content">
                <h5 className="social-title">@patel_globalgreen</h5>

                <p className="social-desc">
                  Daily plant photos, tips &amp; exclusive offers
                </p>

                <span className="social-link instagram-link">
                  Follow on Instagram
                  <i className="fas fa-arrow-right ms-2"></i>
                </span>
              </div>
            </a>
          </div>

          {/* YouTube */}
          <div className="col-md-6 col-lg-5">
            <a
              className="social-card text-decoration-none"
              href="https://youtube.com/@patel_globalgreen?si=dfnGYIZ4Oc5q6mry"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="social-icon-wrap yt-wrap">
                <i className="fab fa-youtube"></i>
              </div>

              <div className="social-content">
                <h5 className="social-title">@patel_globalgreen</h5>

                <p className="social-desc">
                  Gardening tutorials &amp; plant care videos
                </p>

                <span className="social-link youtube-link">
                  Subscribe on YouTube
                  <i className="fas fa-arrow-right ms-2"></i>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
