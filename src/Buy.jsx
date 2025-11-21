import React from "react";

function Buy() {
  return (
    <div style={{ maxWidth: "900px", margin: "3rem auto", padding: "1rem" }}>
      
      {/* Heading */}
      <h2 style={{
        fontFamily: "Playfair Display",
        marginBottom: "1rem",
        color: "#0A1A36",
        textAlign: "center"
      }}>
       Place your Order
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "2rem"
      }}>

        {/* Left: Order Summary */}
        <div style={{
          background: "#f8f9fa",
          padding: "1.5rem",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.08)"
        }}>
          <h4 style={{ fontFamily: "Inter", marginBottom: "1rem" }}>Order Summary</h4>

          <div>
            <p style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>
              <strong>Product:</strong> Product Name
            </p>
            <p style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>
              <strong>Price:</strong> ₹ 25,999
            </p>
            <p style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>
              <strong>Quantity:</strong><button className="btn"><i class="fa-solid fa-minus"></i></button> 1  <button className="btn"><i class="fa-solid fa-plus"></i></button>
            </p>
            <hr />
            <p style={{ fontSize: "1.1rem", fontWeight: "600" }}>
              Total: ₹ 25,999
            </p>
          </div>
        </div>

        {/* Right: Delivery Details */}
        <div style={{
          background: "#f8f9fa",
          padding: "1.5rem",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.08)"
        }}>
          <h4 style={{ fontFamily: "Inter", marginBottom: "1rem" }}>Delivery Information</h4>

          <form>
            <label style={{ display: "block", fontSize: "0.9rem", marginBottom: "0.2rem" }}>
              Full Name
            </label>
            <input type="text" className="form-control" placeholder="Enter your name" />

            <label style={{ display: "block", fontSize: "0.9rem", marginTop: "1rem" }}>
              Address
            </label>
            <textarea className="form-control" placeholder="Enter your address"></textarea>

            <label style={{ display: "block", fontSize: "0.9rem", marginTop: "1rem" }}>
              Phone Number
            </label>
            <input type="text" className="form-control" placeholder="Enter phone number" />

            <button style={{
              marginTop: "1.5rem",
              width: "100%",
              background: "#007BFF",
              color: "#fff",
              border: "none",
              padding: "0.8rem",
              fontSize: "1rem",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "600"
            }}>
              Place Order
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Buy;
