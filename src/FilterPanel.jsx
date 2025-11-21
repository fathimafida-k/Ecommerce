import React, { useState } from "react";

function FilterPanel({ onClose }) {
  const [activeCategory, setActiveCategory] = useState("");

  const categories = [
    "Mobile",
    "Laptop",
    "Tablet",
    "Camera",
    "Headphones",
    "Accessories",
    "Speakers",
    
  ];

  return (
    <div
      style={{
        backdropFilter: "blur(10px)",
        background: "rgba(255, 255, 255, 0.3)",
        padding: "20px",
        borderRadius: "16px",
        width: "300px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        color: "#2c2c2c",
        fontFamily: "Lora, serif",
      }}
    >
      <div className="d-flex justify-content-end">
        <button
          onClick={() => {
            onClose();
          
          }}
          className="btn"
        >
          <i className="fa-solid fa-x"></i>
        </button>
      </div>

      <div>
        <label
          style={{
            fontWeight: "600",
            marginBottom: "12px",
            display: "block",
          }}
        >
          Categories
        </label>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveCategory(cat);
              
              }}
              style={{
                padding: "10px",
                borderRadius: "10px",
                border:
                  activeCategory === cat ? "2px solid #412018" : "1px solid #ccc",
                background:
                  activeCategory === cat ? "#412018" : "rgba(255,255,255,0.6)",
                color: activeCategory === cat ? "#fff" : "#412018",
                cursor: "pointer",
                transition: "0.3s",
                fontWeight: "500",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FilterPanel;
