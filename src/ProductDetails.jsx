import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getOneProductAPI } from './AllApi'
import SERVER_URL from './SERVER_URL'

function ProductDetails() {

     const {id} = useParams()
     const [product,setproduct] = useState([])
    
        
         useEffect(() => {
            getProductDetails()
         }, [])
         
         const getProductDetails=async()=>{
              try{
         
              const result=await getOneProductAPI(id)
              console.log("details course",result);
              if(result.status==200){
           setproduct(result.data)
              }
          
               
              }
              catch(err){
                console.log(err);
                
              }
           }
     
  return (
    <>
    
    <div className='row'>
  <div className='col-lg-6'>
    <img style={{width:"100%",height:"100%"}}  src={`${SERVER_URL}/uploads/${product.image}`} alt="" />
  </div>

   <div
   className='col-lg-6'
  style={{

    padding: "20px 30px",
    fontFamily: "Inter",
    color: "#2b2b2b"
  }}
>

  {/* Product Name */}
  <h2 style={{ fontFamily: "Playfair Display", fontWeight: "700" }}>
    {product.Pname} – {product.color}
  </h2>

  {/* Badges */}
  <div>
    

  {product.badge!="No Badge"  && <span
      style={{
         background: product.badge === "newArrival" 
                  ? "#0A84FF"  
                  : product.badge === "feautured" 
                  ? "#FF69B4"  
                  : product.badge === "bestseller" 
                  ? "#FF9800" 
                  : "#0A84FF",
        color: "white",
        padding: "4px 10px",
        borderRadius: "6px",
        fontSize: "0.8rem"
      }}
    >
     {product.badge === "newArrival" 
      ? "New Arrival" 
      : product.badge === "feautured" 
      ? "Featured" 
      : product.badge === "bestseller" 
      ? "Best Seller" 
      : product.badge}
    </span>}
  </div>


  <div style={{ margin: "15px 0" }}>
    <h3 style={{ color: "#11084d", fontWeight: "700" }}>₹ {product.price}</h3>
    <p style={{ margin: 0 }}>
     

    </p>
  <p
  style={{
    marginTop: "5px",
    color: product.stock > 0 ? "green" : "red",
    fontWeight: "500",
  }}
>
  {product.stock > 0
    ? `In Stock – Ships in 24 hours (${product.stock} available)`
    : "Out of Stock"}
</p>

  </div>
  
   
  <div style={{ marginTop: "20px" }}>
    <h5 style={{ fontWeight: "600" }}>Highlights</h5>
  {product.highlights 
      ? product.highlights.split(".").filter(item => item.trim() !== "").map((item, index) => (
          <li key={index}>{item.trim()}</li>
        ))
      : <li>No highlights available</li>
    }
  </div>

  {/* Description */}
  <div style={{ marginTop: "25px" }}>
    <h5 style={{ fontWeight: "600" }}>Description</h5>
    <p style={{ color: "#444", lineHeight: "1.7" }}>
    {product.description}
    </p>
  </div>

<div style={{ marginTop: "25px" }}>
  <h5 style={{ fontWeight: "600" }}>Specifications</h5>

  <table style={{ width: "100%", marginTop: "10px", borderCollapse: "collapse" }}>
    <tbody>
      <tr>
        <td style={{ padding: "8px 0", color: "#555" }}>Brand</td>
        <td style={{ padding: "8px 0", fontWeight: "600" }}>{product.brand}</td>
      </tr>
      <tr>
        <td style={{ padding: "8px 0", color: "#555" }}>Color</td>
        <td style={{ padding: "8px 0", fontWeight: "600" }}>{product.color}</td>
      </tr>
      <tr>
        <td style={{ padding: "8px 0", color: "#555" }}>Size</td>
        <td style={{ padding: "8px 0", fontWeight: "600" }}>{product.size}</td>
      </tr>
      <tr>
        <td style={{ padding: "8px 0", color: "#555" }}>Material</td>
        <td style={{ padding: "8px 0", fontWeight: "600" }}>{product.material}</td>
      </tr>
    </tbody>
  </table>
</div>



  
  {/* Buttons */}
  <div style={{ marginTop: "30px", display: "flex", gap: "15px" }}>
 <Link to={'/buy/7'}>
    <button
      style={{
        backgroundColor: "#11084d",
        color: "white",
        padding: "12px 24px",
        borderRadius: "8px",
        fontWeight: "600",
        border: "none",
        width: "160px"
      }}
    >
      Buy Now
    </button>
</Link>
  </div>
</div>

 

    </div>
    </>
  )
}

export default ProductDetails