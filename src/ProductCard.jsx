import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import SERVER_URL from './SERVER_URL';

function ProductCard({data}) {
  return (
    <Card
      style={{
        width: "20rem",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
        background: "#ffffff",
        border: "1px solid #e6f0ff",
        transition: "0.3s",
        cursor: "pointer",
      }}
      className="product-card"
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >

      {/* Image */}
      <div style={{ position: "relative" }}>
        <Card.Img
          variant="top"
        
           src={`${SERVER_URL}/uploads/${data?.image}`}
          
       
          style={{
            height: "250px",
            objectFit: "cover",
            transition: "0.3s",
          }}
        />

       
  {data?.badge !== "No Badge" && (
  <span
    style={{
      position: "absolute",
      top: "10px",
      left: "10px",
      padding: "5px 12px",
      background: data?.badge === "newArrival" 
                  ? "#0A84FF"  // Blue
                  : data?.badge === "feautured" 
                  ? "#FF69B4"  // Pink
                  : data?.badge === "bestseller" 
                  ? "#FF9800"  // Orange
                  : "#0A84FF", // default color
      color: "white",
      borderRadius: "8px",
      fontSize: "0.75rem",
      fontWeight: "600",
      textTransform: "capitalize"
    }}
  >
    {data?.badge === "newArrival" 
      ? "New Arrival" 
      : data?.badge === "feautured" 
      ? "Featured" 
      : data?.badge === "bestseller" 
      ? "Best Seller" 
      : data?.badge}
  </span>
)}

      </div>

      {/* Body */}
      <Card.Body style={{ padding: "1.3rem", textAlign: "center" }}>

        <h5
          style={{
            fontFamily: "Poppins",
            fontWeight: "600",
            color: "#0b132b",
            marginBottom: "10px",
          }}
        >
        {data?.Pname}
        </h5>

        {/* <p
          style={{
            fontSize: "0.9rem",
            color: "#4a4a4a",
            marginBottom: "15px",
          }}
        >
          <strong style={{ color: "#0A84FF" }}>Specifications:</strong> {data.specification}
        </p> */}

        <h4
          style={{
            color: "#0A84FF",
            fontWeight: "700",
            fontFamily: "Poppins",
            marginBottom: "20px",
          }}
        >
          ₹ {data?.price}
        </h4>

     <Link to={`/view/${data?._id}`}>
        <button
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            border: "none",
            background: "#535456ff",
            color: "white",
            fontFamily: "Poppins",
            fontSize: "1rem",
            fontWeight: "600",
            transition: "0.3s",
          }}
        
        >
          View Details 
        </button></Link>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
