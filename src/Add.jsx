import React, { useEffect, useState } from 'react'
import { addProductAPI } from './AllApi';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Add() {

       const navigate = useNavigate()
       const[productdetails,setproductdetails]=useState({Pname:"",description:"",highlights:"",brand:"",price:0, stock:0,color:"",size:"",material:"",
category:"",badge:"",image:""})
console.log(productdetails);
  const[imgtype,setimgtype]=useState(false)
   const[preview,setpreview]=useState("")
useEffect(() => {
  if (productdetails.image && 
      (productdetails.image.type === "image/png" || 
       productdetails.image.type === "image/jpg" || 
       productdetails.image.type === "image/jpeg")) {
    setimgtype(true)
    setpreview(URL.createObjectURL(productdetails.image))
  } else if(productdetails.image) {
    setpreview("")
    setimgtype(false)
    setproductdetails({...productdetails,image:""})
  }
}, [productdetails.image])

      
// Api call fn
const handleUpload=async()=>{
     console.log("Button clicked!"); 

      const{ Pname,description,highlights,brand,price, stock,color,size,material,
category,badge,image}= productdetails
if(!Pname || !description || !brand || !price || !stock || !color || !size || !material || !category || !badge || !image){
    toast.warning("Please fill all required fields");
    return;
}

   if(Pname && description && brand && Number(price) > 0 && Number(stock) >= 0 && color && size && material && category && badge && image){

        //api

        //reqbody
        const reqBody = new FormData()
        reqBody.append("Pname",Pname)
        reqBody.append("description",description)
        reqBody.append("highlights",highlights)
        reqBody.append("brand",brand)
        reqBody.append("price",price)
        reqBody.append("stock",stock)
        reqBody.append("color",color)
        reqBody.append("size",size)
        reqBody.append("material",material)
       reqBody.append("category",category);
        reqBody.append("badge",badge)
        reqBody.append("image",image)


        
        //reqheader
        const token = sessionStorage.getItem("token")
        if(token){
          const reqHeader = {
            "content-type":"multipart/form-data",
            "authorization":`Bearer ${token}`
          }
          try{
     const result = await addProductAPI(reqBody,reqHeader)
     console.log("added",result);
     if(result.status==200){
        navigate('/admin')
      toast.success("Product added successfully")
    

     }
     else{
      toast.error(result.response.data)
     }
     
     
          }
          catch(err){
            console.log(err);
            

          }
        }
      }
      else{
        toast.warning("Please enter the field completely")
      }
    }
  return (
    <div>


            <div className="container mt-4">
      <h2 className="mb-4 text-center" style={{color:"#234",fontFamily:"lora"}}>Add New Product</h2>
      <form >
        
      
        <label>Product Name</label>
        <input onChange={(e)=>setproductdetails({...productdetails,Pname:e.target.value})} name="name"  className="form-control mb-3" />

     
        <label>Description</label>
        <textarea onChange={(e)=>setproductdetails({...productdetails,description:e.target.value})} name="description" className="form-control mb-3" rows="3" />
    <label>Highlights</label>
        <textarea onChange={(e)=>setproductdetails({...productdetails,highlights:e.target.value})} name="highlights"  className="form-control mb-3" ></textarea>
       
      <div>
  <label>Category</label>
  <select
   onChange={(e)=>setproductdetails({...productdetails,category:e.target.value})}
  
    className="form-control"
  >
    <option value="">Select Category</option>
       <option value="mobile">Mobile Phone</option>
         <option value="laptop">Laptop</option>
          <option value="laptop">Computer</option>
           <option value="tab">Tablet</option>
             <option value="camera">Camera</option>
               <option value="headphone">Headphone</option>
                 <option value="headphone">Accessories</option>
                  <option value="headphone">Speakers</option>
                 <option value="Other">Other</option>
  </select>


</div>


       
        <label>Brand</label>
        <input onChange={(e)=>setproductdetails({...productdetails,brand:e.target.value})} name="brand"  className="form-control mb-3" />

        
        <label>Price</label>
        <input onChange={(e)=>setproductdetails({...productdetails,price:e.target.value})} type="number" name="price" className="form-control mb-3" />

        

       
        <label>Stock Quantity</label>
        <input onChange={(e)=>setproductdetails({...productdetails,stock:e.target.value})} type="number" name="stock"  className="form-control mb-3" />

        
        <label>Color</label>
        <input onChange={(e)=>setproductdetails({...productdetails,color:e.target.value})} name="color"  className="form-control mb-3" />

       
        <label>Size</label>
        <input onChange={(e)=>setproductdetails({...productdetails,size:e.target.value})} name="size"  className="form-control mb-3" />


        <label>Material</label>
        <input onChange={(e)=>setproductdetails({...productdetails,material:e.target.value})} name="material" className="form-control mb-3" />
         <label>Product Badge:</label>
  <select
   onChange={(e)=>setproductdetails({...productdetails,badge:e.target.value})}
    className="form-select"
  >
    <option value="" hidden>Select </option>
    <option value="newArrival">New Arrival</option>
    <option value="bestseller">Best Seller</option>
    <option value="feautured">Featured </option>
      <option value="No Badge">No Badge </option>


  
  </select>
    
        <label>Thumbnail Image</label>
      <label
  htmlFor="chooseFile"
  className="d-flex justify-content-center align-items-center border rounded"
  style={{
    width: "100px",
    height: "100px",
    cursor: "pointer",
    backgroundColor: "#f8f9fa",
    overflow: "hidden",
  }}
>
  {preview ? (
    <img
      src={preview}
      alt="Preview"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  ) : (
    <span style={{ fontSize: "2rem", color: "#888" }}>+</span>
  )}
</label>
<input
  onChange={(e) =>
    setproductdetails({ ...productdetails, image: e.target.files[0] })
  }
  id="chooseFile"
  type="file"
  style={{ display: "none" }}
/>
{!imgtype && productdetails.image && (
  <p style={{ color: "rgba(109, 118, 127, 1)" }}>
    *Upload image (jpg/jpeg/png) files only
  </p>
)}

  

     

     
        <div className='d-flex justify-content-center align-items-center mt-4'>
            <button onClick={handleUpload}  style={{backgroundColor:"rgba(18, 35, 48, 0.83)",fontFamily:"lora"}} type="button" className="btn  mb-5 text-light fw-bold">Add Product</button>
        </div>

      </form>
    </div>
    </div>
  )
}

export default Add