import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer style={{ backgroundColor: "#0A0F1F", color: "#E6F1FF", padding: "3rem 1rem" }}>
      <div className="container">
        <div className="row">

          {/* Brand About Section */}
          <div className="col-lg-4 mb-4">
            <h2
              style={{
                fontFamily: "Playfair Display, serif",
                fontWeight: "700",
                color: "#00A8E8",
                letterSpacing: "1px",
              }}
            >
              Raynott E-Tech
            </h2>
            <p
              style={{
                fontFamily: "Inter",
                fontSize: "0.95rem",
                color: "#7FDBFF",
                lineHeight: "1.6",
              }}
            >
              Your trusted destination for high-performance gadgets, smart electronics,
              and cutting-edge technology. Experience premium tech at unbeatable prices.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 mb-4">
            <h5 style={{ fontFamily: "Merriweather", fontWeight: "600", color: "#E6F1FF" }}>
              Quick Links
            </h5>
            <Link to="/" style={linkStyle}>Home</Link>
            <Link to="/products" style={linkStyle}>Products</Link>
            <Link to="/cart" style={linkStyle}>Cart</Link>
            <Link to="/contact" style={linkStyle}>Contact</Link>
          </div>

          {/* Shop Categories */}
          <div className="col-lg-2 mb-4">
            <h5 style={{ fontFamily: "Merriweather", fontWeight: "600", color: "#E6F1FF" }}>
              Categories
            </h5>
            <Link to="/category/smartphones" style={linkStyle}>Smartphones</Link>
            <Link to="/category/accessories" style={linkStyle}>Accessories</Link>
            <Link to="/category/laptops" style={linkStyle}>Laptops</Link>
            <Link to="/category/audio" style={linkStyle}>Audio Devices</Link>
          </div>

          {/* Newsletter + Social Icons */}
          <div className="col-lg-4 mb-4">
            <h5 style={{ fontFamily: "Merriweather", fontWeight: "600", color: "#E6F1FF" }}>
              Stay Connected
            </h5>
            <p style={{ fontFamily: "Inter", fontSize: "0.95rem", color: "#7FDBFF" }}>
              Subscribe for flash sales, new arrivals, and exclusive technology updates.
            </p>

            <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  padding: "0.6rem",
                  borderRadius: "5px",
                  border: "none",
                  flex: 1,
                  outline: "none",
                }}
              />
              <button
                style={{
                  backgroundColor: "#00A8E8",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  padding: "0.6rem 1rem",
                  cursor: "pointer",
                  fontWeight: "600",
                }}
              >
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>

            <div style={{ display: "flex", gap: "1rem", fontSize: "1.6rem" }}>
              <a href="#" style={iconStyle}><i className="fab fa-facebook"></i></a>
              <a href="#" style={iconStyle}><i className="fab fa-instagram"></i></a>
              <a href="#" style={iconStyle}><i className="fab fa-linkedin"></i></a>
              <a href="#" style={iconStyle}><i className="fas fa-phone"></i></a>
            </div>
          </div>

        </div>

        <hr style={{ borderColor: "#123A4A", marginTop: "1.5rem" }} />


      </div>
    </footer>
  );
}

const linkStyle = {
  display: "block",
  color: "#E6F1FF",
  margin: "0.4rem 0",
  textDecoration: "none",
  fontFamily: "Inter",
  fontSize: "0.95rem",
  opacity: 0.8,
};

const iconStyle = {
  color: "#E6F1FF",
  opacity: 0.8,
  transition: "0.3s",
};

export default Footer;
