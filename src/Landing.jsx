import React, { useEffect, useState } from 'react'
import Header from './Header'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom'
import { getProductAPI } from './AllApi'

function Landing() {

     const [Product,setProduct] = useState([])
      
        
    
          const getAllProduct=async()=>{
            try{
              const result=await getProductAPI("")
              console.log("get data",result);
              setProduct(result.data)
              
            }
            catch(err){
              console.log(err);
              
            }
          }
           useEffect(() => {
           getAllProduct()
           }, [])
const newArrival = Product.filter(item=>item.badge=="newArrival")
const phone = Product.filter(item=>item.category=="mobile")
const laptop = Product.filter(item=>item.category=="laptop")
       
  return (
    <div>

   <Header insideLanding={true}/>
    <div
  style={{
    position: "relative",
    width: "100%",
    height: "40rem",
    backgroundImage:
      "url('https://www.shutterstock.com/image-photo/advertising-product-photo-highimpact-modern-600nw-2664369875.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // alignItems:"center",
    paddingLeft: "60px",
    color: "white",
  }}
>
  <h2
    style={{
      fontFamily: "Playfair Display",
      fontSize: "3rem",
      fontWeight: "700",
      textShadow: "0px 4px 10px rgba(0,0,0,0.7)",
      marginBottom: "20px",
      maxWidth: "600px",
      lineHeight: "1.2",
    }}
  >
    Get the Finest Gadgets at the Finest Prices
  </h2>

  <p
    style={{
      fontSize: "1.2rem",
      fontFamily: "Poppins",
      maxWidth: "550px",
      lineHeight: "1.6",
      opacity: 0.9,
      textShadow: "0px 3px 8px rgba(0,0,0,0.6)",
      marginBottom: "30px",
    }}
  >
    Discover premium electronics, top-rated gadgets, and the latest arrivals—
    all curated for performance, style, and affordability. Shop smart, shop
    the future.
  </p>
<Link to={'/home'}>

  <button
    style={{
      backgroundColor: "#45441dff",
      color: "white",
      padding: "12px 24px",
      border: "none",
      borderRadius: "6px",
      fontSize: "1rem",
      fontFamily: "Poppins",
      cursor: "pointer",
      boxShadow: "0px 4px 10px rgba(0,0,0,0.4)",
      width: "fit-content",
      transition: "0.3s",
    }}
  >
    Shop Now
  </button></Link>
</div>


<div>
    <h1 className='text-center mt-5' style={{fontFamily:"lora",color:"#768"}}>New Arrivals</h1>

 {Product.length ? 
      newArrival.map(item=>(  <div className='col-3 mt-2 mb-2'>    
            <ProductCard data={item}/></div>))
     : 
            <div className='text-center' style={{color:"#456",fontFamily:"Inter",borderRadius:"8px",padding:"10px 20px"}}><h2>No Projects to display</h2></div>
            }
</div>
{/* phone */}
<h1 className='text-center mt-5' style={{fontFamily:"Lora", color:"#334", letterSpacing:"1px"}}>
Explore Our Latest Smartphones

</h1>
 <div style={{paddingTop:"6rem"}} className='row mt-5'>{Product.length ? 
      phone.map(item=>(  <div className='col-3 mt-2 mb-2'>    
            <ProductCard data={item}/></div>))
     : 
            <div className='text-center' style={{color:"#456",fontFamily:"Inter",borderRadius:"8px",padding:"10px 20px"}}><h2>No Projects to display</h2></div>
            }</div>
 
<Link className='text-center'>Show All<i class="fa-solid fa-greater-than"></i></Link>
{/*  */}

<div className='ms-5'>
<h1 className='text-center mt-5' style={{fontFamily:"Montserrat", color:"#111", letterSpacing:"1px"}}>
Premium Laptop Collection
</h1>

 <div style={{paddingTop:"6rem"}} className='row mt-5'>{Product.length ? 
      laptop.map(item=>(  <div className='col-3 mt-2 mb-2'>    
            <ProductCard data={item}/></div>))
     : 
            <div className='text-center' style={{color:"#456",fontFamily:"Inter",borderRadius:"8px",padding:"10px 20px"}}><h2>No Projects to display</h2></div>
            }</div>
 
</div>


    </div>
  )
}

export default Landing